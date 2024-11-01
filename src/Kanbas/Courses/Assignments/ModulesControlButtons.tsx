import { FaPlus } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { setCurrentUser } from "../../Account/reducer";
import * as db from "../../Database";
import { useState } from "react";
import { useNavigate } from "react-router";
import AddAssignmentEditor from "./AddAssignmentEditor";

export default function ModulesControls(
    { assignmentTitle, setAssignmentTitle, assignmentDescription, setAssignmentDescription, 
        points, setPoints, assignmentDue, setAssignmentDue, assignmentUntil, setAssignmentUntil, addAssignment }:
        {
            assignmentTitle: string;
            setAssignmentTitle: (title: string) => void;
            assignmentDescription: string;
            setAssignmentDescription: (description: string) => void;
            points: number,
            setPoints: (points: number) => void;
            assignmentDue: string,
            setAssignmentDue: (assignmentDue: string) => void;
            addAssignment: () => void;
            assignmentUntil: string,
            setAssignmentUntil: (assignmentUntil: string) => void;
        }
) {
    return (
        <div id="wd-modules-controls" className="d-flex align-items-center justify-content-between text-nowrap">
            <div className="position-relative me-2">
                <FaSearch className="position-absolute" style={{ top: "50%", left: "10px", transform: "translateY(-50%)" }} />
                <input
                    type="email"
                    className="form-control ps-5"
                    id="wd-search-assignment"
                    placeholder="Search..."
                />
            </div>
            <div className="dropdown me-1">
                <button
                    id="wd-publish-all-btn"
                    className="btn btn-lg btn-secondary"
                    type="button"
                >
                    <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                    Group
                </button>
                <button id="wd-add-module-btn" className="btn btn-lg btn-danger me-1" data-bs-toggle="modal" data-bs-target="#wd-add-assignment-dialog">
                    <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                    Assignment
                </button>
            </div>
            <AddAssignmentEditor
                dialogTitle="Add Assignment"
                assignmentTitle={assignmentTitle}
                setAssignmentTitle={setAssignmentTitle}
                assignmentDescription={assignmentDescription}
                setAssignmentDescription={setAssignmentDescription}
                points={points}
                setPoints={setPoints}
                assignmentDue={assignmentDue}
                setAssignmentDue={setAssignmentDue}
                assignmentUntil={assignmentUntil}
                setAssignmentUntil={setAssignmentUntil}
                addAssignment={addAssignment} />
        </div>
    );
}