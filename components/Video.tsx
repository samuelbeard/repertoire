import { FC } from "react"

interface Props {
    youtube?: boolean
    src?: string
}

const Video: FC<Props> = ({ youtube, src }) => {
    return youtube ? <p>YOUTUBE VIDEO</p> : <p>YOUTUBE VIDEO</p>
}

export default Video
