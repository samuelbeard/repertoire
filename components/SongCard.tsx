import Link from "next/link"
import { FC, useEffect, useState } from "react"

interface Props {
    frontmatter: FrontmatterProps
    slug: string
}

interface FrontmatterProps {
    name: string
    key: string
    time_signature: string
    tempo: string
}

const colors = [
    ["emerald-100", "emerald-300"],
    ["teal-100", "teal-300"],
    ["yellow-100", "yellow-300"],
    ["green-100", "green-300"],
]

const SongCard: FC<Props> = ({ slug, frontmatter }) => {
    const [color, setColor] = useState([])

    useEffect(() => {
        const randomColor: string[] =
            colors[Math.floor(Math.random() * colors.length)]
        setColor(randomColor)
    }, [])

    return (
        <Link href="/">
            <a
                className={`bg-amber-100 p-6 col-span-1 hover:bg-black hover:text-white transition-all`}
            >
                <h3 className={`text-xl tracking-widest mb-4`}>
                    {frontmatter.name}
                </h3>
                <div className={`bg-amber-300 flex justify-between p-3`}>
                    <span>{frontmatter.key}</span>
                    <span>{frontmatter.time_signature}</span>
                    <span>
                        {frontmatter.tempo}{" "}
                        <span className="font-bold text-xs">BPM</span>
                    </span>
                </div>
            </a>
        </Link>
    )
}

export default SongCard
