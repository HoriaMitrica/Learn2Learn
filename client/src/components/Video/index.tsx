import { VideoProps } from "../../models/media_aparitions"

export const Video: React.FC<VideoProps> = ({ ...props }) => {
    return (
        <>
            <div>
                <iframe src={props.link} title="YouTube video" allowFullScreen></iframe>
                <div className="text-container">
                    <div>{props.title}</div>
                    <div>{props.description}</div>  
                </div>
            </div>
        </>
    )
}
