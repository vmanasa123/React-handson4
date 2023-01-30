
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate("");
  const [array, setArray] = useState([]);
  const [formData, setformData] = useState({
    name: "",
    age: "",
    course: "",
    batch: "",
  });

  const handleOnChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  console.log(formData)
  console.log(array);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("working");

    let obj = {
      name: formData.name,
      age: formData.age,
      course: formData.course,
      batch: formData.batch,
    };

    const arr = array;
    arr.push(obj);

    setArray(arr);
    setformData({
      name: "",
      age: "",
      course: "",
      batch: "",
    });

    console.log(array);
    console.log(formData)
    navigate("/student", { state: array });
  };

  return (
    <div>
      <div className="form">

        <label className="block">   Name:
     <input type={"text"} name="name" value={formData.name} onChange={handleOnChange} />
        </label>

       <label className="block"> Age:
  <input type={"number"} name="age" value={formData.age} onChange={handleOnChange}/>
        </label>

        <label className="block"> Course:
   <input type={"text"} name="course" value={formData.course} onChange={handleOnChange}/>
        </label>

        <label className="block"> Batch:
   <input type={"text"} name="batch" value={formData.batch} onChange={handleOnChange}/>
        </label>

        <button> cancel </button>
        <button onClick={handleSubmit}>submit</button>
         
    
      </div>
    </div>

  );
};

export default Form;
