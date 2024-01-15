import React,{useContext , useState} from "react";
import { Link } from "react-router-dom";

import { Button, Img, Line, Text } from "components";

let isLoggedIn = JSON.parse(localStorage.getItem("login"));
let username = JSON.parse(localStorage.getItem("username"));


function LoggedInComponent() {

  return <p>Welcome {username}!</p>;
  }
  
  function LoggedOutComponent() {
  return <div>
    <Link to="/signup">
          <Img
            className="ml-[2rem] sm:hidden mb-0.5 md:ml-[0] ml-[4px] w-[50px]"
            src="../images/Register_icon.svg"
            alt="register"

          />
          </Link>
          <Link to="/signup">
          <Text
              className="ml-[1rem] text-indigo-900 text-lg tracking-[0.12px]"
              size="txtPublicSansBold18"
            >
              Register
            </Text>
            </Link>
  </div>;
  }



const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-center p-6 sm:px-5 w-full">
          <div className="header-row mt-0.5 mb-[5px]">
            <div className="flex flex-row gap-3.5 items-center justify-center">
              <Img className="h-6 w-6" src="../images/code-icon-100x100.svg" alt="edit" />
              <Link to="/"
                className="text-2xl md:text-[22px] text-gray-600 sm:text-xl uppercase"
                size="txtNunitoSansExtraBold24"
              >
                OpenArbor
              </Link>
            </div>
            <div className="mobile-menu">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="flex md:flex-1 sm:flex-col flex-row sm:hidden items-start justify-start md:ml-[0] ml-[211px] mr-[100px] w-[39%] md:w-full">
            <div className="flex flex-col items-center justify-center w-1/5 sm:w-full">
              <Link to="/"
                className="text-indigo-900 text-lg tracking-[0.12px]"
                size="txtPublicSansBold18Indigo900"
              >
                Home
              </Link>
              <Line className="bg-indigo-900 h-px mt-1 w-[64%]" />
            </div>
            
            <Link to="/all"
              className="ml-[29px] text-indigo-900 text-lg tracking-[0.12px]"
              size="txtPublicSansBold18"
            >
              Courses
            </Link>
            <Link to={isLoggedIn ? "/" : "/login"}
              className="ml-[30px] text-indigo-900 text-lg tracking-[0.12px]"
              size="txtPublicSansBold18"
              onClick={() => {isLoggedIn ? isLoggedIn = false : isLoggedIn = true; 
              localStorage.setItem("login", JSON.stringify(isLoggedIn));
              localStorage.setItem("username", JSON.stringify(""));
            }}
            >
              {isLoggedIn ? "Logout" : "Login"}
            </Link>
            
            {isLoggedIn ? (
            <Link to="/">
            <Text
              className="ml-[29px] text-indigo-900 text-lg tracking-[0.12px]"
              size="txtPublicSansBold18"
            >
            <button onClick={()=>{
              window.location.replace("https://keshav1sharma.github.io/Debug_Den/");
            }}>
            DebugDen 👨🏻‍💻
            </button>
            
            </Text>
            </Link>
            ):(
            <Text
              className="ml-[29px] text-indigo-900 text-lg tracking-[0.12px]"
              size="txtPublicSansBold18"
            >
              <button onClick={()=>{
                alert("Only Registered Users can join the DebugDen. Please Login or Register to continue.");
              }}>DebugDen 👨🏻‍💻</button>
            </Text>)}
          </div>

          
          {isLoggedIn ? (
            <LoggedInComponent />
          ) : (
            <LoggedOutComponent />
          )}


        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
