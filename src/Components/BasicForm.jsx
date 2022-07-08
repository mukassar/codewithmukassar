import React, { useState } from "react";
const BesicForm = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [data, setData] = useState([]);
  const submitForm = () => {
    if (fname && lname) {
      const newEntry = { id: new Date().getTime().toString(), fname, lname };
      setData([...data, newEntry]);
    } else {
      alert("Please Fill The Data");
    }
  };
  return (
    <div>
      <label htmlFor="fname">First Name</label>
      <input type="text" onChange={(e) => setFname(e.target.value)} />
      <label htmlFor="lname">Last Name</label>
      <input type="text" onChange={(e) => setLname(e.target.value)} />
      <button onClick={submitForm}>Submit</button>
      {data.map((item) => {
        return (
          <div>
            <p>{item.fname}</p>
            <p>{item.lname}</p>
          </div>
        );
      })}
    </div>
  );
};
export default BesicForm;
