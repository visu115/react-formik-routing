import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './newfile.css'


function Newfile() {


    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [userErr, setUserErr] = useState('');
    const [passErr, setPassErr] = useState('');
    const navigate = useNavigate();


    const checkValidation = (e) => {
        e.preventDefault()
        let isValid = true

        if (userName === "") {
            setUserErr('Enter your username')
            isValid = false;
        }
        else {
            setUserErr('');
        }
        if (password.length < 8) {
            setPassErr('password must have 8 character');
            isValid = false;
        }
        else {
            setPassErr('');
        }
        if (isValid) {
            navigate('/home')
        }

    }

    const moveFunc = () => {
        navigate('/signup')
    }

    return (
        <div>
            <div className="container-fluid">
                <div className="row main-content bg-success text-center">
                    <div className="col-md-4 text-center company__info">
                        <span className="company__logo"><h2><span className="fa fa-android"></span></h2></span>
                        <h4 className="company_title">Your Company Logo</h4>
                    </div>
                    <div className="col-md-8 col-xs-12 col-sm-12 login_form ">
                        <div className="container-fluid">
                            <div className="row">
                                <h2>Log In</h2>
                            </div>
                            <div className="row">
                                <form control="" className="form-group">
                                    <div className="row">
                                        <input type="text" name="username" onChange={e => setUserName(e.target.value)} id="username" className="form__input" placeholder="Username" />
                                    </div>
                                    <p className='text-danger'>{userErr}</p>
                                    <div className="row">
                                        <input type="password" name="password" id="password" onChange={e => setPassword(e.target.value)} className="form__input" placeholder="Password" />
                                    </div>
                                    <p className='text-danger'>{passErr}</p>

                                    <div className="row justify-content-center">
                                        <input type="submit" onClick={checkValidation} className="btn" />
                                    </div>
                                </form>
                            </div>
                            <div className="row">
                                <p>Don't have an account? <a href=' ' onClick={moveFunc}><span className='text-success fw-bold'>Sign UP</span></a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid text-center footer">

            </div>
        </div>
    )
}

export default Newfile;
