//About page

import React from 'react';


function AboutPage() {
    return (
        <>
            <div className="about-container">
                <h1>Our <strong>Goal</strong></h1>
                    <article>
                        <p>A portmanteau of summarize and science, SummarSci was created as a capstone project for Oregon State University’s Online Computer Science Bachelor’s Degree Program. Developed over the course of 10 weeks, our team’s goal for this project was to not only familiarize ourselves with how to utilize GPT API, but also better understand how to fine-tune the AI for better utilization and potential application.</p>
                    </article>
            </div>
            <div className="about-container">
                <h1>Our <strong>Purpose</strong></h1>
                    <article>
                        <p>Reading and understanding scientific articles is time-consuming. The purpose of this application is to help users save time researching and analyzing scientific publications. Utilizing GPT 3.5 Turbo, SummarSci accurately summarize user-uploaded scientific publication, streamlining the research process for scientists, researchers, and students.</p>
                    </article>
            </div>
            <div className="team-container">
                <h1>Our <strong>Team</strong></h1>
                    <article>
                        <p>Coming from bio backgrounds our team understands the time required for researching. Looking to streamline the process while also learning more about utilizing Large Language Models (LLM) technology, we decided to create SummarSci.</p>
                    </article>
            </div>
            <div className="card-container">
                <div className="card">
                    <div className="card-header">
                        <img className="circular-image" src="images/aaron.jpg" alt="avatar"/>
                        <div className="name">
                            <p><strong>Aaron Anderson</strong><br></br>Frontend Lead</p>
                        </div>
                    </div>
                    <div className="card-details">
                        <p>Originally a biomedical researcher in the field of cancer immunology, I transitioned into Computer Science due to the intrigue and excitement I felt when piecing together different technical problems and solutions. I am graduating from my Computer Science Bachelors degree from Oregon State University in June 2024 and hoping to pursue a career in web development or cloud computing.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <img className="circular-image" src="images/dominic.jpg" alt="avatar"/>
                        <div className="name">
                            <p><strong>Dominic Bell</strong><br></br>Backend Lead</p>
                        </div>
                    </div>
                    <div className="card-details">
                        <p>My early professional life was in the administrative side of the healthcare field. After realizing it wasn't my true passion, I decided to pivot to Computer Science. I was able to land an internship in July of 2023 and have been employed full time with the same company since December of 2023. I am graduating with my Bachelor of Science in Computer Science from Oregon State in June 2024 and am excited to continue learning and honing my skills in the industry.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <img className="circular-image" src="images/business-avatar.png" alt="avatar"/>
                        <div className="name">
                            <p><strong>John Doe</strong><br></br>Frontend Engineer</p>
                        </div>
                    </div>
                    <div className="card-details">
                        <p>I'm a front end developer with five years of experience in web development. I've worked on a variety of projects for clients in the retail, travel, and healthcare industries. I'm passionate about creating great user experiences and have a strong understanding of usability and accessibility standards.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutPage;