import { Component } from 'react';
import './Form3.css';
// import { FcGoogle } from 'react-icons/fc';
// import { AiFillFacebook } from 'react-icons/ai';
import Nav from '../navigation/nav'
import Google from '../../Asset/images/Google.png'
import Fb from '../../Asset/images/Fb.png'
import eye from '../../Asset/images/eye.png';
import Footer from '../Footer/footer'


// <span><AiFillCopyrightCircle/></span> 
// AiFillCopyrightCircle


const validEmailMail = (expression) => {
    const regEp = /^([a-zA-Z0-9.]{3,})@([a-z]+)\.([a-z]{2,5})$/
    if (regEp.test(expression)) {
        return true;
    }
    return false;
}
class Form3 extends Component {
    state = {
        error: {
            email: '',
            password: ''
        },
        totalError: null,
        count: 2
    }
    handleChange = (event) => {
        //console.log(event)
        const { name, value } = event.target;
        let errors = this.state.error
        switch (name) {
            case "email":
                errors.email = validEmailMail(value) ? "" : "Email is invalid"
                break;
            case "password":
                errors.password = value.length < 8 ?
                    "Password should contains 8 characters" : "";
                break;
            default:
                break;
        }
        this.setState({ errors, [name]: value })
    }
    submitHandler = (event) => {
        event.preventDefault();
        if (this.state.error.password.length === null || this.state.error.email.length === null) {
            this.setState({ totalError: "Enter the Username and password" })
        }

    }

    render() {
        return (
            <>
               <Nav count={this.state.count} />
            <div className="container-fluid form_background">
         
                
                
              
                        <section  className="row align-items-center justify-content-center">
                            <div className=" col-12 col-sm-8 col-xl-5">
                            <div className="form_border_3 p-3 p-md-5">
                                <p className="welcome">Welcome Back !</p>
                                <p className="stay">Stay signed in with your account to make searching easier</p><br />
                                <form>
                                    <div className="form-group mb-4">
                                        <label htmlFor="Email"><strong>Email</strong></label><br />
                                        <input type="email" name="email" id="Email" placeholder="Enter your email" onChange={this.handleChange} />
                                        {this.state.error.email.length > 1 ? <span className="text-danger">{this.state.errors.email}</span> : ""}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="Password"><strong>Password</strong></label><br />
                                        <div className="position-relative">
                                            <input type="password" name="password" id="Password" placeholder="Enter your password" className="password_place" onChange={this.handleChange} />
                                            {this.state.error.password.length > 1 ? <span className="text-danger">{this.state.errors.password}</span> : ""}
                                            <img className="position-absolute eye_image" src={eye} alt="eye"/>
                                        </div>
                                    </div>
                                    <div className="form-group mb-4">
                                        <div className="col-sm-12">
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <div className="row d-flex align-items-center">
                                                        <input type="checkbox" className="keep-signed" name="signed" />
                                                        <label htmlFor="signed" className="mb-0 keep_me_signed_color">&nbsp; Keep me signed</label>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="row d-flex justify-content-end">
                                                        <a className="forgot_password_color" href="/forgotpassword">Forgot Password?</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="buttonstyle">
                                        <button className="buttonstyle1" onClick={this.submitHandler}>Sign in</button>
                                    </div>
                                    <div>
                                        <span className="text-danger">{this.state.totalError !== null ? <span>{this.state.totalError}</span> : ""}</span>
                                    </div>
                                </form><br />
                                <div className="or">                                    
                                    Or
                                </div><br/>
                                <div className="mb-4 buttonstyle2">
                                    <button className="buttonstyle_google"><img src={Google} className="google_icon" alt="google"/>&nbsp;&nbsp;&nbsp;Continue with Google</button>
                                </div>
                                <div className="mb-4 buttonstyle2">
                                    <button className="buttonstyle_google"><img src={Fb} alt="fb" className="google_icon" />&nbsp;Continue with Facebook</button>
                                </div>
                                <div className="newaccount">
                                    <p>Don't Have an Account?<a className="Signup_buttoncolor" href="/SignUp">&nbsp; Sign Up</a></p>
                                </div>
                            </div>
                      
                            </div>
                   </section>
                     
                
        


            </div>
            <Footer />
            </>
        );
    }
}

export default Form3;