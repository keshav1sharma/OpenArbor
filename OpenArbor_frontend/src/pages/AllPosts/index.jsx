import React from "react";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import {cardDataArray , addCardData } from "BlogsData";

import { Button, Img, Input, Line, List, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";


// for(let i=0;i<cardDataArray.length;i++)
// {
//     console.log(cardDataArray[i] );
// }

const AllPosts = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-publicsans sm:gap-10 md:gap-10 gap-[90px] items-center justify-start mx-auto w-full">
        <Header className="flex items-center justify-center md:px-5 w-full" />
        
      {/* Fixed Posts  */}

        <div className="flex flex-col items-center justify-start w-full">
          
          <div className="flex flex-col gap-5 items-center justify-start max-w-[1111px] mx-auto md:px-5 w-full">
            <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <div className="flex sm:flex-1 sm:flex-col flex-row gap-[18px] items-center justify-between w-[39%] sm:w-full">
                <Button
                  className="flex h-[76px] items-center justify-center w-[76px]"
                  shape="circle"
                  color="gray_300"
                  size="md"
                >
                  <Img
                    className="h-[50px]"
                    src="images/coding_icon_150x150.svg"
                    alt="microphone"
                  />
                </Button>
                <div className="flex flex-col items-start justify-start">
                  <Text
                    className="ml-0.5 md:ml-[0] text-4xl sm:text-[32px] md:text-[34px] text-gray-600"
                    size="txtMerriweatherBlack36"
                  >
                    All Courses{" "}
                  </Text>
                  <Text
                    className="mt-[5px] text-2xl md:text-[22px] text-gray-601 sm:text-xl tracking-[0.12px]"
                    size="txtPublicSansRegular24"
                  >
                    View all the courses here
                  </Text>
                </div>
              </div>
              
            </div>
            <List
              className="sm:flex-col flex-row gap-[22px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center w-full"
              orientation="horizontal"
            >
              <Link to="/what-is-html">
              <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[13px] rounded-[5px] shadow-bs2 w-full">
                <div className="flex flex-col gap-[15px] items-center justify-start my-[7px] rounded-[5px] w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[207px] items-center justify-start p-[63px] md:px-10 sm:px-5 rounded-[5px] w-full"
                    style={{
                      backgroundImage: "url('images/html_poster.png')",
                    }}
                  >
                    
                  </div>
                  
                  <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                    <Text
                      className="text-base text-gray-600 w-full"
                      size="txtMerriweatherBold16"
                    >
                      An Overview of HTML: The Backbone of Web Development
                    </Text>
                    <Text
                      className="text-bluegray-600 text-sm"
                      size="txtPublicSansLight14"
                    >
                      By Khushboo Garg
                    </Text>
                  </div>
                 
                </div>
              </div>
              </Link>
              
              <Link to="/what-is-css" >
              <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[13px] rounded-[5px] shadow-bs2 w-full">
                <div className="flex flex-col gap-[15px] items-center justify-start my-[7px] rounded-[5px] w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[207px] items-center justify-start p-[63px] md:px-10 sm:px-5 rounded-[5px] w-full"
                    style={{
                      backgroundImage: "url('images/css_poster.png')",
                    }}
                  >
                    
                  </div>
                  
                  <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                    <Text
                      className="text-base text-gray-600 w-full"
                      size="txtMerriweatherBold16"
                    >
                      Cascading Style Sheets (CSS) : Transforming Web Design ...
                    </Text>
                    <Text
                      className="text-bluegray-600 text-sm"
                      size="txtPublicSansLight14"
                    >
                      By Khushboo Garg
                    </Text>
                  </div>
                  
                </div>
              </div>
              </Link>

              <Link to="/what-is-react" >
              <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[13px] rounded-[5px] shadow-bs2 w-full">
                <div className="flex flex-col gap-[15px] items-center justify-start my-[7px] rounded-[5px] w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[207px] items-center justify-start p-[63px] md:px-10 sm:px-5 rounded-[5px] w-full"
                    style={{
                      backgroundImage: "url('images/react_poster.png')",
                    }}
                  >
                    
                  </div>
                  <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                    <Text
                      className="text-base text-gray-600 w-full"
                      size="txtMerriweatherBold16"
                    >
                      React JS : How it changed the internet
                    </Text>
                    <Text
                      className="text-bluegray-600 text-sm"
                      size="txtPublicSansLight14"
                    >
                      By Jivansh Tyagi 

                    </Text>
                    
                  </div>
                </div>
              </div>
              </Link>
              <Link to="/what-is-bootstrap" >
              <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[13px] rounded-[5px] shadow-bs2 w-full">
                <div className="flex flex-col gap-[15px] items-center justify-start my-[7px] rounded-[5px] w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[207px] items-center justify-start p-[63px] md:px-10 sm:px-5 rounded-[5px] w-full"
                    style={{
                      backgroundImage: "url('https://getbootstrap.com/docs/5.3/assets/img/bootstrap-icons.png')",
                    }}
                  >
                    
                  </div>
                  <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                    <Text
                      className="text-base text-gray-600 w-full"
                      size="txtMerriweatherBold16"
                    >
                      Bootstrap : The saviour for Front-end Developers
                    </Text>
                    <Text
                      className="text-bluegray-600 text-sm"
                      size="txtPublicSansLight14"
                    >
                      By Jivansh Tyagi
                    </Text>
                  </div>
                </div>
              </div>
              </Link>
            </List>
            {/* Dynamic Posts  */}
            <div className="flex flex-col gap-5 items-center justify-start max-w-[1111px] mx-auto md:px-5 w-full">
            <List
              className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center w-full"
              orientation="horizontal"
            >
              {cardDataArray.map((card, index) => (
                <Link to={`${card.link}`} key={index}>
                  <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[13px] rounded-[5px] shadow-bs2 w-full">
                    <div className="flex flex-col gap-[15px] items-center justify-start my-[7px] rounded-[5px] w-full">
                      <div
                        className="bg-cover bg-no-repeat flex flex-col h-[207px] items-center justify-start p-[63px] md:px-10 sm:px-5 rounded-[5px] w-full"
                        style={{
                          backgroundImage: `url('${card.img}')`,
                        }}
                      >
                        {/* ... Additional content for the card ... */}
                      </div>
                      <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                        <Text
                          className="text-base text-gray-600 w-full"
                          size="txtMerriweatherBold16"
                        >
                          {card.heading}
                        </Text>
                        <Text className="text-bluegray-600 text-sm" size="txtPublicSansLight14">
                          By {card.author}
                        </Text>
                      </div>
                    </div>
                  </div>
                </Link>
                ))}
            </List>
            </div>

            
            

          </div>
          
        </div>
       
       
       
       
      <Footer className="bg-gray-600 flex items-center justify-center mt-[100px] md:px-5 w-full" />

      </div>
    </>
  );
};

export default AllPosts;
