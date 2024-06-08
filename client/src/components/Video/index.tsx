import { VideoProps } from "../../models/media_aparitions"
import "./style.scss";

export const Video: React.FC<VideoProps> = ({ ...props }) => {
    return (
        <>
            <div>
                <div className="grid-wrapper">
                <iframe className="iframe-container" src={props.link} title="YouTube video" allowFullScreen></iframe>
                </div>
                <div className="text-container">
                    <div className="subtitle">{props.title}</div>
                    <div>{props.description}</div>  
                </div>
            </div>
        </>
    )
}
