import './App.css';
// import Newfile from './newfile';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
// import Signuppage from './signuppage';
// import Home from './home';
import FormikForm from './FormikForm';
// import HomePage from './formapi/homepage';
// import EmployeeForm from './formapi/employeeform';
// import EmployeeData from './formapi/employeedata';

import Form from './formik/form';

function App() {
  return (
    
   <>
   < Form />

   <BrowserRouter>
   {/* <FormikForm /> */}
   {/* <HomePage /> */}
   <Routes>
    {/* <Route index element={<EmployeeData/>}/> */}
    {/* <Route path='employeeform' element={<EmployeeForm/>}></Route> */}
    {/* <Route path='employeedata' element={<EmployeeData/>}></Route> */}

    {/* <Route index element={<Newfile/>}/>
    <Route path='signup' element={<Signuppage/>}></Route>
    <Route path='home' element={<Home/>}></Route>
    <Route path='newfile' element={<Newfile/>}></Route> */}



    </Routes>
    </BrowserRouter>
   </>
  )
}

export default App;
