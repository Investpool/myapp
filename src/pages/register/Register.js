import "./register.scss";
import { Link } from "react-router-dom";



const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>MEKROM</h1>
          <p>
            Developing Our Communities With Passion
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
          <button>Login</button>
          </Link>
          </div>
        <div className="righto">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username"/>
            <input type="email" placeholder="Email.."/>
            <input type="text" placeholder="Region"/>
            <input type="text" placeholder="District"/>
            <input type="text" placeholder="Community"/>
            <input type="password" placeholder="password"/>
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;