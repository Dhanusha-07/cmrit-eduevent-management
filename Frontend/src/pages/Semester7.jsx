import React from 'react';
import '../Css/Semester1and2.css'; // Import CSS file

class SemesterStudyMaterials extends React.Component {
  render() {
    return (
        <div>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="stylesheet" href="semester1&2chemistry.css" />
          <div className="container" style={{ margin: 'auto'}}>
            <div className="content">
              <div className="semester" id="semester1_and_2_Chemistry_and_Physics_cycle">
                <h2 className="flex items-center justify-center text-3xl font-black">SEMESTER 7(CSE)</h2>
                <div className="pdfs">
                  <ul>
                    <li><h3 className="flex items-center justify-center text-2xl font-black">BIG DATA ANALYTICS</h3>
                      <ul className='modules'>
                        <li><a href="https://drive.google.com/file/d/1AA4WD7uVnCMUjWFp1OOXDRAd6cK7CdFA/view?usp=drive_link">Module 1</a></li>
                        <li><a href="https://drive.google.com/file/d/1AB4ceBwHAcfMFiCEN3ht4tzGxcoDiUnQ/view?usp=drive_link">Module 2</a></li>
                        <li><a href="https://drive.google.com/file/d/1AF1Si-Mfri6dFQ7OHkDhYBquvE5u35co/view?usp=drive_link">Module 3</a></li>
                        <li><a href="https://drive.google.com/file/d/1AFy63kBWNuV54hCWOd1dDDHb6xLcE__i/view?usp=drive_link">Module 4</a></li>
                        <li><a href="https://drive.google.com/file/d/1AHPqszL41rew_C7ps6CqoKVPGqnzGVcG/view?usp=drive_link">Module 5</a></li>
                      </ul></li>
                    <li><h3 className="flex items-center justify-center text-2xl font-black">CLOUD COMPUTING</h3>
                      <ul className='modules'>
                        <li><a href="#">Module 1</a></li>
                        <li><a href="#">Module 2</a></li>
                        <li><a href="#">Module 3</a></li>
                        <li><a href="#">Module 4</a></li>
                        <li><a href="#">Module 5</a></li>
                      </ul></li>
                    <li><h3 className="flex items-center justify-center text-2xl font-black">OBJECT ORIENTED MODELING AND DESIGN</h3>
                      <ul className='modules'>
                        <li><a href="#">Module 1</a></li>
                        <li><a href="#">Module 2</a></li>
                        <li><a href="#">Module 3</a></li>
                        <li><a href="#">Module 4</a></li>
                        <li><a href="#">Module 5</a></li>
                      </ul></li>
                    <li><h3 className="flex items-center justify-center text-2xl font-black">DIGITAL IMAGE PROCESSING</h3>
                      <ul className='modules'>
                        <li><a href="https://drive.google.com/file/d/1Ik1EXXmtlktvB6i78BTU7wxKCrgj2oJF/view?usp=drive_link">Module 1</a></li>
                        <li><a href="#">Module 2</a></li>
                        <li><a href="#">Module 3</a></li>
                        <li><a href="#">Module 4</a></li>
                        <li><a href="#">Module 5</a></li>
                      </ul></li>
                    <li><h3 className="flex items-center justify-center text-2xl font-black">CRYPTOGRAPHY AND NETWORK SECURITY</h3>
                      <ul className='modules'>
                        <li><a href="https://drive.google.com/file/d/1Ht4QjB0sceWt8Y5vKURj9OgnLRLWnl-n/view?usp=drive_link">Module 1</a></li>
                        <li><a href="https://drive.google.com/file/d/1HtRN8nL5CdEuoPIpMdH2eSFVnqNe7Y28/view?usp=drive_link">Module 2</a></li>
                        <li><a href="https://drive.google.com/file/d/1HtYzUONrikVfa-i1jVMgo81b2HsUToEn/view?usp=drive_link">Module 3</a></li>
                        <li><a href="https://drive.google.com/file/d/1I-ISV6QWnBVLbb5L2S6OE5gqCeSyf_Dy/view?usp=drive_link">Module 4</a></li>
                        <li><a href="https://drive.google.com/file/d/1I17cGQXTy3sFuxXyaPHlTUmdxj0inz2S/view?usp=drive_link">Module 5</a></li>
                      </ul></li>
                    {/* <li><h3 className="flex items-center justify-center text-3xl font-black">INTERNET OF THINGS</h3>
                      <ul>
                        <li><a href="https://drive.google.com/file/d/1277OqqNW_Wa13LnNoorALfurN5BIRhRt/view?usp=drive_link">Module 1</a></li>
                        <li><a href="https://drive.google.com/file/d/129bf1VApVFDLn2WLdmF9gPw-v-Q1oIw7/view?usp=drive_link">Module 2</a></li>
                        <li><a href="https://drive.google.com/file/d/12E7pnGburIaDYIVMLVs3pp3iYPulbhQw/view?usp=drive_link">Module 3</a></li>
                        <li><a href="https://drive.google.com/file/d/12EUsHDIoHsq4Ey0nRrOH6k6a-sCRz84e/view?usp=drive_link">Module 4</a></li>
                        <li><a href="https://drive.google.com/file/d/12SoAKLkl41pfJh0b4SkdZ8kFHduxHPB0/view?usp=drive_link">Module 5</a></li>
                      </ul></li> */}
                  
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

  }
}

export default SemesterStudyMaterials;