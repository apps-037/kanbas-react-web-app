import { BsGripVertical } from "react-icons/bs";
import { useParams } from "react-router-dom";
import LessonControlButtons from "../Modules/LessonControlButtons";
import ModulesControls from "./ModulesControlButtons";
import * as db from "../../Database";
import { IoEllipsisVertical } from "react-icons/io5";
import AdditionCheck from "../Modules/AdditionCheck";

export default function Assignments() {
    const { cid } = useParams();
    const assignments = db.assignments;
    return (
        <div id="wd-assignments">
            <ModulesControls /> <br />
            <ul id="wd-modules" className="list-group rounded-0">
                <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        Assignments
                        <div className="float-end">
                            <a style={{
                                border: '1px solid #000',
                                borderRadius: '15px',
                                padding: '2px 10px',
                                marginRight: '10px'
                            }}>
                                40% of Total </a>
                            <AdditionCheck />
                            <IoEllipsisVertical className="fs-4" />
                        </div>
                    </div>
                    <ul className="wd-lessons list-group rounded-0">
                        {assignments
                            .filter((assignment: any) => (assignment.course) === cid)  // Filter modules by course
                            .map((assignment: any) => (
                                <li className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-start">
                                    <BsGripVertical className="me-2 fs-3" />
                                    <div className="flex-grow-1">
                                        <a className="wd-assignment-link" href={`#/Kanbas/Courses/${assignment.course}/Assignments/${assignment._id}`}>
                                            {assignment.title}
                                        </a>
                                        <div className="text-start">
                                            <span className="text-danger">Multiple Modules</span> | <b>Not Available until</b> May 20 6:00 PM <br />
                                            Due May 25 3:00 PM | 100 pts
                                        </div>
                                    </div>
                                    <LessonControlButtons />
                                </li>
                            ))}
                    </ul>
                </li>
            </ul>
        </div>
    );
}
