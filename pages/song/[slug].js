import matter from "gray-matter"
import glob from "glob"
import ReactMarkdown from "react-markdown"
import { Tab } from "@headlessui/react"
import Video from "../../components/Video"
import Link from "next/link"
import { RiArrowGoBackFill } from "react-icons/ri"
import { classNames } from "../../util/helpers"

export default function Song({ frontmatter, markdownBody }) {
    if (!frontmatter) return <></>

    return (
        <div className="min-h-screen">
            <div className="w-full h-8 bg-black flex xjustify-center items-center">
                <Link href="/">
                    <a className="text-white mx-12 hover:text-amber-500">
                        <RiArrowGoBackFill />
                    </a>
                </Link>
            </div>
            <div className="w-full h-24 bg-amber-500 flex justify-center items-center">
                <h1 className="text-white text-3xl font-bold tracking-widest">
                    {frontmatter.name}
                </h1>
            </div>
            <div className="max-w-6xl mx-auto">
                <Tabs
                    lyrics={frontmatter.lyrics}
                    chords={frontmatter.chords}
                    frontmatter={frontmatter}
                />
            </div>
        </div>
    )
}

export async function getStaticProps({ ...ctx }) {
    const { slug } = ctx.params
    const content = await import(`../../content/songs/${slug}.md`)
    const data = matter(content.default)

    return {
        props: {
            frontmatter: data.data,
            markdownBody: data.content,
        },
    }
}

export async function getStaticPaths() {
    //get all .md files in the songs dir
    const songs = glob.sync("content/songs/*.md")

    //remove path and extension to leave filename only
    const songSlugs = songs.map(file =>
        file.split("/")[2].replace(/ /g, "-").slice(0, -3).trim()
    )

    // create paths with `slug` param
    const paths = songSlugs.map(slug => `/song/${slug}`)
    return {
        paths,
        fallback: false,
    }
}

function Tabs({ lyrics, chords, frontmatter }) {
    return (
        <div className="w-full px-2 py-16 sm:px-0">
            <Tab.Group>
                <Tab.List className="flex p-1 space-x-1">
                    <StyledTab title="Lyrics" />
                    <StyledTab title="Chords" />
                    <StyledTab title="Details" />
                </Tab.List>
                <Tab.Panels className="mt-2">
                    <Tab.Panel className="bg-white p-6">
                        <ReactMarkdown className="markdown">
                            {lyrics}
                        </ReactMarkdown>
                    </Tab.Panel>
                    <Tab.Panel className="bg-white p-6 ">
                        <ReactMarkdown
                            // disallowedElements={["pre", "code", "p"]}
                            // unwrapDisallowed
                            className="markdown"
                        >
                            {chords}
                        </ReactMarkdown>
                    </Tab.Panel>
                    <Tab.Panel>
                        <div className="bg-white p-6">
                            <p>Key: {frontmatter.key}</p>
                            <p>Tempo: {frontmatter.tempo}</p>
                            <p>Time Signature: {frontmatter.time_signature}</p>
                            <p>Video Link: {frontmatter.video_link}</p>
                            <Video youtube={frontmatter.video_link} />
                            <p>Audio Link: {frontmatter.audio_link}</p>
                        </div>
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}

const StyledTab = ({ title }) => (
    <Tab
        className={({ selected }) =>
            classNames(
                "!mx-4 py-3 px-12 leading-5 font-bold uppercase tracking-widest",
                selected
                    ? "text-black bg-amber-50 border-b-4 border-black"
                    : "text-black hover:bg-amber-50"
            )
        }
    >
        {title}
    </Tab>
)
