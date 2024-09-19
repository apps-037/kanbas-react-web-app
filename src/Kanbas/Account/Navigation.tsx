import { Link } from "react-router-dom";
export default function KanbasNavigation() {
    return (
        <div id="wd-kanbas-navigation">
            <a href="https://www.northeastern.edu/" id="wd-neu-link" target="_blank">Northeastern</a><br />
            <Link to="/Kanbas/Account/Signin" id="wd-account-link">Account</Link><br />
            <Link to="/Kanbas/Dashboard" id="wd-dashboard-link">Dashboard</Link><br />
            <Link to="/Kanbas/Courses" id="wd-course-link">Courses</Link><br />
            <Link to="/Kanbas/Calendar" id="wd-calendar-link">Calendar</Link><br />
            <Link to="/Kanbas/Inbox" id="wd-inbox-link">Inbox</Link><br />
            <Link to="/Labs" id="wd-labs-link">Labs</Link><br />
            <Link to="/Kanbas/Account/Signin" id="wd-account-link">Signin</Link><br />
            <Link to="/Kanbas/Account/Signup" id="wd-dashboard-link">Signup</Link><br />
            <Link to="/Kanbas/Account/Profile" id="wd-course-link">Profile</Link><br />
        </div>
    );
}
