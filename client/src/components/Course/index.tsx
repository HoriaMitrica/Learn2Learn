
import { CourseProps } from "../../models/courses"
import './style.scss'
export const Course: React.FC<CourseProps> = ({ ...props }) => {
    const formattedTitle:string=props.title+" "+"("+props.type+")";
    return (
        <>
                <div className="text-container">
                    <div className="subtitle">{formattedTitle}</div>
                    <ul >
                        {props.description.map((desc, index) => (
                            <li key={index}>{desc}</li>))}
                            {props.linkAliases.length && props.aditionalLinks.length?
                                props.linkAliases.map((alias,index)=>(
                                    <li key={index+props.description.length}><a target="_blank" href={props.aditionalLinks[index]}><img src={props.aditionalImages[index]}></img>{alias}</a></li>
                                )):null}
                    </ul>
                </div>
        </>
    )
}
