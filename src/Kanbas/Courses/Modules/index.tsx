import LessonControlButtons from "./LessonControlButtons";
import ModulesControls from "./ModulesControls";
import { BsGripVertical } from 'react-icons/bs';
import { useParams } from "react-router";
import * as db from "../../Database";
import GreenCheckmark from "./GreenCheckmark";
import { IoAdd, IoEllipsisVertical } from "react-icons/io5";
import AdditionCheck from "./AdditionCheck";

export default function Modules() {
  const { cid } = useParams();
  console.log(cid);
  const modules = db.modules;
  return (
    <div>
      <ModulesControls /><br /><br /><br /><br />
      {/* Dynamically generated modules list */}
      <ul id="wd-modules" className="list-group rounded-0">
        {modules
          .filter((module: any) => (module.course) === cid)  // Filter modules by course
          .map((module: any) => (
            <li key={module._id} className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
              <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
                <div>
                  <BsGripVertical className="me-2 fs-3" /> {module.name}
                </div>
                <div>
                  <AdditionCheck />            
                  <GreenCheckmark />
                  <IoEllipsisVertical className="fs-4" />
                </div>
              </div>
              {module.lessons && (
                <ul className="wd-lessons list-group rounded-0">
                  {module.lessons.map((lesson: any) => (
                    <li key={lesson._id} className="wd-lesson list-group-item p-3 ps-1">
                      <BsGripVertical className="me-2 fs-3" /> {lesson.name} <LessonControlButtons />
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
}