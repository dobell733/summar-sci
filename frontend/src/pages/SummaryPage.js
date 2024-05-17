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
      <div>
      <h1>Article Summary: </h1>
      {state && (
        <div>
          <h3>Summary:</h3>
          {state.split('\n\n').map((paragraph, index) => (
            <p key={index} className="paragraph-indent">{paragraph}</p>
          ))}
        </div>
      )}
      <button onClick={goHome}>Go Back to Home</button>
      </div>
  );
}

export default ArticleSummary;