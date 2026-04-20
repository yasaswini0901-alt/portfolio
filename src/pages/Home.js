import React from "react";

function Home() {
  return (
    <div className="container">
     <div className="profile-section">
  <h1>Yasaswini Vankena</h1>
  <img src="/profile.jpg" alt="Profile" className="profile-img" />
</div>

      <div className="card">
        <h2>About Me</h2>
        <p>
         <p>
  I am currently pursuing my B.Tech in Computer Science and Engineering (3rd year) at Mahindra University. I am passionate about Artificial Intelligence, Machine Learning, and Web Development, and I enjoy building innovative solutions to real-world problems.
</p>
        </p>
      </div>

      <div className="card">
        <h2>Research Interests</h2>
        <p>Artificial Intelligence, Machine Learning, Deep Learning</p>
      </div>

      <div className="card">
        <h2>Personal Details</h2>
        <ul>
          <li>Name: Yasaswini Vankena</li>
          <li>Phone: 1234567890</li>
          <li>Email: yasaswini0901@gmail.com</li>
          <li>College Email: se23ucse180@mahindrauniversity.edu.in</li>
          <li>Skills: React, Python, Java</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;