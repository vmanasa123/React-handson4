
 import { BrowserRouter, Routes, Route } from "react-router-dom";
 import Home from '../Compo/Home'
 import Student from "../Compo/Student";
 import Contact from '../Compo/Contact';
 import Form from "../Compo/Form";
 
 function Root(){
   return(
    <BrowserRouter>
    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/student" element={<Student/>}/>
     <Route path="/contact" element={<Contact/>}/>
     <Route path="/student/form" element={<Form/>}/>
 
    </Routes>
    
    </BrowserRouter>
   )
 }
 export default Root;