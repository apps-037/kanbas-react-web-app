export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea
        id="wd-description"
        style={{ height: '150px', width: '300px' }}
      >
        The assignment is available online. Submit a link to the landing page of
      </textarea>
        <br />
        <table>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr>
          <br></br>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assignments">Assignment Group</label>
            </td>
            <td>
            <select id="wd-select-one-genre">
                <option value="COMEDY">Comedy</option>
                <option value="DRAMA">Drama</option>
                <option selected value="SCIFI">
                    Science Fiction</option>
                <option value="FANTASY">Fantasy</option>
            </select>
            </td>
          </tr>
        <br></br>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assignments">Display Grade As</label>
            </td>
            <td>
            <select id="wd-select-one-genre">
                <option value="COMEDY">Comedy</option>
                <option value="DRAMA">Drama</option>
                <option selected value="SCIFI">
                    Science Fiction</option>
                <option value="FANTASY">Fantasy</option>
            </select>
            </td>
          </tr>
        <br></br>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assignments">Submission Type</label>
            </td>
            <td>
            <select id="wd-select-one-genre">
                <option value="COMEDY">Comedy</option>
                <option value="DRAMA">Drama</option>
                <option selected value="SCIFI">
                    Science Fiction</option>
                <option value="FANTASY">Fantasy</option>
            </select>
            <br></br>
            <br></br>
            <label htmlFor="">Online Entry Options</label><br></br>
            <input type="checkbox" name="check-genre" id="wd-chkbox-comedy" />
            <label htmlFor="wd-chkbox-comedy">Comedy</label><br />

            <input type="checkbox" name="check-genre" id="wd-chkbox-drama" />
            <label htmlFor="wd-chkbox-drama">Drama</label><br />

            <input type="checkbox" name="check-genre" id="wd-chkbox-scifi" />
            <label htmlFor="wd-chkbox-scifi">Science Fiction</label><br />

            <input type="checkbox" name="check-genre" id="wd-chkbox-fantasy" />
            <label htmlFor="wd-chkbox-fantasy">Fantasy</label>
            </td>
          </tr>
          <br></br>
          <tr>
          <td align="right" valign="top">
              <label htmlFor="wd-assignments">Assign</label>
            </td>
            <label htmlFor="">Assign to</label><br />
              <input id="wd-points" value={"Everyone"} /> <br />
              <br />
              <label htmlFor="wd-assignments">Due</label><br />
            <input type="date"
                id="wd-text-fields-dob"
                value="2000-01-21" /><br /> <br />
            <div style={{ display: 'flex', gap: '20px' }}>
        <label htmlFor="wd-assignments">Available From</label>
        <label htmlFor="wd-assignments">Until</label>
      </div>
             <input type="date"
                id="wd-text-fields-dob"
                value="2000-01-21" />
            <input type="date"
                id="wd-text-fields-dob"
                value="2000-01-21" /><br /> <br />
          </tr>
        </table>
        <hr />
        <button id="wd-add-assignment-group">Cancel</button>
        <button id="wd-add-assignment">Save</button>
      </div>
  );}
  