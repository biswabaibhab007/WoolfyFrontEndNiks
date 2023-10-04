import React, { useState ,useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import "./SignUp.css";
const SignUp = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [category, setcategory] = useState("");
  const navigator = useNavigate();

  //  ------------ Already SignUp --------------
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigator("/");
    }
  });

  const collectData = async () => {
    console.log("this is from collection ");
    //  ----------- ------ MongoDb connection -----------------
    if (name !== "" && email !== "" && password !== "" && category!="") {
      let result = await fetch("http://localhost:5000/signup", {
        method: "post",
        body: JSON.stringify({ name, email, password , category }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      result = await result.json();

      // --------------------Local Storage------------------

      localStorage.setItem("user", JSON.stringify(result));

      //  ---------------- Render to Home pagee -------------

      navigator("/");
    } else {
      alert("please Enter all required fields ");
      navigator("/signup");
    }
  };

  return (
    <div className="signup mt-2 px-6 font-serif flex">
    <div className="w-4/12 h-screen bg-slate-200">
      <img className="px-6 py-4" src="" alt="wOOlFY" />
      <p className="px-6">Joining our vibrant community is as easy as pie (or a warm, woolly blanket). </p> 
      <p className="px-6 mt-2">Sign up today</p>
      <div>
        <img className="p-2" src="" alt="random img" />
      </div>
    </div>
    <div>
      <h1 className="text-center mb-3 text-4xl">Fill the details</h1>
      <div className="flex flex-col p-2 bg-blue-200">
        
        <div className="flex flex-col">
          <div className="flex justify-center  ">
            <p className="w-20 px-3 py-2 bg-gray-100  flex items-center">Name:</p>
            <input
              className="px-3 py-2 bg-gray-100 text-gray-700"
              type="text"
              placeholder=" Enter name"
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
            ></input>
          </div>

          <div className="flex justify-center  ">
            <p className="w-20 px-3 py-2 bg-gray-100 flex items-center">Email:</p>
            <input
              className="px-3 py-2 bg-gray-100 text-gray-700"
              type="email"
              placeholder=" Enter email"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
            ></input>
          </div>

        <div className="flex justify-center  ">
        <p className="w-20 px-3 py-2 bg-gray-100 flex items-center">Password: </p>
          <input
            className="px-3 py-2 bg-gray-100 text-gray-700"
            type="password"
            placeholder=" Enter password"
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
        </div>

        <p>
          Farmer:
          <input type="radio" value="Farmer" name="categories"  onClick={()=>{setcategory("farmer")}}/>
          Processor:
          <input type="radio" value="processor" name="categories" onClick={()=>{setcategory("processor")}} />
          Buyer:
          <input type="radio" value="buyer" name="categories" onClick={()=>{setcategory("buyer")}} />
        </p>
        <button type="button" onClick={collectData}>
          Sign Up
        </button>
        </div>

        <p>  Already have an account ?? <a onClick={()=>{navigator("/login")}}>Click Here to login</a> </p>
      </div>
    </div>

    </div>
  );
};

export default SignUp;
