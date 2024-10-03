import { FaPlus } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

export default function ModulesControls() {
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
          data-bs-toggle="dropdown"
        >
          <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          Group
        </button>
        <button id="wd-add-module-btn" className="btn btn-lg btn-danger me-1">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment
      </button>
      </div>
    </div>
  );
}