import { Link } from "react-router-dom";
export default function AccountNavigation() {
    return (
        <div id="wd-account-navigation">
            <Link to="/Kanbas/Account/Signin" id="wd-account-link">Signin</Link><br />
            <Link to="/Kanbas/Account/Signup" id="wd-dashboard-link">Signup</Link><br />
            <Link to="/Kanbas/Account/Profile" id="wd-course-link">Profile</Link><br />
        </div>
    );
}
