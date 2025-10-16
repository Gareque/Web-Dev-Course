import React, { useState } from "react";

function App() {
  // Previous way of doing it:
  //  const [firstName, setFirstName] = useState("");
  //  const [secName, setSecName] = useState("");
  //
  //  function name1() {
  //    console.log(event.target.value);
  //    setFirstName(event.target.value);
  //  }
  //
  //  function name2() {
  //    console.log(event.target.value);
  //    setSecName(event.target.value);
  //  }

  // Expressive way of doing this:
  //function handleChange(event) {
  //  const newValue = event.target.value;
  //  const inputName = event.target.name;
  //
  //  setFullName((prevValue) => {
  //    if (inputName === "fName") {
  //      return {
  //        fName: newValue,
  //        lName: prevValue.lName,
  //      };
  //    } else if (inputName === "lName") {
  //      return {
  //        fName: prevValue.fName,
  //        lName: newValue,
  //      };
  //    }
  //  });
  //}

  // More efficient way:
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
  });

  function handleChange(event) {
    const { value, name } = event.target;

    setFullName((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName,
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value,
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          onChange={handleChange}
          name="fName"
          placeholder="First Name"
          value={fullName.fName}
        />
        <input
          onChange={handleChange}
          name="lName"
          placeholder="Last Name"
          value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
