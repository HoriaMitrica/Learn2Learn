import './style.scss'
import { ArticleProps } from "../../models/article"

export const Article: React.FC<ArticleProps> = ({ ...props }) => {
    console.log(props.link);
    return (
        <>
            <div className="article-wrapper">
                <a
                    href={props.link}
                    target="_blank"
                    className="article-overlay"
                >
                    {props.isLinkGood?<iframe 
                        className="article-container"
                        width='500px'
                        src={`${props.link}/embed`}
                        frameBorder="0"
                        scrolling="no"
                        title="Embedded Site"
                        style={{ pointerEvents: 'none' }}
                    ></iframe>:<img  className="article-container" src={props.backupImage} width="auto"></img>}
                </a>
            </div>
        </>
    )
}

