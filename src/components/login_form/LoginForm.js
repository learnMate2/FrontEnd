// LoginForm.js
// import React from 'react';
// import { Container, Form, Button, Row, Col } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import "../../styles/styles.css";

// const LoginForm = () => {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Handle form submission
//   };

//   return (
//     <Container className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
//       <Row className="justify-content-center" style={{ width: '100%' }}>
//         <Col xs={12} md={6} lg={4}>
//           <div className="p-4" style={{ background: "#6b21a8", color: "#fff", borderRadius: '8px' }}>
//             <h1 className="mb-4 text-center">LOGIN IN</h1>
//             <Form onSubmit={handleSubmit}>
//               <Form.Group controlId="formEmail" className="mb-3">
//                 <Form.Label>Email address</Form.Label>
//                 <Form.Control type="email" placeholder="Enter your email" required autoFocus />
//               </Form.Group>
//               <Form.Group controlId="formPassword" className="mb-3">
//                 <Form.Label>Password</Form.Label>
//                 <Form.Control type="password" placeholder="Password" required />
//               </Form.Group>
//               <div className="mb-3 ">
//                 <Link to="/forget" className='forget'>Forget Password</Link>
//               </div>
//               <Button
//                 type="submit"
//                 variant="light"
//                 className="w-100 mb-3"
//                 style={{
//                   background: "#fff",
//                   color: "#000",
//                   padding: "10px 0",
//                   '&:hover': { background: '#6b21a8', color: "#fff" }
//                 }}
//               >
//                 Login In
//               </Button>
//               <div >
//                 <p>Create new account. <Link to="/signup" className='already_account'>Click Here</Link></p>
//               </div>
//             </Form>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default LoginForm;


import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../../styles/styles.css";
import signupImage from "../../images/signup.jpg"

const LoginForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };
  return (
    <div style={{margin:"50px 0"}}>
    <Container className="signup d-flex justify-content-center align-items-center bg-white" style={{ width: "1000px", height: "900px", padding: 0 ,}}>
      <div className="d-flex justify-content-center align-items-center text-dark" style={{ width: "500px", height: "900px" }}>
        <Row >
          <Col xs={12} md={6} lg={4}>
            <div className="" style={{ borderRadius: '8px', width: "400px" }}>
              <div style={{ paddingBottom: '50px' }}>
                <h1 className="text-center" style={{fontSize:"43px"}}>Login</h1>
                <p className="text-center" style={{ color: "#999999",size:"15px", }}>Welcome Back! Please Enter your Details</p>
              </div>
              <Form onSubmit={handleSubmit} >
                
                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Email" required className='form_control'/>
                </Form.Group>
                <Form.Group controlId="formPassword" className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" required className='form_control'/>
                </Form.Group>
                <div className="mb-3 ">
                <Link to="/forget" className='forget' >Forget Password</Link>
              </div>
                
                <Button
                  type="submit"
                  variant="light"
                  className="w-100 mb-3"
                  style={{
                    background: "#6b21a8",
                    color: "#fff",
                    padding: "10px 0",
                    marginTop: "20px",
                    '&:hover': { background: '#fff', color: "#6b21a8" }
                  }}
                >
                  Login
                </Button>
                <div>
                <p>Create new account. <Link to="/signup" className='already_account' >Click Here</Link></p>
                </div>
              </Form>
            </div>
          </Col>
        </Row>

      </div>
      <div style={{ width: "500px", background: "#6b21a8", height: "900px", margin: "30px 0" }}>
        <div className="signup_text text-white" style={{ margin: "79px 10px 20px 10px", textAlign: "center" }}>
          <h1 style={{ padding: "20px", size: "46.62px" }}>Welcome to LearnMate Join us to help Student all Around the world !</h1>
          <p style={{ color: "#E0E0E0", textAlign: "center", padding: "5px 20px 20px 20px", fontfamily: '"PT Sans Narrow", sans-serif' }}>Learnmate is the ultimate platform designed for students by students. Whether you're looking to buy or sell notes, or seek career guidance, Learnmate has got you covered!</p>
          <img src={signupImage} alt="sign up" style={{ width: "450px", borderRadius: "10px" }} />
        </div>
      </div>
    </Container>
    </div>
  );
};

export default LoginForm;
