import { CourseProps } from "../../models/courses"

export const Course: React.FC<CourseProps> = ({ ...props }) => {

    console.log(props.description);
    return (
        <>
            <div>
                <div className="text-container">
                    <div>{props.title}</div>
                    <ul>
                        {props.description.map((desc, index) => (
                            <li key={index}>{desc}</li>))}
                    </ul>

                </div>
            </div>
        </>
    )
}
