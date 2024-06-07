import { VideoProps } from "../../models/media_aparitions"

export const Video: React.FC<VideoProps> = ({ ...props }) => {
    return (
        <>
            <div className="video">
                <div >
                    <iframe style={{border:"none"}} width="400px" height="250px" src={props.link} title="YouTube video " allowFullScreen></iframe>
                </div>
                <div>
                    {props. title}
                </div>
                <div>
                    {props.description}
                </div>
            </div>
        </>
    )
}
