// PlacementPage.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import '../Css/Placement.css';

function PlacementPage() {
  const [placements, setPlacements] = useState([]);
  const [name, setName] = useState('');
  const [branch, setBranch] = useState('');
  const [company, setCompany] = useState('');
  const [CTC, setCTC] = useState('');
  const [aptitude, setAptitude] = useState('');
  const [technical, setTechnical] = useState('');
  const [hr, setHr] = useState('');
  const [difficulty_level,setdiff]=useState('');

  useEffect(() => {
    fetchPlacements();
  }, []);

  const fetchPlacements = async () => {
    try {
      const response = await axios.get("/placements");
      setPlacements(response.data);
    } catch (error) {
      console.error("Error fetching placements:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await axios.post("/placements", { 
        name,
        branch,
        company,
        CTC,
        aptitude,
        technical,
        hr,
        difficulty_level
      });
      alert('Placement details submitted Successfully');
      fetchPlacements();

      setName('');
      setBranch('');
      setCompany('');
      setCTC('');
      setAptitude('');
      setTechnical('');
      setHr('');
      setdiff('');

    } catch (error) {
      alert("Failed to submit placement details. Please try again later.");
    }
  };

  return (
    <div className=" flex flex-col flex-grow bg-white">
      <h1 className="font-bold text-[30px] mt-5 mb-5">Placement Details</h1>
      <form onSubmit={handleSubmit} className='flex flex-col'>
        <label className='flex ml-5 mb-5'>
          Student Name: 
          <input
            type="text"
            placeholder=" Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{marginLeft:'5px'}}
          />
        </label>
        <label className='flex ml-5 mb-5'>
          Branch:
          <input
            type="text"
            placeholder="Branch"
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
            required
            style={{marginLeft:'5px'}}
          />
        </label>
        <label className='flex ml-5 mb-5'>
          Company:
          <input
            type="text"
            placeholder="Company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
            step={{marginLeft:'5px'}}
          />
        </label>
        <label className='flex ml-5 mb-5'>
          CTC:
          <input
            type="text"
            placeholder="CTC"
            value={CTC}
            onChange={(e) => setCTC(e.target.value)}
            required
            style={{marginLeft:'5px'}}
          />
        </label>
  <div className="form1">
<div className='flex ml-5 mb-5'>
  <div className='flex flex-col mr-10 '>
    <label className="font-bold"> Aptitude Questions:</label>
    <textarea
      placeholder="Aptitude Questions"
      value={aptitude}
      onChange={(e) => setAptitude(e.target.value)}
      style={{ width: '400px', height: '200px',marginLeft:'5px' }} // Adjust the width and height of the textarea
    />
  </div>
  <div className='flex flex-col mr-10 '>
    <label className="font-bold">Technical Interview Questions:</label>
    <textarea
      placeholder="Technical Interview Questions"
      value={technical}
      onChange={(e) => setTechnical(e.target.value)}
      style={{ width: '400px', height: '200px',marginLeft:'5px' }} // Adjust the width and height of the textarea
    />
  </div>
  <div className='flex flex-col'>
    <label className="font-bold">HR Interview Questions:</label>
    <textarea
      placeholder="HR Interview Questions"
      value={hr}
      onChange={(e) => setHr(e.target.value)}
      style={{ width: '400px', height: '200px',marginLeft:'5px' }} // Adjust the width and height of the textarea
    />
  </div>
</div>
</div>  

<label className='flex ml-5 mb-5'>
          Difficulty level:
          <input
            type="text"
            placeholder=" level"
            value={difficulty_level}
            onChange={(e) => setdiff(e.target.value)}
            required
            style={{marginLeft:'5px'}}
          />
        </label>

        <button type="submit" className="text-white justify-center cursor-pointer rounded w-20 h-10 ml-5 bg-primary font-bold">
         Submit
        </button>
      </form>
      
    
      <div className="placements-container">
  {placements.map(placement => (
    <div className="placement-box ml-5" key={placement._id}>
      <h3 className="font-bold">{placement.name}</h3>
      <p className="font-bold">Branch: {placement.branch}</p>
      <p className="font-bold">Company: {placement.company}</p>
      <p className="font-bold">CTC: {placement.CTC}</p>
      <div>
        <p className="font-bold">Aptitude Questions:</p>
        {placement.aptitude && placement.aptitude.split('\n').map((question, index) => (
          <p key={index}>{question}</p>
        ))}
      </div>
      <div>
        <p className="font-bold">Technical Interview Questions:</p>
        {placement.technical && placement.technical.split('\n').map((question, index) => (
          <p key={index}>{question}</p>
        ))}
      </div>
      <div>
        <p className="font-bold">HR Interview Questions:</p>
        {placement.hr && placement.hr.split('\n').map((question, index) => (
          <p key={index}>{question}</p>
        ))}
      </div>
      <p className="font-bold">Difficulty level : {placement.difficulty_level}</p>
    </div>
  ))}
</div>


    </div>
  );
}

export default PlacementPage;
