import { Link } from "react-router-dom";

export default function AccountNavigation() {
    return (
        <div id="wd-account-navigation">
            <ul className="list-group">
                <li className="list-group-item active-item">
                    <Link to="/Kanbas/Account/Signin" className="text-dark no-underline">
                        Signin
                    </Link>
                </li>
                <li className="list-group-item">
                    <Link to="/Kanbas/Account/Signup" className="text-danger no-underline">Signup</Link>
                </li>
                <li className="list-group-item">
                    <Link to="/Kanbas/Account/Profile" className="text-danger no-underline">Profile</Link>
                </li>
            </ul>
        </div>
    );
}
