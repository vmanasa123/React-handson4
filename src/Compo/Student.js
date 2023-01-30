
import { Link } from "react-router-dom";
function Student() {

  return (
    <>
      <ul className="line">
        <li>
          {" "}
          <Link to="/" className="link"> <h1>Home</h1>
            </Link>{" "} </li>
        <li>

          <Link to="/student" className="link">  {" "}
            <h1>Students</h1> </Link>{" "} </li>

        <li>
          {" "} <Link to="/contact" className="link"> {" "}
            <h1>ContactUs</h1>
          </Link> </li>

      </ul>

      <div id="title">
        <h2> Student Details </h2>
        <Link to="/student/form">
    <button className="btn"> <h2>Add new student </h2> </button> 
    </Link>

      </div>
      <div id="data">

        <table border={2}>
          <thead>
            <tr>
              <th><h3>Name</h3></th>
              <th><h3>Age</h3></th>
              <th><h3>Course</h3></th>
              <th><h3>Batch</h3></th>
              <th><h3>Change</h3></th>
            </tr>
          </thead>

          <tbody>
    
            <tr>
           <td>Biden</td> 
           <td>24</td>
           <td>MERN</td>
           <td>October</td>
           <td class="clr">Edit</td>
            </tr>

            <tr>
           <td>Sravani</td> 
           <td>23</td>
           <td>MERN</td>
           <td>August</td>
           <td class="clr">Edit</td>
            </tr>

            <tr>
           <td>Ramesh</td> 
           <td>26</td>
           <td>MERN</td>
           <td>November</td>
           <td class="clr">Edit</td>
            </tr>

            <tr>
            <td>Vidya</td> 
           <td>27</td>
           <td>MERN</td>
           <td>August</td>
           <td class="clr">Edit</td>
            </tr>
            
            <tr>
            <td>Rahul</td> 
           <td>23</td>
           <td>MERN</td>
           <td>November</td>
           <td class="clr">Edit</td>
            </tr>

            <tr>
            <td>Christ</td> 
           <td>25</td>
           <td>MERN</td>
           <td>October</td>
           <td class="clr">Edit</td>
            </tr>

          </tbody>
        </table>
      </div>
    </>
  );
}
export default Student;
