import React from 'react';
import '../Css/Higherstudies.css';

class Higherstudies extends React.Component {
  render() {
    return (
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        <div className="container" style={{ margin: 'auto'}}>
          <div className="content">
            <div className="semester" id="Higher Studies Preparation">
              <div className="pdfs">
              <h1 className="flex items-center justify-center text-2xl font-black">HIGHER STUDIES PREPARATION</h1>
               
                <ul>
                  <li><h2 className="flex items-center justify-center text-2xl font-black">CAT</h2></li>
                  <ul>
                    <li className="flex items-center justify-center text-1xl font-black"><a href="https://drive.google.com/file/d/13DPBf15WA7Ke0jwx7l0BiuFltN3CZ6lO/view?usp=drive_link" target="_blank" rel="noreferrer">Reasoning</a></li>
                    <li className="flex items-center justify-center text-1xl font-black"><a href="https://drive.google.com/file/d/13D0P_R51mk478FQSaZ7-LG9sehINea8Q/view?usp=drive_link" target="_blank" rel="noreferrer">Grammar questions</a></li>
                    {/* Add more CAT materials as needed */}
                  </ul>
                  <li ><h2 className="flex items-center justify-center text-2xl font-black">GATE</h2></li>
                  <ul>
                    <li className="flex items-center justify-center text-1xl font-black"><a href="https://drive.google.com/drive/folders/10Y7-yxU_T_BraZ_tMMymJrK2KF1YxQAw?usp=drive_link" target="_blank" rel="noreferrer">Materials</a></li>
                    {/* Add more GATE materials as needed */}
                  </ul>
                  <li><h2 className="flex items-center justify-center text-2xl font-black">IELTS</h2></li>
                  <ul>
                    <li className="flex items-center justify-center text-1xl font-black"><a href="https://drive.google.com/file/d/13tSAkVz-XNOE4-fmlQidOnMoxvnkqCYx/view?usp=drive_link" target="_blank" rel="noreferrer">Preparation Guide</a></li>
                    {/* Add more IELTS materials as needed */}
                  </ul>
                  <li><h2 className="flex items-center justify-center text-2xl font-black">PGCET</h2></li>
                  <ul >
                    <li className="flex items-center justify-center text-1xl font-black"><a href="https://drive.google.com/file/d/13yfMNCX2H9YE-YXGc49qwRpYm-WfQont/view?usp=drive_link" target="_blank" rel="noreferrer">Usual Manuals</a></li>
                    {/* Add more PGCET materials as needed */}
                  </ul>
                  <li><h2 className="flex items-center justify-center text-2xl font-black">UPSC</h2></li>
                  <ul>
                    <li className="flex items-center justify-center text-1xl font-black"><a href="https://drive.google.com/drive/folders/10It6PidpKOTDhy0jhzQERZACuqWLGU7G?usp=drive_link" target="_blank" rel="noreferrer">Topics and Pdfs</a></li>
                    {/* Add more UPSC materials as needed */}
                  </ul>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Higherstudies;
