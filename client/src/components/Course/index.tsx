
import { CourseProps } from "../../models/courses"
import './style.scss'
export const Course: React.FC<CourseProps> = ({ ...props }) => {
    
    const formattedTitle:string=props.title+" "+"("+props.type+")";
    
    return (
        <>
                <div className="text-container">
                    <div className="subtitle">{formattedTitle}</div>
                    <ul className="course-list">
                        {props.description.map((desc, index) => (
                            <li key={index}>{desc}</li>))}
                    </ul>
                </div>
        </>
    )
}
