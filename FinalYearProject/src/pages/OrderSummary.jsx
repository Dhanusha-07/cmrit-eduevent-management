import axios from 'axios';
import { useEffect, useState } from 'react';
import { IoMdArrowBack } from "react-icons/io";
import { Link, useParams } from 'react-router-dom';

export default function OrderSummary() {
    const {id} = useParams();
    const [event, setEvent] = useState(null);
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false)
  
    useEffect(()=>{
      if(!id){
        return;
      }
      axios.get(`/event/${id}/ordersummary`).then(response => {
        setEvent(response.data)
      }).catch((error) => {
        console.error("Error fetching events:", error);
      });
    }, [id])
    
    //! Handle checkbox change
    const handleCheckboxChange = (e) => {
      setIsCheckboxChecked(e.target.checked)
    }
  
    if (!event) return '';
    return (
      <div>
          <Link to={'/event/'+event._id}>
          <button 
              // onClick={handleBackClick}
              className='
              inline-flex 
              mt-12
              gap-2
              p-3 
              ml-12
              bg-gray-100
              justify-center 
              items-center 
              text-blue-700
              font-bold
              rounded-md'
              >
          <IoMdArrowBack 
            className='
            font-bold
            w-6
            h-6
            gap-2'/> 
            Back
          </button>
          </Link>
          <div className='flex flex-col'>
                <div className= 'inline-flex gap-5 mt-8'> 
                    <div className="
                      p-4
                      ml-12 
                      bg-gray-100
                      w-3/4
                      mb-12"
                      >
                      <h2
                          className='
                            text-left
                            font-bold
                            '> 
                            Terms & Conditions </h2>
                            <br/>
  
                              <div>
    <ul className="custom-list">
    <li> Generating a ticket will be helpful in identifying which events you are registered for. </li>

    <li> Please do not proceed if you haven't registered for an event. </li>

    <li> Always bring the event ticket with you before entering the event hall. </li>

    <li> Remember to carry your ID card along with the ticket. </li>

    <li> Make sure that the name provided during sign-up matches the person attending the event. </li>

    <li style={{color: 'red'}}> Payment must be completed for events with applicable fees. </li>
</ul>


                              <br/>
                            </div>
                                    
                    </div>
                    
                    <div className="
                      w-1/4
                      pl-4
                      h-1/4
                      mr-12 
                      bg-blue-100
                    "
                      >
                        <h2 className='
                            mt-4
                            font-bold
                        '>Ticket Summary
                        </h2>
                        <div className='text-sm flex justify-between' >
                              <div className='text-left mt-5'>{event.title}</div>
                              <div className='text-right mt-5 mb-6 pr-5'>LKR. {event.ticketPrice}</div>
                        </div>
                        
                        <hr className=" my-2 pt-2 border-gray-300" />
                        <div className='text-sm font-bold flex justify-between' >
                          <div className='text-left mt-5'>SUB TOTAL</div>
                          <div className='text-right mt-5 mb-6 pr-5'>LKR. {event.ticketPrice}</div>
                        </div>
                        <div className='flex justify-between'>
                          <input className='h-5 ' type='checkbox' onChange={handleCheckboxChange}/>
                          <div className='px-2 text-sm'>
                            I have verified the Event name, date and time before proceeding to Generating ticket. I accept terms and conditions. 
                          </div>
                        </div>
  
                        <div className='mb-5'>
                                  <Link to={'/event/'+event._id+ '/ordersummary'+'/paymentsummary'}>
                                    <button 
                                    className={`mt-5 p-3 ml-2 w-36 text-gray-100 items-center ${
                                      isCheckboxChecked ? 'bg-blue-700' : 'bg-gray-300'} gap-2 rounded-md`}
                                    disabled={!isCheckboxChecked}
                                    >
                                      Proceed
                                    </button>
                                  </Link>
                            </div>
                          
                            </div>
                          </div>
                          
                          </div> 
              
                    </div>
  
    );
}
