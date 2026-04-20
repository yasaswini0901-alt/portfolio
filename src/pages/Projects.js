import React from "react";

function Projects() {
  return (
    <div className="container">
      <h1>My Projects</h1>

      <div className="card">
        <h3>Air Moisture Water Extractor System</h3>
        <p>
          Developed an innovative system that extracts moisture from the air and converts it into usable water. 
          The project focuses on sustainable water generation using atmospheric condensation and filtration techniques.
        </p>
        <p><strong>Tech Stack:</strong> IoT, Sensors, Filtration System</p>

        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn"
        >
          View on GitHub
        </a>
      </div>

      <div className="card">
        <h3>Student Performance Predictor</h3>
        <p>
          Built a machine learning model to predict student academic performance based on various factors such as study habits and lifestyle. 
          Implemented classification algorithms and evaluated model accuracy using real-world datasets.
        </p>
        <p><strong>Tech Stack:</strong> Python, Machine Learning, Pandas, Scikit-learn</p>

        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn"
        >
          View on GitHub
        </a>
      </div>

    </div>
  );
}

export default Projects;