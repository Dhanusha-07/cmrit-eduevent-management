import React from 'react';
import '../Css/Inetrview.css';

const InterviewPage = () => {
  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />    
      <div className="container" style={{ margin: 'auto'}}>
        <div className="content">
          <div className="semester" id="Interview Preparation">
            <div className="pdfs">
            <h1 className="flex items-center justify-center text-3xl font-black">INTERVIEW PREPARATION</h1>
              <ul>
                <li><h3 className="flex items-center justify-center text-2xl font-black">GENERAL INTERVIEW PROCESS</h3></li>
                <ul>
                  <li><h2 className="flex items-center justify-center text-2xl font-black">Round 1 (Online Test) :</h2></li>
                  <li className="flex items-center justify-center text-1xl font-black"><a href="https://drive.google.com/file/d/113AJ1QPtyIwwO5Qy4QzELxY4QGFyGm2o/view?usp=drive_link" target="blank">Aptitude</a></li>
                  <li className="flex items-center justify-center text-1xl font-black"><a href="https://drive.google.com/drive/folders/111WgUm7j6Vk-EMFyBfZY_yg7ldjgFDJG?usp=drive_link" target="blank">Technical</a></li>
                </ul>
              </ul>
            </div>
            <div className="videos">
              <h2 className="flex items-center justify-center text-2xl font-black">Round 2 (GD)</h2>
              <ul>
                <li className="flex items-center justify-center text-1xl font-black"><a href="https://docs.google.com/document/d/10WuE8Berd6dGFSNB9YmBBGdcVgGXP3u7/edit?usp=drive_link&ouid=108699721226121976857&rtpof=true&sd=true" target="_blank">GD</a></li>
              </ul>
              <h2 className="flex items-center justify-center text-2xl font-black">Round 3 (Technical Interviews)</h2>
              <ul>
                <li className="flex items-center justify-center text-1xl font-black"><a href="https://drive.google.com/drive/folders/11EQ_dIVllGz6b1YD1oQ9EMschVqQ3oPA?usp=drive_link" target="_blank">CN Material</a></li>
                <li className="flex items-center justify-center text-1xl font-black"><a href="https://drive.google.com/drive/folders/11jU8OuN3EizsjB5fIOH5k6B2liJ2HgKc?usp=drive_link" target="_blank">DBMS Material</a></li>
                <li className="flex items-center justify-center text-1xl font-black"><a href="https://drive.google.com/drive/folders/11kUA77o8iJe5YmFhWSnPauGlQaJNpais?usp=drive_link" target="_blank">OOPS Material</a></li>
                <li className="flex items-center justify-center text-1xl font-black"><a href="https://drive.google.com/drive/folders/11gJg77f9UbKQ8h1kdTmDQcRgSxKXUWgd?usp=drive_link" target="_blank">OS Material</a></li>
                <li className="flex items-center justify-center text-1xl font-black"><a href="https://drive.google.com/drive/folders/115Kz0TkVDMS5tHP44FtoqSE49ZH782qp?usp=drive_link" target="_blank">DSA Material</a></li>
              </ul>
              <h2 className="flex items-center justify-center text-2xl font-black">Round 4 (HR Interviews)</h2>
              <ul>
                <li className="flex items-center justify-center text-1xl font-black"><a href="https://drive.google.com/drive/folders/10nvVjut7bt1UE0ixF7MbOmlVHsIyBogN?usp=drive_link" target="blank">HR INTERVIEW</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewPage;
