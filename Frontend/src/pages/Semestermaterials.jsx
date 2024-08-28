import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import '../Css/Semestermaterial.css';
// import { FaArrowLeft } from 'react-icons/fa';
class MyClass extends React.Component {
  render() {
    return (
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <title className="flex items-center justify-center text-2xl font-black">EduEvent Hub - Study Materials</title>
        */}
        <div className="container" style={{ margin: 'auto'}}>
           
        <h1 className="flex text-4xl font-black">SEMESTER STUDY MATERIALS</h1>

          <div className="buttons-container">
            {/* Use Link component from React Router */}
            <Link to="/semester1"><button className="button-86">Semester 1 &amp; 2</button></Link>
            <Link to="/semester3"><button className="button-86">Semester 3</button></Link>
            <Link to="/semester4"><button className="button-86">Semester 4</button></Link>
            <Link to="/semester5"><button className="button-86">Semester 5</button></Link>
            <Link to="/semester6"><button className="button-86">Semester 6</button></Link>
            <Link to="/semester7"><button className="button-86">Semester 7</button></Link>
            <Link to="/semester8"><button className="button-86">Semester 8</button></Link>
          </div>
        
        </div>
      </div>
    );
  }
}

export default MyClass;
