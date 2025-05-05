import Header from "./Header.jsx"
import Footer from "./Footer.jsx"


function Login() {
//   const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Signup
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (isLogin) {
//       // Handle login logic
//       console.log('Logging in...');
//       navigate('/admin'); // After login, redirect to Admin page
//     } else {
//       // Handle signup logic
//       console.log('Signing up...');
//       navigate('/agent'); // After signup, redirect to Agent page
//     }
//   };

  return (
    <div className="page-wrapper dark-theme">
     

      {/* <div className="login-container">
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2> */}

        {/* <form  onSubmit={handleSubmit}> */}
        <form>
          {!isLogin && (
            <>
              <input type="text" name="name" placeholder="Full Name" required />
            </>
          )}
          <input type="email" name="email" placeholder="Email" required />
          <input type="password" name="password" placeholder="Password" required />

          <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
        </form>

        {/* <p style={{ marginTop: '15px' }}>
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button
            type="button"
            className="switch-btn"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? ' Sign Up' : ' Login'}
          </button>
        </p>
      </div>
      <main className="main-content"></main>
      <Footer /> */}
    //</div>
  );
}

export default Login;