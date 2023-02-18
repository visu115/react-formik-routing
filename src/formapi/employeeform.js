
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './employeeform.css'

function EmployeeForm() {






    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setEmail] = useState('');

    const [firstNameErr, setfirstNameErr] = useState('');
    const [lastNameErr, setlastNameErr] = useState('');
    const [emailErr, setEmailErr] = useState('');

    const navigate = useNavigate();


    const checkValidation = (e) => {
        e.preventDefault()
        let isValid = true

        if (firstName === "") {
            setfirstNameErr('Enter your firstname')
            isValid = false;
        }
        else {
            setfirstNameErr('');
        }
        if (lastName === '') {
            setlastNameErr('Enter your lastname');
            isValid = false;
        }
        else {
            setlastNameErr('');
        }

        if (!email.includes('@', '.')) {
            setEmailErr('Enter valid email');
            isValid = false;
        }
        else {
            setEmailErr('');
        }

        if (isValid) {
  

            fetch('https://63b806e94d97e82aa3ccef11.mockapi.io/Employee', {
                method: 'POST',
                body: JSON.stringify({
                    'firstName' :firstName,
                    'lastName' :lastName,
                    'email' : email

                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }

           
            })
            .then((response)=>response.json()
            .then((data)=>{
                console.log(data)
                navigate('/employeedata');
            }) 
            .catch((err)=>{
               alert(err.message)
            })
            )
        }
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
                                        <input type="text" name="firstName" onChange={e => setfirstName(e.target.value)} id="username" className="form__input" placeholder="firstName" />
                                    </div>
                                    <p className='text-danger'>{firstNameErr}</p>
                                    <div className="row">
                                        <input type="text" name="lastName"  onChange={e => setlastName(e.target.value)} className="form__input" placeholder="lastName" />
                                    </div>
                                    <p className='text-danger'>{lastNameErr}</p>

                                    <div className="row">
                                        <input type="email" name="Email"  onChange={e => setEmail(e.target.value)} className="form__input" placeholder="Email id" />
                                    </div>
                                    <p className='text-danger'>{emailErr}</p>


                                    <div className="row justify-content-center">
                                        <input type="submit" onClick={checkValidation} className="btn" />
                                    </div>
                                </form>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployeeForm;
