import { useState} from "react";
import osmosisLogo from "../../assets/osmosislearn_logo.png";
import googleImg from "../../assets/google.png";
import "../Login/Login.css";
import { Link, useNavigate} from "react-router-dom";
import axios from 'axios';


const Login = () => {

  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const loginUser = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost:9090/api/user/login',
        { email, password },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const data = response.data;

      console.log('All data', data);

      if (data.status === 'success') {
        window.alert('Login successful');
        localStorage.setItem("jwtToken", data.token);
        navigate('/home');
      } else {
        window.alert('Invalid Credentials');
      }
    } catch (error) {
      console.error('Error during login:', error);
      window.alert('An error occurred during login. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <div className="sub-container">
        <div className="form-title">
          <h4>Login</h4>
        </div>
        <h6>No member yet? <Link to="/signup">Click here</Link></h6>
        <img src={osmosisLogo} alt="" style={{ width: "200px" }} />
        <form method="POST">
          <div>
            <input type="email" name="email" placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
          </div>
          <div>
            <input type="password" name="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
          </div>
          <div>
            <a href="">Forgot your password?</a>
          </div>
          <button type="submit" onClick={loginUser}>Submit</button>
        </form>
        <div className="or-text">OR</div>
        <button className="login-with-google">
          <h5>
            Login with Google <img src={googleImg} style={{ width: "22px" }} />
          </h5>
        </button>
      </div>
    </div>
  );
};

export default Login;



