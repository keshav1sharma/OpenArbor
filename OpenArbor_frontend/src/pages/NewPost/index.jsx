import React from "react";

import { Button, Img, Line, List, Text , Input } from "components";
import Footer from "components/Footer";
import Header from "components/Header";
import ProjectRoutes from "Routes";

import { addCardData , addBlogData } from "BlogsData";
import { func } from "prop-types";

const data = JSON.parse(localStorage.getItem("cards")) || [];

function createNewBlog(){

    let link = ("/post/"+ data.length);
    let img = document.getElementById("newPoster").value;
    let heading = document.getElementById("newHeading").value;
    let author = document.getElementById("newAuthor").value;
    let id =  data.length.toString();
    let intro = document.getElementById("newIntroduction").value;
    let quote = document.getElementById("newQuote").value;
    let history = document.getElementById("newHistory").value;
    let blogImg1 = document.getElementById("newImg1").value;
    let blogImg2 = document.getElementById("newImg2").value;
    let limitation = document.getElementById("newLimitations").value;
    let advantage = document.getElementById("newAdvantages").value;

    if (link === "" || img === "" || heading ==="" || author === "" || id ==="" || intro ===""||
      quote==="" || history==="" || blogImg1 ==="" || blogImg2 ==="" || limitation ===""||
      advantage ==="")
      {
        alert("Fill all the fields");
      }
      else{
    addCardData(id,link , img, heading ,author);
    addBlogData(id ,link, img, heading, author , intro , quote, history, blogImg1, blogImg2, limitation ,advantage);
    window.location.href = '/all';
    }
}   



function TodayDate()
{

    // Date object
    const date = new Date();

    let currentDay= String(date.getDate()).padStart(2, '0');

    let currentMonth = String(date.getMonth()+1).padStart(2,"0");

    let currentYear = date.getFullYear();

    // we will display the date as DD-MM-YYYY 

    let currentDate = `${currentDay}-${currentMonth}-${currentYear}`;

    return <p> {currentDate} </p> ;
}


const newPost = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-publicsans gap-10 items-center justify-start mx-auto w-full">
        <Header className="flex items-center justify-center md:px-5 w-full" />
        <div className="mt-[100px] flex flex-col items-center justify-start w-full">
          <div className="flex flex-col gap-[46px] items-center justify-start max-w-[1330px] mx-auto md:px-5 w-full">
            <div className="flex flex-col relative w-full">
              
              <div className=" bg-white-A700 flex flex-col items-center justify-end mt-[-132px] mx-auto p-12 md:px-10 sm:px-5 rounded-[25px] shadow-bs3 w-[84%] z-[1]">
                <div className="flex flex-col items-start justify-start w-[97%] md:w-full">
                  
                  <Text
                    className="italic mt-[27px] text-5xl sm:text-[38px] md:text-[44px] text-gray-600 tracking-[0.12px] w-full"
                    size="txtMerriweatherBoldItalic48"
                  >
                   Create a new Post :
                   <br></br>
                   

                   <Text
                  className="mt-[42px] text-2xl md:text-[22px] text-bluegray-600 sm:text-xl"
                  size="txtMerriweatherBold24Bluegray600"
                >
                  Poster URL : 
                </Text>        
                <input type="text" id="newPoster" placeholder="https://website/img/bootstrap-stack.png" ></input>
                   <br></br><br></br>
                   Heading :
                  </Text>
                  <br></br>
                  <textarea id="newHeading" className="w-[50rem]" placeholder="Your eye catching Heading here ..."></textarea>
                  <div className="flex sm:flex-col flex-row font-publicsans sm:gap-10 items-center justify-between mt-[50px] w-full">
                    <div className="flex sm:flex-1 flex-row gap-3.5 items-center justify-between w-[31%] sm:w-full">
                      <Img
                        className="h-[70px] md:h-auto rounded-[50%] w-[70px]"
                        src="images/img_ellipse5.png"
                        alt="EllipseFive"
                      />
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-2xl md:text-[22px] text-bluegray-600 sm:text-xl"
                          size="txtPublicSansSemiBold24"
                        >
                          By <textarea id="newAuthor" className="h-[5rem]" placeholder="Author Name"></textarea>
                        </Text>
                        <Text
                          className="mt-[5px] text-bluegray-600 text-sm"
                          size="txtPublicSansLight14"
                        >
                          {
                            <TodayDate />
                          }
                        </Text>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-[74%] md:w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="leading-[35.00px] text-bluegray-600 text-lg w-full"
                  size="txtPublicSansLight18Bluegray600"
                >
                 Introduction: 

                </Text>
                <textarea id="newIntroduction" className="w-[50rem] h-[10rem]" placeholder="Write a brief introduction about the blog">
                </textarea>
                <div className="flex md:flex-col flex-row gap-5 items-start justify-between mt-[50px] w-[97%] md:w-full">
                  <Img
                    className="h-10 w-10"
                    src="images/img_trash.svg"
                    alt="trash"
                  />
                  <div className="flex flex-col gap-[15px] items-start justify-start">
                    <Text
                      className="italic text-4xl sm:text-[32px] md:text-[34px] text-bluegray-600 w-full"
                      size="txtMerriweatherBoldItalic36"
                    >
                        Quote : 
                    </Text>
                    <textarea id="newQuote" className="w-[50rem]" placeholder="Show your creatitvity here"></textarea>
                    <Text
                      className="text-bluegray-600 text-lg"
                      size="txtPublicSansLight18Bluegray600"
                    >
                      
                    </Text>
                  </div>
                </div>
                
                
                <Text
                  className="mt-[42px] text-2xl md:text-[22px] text-bluegray-600 sm:text-xl"
                  size="txtMerriweatherBold24Bluegray600"
                >
                  History
                </Text>
                <textarea id="newHistory" className="w-[60rem] h-[10rem]" placeholder="Write Essential History about the discussed Technology"></textarea>
                <Text
                  className="mt-[42px] text-2xl md:text-[22px] text-bluegray-600 sm:text-xl"
                  size="txtMerriweatherBold24Bluegray600"
                >
                  Image 1 URL : 
                </Text>        
                <input type="text" id="newImg1" placeholder="https://website/img/bootstrap-stack.png"></input>
                <Text
                  className="mt-[42px] text-2xl md:text-[22px] text-bluegray-600 sm:text-xl"
                  size="txtMerriweatherBold24Bluegray600"
                >
                  Image 2 URL : 
                </Text>
                <input type="text" id="newImg2" placeholder="https://website/img/bootstrap-stack.png"></input>
                <div className="flex sm:flex-col flex-row gap-[29px] items-center justify-between mt-[50px] rounded-[15px] w-full">
                  <Img
                    className="h-[334px] md:h-auto object-cover rounded-[15px]"
                    src="images/img_rectangle23.png"
                    alt="RectangleTwentyThree"
                  />
                  <Img
                    className="h-[334px] md:h-auto object-cover rounded-[15px]"
                    src="images/img_rectangle24.png"
                    alt="RectangleTwentyFour"
                  />
                </div>
                <Text
                  className="mt-[42px] text-2xl md:text-[22px] text-bluegray-600 sm:text-xl"
                  size="txtMerriweatherBold24Bluegray600"
                >
                Limitations 
                </Text>
                <textarea id="newLimitations" className="w-[60rem] h-[15rem]" placeholder="e.g. 
                Learning Curve: 
                React can have a steep learning curve for beginners, especially if they are not already familiar with JavaScript, JSX, and modern front-end development concepts."  ></textarea>
                

                <Text
                  className="mt-[42px] text-2xl md:text-[22px] text-bluegray-600 sm:text-xl"
                  size="txtMerriweatherBold24Bluegray600"
                >
                Advantages 
                </Text>
                <textarea id="newAdvantages" className="w-[60rem] h-[15rem]" placeholder="e.g. Component-Based Architecture
                 ,Virtual DOM"></textarea>
                <Text
                  className="leading-[35.00px] mt-5 text-bluegray-600 text-lg w-full"
                  size="txtPublicSansLight18Bluegray600"
                >
                  Thank you for reading so far , Please show your love to the article.
                </Text>
              </div>
              
              <Button onClick={()=> {
                    createNewBlog();
                    

              } }
                    className="cursor-pointer leading-[normal] min-w-[221px] rounded-[35.5px] shadow-bs1 text-2xl md:text-[22px] text-center sm:text-xl tracking-[0.12px]"
                    color="indigo_900"
                    size="3xl"
                  >
                    Post
                  </Button>

            </div>
          </div>
          
          <Footer className="bg-gray-600 flex items-center justify-center mt-[100px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default newPost;
