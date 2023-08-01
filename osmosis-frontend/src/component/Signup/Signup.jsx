import { useState} from "react";
import osmosis from "../../assets/osmosislearn_logo.png";
import googleImg from "../../assets/google.png";
import "../Login/Login.css";
import {Link, useNavigate } from "react-router-dom";
import axios from 'axios';


const Signup = () => {

const [user,setUser] = useState({
  name: "",email: "", password: ""
})

const navigate = useNavigate();


let name;
let value;

const handleInputs=(e)=> {
name= e.target.name;
value= e.target.value;

setUser({...user,[name]:value});

};

const registerData = async (e) => {
  e.preventDefault();

  try {
    const { name, email, password } = user;

    const response = await axios.post(
      'http://localhost:9090/api/user/register',
      { name, email, password },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const data = response.data;

    if (data.status === 'success') {
      window.alert('Registration Successful');
      navigate('/login');
    } else {
      window.alert('Registration Failed. Please try again.');
    }
  } catch (error) {
    console.error('Error during registration:', error);
    window.alert('An error occurred during registration. Please try again.');
  }
};


  return (
    <div className="login-container">
      <div className="sub-container">
        <div className="form-title">
          <h4>Signup</h4>
        </div>
        <h6>No member yet? <Link to="/login">Click here</Link></h6>
        <img src={osmosis} alt="" style={{ width: "200px" }} />
        <form method="POST">
          <div>
            <input type="text" placeholder="Enter Full Name" name="name"  value={user.name} onChange={handleInputs}/>
          </div>
          <div>
            <input type="email" placeholder="Email" name="email" value={user.email} onChange={handleInputs}/>
          </div>
          <div>
            <input type="password" placeholder="Password" name="password" value={user.password} onChange={handleInputs}/>
          </div>
          <div>
            <a>Forgot your password?</a>
          </div>
          <button type="submit" onClick={registerData} >Submit</button>
        </form>
        <div className="or-text">OR</div>
        <button className="login-with-google">
          <h5>
            Signup with Google <img src={googleImg} style={{ width: "26px" }} />
          </h5>
        </button>
      </div>
    </div>
  );
};

export default Signup;


