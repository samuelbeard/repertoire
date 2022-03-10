import Head from "next/head"
import { attributes, react as HomeContent } from "../content/home.md"

export default function Home() {
    let { title, cats } = attributes

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
                    <HomeContent />
                </article>
            </div>
        </>
    )
}
