import React from 'react';
import './QuizSubmission.css'; // Add a CSS file for more refined styling.

const QuizSubmission = () => {
    return (
        <div className="quiz-container">
            {/* Quiz Header */}
            <h1 className="quiz-title">Q1</h1>
            <div className="quiz-details">
                <p><strong>Due:</strong> Sep 20 at 11:59pm</p>
                <p><strong>Points:</strong> 29</p>
                <p><strong>Questions:</strong> 11</p>
                <p><strong>Available:</strong> Sep 16 at 12am - Sep 20 at 11:59pm</p>
                <p><strong>Time Limit:</strong> 20 Minutes</p>
            </div>

            {/* Attempt History */}
            <div className="attempt-history">
                <h2>Attempt History</h2>
                <div className="attempt-row">
                    <div><strong>Attempt:</strong> Attempt 1</div>
                    <div><strong>Time:</strong> 11 minutes</div>
                    <div><strong>Score:</strong> 29 out of 29</div>
                </div>
                <p>Submitted Sep 19 at 10:14pm</p>
                <p>This attempt took 11 minutes.</p>
            </div>

            {/* Questions Section */}
            <div className="questions-section">
                <h3 className="question-title">Question 1</h3>
                <p>
                    An HTML <strong>label</strong> element can be associated with an HTML <strong>input</strong> element
                    by setting their <strong>id</strong> attributes to the same value.
                </p>
                <p>
                    The resulting effect is that when you click on the <strong>label</strong> text, the input element
                    receives focus as if you had clicked on the <strong>input</strong> element itself.
                </p>
                <div className="answers">
                    <label>
                        <input type="radio" name="q1" value="true" />
                        True
                    </label>
                    <label>
                        <input type="radio" name="q1" value="false" />
                        False
                    </label>
                </div>
                <div className="correct-label">Correct!</div>
            </div>

            {/* Add Comment Section */}
            <div className="comment-section">
                <h3>Add a Comment:</h3>
                <textarea className="comment-box" placeholder="Type your comment here..."></textarea>
                <button className="save-button">Save</button>
            </div>
        </div>
    );
};

export default QuizSubmission;
