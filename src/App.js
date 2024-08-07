import './App.css';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
// import Footer from './Components/Footer';
import Findjobs from './Components/Findjobs';
import Employers from './Components/Employers';
import EmployersDashboard from './Adminpanel/EmployersDashboard';
import Blog from './Components/Blog';
import Candidateslist from './Components/Candidateslist';
import Adminhome from './Adminpanel/Adminhome';
import Companyprofile from './Adminpanel/Companyprofile';
import Post from './Adminpanel/Post';
import Managesection from './Adminpanel/Manage';
import Applicants from './Adminpanel/Applicants';
import Shortlist from './Adminpanel/Shortlist';
import Package from './Adminpanel/Package';
import Resume from './Adminpanel/Resume';
import Signup from './Components/Signup';
import LoginForm from './Components/Login';



function App() {

  return (
    <div className="App">

      {/* <ParentComponent/>  */}
       {/* <JobCards/> */}
      {/* <FilterComponent/> */}
      {/* <LoginForm/> */}
      {/* <Signup/> */}
      {/* <Example/> */}
        {/* <LoginForm/>
        <Signup/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="Findjobs" element={<Findjobs />} />
          <Route path="Employers" element={<Employers />} />
          <Route path="/Candidateslist" element={<Candidateslist />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="Companyprofile" element={<Companyprofile />} />
       <Route path="/Login" element={<LoginForm />} />
       <Route path="/Register" element={<Signup />} />


      {/* ADMIN ROUTERS */}
      <Route path="EmployersDashboard" element={<EmployersDashboard />} />
      <Route path="/Home" element={<Adminhome />} />
      <Route path="Post" element={<Post />} />
      <Route path="Managesection" element={<Managesection />} />
      <Route path="Applicants" element={<Applicants />} />
      <Route path="Shortlist" element={<Shortlist />} />
      <Route path="Package" element={<Package />} />
      <Route path="Resume" element={<Resume />} />
    </Routes> 
    </BrowserRouter > 
    </div> 
  );

}

export default App;