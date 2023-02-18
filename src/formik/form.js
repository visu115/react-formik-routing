import React from 'react'
import { useFormik } from 'formik';

import './form.css'


const validate = values => {
    const errors = {};
    if (!values.firstName) {
        errors.firstName = "Enter your Name"
    }
    else if (!/^[a-zA-Z ]+$/.test(values.firstName)) {
        errors.firstName = 'Enter Albhabetic charcter only'
    }

    if (!values.lastName) {
        errors.lastName = 'Enter Your Last Name'
    }

    if (!values.email) {
        errors.email = 'Enter Your Email Address'
    }

    else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(values.email)) {
        errors.email = 'Enter Valid Email Address'
    }

    if (values.password.length < 8) {
        errors.password = 'Password Must be 8 Character'
    }
    return errors;
}

function Form() {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: ''

        },

        validate,

        onSubmit: values => {
            alert(`${values.firstName}`)
        }

    });

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
                                <h2>Sign UP</h2>
                            </div>
                            <div className="row my-5">
                                <form onSubmit={formik.handleSubmit} className="form-group">
                                    <div className="row mb-3">
                                        <label className='text-start text-primary'>FirstName</label>
                                        <input className={`p-2 ${formik.touched.firstName && formik.errors.firstName ? 'form-control is-invalid' : ''} `}
                                            type={'text'}
                                            placeholder='Enter Your First Name'
                                            name='firstName'
                                            onChange={formik.handleChange}
                                            value={formik.values.firstName}
                                            onBlur={formik.handleBlur}
                                        />
                                        {
                                            formik.touched.firstName && formik.errors.firstName ? <span className='text-danger fw-bold '>{formik.errors.firstName}</span> : null
                                        }                                    </div>
                                    <div className="row mb-3">
                                    <label className='text-start text-primary'>LastName</label>
                                        <input className={`p-2 ${formik.touched.lastName && formik.errors.lastName ? 'form-control is-invalid' : ''}`} type={'text'}
                                            placeholder='Enter Your Last Name'
                                            name='lastName'
                                            onChange={formik.handleChange}
                                            value={formik.values.lastName}
                                            onBlur={formik.handleBlur}
                                        />
                                        {
                                            formik.touched.lastName && formik.errors.lastName ? <span className='text-danger fw-bold'>{formik.errors.lastName}</span> : null
                                        }
                                    </div>

                                    <div className="row mb-3">
                                    <label className='text-start text-primary'>Email ID</label>

                                        <input className={`p-2 ${formik.touched.email && formik.errors.email ? 'form-control is-invalid' : ''}`} type={'email'}
                                            placeholder='Enter Your Email Address'
                                            name='email'
                                            onChange={formik.handleChange}
                                            value={formik.values.email}
                                            onBlur={formik.handleBlur}
                                        />
                                        {
                                            formik.touched.email && formik.errors.email ? <span className='text-danger fw-bold'>{formik.errors.email}</span> : null
                                        }
                                    </div>
                                    <div className="row mb-3">
                                    <label className='text-start text-primary'>Password</label>
                                        <input className={`p-2 ${formik.touched.password && formik.errors.password ? 'form-control is-invalid' : ''}`} type={'password'}
                                            placeholder='Enter Your Password'
                                            name='password'
                                            onChange={formik.handleChange}
                                            value={formik.values.password}
                                            onBlur={formik.handleBlur}
                                        />
                                        {
                                            formik.touched.password && formik.errors.password ? <span className='text-danger fw-bold'>{formik.errors.password}</span> : null
                                        }
                                    </div>

                                    <div className="row mb-3 justify-content-center">
                                        <input type="submit" className="btn" />
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

export default Form;
