import matter from "gray-matter"
import Head from "next/head"
import ReactMarkdown from "react-markdown"
// import glob from "glob"
// import { attributes, react as HomeContent } from "../content/home.md"

export default function Home({ frontmatter, markdownBody, allSongs }) {
    const { artist_name } = frontmatter
    console.log(markdownBody)

    console.log(allSongs)

    return (
        <>
            <Head>
                <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
            </Head>
            <div className="min-h-screen bg-slate-800 text-white">
                <div className="w-full h-20 bg-rose-600 items-center flex justify-center">
                    <h1 className="text-3xl text-white uppercase font-bold tracking-widest">
                        Repertoire
                    </h1>
                </div>
                <article>
                    <h1>{artist_name}</h1>
                    <ReactMarkdown>{markdownBody}</ReactMarkdown>
                </article>
                <section className="grid grid-cols-2 gap-6">
                    {allSongs?.map(song => (
                        <div
                            key={song.slug}
                            className="bg-white p-12 text-slate-900 col-span-1"
                        >
                            <h3>{song.frontmatter.name}</h3>
                            <p>{song.frontmatter.key}</p>
                        </div>
                    ))}
                </section>
            </div>
        </>
    )
}

export const getStaticProps = async () => {
    const content = await import(`../content/home.md`)
    const pageData = matter(content.default)

    const songs = (context => {
        const keys = context.keys()
        const values = keys.map(context)

        const data = keys.map((key, i) => {
            const slug = key
                .replace(/^.*[\\\/]/, "")
                .split(".")
                .slice(0, -1)
                .join(".")
            const value = values[i]

            const document = matter(value.default)

            return {
                frontmatter: document.data,
                markdownBody: document.content,
                slug,
            }
        })

        return data
    })(require.context("../content/songs", true, /\.md$/))

    // const songs = glob.sync("content/songs/*.md")

    // console.log("\nsongs")
    // console.log(songs)

    // const songSlugs = songs.map(async file => {
    //     console.log(file)
    //     // file.split("/")[2].replace(/ /g, "-").slice(0, -3).trim()
    //     const songContent = await import(`../${file}`)
    //     return matter(songContent.default).data
    //     // return file
    // })

    // console.log(await songSlugs)

    // console.log(songs)

    return {
        props: {
            frontmatter: pageData.data,
            markdownBody: pageData.content,
            allSongs: songs,
        },
    }
}
