
import React, { useState } from 'react';
import {styled} from 'styled-components'

const Main = styled.div`
  background-image: url('/Images/background.jpg'); /* use absolute path for public folder */
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;


function Booking() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        event: '',
        venue: '',
        contact: '',
        date: '',
        time: '',
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <Main >
            <div>
            <h2 style={{color:"#255d73"}}>Event Booking Form</h2>
            {!submitted ? (
                <form onSubmit={handleSubmit}>
                    <div>
                        <input type="text" name="name" required value={formData.name} placeholder='Name'onChange={handleChange} />
                    </div>
                    <br></br>

                    <div>
                        
                        <input type="email" name="email" required value={formData.email}placeholder='Email' onChange={handleChange} />
                    </div>
                    <br></br>

                    <div>
                      
                        <input type="tel" name="contact" required pattern="[0-9]{10}"  placeholder="Contact" onChange={handleChange}  />
                    </div>
                    <br>
                    </br>

                    <div>
        
                        <input type="checkbox" name="wedding" checked={formData.wedding} onChange={handleChange} />
                        Wedding
                        <input type="checkbox" name="birthday" checked={formData.birthday} onChange={handleChange}
                        />
                        Birthday
                    </div>
                    <br>
                    </br>

                    <div>
    
                        <input type="text" name="venue" required value={formData.venue} placeholder='Venue' onChange={handleChange} />
                    </div>
                    <br>
                    </br>

                    <div>
                        <label>Select Date &Time:</label><br />
                        <input type="date" name="date" required value={formData.date} onChange={handleChange} />
                    </div>

                    <div>


                        <label>Time:</label><br />
                        <input type="time" name="time" required value={formData.time} onChange={handleChange} />
                    </div>

                    <button type="submit" style={{ marginTop: 10 }}>Book Now</button>
                    
                </form>
            ) : (
                <div>
                    <h3>Thank you, {formData.name}!</h3>
                    <p>You booked {formData.event} event for {formData.date}.</p>
                    <p>A confirmation email has been sent to {formData.email}.</p>
                </div>
            )}
            </div>
        </Main>
    );
}

export default Booking;
