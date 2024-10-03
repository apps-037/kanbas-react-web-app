import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import ModulesControls from "./ModulesControlButtons";

export default function Assignments() {
    return (
        <div id="wd-assignments">
            <ModulesControls /> <br/>
            <ul id="wd-modules" className="list-group rounded-0">
                <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        Assignments
                        <LessonControlButtons />
                    </div>
                    <ul className="wd-lessons list-group rounded-0">
                        <li className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-start">
                            <BsGripVertical className="me-2 fs-3" />
                            <div className="flex-grow-1">
                                <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">
                                    A1
                                </a>
                                <div className="text-start">
                                    <span className="text-danger">Multiple Modules</span> | <b>Not Available until</b> May 20 6:00 PM <br />
                                    Due May 25 3:00 PM | 100 pts
                                </div>
                            </div>
                            <LessonControlButtons />
                        </li>
                        <li className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-start">
                            <BsGripVertical className="me-2 fs-3" />
                            <div className="flex-grow-1">
                                <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">
                                    A2
                                </a>
                                <div className="text-start">
                                    <span className="text-danger">Multiple Modules</span> | <b>Not Available until</b> May 26 6:00 PM <br />
                                    Due May 31 3:00 PM | 100 pts
                                </div>
                            </div>
                            <LessonControlButtons />
                        </li>
                        <li className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-start">
                            <BsGripVertical className="me-2 fs-3" />
                            <div className="flex-grow-1">
                                <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">
                                    A3
                                </a>
                                <div className="text-start">
                                    <span className="text-danger">Multiple Modules</span> | <b>Not Available until</b> June 2 6:00 PM <br />
                                    Due June 25 3:00 PM | 100 pts
                                </div>
                            </div>
                            <LessonControlButtons />
                        </li>
                    </ul>
                </li>
            </ul> 
        </div>
    );
}
