import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const ArticleSummary = () => {
  const navigate = useNavigate();
  const {state} = useLocation();

  const goHome = () => {
    navigate('/');
  }

  return (
      <div class="summary-container">
        <h1>Article Summary</h1>
        {state && (
          <div class="summary-content">
            {state.split('\n\n').map((paragraph, index) => (
              <p key={index} className="paragraph-indent">{paragraph}</p>
            ))}
          </div>
        )}
        <div class = "upload-container">
          <button onClick={goHome} class="submit">Go Back to Home</button>
        </div>
      </div>
  );
}

export default ArticleSummary;