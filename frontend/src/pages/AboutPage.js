//About page

import React from 'react';


function AboutPage() {
    return (
        <>
            <h1>About Us</h1>
            <article>
                <p>A portmanteau of summarize and science, SummarSci was created as a capstone project for Oregon State University’s Online Computer Science Bachelor’s Degree Program. Developed over the course of 10 weeks, our team’s goal for this project was to not only familiarize ourselves with how to utilize GPT API, but also better understand how to fine-tune the AI for better utilization and potential application.</p>
            </article>
            <h1>Purpose</h1>
            <article>
                <p>Reading and understanding scientific articles is time-consuming. The purpose of this application is to help users save time researching and analyzing scientific publications. Utilizing GPT 3.5 Turbo, SummarSci accurately summarize user-uploaded scientific publication, streamlining the research process for scientists, researchers, and students.</p>
            </article>
            <h1>Team</h1>
            <article>Coming from bio backgrounds our team understands the time required for researching. Looking to streamline the process while also learning more about utilizing Large Language Models (LLM) technology, we decided to create SummarSci.</article>
            <figure class="card">
                <img
                    src="images/business-avatar.png"
                    alt="Avatar"
                />
                <div class="card-container">
                    <h4><b>John Doe</b></h4>
                    <p>Frontend Engineer</p>
                    <p>Short Intro Here</p>
                </div>
            </figure>
        </>
    );
}

export default AboutPage;