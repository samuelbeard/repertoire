import matter from "gray-matter"
import Head from "next/head"
import ReactMarkdown from "react-markdown"
// import { attributes, react as HomeContent } from "../content/home.md"

export default function Home({ frontmatter, markdownBody }) {
    const { artist_name } = frontmatter
    console.log(markdownBody)

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
            </div>
        </>
    )
}

export const getStaticProps = async () => {
    const content = await import(`../content/home.md`)
    const data = matter(content.default)

    return {
        props: {
            frontmatter: data.data,
            markdownBody: data.content,
        },
    }
}
