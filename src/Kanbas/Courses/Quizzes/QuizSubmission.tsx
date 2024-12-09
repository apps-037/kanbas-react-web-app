import React from 'react';

const QuizSubmission = () => {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', margin: '20px' }}>
            {/* Quiz Header */}
            <h1>Q1</h1>
            <div style={{ marginBottom: '20px' }}>
                <p><strong>Due:</strong> Sep 20 at 11:59pm</p>
                <p><strong>Points:</strong> 29</p>
                <p><strong>Questions:</strong> 11</p>
                <p><strong>Available:</strong> Sep 16 at 12am - Sep 20 at 11:59pm</p>
                <p><strong>Time Limit:</strong> 20 Minutes</p>
            </div>

            {/* Attempt History */}
            <div style={{ borderTop: '1px solid #ccc', paddingTop: '10px', marginBottom: '20px' }}>
                <h2>Attempt History</h2>
                <p><strong>Attempt:</strong> Attempt 1</p>
                <p><strong>Time:</strong> 11 minutes</p>
                <p><strong>Score:</strong> 29 out of 29</p>
                <p>Submitted Sep 19 at 10:14pm</p>
                <p>This attempt took 11 minutes.</p>
            </div>

            {/* Questions Section */}
            <div style={{ borderTop: '1px solid #ccc', paddingTop: '10px' }}>
                <h3>Question 1</h3>
                <p>An HTML <strong>label</strong> element can be associated with an HTML <strong>input</strong> element by setting their <strong>id</strong> attributes to the same value.</p>
                <p>The resulting effect is that when you click on the <strong>label</strong> text, the input element receives focus as if you had clicked on the <strong>input</strong> element itself.</p>
                <div style={{ margin: '10px 0' }}>
                    <label>
                        <input type="radio" name="q1" value="true" />
                        True
                    </label>
                </div>
                <div>
                    <label>
                        <input type="radio" name="q1" value="false" />
                        False
                    </label>
                </div>
                <div style={{ color: 'green', fontWeight: 'bold', marginTop: '10px' }}>Correct!</div>
            </div>

            {/* Add Comment Section */}
            <div style={{ marginTop: '20px' }}>
                <h3>Add a Comment:</h3>
                <textarea style={{ width: '100%', height: '80px', marginBottom: '10px' }}></textarea>
                <button style={{ padding: '10px 20px', background: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' }}>Save</button>
            </div>
        </div>
    );
};

export default QuizSubmission;
