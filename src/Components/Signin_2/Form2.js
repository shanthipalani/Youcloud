import { useState } from 'react';
import cell from '../../Asset/images/cell.png';
// import { FcGoogle } from 'react-icons/fc';
import { AiFillCopyrightCircle } from 'react-icons/ai';
// import {Form, FormText} from 'react-bootstrap';
// import FormFileInput from 'react-bootstrap/esm/FormFileInput';
import './Form2.css'
import eye from '../../Asset/images/eye.png';
import Google from '../../Asset/images/Google.png'
import { Form, Input, Checkbox, Select, Button } from 'antd';
import { Row, Col } from 'react-bootstrap';
import useSelection from 'antd/lib/table/hooks/useSelection';


const validEmailMail = (expression) => {
    const regEp = /^([a-zA-Z0-9.]{3,})@([a-z]+)\.([a-z]{2,5})$/
    if (regEp.test(expression)) {
        return true;
    }
    return false;
}


function Form2() {
    const { Option } = Select;
    const [signupFlag, setSignupFlag] = useState(false)
    const [signinFlag, setSigninFlag] = useState(true)
    const [forgetPasswordFlag, setForgetPasswordFlag] = useState(false)
    const [form] = Form.useForm();

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select
                style={{
                    width: 70,
                }}
            >
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>
        </Form.Item>
    );

    return (
        <div className="container-fluid">
            <div className="row">
                <header className="nav-1 p-2">
                    <div className="head-1 signup_container">
                        <span className="">Copyright < AiFillCopyrightCircle /> 1996-2021 YouShop Ltd. All rights reserved</span>
                        <span className="">Terms of Use - Privacy Policy - Link to Us</span>
                    </div>
                </header>
            </div>
            <div className="row">
                <section className="landing_screen-1">
                    <div className="row signup_container mt-5">
                        <div className="mobile_img-1 col-lg-6">
                            <div className="row">
                                <img src={cell} alt="Phone" />
                            </div>
                        </div>
                        <div className="col-lg-6 pr-0 mb-4">
                            <div className="signin-1 ml-auto">
                                {signinFlag &&
                                    <div>
                                        <h3 className="welcome_back"><strong>Welcome Back !</strong></h3>
                                        <p className="online">Online Grocery Shopping</p>
                                        <Form
                                            layout="vertical"
                                        >
                                            <Form.Item label="Email">
                                                <Input className="custom-input pl-0" placeholder="Enter your email" />
                                            </Form.Item>
                                            <Form.Item label="Password" className="pl-0">
                                                <Input.Password className="p-0" placeholder="Enter your email password" />
                                            </Form.Item>
                                            <Form.Item>
                                                <Form.Item name="remember" id="keep_me_signed_font_color" valuePropName="checked" noStyle>
                                                    <Checkbox >Keep me signed</Checkbox>
                                                </Form.Item>

                                                <a className="login-form-forgot forgot_password_color float-lg-right" onClick={() => {
                                                    setSigninFlag(false)
                                                    setSignupFlag(false)
                                                    setForgetPasswordFlag(true)
                                                }}>
                                                    Forgot password
        </a>
                                            </Form.Item>
                                        </Form>

                                        <button className="button-1a"> Sign in</button>
                                        <div className="signin-divider mt-4 d-flex">
                                            <span className="or_font_color">Or</span><hr className="hr_line_color" />
                                        </div>
                                        <Row>
                                            <Col xs={12} lg={12}>
                                                <button className="button-2a d-flex  align-items-center w-85 px-2 px-md-5 mb-3"><img src={Google} alt="google" /><div className="d-none d-md-flex ml-3">Continue with Google</div></button>
                                            </Col>
                                            <Col xs={12} lg={12}>
                                                <button className="button-2a d-flex  align-items-center w-90 px-2 px-md-5 mb-3">{/*<img src={Fb} alt="FB" />*/}<div className="d-none d-md-flex ml-3">Continue with Mobile</div></button>
                                            </Col>
                                            <Col xs={12} lg={12}>
                                                <p className="dont_have_an_accountsize">Don't Have an Account? <a className="Signup_buttoncolor" onClick={() => {
                                                    setForgetPasswordFlag(false)
                                                    setSigninFlag(false)
                                                    setSignupFlag(true)
                                                }}> Sign Up</a> </p>
                                            </Col>
                                        </Row>
                                    </div>
                                }
                                {signupFlag &&
                                    <div>
                                        <div>
                                            <p className="welcome_back">Let's get started</p>
                                            <p className="online">Stay signed in with your account to make searching easier</p>
                                        </div>
                                        <Form
                                            layout="vertical"
                                        >
                                            <Form.Item label="Name">
                                                <Input className="custom-input pl-0" placeholder="Enter your name" />
                                            </Form.Item>
                                            <Form.Item label="Email">
                                                <Input className="custom-input pl-0" placeholder="Enter your email" />
                                            </Form.Item>
                                            <Form.Item label="Password" className="pl-0">
                                                <Input.Password className="p-0" placeholder="********" />
                                            </Form.Item>
                                            <Form.Item label="Re-type" className="pl-0">
                                                <Input.Password className="p-0" placeholder="********" />
                                            </Form.Item>
                                            <Form.Item
                                                name="country"
                                                label="Country"
                                            >
                                                <Select placeholder="select your country">
                                                    <Option value="" selected disabled >Select Country</Option>
                                                    <Option value="Afganistan">Afghanistan</Option>
                                                    <Option value="Albania">Albania</Option>
                                                    <Option value="Algeria">Algeria</Option>
                                                    <Option value="American Samoa">American Samoa</Option>
                                                    <Option value="Andorra">Andorra</Option>
                                                    <Option value="Angola">Angola</Option>
                                                    <Option value="Anguilla">Anguilla</Option>
                                                    <Option value="Antigua & Barbuda">Antigua & Barbuda</Option>
                                                    <Option value="Argentina">Argentina</Option>
                                                    <Option value="Armenia">Armenia</Option>
                                                    <Option value="Aruba">Aruba</Option>
                                                    <Option value="Australia">Australia</Option>
                                                    <Option value="Austria">Austria</Option>
                                                    <Option value="Azerbaijan">Azerbaijan</Option>
                                                    <Option value="Bahamas">Bahamas</Option>
                                                    <Option value="Bahrain">Bahrain</Option>
                                                    <Option value="Bangladesh">Bangladesh</Option>
                                                    <Option value="Barbados">Barbados</Option>
                                                    <Option value="Belarus">Belarus</Option>
                                                    <Option value="Belgium">Belgium</Option>
                                                    <Option value="Belize">Belize</Option>
                                                    <Option value="Benin">Benin</Option>
                                                    <Option value="Bermuda">Bermuda</Option>
                                                    <Option value="Bhutan">Bhutan</Option>
                                                    <Option value="Bolivia">Bolivia</Option>
                                                    <Option value="Bonaire">Bonaire</Option>
                                                    <Option value="Bosnia & Herzegovina">Bosnia & Herzegovina</Option>
                                                    <Option value="Botswana">Botswana</Option>
                                                    <Option value="Brazil">Brazil</Option>
                                                    <Option value="British Indian Ocean Ter">British Indian Ocean Ter</Option>
                                                    <Option value="Brunei">Brunei</Option>
                                                    <Option value="Bulgaria">Bulgaria</Option>
                                                    <Option value="Burkina Faso">Burkina Faso</Option>
                                                    <Option value="Burundi">Burundi</Option>
                                                    <Option value="Cambodia">Cambodia</Option>
                                                    <Option value="Cameroon">Cameroon</Option>
                                                    <Option value="Canada">Canada</Option>
                                                    <Option value="Canary Islands">Canary Islands</Option>
                                                    <Option value="Cape Verde">Cape Verde</Option>
                                                    <Option value="Cayman Islands">Cayman Islands</Option>
                                                    <Option value="Central African Republic">Central African Republic</Option>
                                                    <Option value="Chad">Chad</Option>
                                                    <Option value="Channel Islands">Channel Islands</Option>
                                                    <Option value="Chile">Chile</Option>
                                                    <Option value="China">China</Option>
                                                    <Option value="Christmas Island">Christmas Island</Option>
                                                    <Option value="Cocos Island">Cocos Island</Option>
                                                    <Option value="Colombia">Colombia</Option>
                                                    <Option value="Comoros">Comoros</Option>
                                                    <Option value="Congo">Congo</Option>
                                                    <Option value="Cook Islands">Cook Islands</Option>
                                                    <Option value="Costa Rica">Costa Rica</Option>
                                                    <Option value="Cote DIvoire">Cote DIvoire</Option>
                                                    <Option value="Croatia">Croatia</Option>
                                                    <Option value="Cuba">Cuba</Option>
                                                    <Option value="Curaco">Curacao</Option>
                                                    <Option value="Cyprus">Cyprus</Option>
                                                    <Option value="Czech Republic">Czech Republic</Option>
                                                    <Option value="Denmark">Denmark</Option>
                                                    <Option value="Djibouti">Djibouti</Option>
                                                    <Option value="Dominica">Dominica</Option>
                                                    <Option value="Dominican Republic">Dominican Republic</Option>
                                                    <Option value="East Timor">East Timor</Option>
                                                    <Option value="Ecuador">Ecuador</Option>
                                                    <Option value="Egypt">Egypt</Option>
                                                    <Option value="El Salvador">El Salvador</Option>
                                                    <Option value="Equatorial Guinea">Equatorial Guinea</Option>
                                                    <Option value="Eritrea">Eritrea</Option>
                                                    <Option value="Estonia">Estonia</Option>
                                                    <Option value="Ethiopia">Ethiopia</Option>
                                                    <Option value="Falkland Islands">Falkland Islands</Option>
                                                    <Option value="Faroe Islands">Faroe Islands</Option>
                                                    <Option value="Fiji">Fiji</Option>
                                                    <Option value="Finland">Finland</Option>
                                                    <Option value="France">France</Option>
                                                    <Option value="French Guiana">French Guiana</Option>
                                                    <Option value="French Polynesia">French Polynesia</Option>
                                                    <Option value="French Southern Ter">French Southern Ter</Option>
                                                    <Option value="Gabon">Gabon</Option>
                                                    <Option value="Gambia">Gambia</Option>
                                                    <Option value="Georgia">Georgia</Option>
                                                    <Option value="Germany">Germany</Option>
                                                    <Option value="Ghana">Ghana</Option>
                                                    <Option value="Gibraltar">Gibraltar</Option>
                                                    <Option value="Great Britain">Great Britain</Option>
                                                    <Option value="Greece">Greece</Option>
                                                    <Option value="Greenland">Greenland</Option>
                                                    <Option value="Grenada">Grenada</Option>
                                                    <Option value="Guadeloupe">Guadeloupe</Option>
                                                    <Option value="Guam">Guam</Option>
                                                    <Option value="Guatemala">Guatemala</Option>
                                                    <Option value="Guinea">Guinea</Option>
                                                    <Option value="Guyana">Guyana</Option>
                                                    <Option value="Haiti">Haiti</Option>
                                                    <Option value="Hawaii">Hawaii</Option>
                                                    <Option value="Honduras">Honduras</Option>
                                                    <Option value="Hong Kong">Hong Kong</Option>
                                                    <Option value="Hungary">Hungary</Option>
                                                    <Option value="Iceland">Iceland</Option>
                                                    <Option value="Indonesia">Indonesia</Option>
                                                    <Option value="India">India</Option>
                                                    <Option value="Iran">Iran</Option>
                                                    <Option value="Iraq">Iraq</Option>
                                                    <Option value="Ireland">Ireland</Option>
                                                    <Option value="Isle of Man">Isle of Man</Option>
                                                    <Option value="Israel">Israel</Option>
                                                    <Option value="Italy">Italy</Option>
                                                    <Option value="Jamaica">Jamaica</Option>
                                                    <Option value="Japan">Japan</Option>
                                                    <Option value="Jordan">Jordan</Option>
                                                    <Option value="Kazakhstan">Kazakhstan</Option>
                                                    <Option value="Kenya">Kenya</Option>
                                                    <Option value="Kiribati">Kiribati</Option>
                                                    <Option value="Korea North">Korea North</Option>
                                                    <Option value="Korea Sout">Korea South</Option>
                                                    <Option value="Kuwait">Kuwait</Option>
                                                    <Option value="Kyrgyzstan">Kyrgyzstan</Option>
                                                    <Option value="Laos">Laos</Option>
                                                    <Option value="Latvia">Latvia</Option>
                                                    <Option value="Lebanon">Lebanon</Option>
                                                    <Option value="Lesotho">Lesotho</Option>
                                                    <Option value="Liberia">Liberia</Option>
                                                    <Option value="Libya">Libya</Option>
                                                    <Option value="Liechtenstein">Liechtenstein</Option>
                                                    <Option value="Lithuania">Lithuania</Option>
                                                    <Option value="Luxembourg">Luxembourg</Option>
                                                    <Option value="Macau">Macau</Option>
                                                    <Option value="Macedonia">Macedonia</Option>
                                                    <Option value="Madagascar">Madagascar</Option>
                                                    <Option value="Malaysia">Malaysia</Option>
                                                    <Option value="Malawi">Malawi</Option>
                                                    <Option value="Maldives">Maldives</Option>
                                                    <Option value="Mali">Mali</Option>
                                                    <Option value="Malta">Malta</Option>
                                                    <Option value="Marshall Islands">Marshall Islands</Option>
                                                    <Option value="Martinique">Martinique</Option>
                                                    <Option value="Mauritania">Mauritania</Option>
                                                    <Option value="Mauritius">Mauritius</Option>
                                                    <Option value="Mayotte">Mayotte</Option>
                                                    <Option value="Mexico">Mexico</Option>
                                                    <Option value="Midway Islands">Midway Islands</Option>
                                                    <Option value="Moldova">Moldova</Option>
                                                    <Option value="Monaco">Monaco</Option>
                                                    <Option value="Mongolia">Mongolia</Option>
                                                    <Option value="Montserrat">Montserrat</Option>
                                                    <Option value="Morocco">Morocco</Option>
                                                    <Option value="Mozambique">Mozambique</Option>
                                                    <Option value="Myanmar">Myanmar</Option>
                                                    <Option value="Nambia">Nambia</Option>
                                                    <Option value="Nauru">Nauru</Option>
                                                    <Option value="Nepal">Nepal</Option>
                                                    <Option value="Netherland Antilles">Netherland Antilles</Option>
                                                    <Option value="Netherlands">Netherlands (Holland, Europe)</Option>
                                                    <Option value="Nevis">Nevis</Option>
                                                    <Option value="New Caledonia">New Caledonia</Option>
                                                    <Option value="New Zealand">New Zealand</Option>
                                                    <Option value="Nicaragua">Nicaragua</Option>
                                                    <Option value="Niger">Niger</Option>
                                                    <Option value="Nigeria">Nigeria</Option>
                                                    <Option value="Niue">Niue</Option>
                                                    <Option value="Norfolk Island">Norfolk Island</Option>
                                                    <Option value="Norway">Norway</Option>
                                                    <Option value="Oman">Oman</Option>
                                                    <Option value="Pakistan">Pakistan</Option>
                                                    <Option value="Palau Island">Palau Island</Option>
                                                    <Option value="Palestine">Palestine</Option>
                                                    <Option value="Panama">Panama</Option>
                                                    <Option value="Papua New Guinea">Papua New Guinea</Option>
                                                    <Option value="Paraguay">Paraguay</Option>
                                                    <Option value="Peru">Peru</Option>
                                                    <Option value="Phillipines">Philippines</Option>
                                                    <Option value="Pitcairn Island">Pitcairn Island</Option>
                                                    <Option value="Poland">Poland</Option>
                                                    <Option value="Portugal">Portugal</Option>
                                                    <Option value="Puerto Rico">Puerto Rico</Option>
                                                    <Option value="Qatar">Qatar</Option>
                                                    <Option value="Republic of Montenegro">Republic of Montenegro</Option>
                                                    <Option value="Republic of Serbia">Republic of Serbia</Option>
                                                    <Option value="Reunion">Reunion</Option>
                                                    <Option value="Romania">Romania</Option>
                                                    <Option value="Russia">Russia</Option>
                                                    <Option value="Rwanda">Rwanda</Option>
                                                    <Option value="St Barthelemy">St Barthelemy</Option>
                                                    <Option value="St Eustatius">St Eustatius</Option>
                                                    <Option value="St Helena">St Helena</Option>
                                                    <Option value="St Kitts-Nevis">St Kitts-Nevis</Option>
                                                    <Option value="St Lucia">St Lucia</Option>
                                                    <Option value="St Maarten">St Maarten</Option>
                                                    <Option value="St Pierre & Miquelon">St Pierre & Miquelon</Option>
                                                    <Option value="St Vincent & Grenadines">St Vincent & Grenadines</Option>
                                                    <Option value="Saipan">Saipan</Option>
                                                    <Option value="Samoa">Samoa</Option>
                                                    <Option value="Samoa American">Samoa American</Option>
                                                    <Option value="San Marino">San Marino</Option>
                                                    <Option value="Sao Tome & Principe">Sao Tome & Principe</Option>
                                                    <Option value="Saudi Arabia">Saudi Arabia</Option>
                                                    <Option value="Senegal">Senegal</Option>
                                                    <Option value="Seychelles">Seychelles</Option>
                                                    <Option value="Sierra Leone">Sierra Leone</Option>
                                                    <Option value="Singapore">Singapore</Option>
                                                    <Option value="Slovakia">Slovakia</Option>
                                                    <Option value="Slovenia">Slovenia</Option>
                                                    <Option value="Solomon Islands">Solomon Islands</Option>
                                                    <Option value="Somalia">Somalia</Option>
                                                    <Option value="South Africa">South Africa</Option>
                                                    <Option value="Spain">Spain</Option>
                                                    <Option value="Sri Lanka">Sri Lanka</Option>
                                                    <Option value="Sudan">Sudan</Option>
                                                    <Option value="Suriname">Suriname</Option>
                                                    <Option value="Swaziland">Swaziland</Option>
                                                    <Option value="Sweden">Sweden</Option>
                                                    <Option value="Switzerland">Switzerland</Option>
                                                    <Option value="Syria">Syria</Option>
                                                    <Option value="Tahiti">Tahiti</Option>
                                                    <Option value="Taiwan">Taiwan</Option>
                                                    <Option value="Tajikistan">Tajikistan</Option>
                                                    <Option value="Tanzania">Tanzania</Option>
                                                    <Option value="Thailand">Thailand</Option>
                                                    <Option value="Togo">Togo</Option>
                                                    <Option value="Tokelau">Tokelau</Option>
                                                    <Option value="Tonga">Tonga</Option>
                                                    <Option value="Trinidad & Tobago">Trinidad & Tobago</Option>
                                                    <Option value="Tunisia">Tunisia</Option>
                                                    <Option value="Turkey">Turkey</Option>
                                                    <Option value="Turkmenistan">Turkmenistan</Option>
                                                    <Option value="Turks & Caicos Is">Turks & Caicos Is</Option>
                                                    <Option value="Tuvalu">Tuvalu</Option>
                                                    <Option value="Uganda">Uganda</Option>
                                                    <Option value="United Kingdom">United Kingdom</Option>
                                                    <Option value="Ukraine">Ukraine</Option>
                                                    <Option value="United Arab Erimates">United Arab Emirates</Option>
                                                    <Option value="United States of America">United States of America</Option>
                                                    <Option value="Uraguay">Uruguay</Option>
                                                    <Option value="Uzbekistan">Uzbekistan</Option>
                                                    <Option value="Vanuatu">Vanuatu</Option>
                                                    <Option value="Vatican City State">Vatican City State</Option>
                                                    <Option value="Venezuela">Venezuela</Option>
                                                    <Option value="Vietnam">Vietnam</Option>
                                                    <Option value="Virgin Islands (Brit)">Virgin Islands (Brit)</Option>
                                                    <Option value="Virgin Islands (USA)">Virgin Islands (USA)</Option>
                                                    <Option value="Wake Island">Wake Island</Option>
                                                    <Option value="Wallis & Futana Is">Wallis & Futana Is</Option>
                                                    <Option value="Yemen">Yemen</Option>
                                                    <Option value="Zaire">Zaire</Option>
                                                    <Option value="Zambia">Zambia</Option>
                                                    <Option value="Zimbabwe">Zimbabwe</Option>
                                                </Select>
                                            </Form.Item>
                                            <Form.Item
                                                name="phone"
                                                label="Phone Number"
                                            >
                                                <Input
                                                    addonBefore={prefixSelector}
                                                    style={{
                                                        width: '100%',
                                                    }}
                                                />
                                            </Form.Item>
                                            <Form.Item
                                                name="agreement"
                                                valuePropName="checked"
                                            >
                                                <Checkbox>
                                                    By signing up, you agree to <a href="">Terms & Condtion</a>


                                                </Checkbox>
                                            </Form.Item>
                                            <Form.Item>
                                                <button className="button-1a" type="submit">Sign up</button>
                                            </Form.Item>
                                        </Form>

                                        <Row>
                                            <Col xs={12} lg={12}>
                                                <p className="dont_have_an_accountsize">Already have an account? <a className="Signup_buttoncolor" onClick={() => {
                                                    setForgetPasswordFlag(false)
                                                    setSignupFlag(false)
                                                    setSigninFlag(true)
                                                }}> Sign in</a> </p>
                                            </Col>
                                        </Row>

                                    </div>

                                }
                            </div>

                        </div>
                    </div>
                </section>
            </div>
        </div>
    );

}

export default Form2;