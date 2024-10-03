import { AiOutlineDashboard } from "react-icons/ai";
import { LiaBookSolid } from "react-icons/lia";
import { FaChalkboardUser, FaRegCircleUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaArrowAltCircleRight, FaCalendar, FaHistory, FaInbox, FaQuestionCircle } from "react-icons/fa";
export default function KanbasNavigation() {
    return (
        <div id="wd-kanbas-navigation" style={{ width: 120 }}
            className="list-group rounded-0 position-fixed
         bottom-0 top-0 d-none d-md-block bg-black z-2">
            <a id="wd-neu-link" target="_blank"
                href="https://www.northeastern.edu/"
                className="list-group-item bg-black border-0 text-center">
                <img src="/images/NEU.jpeg" width="75px" /></a>
            <Link to="/Kanbas/Account" id="wd-account-link"
                className="list-group-item text-center border-0 bg-black text-white">
                <FaRegCircleUser className="fs-1 text text-white" />
                Account </Link>
            <Link to="/Kanbas/Dashboard" id="wd-dashboard-link"
                className="list-group-item text-center border-0
                   bg-white text-danger">
                <AiOutlineDashboard className="fs-1 text-danger" />
                Dashboard </Link>
            <Link to="/Kanbas/Dashboard" id="wd-course-link"
                className="list-group-item text-white
                   bg-black text-center border-0">
                <LiaBookSolid className="fs-1 text-danger" />
                Courses </Link>
            <Link to="/Kanbas/Dashboard" id="wd-course-link"
                className="list-group-item text-white
                   bg-black text-center border-0">
                <FaCalendar className="fs-1 text-danger" />
                Calendar </Link>
            <Link to="/Kanbas/Dashboard" id="wd-course-link"
                className="list-group-item text-white
                   bg-black text-center border-0">
                <div className="d-flex flex-column align-items-center">
                    <FaInbox className="fs-1 text-danger" />
                    <span>Inbox</span>
                </div>
            </Link>
            <Link to="/Kanbas/Dashboard" id="wd-course-link"
                className="list-group-item text-white
                   bg-black text-center border-0">
                <FaHistory className="fs-1 text-danger" />
                History </Link>
            <Link to="/Kanbas/Dashboard" id="wd-course-link"
                className="list-group-item text-white
                   bg-black text-center border-0">
                <FaArrowAltCircleRight className="fs-1 text-danger" />
                Commons </Link>
            <Link to="/Kanbas/Dashboard" id="wd-course-link"
                className="list-group-item text-white
                   bg-black text-center border-0">
                <div className="d-flex flex-column align-items-center">
                    <FaChalkboardUser className="fs-1 text-danger" />
                    <span>Studio</span>
                </div>
            </Link>
            <Link to="/Kanbas/Dashboard" id="wd-course-link"
                className="list-group-item text-white
                   bg-black text-center border-0">
                <div className="d-flex flex-column align-items-center">
                    <FaQuestionCircle className="fs-1 text-danger" />
                    <span>Help</span>
                </div>
            </Link>
        </div>
    );
}
