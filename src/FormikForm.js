import { useFormik } from 'formik';
import React from 'react'

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

function FormikForm() {
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
    // console.log(formik)

    // console.log(onsubmit)
    return (
        <div className='row' >

            <h1 className='text-center'>Sign UP</h1>
            <hr></hr>

            <form onSubmit={formik.handleSubmit} className='container border w-50'>
                <div className='row '>
                    <div className='row mb-4 d-flex ms-auto me-auto   '>
                        <label className='fs-5'>FirstName</label>
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
                        }
                    </div>

                    <div className='row mb-4 d-flex ms-auto me-auto '>
                        <label className='fs-5'>LastName</label>
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

                    <div className='row mb-4 d-flex ms-auto me-auto'>
                        <label className='fs-5'>Email</label>
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
                    <div className='row mb-4 d-flex ms-auto me-auto'>
                        <label className='fs-5'>Password</label>
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


                    <div className='  '>
                        <button type='submit' className='btn btn-success '>submit</button>
                    </div>
                </div>
            </form >

        </div >
    )
}
export default FormikForm;





















































// <!DOCTYPE html>
// <html lang="en">
// <head>
// <meta charset="utf-8">
// <meta http-equiv="X-UA-Compatible" content="IE=edge">
// <meta name="viewport" content="width=device-width, initial-scale=1">

// <title>Booking Form HTML Template</title>

// <style id="" media="all">/* cyrillic-ext */
// @font-face {
//   font-family: 'Montserrat';
//   font-style: normal;
//   font-weight: 400;
//   font-display: swap;
//   src: url(/fonts.gstatic.com/s/montserrat/v25/JTUSjIg1_i6t8kCHKm459WRhyzbi.woff2) format('woff2');
//   unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
// }
// /* cyrillic */
// @font-face {
//   font-family: 'Montserrat';
//   font-style: normal;
//   font-weight: 400;
//   font-display: swap;
//   src: url(/fonts.gstatic.com/s/montserrat/v25/JTUSjIg1_i6t8kCHKm459W1hyzbi.woff2) format('woff2');
//   unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
// }
// /* vietnamese */
// @font-face {
//   font-family: 'Montserrat';
//   font-style: normal;
//   font-weight: 400;
//   font-display: swap;
//   src: url(/fonts.gstatic.com/s/montserrat/v25/JTUSjIg1_i6t8kCHKm459WZhyzbi.woff2) format('woff2');
//   unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
// }
// /* latin-ext */
// @font-face {
//   font-family: 'Montserrat';
//   font-style: normal;
//   font-weight: 400;
//   font-display: swap;
//   src: url(/fonts.gstatic.com/s/montserrat/v25/JTUSjIg1_i6t8kCHKm459Wdhyzbi.woff2) format('woff2');
//   unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
// }
// /* latin */
// @font-face {
//   font-family: 'Montserrat';
//   font-style: normal;
//   font-weight: 400;
//   font-display: swap;
//   src: url(/fonts.gstatic.com/s/montserrat/v25/JTUSjIg1_i6t8kCHKm459Wlhyw.woff2) format('woff2');
//   unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
// }
// /* cyrillic-ext */
// @font-face {
//   font-family: 'Montserrat';
//   font-style: normal;
//   font-weight: 700;
//   font-display: swap;
//   src: url(/fonts.gstatic.com/s/montserrat/v25/JTUSjIg1_i6t8kCHKm459WRhyzbi.woff2) format('woff2');
//   unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
// }
// /* cyrillic */
// @font-face {
//   font-family: 'Montserrat';
//   font-style: normal;
//   font-weight: 700;
//   font-display: swap;
//   src: url(/fonts.gstatic.com/s/montserrat/v25/JTUSjIg1_i6t8kCHKm459W1hyzbi.woff2) format('woff2');
//   unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
// }
// /* vietnamese */
// @font-face {
//   font-family: 'Montserrat';
//   font-style: normal;
//   font-weight: 700;
//   font-display: swap;
//   src: url(/fonts.gstatic.com/s/montserrat/v25/JTUSjIg1_i6t8kCHKm459WZhyzbi.woff2) format('woff2');
//   unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
// }
// /* latin-ext */
// @font-face {
//   font-family: 'Montserrat';
//   font-style: normal;
//   font-weight: 700;
//   font-display: swap;
//   src: url(/fonts.gstatic.com/s/montserrat/v25/JTUSjIg1_i6t8kCHKm459Wdhyzbi.woff2) format('woff2');
//   unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
// }
// /* latin */
// @font-face {
//   font-family: 'Montserrat';
//   font-style: normal;
//   font-weight: 700;
//   font-display: swap;
//   src: url(/fonts.gstatic.com/s/montserrat/v25/JTUSjIg1_i6t8kCHKm459Wlhyw.woff2) format('woff2');
//   unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
// }
// </style>

// <link type="text/css" rel="stylesheet" href="css/bootstrap.min.css" />

// <link type="text/css" rel="stylesheet" href="css/style.css" />


// <!--[if lt IE 9]>
// 		  <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
// 		  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
// 		<![endif]-->
// <meta name="robots" content="noindex, follow">
// <script nonce="d3bb3410-e879-46fc-82fc-3176aa0f7120">(function(w,d){!function(f,g,h,i){f[h]=f[h]||{};f[h].executed=[];f.zaraz={deferred:[],listeners:[]};f.zaraz.q=[];f.zaraz._f=function(j){return function(){var k=Array.prototype.slice.call(arguments);f.zaraz.q.push({m:j,a:k})}};for(const l of["track","set","debug"])f.zaraz[l]=f.zaraz._f(l);f.zaraz.init=()=>{var m=g.getElementsByTagName(i)[0],n=g.createElement(i),o=g.getElementsByTagName("title")[0];o&&(f[h].t=g.getElementsByTagName("title")[0].text);f[h].x=Math.random();f[h].w=f.screen.width;f[h].h=f.screen.height;f[h].j=f.innerHeight;f[h].e=f.innerWidth;f[h].l=f.location.href;f[h].r=g.referrer;f[h].k=f.screen.colorDepth;f[h].n=g.characterSet;f[h].o=(new Date).getTimezoneOffset();if(f.dataLayer)for(const s of Object.entries(Object.entries(dataLayer).reduce(((t,u)=>({...t[1],...u[1]})))))zaraz.set(s[0],s[1],{scope:"page"});f[h].q=[];for(;f.zaraz.q.length;){const v=f.zaraz.q.shift();f[h].q.push(v)}n.defer=!0;for(const w of[localStorage,sessionStorage])Object.keys(w||{}).filter((y=>y.startsWith("_zaraz_"))).forEach((x=>{try{f[h]["z_"+x.slice(7)]=JSON.parse(w.getItem(x))}catch{f[h]["z_"+x.slice(7)]=w.getItem(x)}}));n.referrerPolicy="origin";n.src="/cdn-cgi/zaraz/s.js?z="+btoa(encodeURIComponent(JSON.stringify(f[h])));m.parentNode.insertBefore(n,m)};["complete","interactive"].includes(g.readyState)?zaraz.init():f.addEventListener("DOMContentLoaded",zaraz.init)}(w,d,"zarazData","script");})(window,document);</script></head>
// <body>
// <div id="booking" class="section">
// <div class="section-center">
// <div class="container">
// <div class="row">
// <div class="booking-form">
// <div class="form-header">
// <h1>Book a car</h1>
// </div>
// <form>
// <div class="row">
// <div class="col-sm-6">
// <div class="form-group">
// <span class="form-label">Name</span>
// <input class="form-control" type="text" placeholder="Enter your name">
// </div>
// </div>
// <div class="col-sm-6">
// <div class="form-group">
// <span class="form-label">Email</span>
// <input class="form-control" type="email" placeholder="Enter your email">
// </div>
// </div>
// </div>
// <div class="form-group">
// <span class="form-label">Phone</span>
// <input class="form-control" type="tel" placeholder="Enter your phone number">
// </div>
// <div class="form-group">
// <span class="form-label">Pickup Location</span>
// <input class="form-control" type="text" placeholder="Enter ZIP/Location">
// </div>
// <div class="form-group">
// <span class="form-label">Destination</span>
// <input class="form-control" type="text" placeholder="Enter ZIP/Location">
// </div>
// <div class="row">
// <div class="col-sm-5">
// <div class="form-group">
// <span class="form-label">Pickup Date</span>
// <input class="form-control" type="date" required>
// </div>
// </div>
// <div class="col-sm-7">
// <div class="row">
// <div class="col-sm-4">
// <div class="form-group">
// <span class="form-label">Hour</span>
// <select class="form-control">
// <option>1</option>
// <option>2</option>
// <option>3</option>
// <option>4</option>
// <option>5</option>
// <option>6</option>
// <option>7</option>
// <option>8</option>
// <option>9</option>
// <option>10</option>
// <option>11</option>
// <option>12</option>
// </select>
// <span class="select-arrow"></span>
// </div>
// </div>
// <div class="col-sm-4">
// <div class="form-group">
// <span class="form-label">Min</span>
// <select class="form-control">
// <option>05</option>
// <option>10</option>
// <option>15</option>
// <option>20</option>
// <option>25</option>
// <option>30</option>
// <option>35</option>
// <option>40</option>
// <option>45</option>
// <option>50</option>
// <option>55</option>
// </select>
// <span class="select-arrow"></span>
// </div>
// </div>
// <div class="col-sm-4">
// <div class="form-group">
// <span class="form-label">AM/PM</span>
// <select class="form-control">
// <option>AM</option>
// <option>PM</option>
// </select>
// <span class="select-arrow"></span>
// </div>
// </div>
// </div>
// </div>
// </div>
// <div class="form-btn">
// <button class="submit-btn">Book Now</button>
// </div>
// </form>
// </div>
// </div>
// </div>
// </div>
// </div>

// <script async src="https://www.googletagmanager.com/gtag/js?id=UA-23581568-13"></script>
// <script>
//   window.dataLayer = window.dataLayer || [];
//   function gtag(){dataLayer.push(arguments);}
//   gtag('js', new Date());

//   gtag('config', 'UA-23581568-13');
// </script>
// <script defer src="https://static.cloudflareinsights.com/beacon.min.js/vaafb692b2aea4879b33c060e79fe94621666317369993" integrity="sha512-0ahDYl866UMhKuYcW078ScMalXqtFJggm7TmlUtp0UlD4eQk0Ixfnm5ykXKvGJNFjLMoortdseTfsRT8oCfgGA==" data-cf-beacon='{"rayId":"79b248b68e7317a0","token":"cd0b4b3a733644fc843ef0b185f98241","version":"2023.2.0","si":100}' crossorigin="anonymous"></script>
// </body>
// </html>