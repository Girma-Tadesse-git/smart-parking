import './welcome.css'
import { useNavigate } from 'react-router-dom'
function Welcome(){
    const navigate = useNavigate();
    return(
        
        <div className="button-container">
          <button onClick={() => navigate('/login')} className="auth-btn login-btn">
            Login
          </button>
         
        </div>
      
    )


}
export default Welcome