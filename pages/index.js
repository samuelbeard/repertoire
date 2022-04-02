import matter from "gray-matter"
import SongCard from "../components/SongCard"
import Link from "next/link"
import Script from "next/script"

export default function Home({ frontmatter, markdownBody, allSongs }) {
    const { artist_name } = frontmatter

    return (
        <>
            <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></Script>
            <div className="min-h-screen bg-slate-50">
                <div className="max-w-7xl mx-auto grid grid-cols-12 gap-12 pt-24">
                    <div className="col-span-2">
                        <div className="h-16 border-b-2 border-black">
                            <h1 className="text-2xl tracking-widest text-yellow-500">
                                Repertoire
                            </h1>
                        </div>
                    </div>
                    <div className="col-span-7">
                        <div className="h-16 border-b-2 border-black">
                            <h1 className="text-2xl tracking-widest">
                                {artist_name}
                            </h1>
                        </div>
                        <div className="grid grid-cols-2 gap-6 mt-6">
                            {allSongs?.map(song => (
                                <SongCard
                                    key={song.slug}
                                    slug={song.slug}
                                    frontmatter={song.frontmatter}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="col-span-3">
                        <div className="h-16 border-b-2 border-black text-right">
                            <Link href="/admin">
                                <a className="text-white text-sm bg-black px-4 py-2 cursor-pointer hover:text-yellow-400">
                                    Login
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
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

    return {
        props: {
            frontmatter: pageData.data,
            markdownBody: pageData.content,
            allSongs: songs,
        },
    }
}
