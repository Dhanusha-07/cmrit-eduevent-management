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
                <h2 className="flex items-center justify-center text-3xl font-black">SEMESTER 6(CSE)</h2>
                <div className="pdfs">
                  <ul>
                    <li><h3 className="flex items-center justify-center text-2xl font-black">SOFTWARE ENGINEERING &amp; PROJECT MANAGEMENT</h3>
                      <ul className='modules'>
                        <li><a href="#">Module 1</a></li>
                        <li><a href="#">Module 2</a></li>
                        <li><a href="#">Module 3</a></li>
                        <li><a href="#">Module 4</a></li>
                        <li><a href="#">Module 5</a></li>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</ul></li>
                    <li><h3 className="flex items-center justify-center text-2xl font-black">FULLSTACK DEVELOPMENT</h3>
                      <ul className='modules'>
                        <li><a href="#">Module 1</a></li>
                        <li><a href="#">Module 2</a></li>
                        <li><a href="#">Module 3</a></li>
                        <li><a href="#">Module 4</a></li>
                        <li><a href="#">Module 5</a></li>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</ul></li>
                    <li><h3 className="flex items-center justify-center text-2xl font-black">COMPUTER GRAPHICS AND FUNDAMENTALS OF IMAGE PROCESSING</h3>
                      <ul className='modules'>
                        <li><a href="#">Module 1</a></li>
                        <li><a href="#">Module 2</a></li>
                        <li><a href="#">Module 3</a></li>
                        <li><a href="#">Module 4</a></li>
                        <li><a href="#">Module 5</a></li>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</ul></li>
                    <li><h3 className="flex items-center justify-center text-2xl font-black">AGILE TECHNOLOGIES</h3>
                    <ul className='modules'>
                        <li><a href>Module 1</a></li>
                        <li><a href>Module 2</a></li>
                        <li><a href>Module 3</a></li>
                        <li><a href>Module 4</a></li>
                        <li><a href>Module 5</a></li>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</ul></li>
                    <li><h3 className="flex items-center justify-center text-2xl font-black">ADVANCED JAVA PROGRAMMING</h3>
                    <ul className='modules'>
                        <li><a href="#">Module 1</a></li>
                        <li><a href="#">Module 2</a></li>
                        <li><a href="#">Module 3</a></li>
                        <li><a href="#">Module 4</a></li>
                        <li><a href="#">Module 5</a></li>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</ul></li>
                    <li><h3 className="flex items-center justify-center text-2xl font-black">ADVANCED COMPUTER ARCHITECTURE</h3>
                    <ul className='modules'>
                        <li><a href="#">Module 1</a></li>
                        <li><a href="#">Module 2</a></li>
                        <li><a href="#">Module 3</a></li>
                        <li><a href="#">Module 4</a></li>
                        <li><a href="#">Module 5</a></li>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</ul></li>
                    <li><h3 className="flex items-center justify-center text-2xl font-black">DATA SCIENCE AND VISUALIZATION</h3>
                    <ul className='modules'>
                        <li><a href="#">Module 1</a></li>
                        <li><a href="#">Module 2</a></li>
                        <li><a href="#">Module 3</a></li>
                        <li><a href="#">Module 4</a></li>
                        <li><a href="#">Module 5</a></li>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</ul></li>
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