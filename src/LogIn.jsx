// import { wait } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigator = useNavigate();

  const handleLogin = async () => {
    console.warn(email, password);
    if (email !== "" && password !== "") {
      let result = await fetch("http://localhost:5000/login", {
        method: "post",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      result = await result.json();
      console.log(result);
      if (result.email) {
        localStorage.setItem("user", JSON.stringify(result));
        let category = result.category;
        category === "farmer" ? (
          navigator("/producerdashboard")
        ) : category === "buyer" ? (
          navigator("/buyerdashboard")
        ) : (
          navigator("/processordashboard")
        )

      } else {
        alert("Entered Invalid Information ");
      }
    }
  };

  return (
    <>

      <div className="loginLayout flex justify-center h-screen font-Raleway bg-blue-200">


        <div className="w-5/12 bg-blue-700 flex justify-center items-center flex-col">
          
          <div>
            <p className="font-YoungSerif mx-14 my-4 text-2xl text-white"><span className="text-pink-500">Join us</span> and start weaving your digital journey through the <span className="text-pink-500">world of wool.</span></p>
          </div>

          <div className="flex justify-center">
            <img src="" alt="" />
          </div>
          <div>
            <img width={320} src="/login_asset.png" alt="" />
          </div>
        </div>

        <div className="w-6/12 pt-6 flex items-center justify-center">
          <div className="signup w-11/12">

            <div>
              <h1 className="font-Croissant text-5xl text-center mb-10 font-bold">Hello again,👋</h1>
            </div>

            <h1 className="font-Croissant text-center text-lg my-6 ">Ready to Dye into the World of Wool? 🌈</h1>
            <div className="input-form flex flex-col justify-center">
            <div className="flex justify-end">
              <div className="flex flex-col gap-6 w-11/12">
                <div>
                  <p className="font-semibold">Email: </p>
                  <input
                    className="mt-2 px-3 py-2 bg-gray-100 text-gray-700 w-10/12 rounded-lg"
                    type="email"
                    placeholder=" Enter email"
                    value={email}
                    onChange={(e) => {
                      setemail(e.target.value);
                    }}
                  ></input>
                </div>

                <div className=" w-11/12">
                  <p className="font-semibold">Password: </p>
                  <input
                    className="mt-2 px-3 py-2 bg-gray-100 text-gray-700 w-11/12 rounded-lg"
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => {
                      setpassword(e.target.value);
                    }}
                  />
                </div>
                
                <div className="w-11/12 mb-2">
                  <button className="bg-blue-600 p-4 text-white font-semibold w-11/12 rounded-xl hover:bg-blue-800" type="button" onClick={handleLogin}>
                    Log in
                  </button>
                </div>
              </div>
            </div>
            <div>
            
            <div className="flex flex-col text-center mt-3">
              <p className="mb-1">Not a registered user</p>
                <a className="cursor-pointer text-pink-500 hover:text-red-700"
                  onClick={() => {
                    navigator("/signup");
                  }}
                >
                  Click here to sign up
                </a>
            </div>
            </div>
            </div>
          </div>
        </div>

      </div>

    </>
  );
};

export default LogIn;
