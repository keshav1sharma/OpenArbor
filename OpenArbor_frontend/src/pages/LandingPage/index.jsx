import React from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const LandingPagePage = () => {
  const navigate = useNavigate();
  
  


  return (
    <>
      <div className="bg-white-A700 flex flex-col font-publicsans sm:gap-10 md:gap-10 gap-[90px] items-center justify-start mx-auto w-full">
        <Header className="flex items-center justify-center md:px-5 w-full" />
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col items-center justify-start max-w-[1030px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
              <div className="flex flex-col gap-8 justify-start">
                <div className="flex md:flex-col flex-row md:gap-11 items-start justify-between w-full">
                  <Img
                    className="h-[61px] md:mt-0 mt-[66px] w-[61px]"
                    src="images/html5_100x100_icon.svg"
                    alt="html5"
                  />
                  <div className="flex flex-col gap-[30px] items-center justify-start">
                    <Text
                      className="sm:text-[40px] md:text-[46px] text-[50px] text-center text-gray-600 w-full"
                      size="txtMerriweatherBlack50"
                    >
                      Open Source LMS , For and By Web Developers
                    </Text>
                    <Text
                      className="leading-[35.00px] text-2xl md:text-[22px] text-center text-gray-601 sm:text-xl w-[78%] sm:w-full"
                      size="txtPublicSansRegular24"
                    >
                      "<u>Unlock the power of knowledge with our open-source learning management system!</u>"
                    </Text>
                  </div>
                </div>

                <Button onClick={()=>{
                  window.location.replace("https://keshav1sharma.github.io/Debug_Den/");
                } }
                    className="cursor-pointer leading-[normal] min-w-[221px] rounded-[35.5px] shadow-bs1 text-2xl md:text-[22px] text-center sm:text-xl tracking-[0.12px]"
                    color="indigo_900"
                    size="xl"
                  >
                    Go To Live Chat Rooms at Debug Den 👨🏻‍💻
                  </Button>

              </div>
              <Img
                className="h-[61px] md:mt-0 mt-[205px] w-[61px]"
                src="images/javascript_200x200_icon.svg"
                alt="javascript"
              />
            </div>
          </div>
          <div className="flex flex-col gap-5 items-center justify-start max-w-[1111px] mt-[162px] mx-auto md:px-5 w-full">
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
                    Latest Courses{" "}
                  </Text>
                  <Text
                    className="mt-[5px] text-2xl md:text-[22px] text-gray-601 sm:text-xl tracking-[0.12px]"
                    size="txtPublicSansRegular24"
                  >
                    Get started on latest courses
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
          </div>
          <div className="flex md:flex-col flex-row gap-[29px] items-start justify-start max-w-[1110px] mt-[100px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col gap-[50px] justify-start w-[66%] md:w-full">
              <List
                className="flex flex-col gap-[50px] items-center w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex sm:flex-col flex-row font-publicsans sm:gap-10 items-center justify-between ml-0.5 md:ml-[0] w-full">
                      <div className="flex sm:flex-1 flex-row gap-3.5 items-center justify-between w-[34%] sm:w-full">
                        <Img
                          className="h-[70px] md:h-auto rounded-[50%] w-[70px]"
                          src="images/avatar_male_100x100.svg"
                          alt="Male_avatar"
                        />
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-bluegray-600 text-lg"
                            size="txtPublicSansSemiBold18"
                          >
                            By Jivansh Tyagi 
                          </Text>
                          <Text
                            className="mt-[5px] text-bluegray-600 text-sm"
                            size="txtPublicSansLight14"
                          >
                            11 October, 2023
                          </Text>
                        </div>
                      </div>
                      
                    </div>
                    <Text
                      className="italic ml-0.5 md:ml-[0] mt-[30px] text-5xl sm:text-[38px] md:text-[44px] text-gray-600 tracking-[0.12px] w-full"
                      size="txtMerriweatherBoldItalic48"
                    >
                      Welcome to OpenArbor
                    </Text>
                    <Img
                      className="h-[390px] sm:h-auto ml-0.5 md:ml-[0] mt-[30px] object-cover rounded-[5px] w-full"
                      src="https://web-dev.imgix.net/image/FNkVSAX8UDTTQWQkKftSgGe9clO2/uZ3hQS2EPrA9csOgkoXI.png?auto=format&fit=max&w=1200&fm=auto"
                      alt="RectangleEleven"
                    />
                    <Text
                      className="leading-[30.00px] ml-0.5 md:ml-[0] mt-[30px] text-bluegray-900 text-lg w-full"
                      size="txtPublicSansLight18"
                    >
                      We all know that every person has his or her own desire to
                      do well i their work, but here we will tell you the interesting facts that will shock your collegues .
                      I want to
                      invite all of you to be the interesting person in the room.
                    </Text>
                    <div className="flex sm:flex-col flex-row font-publicsans gap-[50px] items-center justify-start mt-5 w-[65%] md:w-full">
                      <div className="flex flex-row gap-2.5 items-center justify-start w-[34%] sm:w-full">
                        <Button
                          className="flex h-[55px] items-center justify-center rounded-[50%] w-[55px]"
                          color="light_blue_50"
                          size="md"
                        >
                          <Img
                            className="h-[30px]"
                            src="images/img_clock.svg"
                            alt="clock"
                          />
                        </Button>
                        <Text
                          className="text-black-900 text-sm"
                          size="txtPublicSansLight14Black900"
                        >
                          5 minutes ago
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2.5 items-center justify-center w-[24%] sm:w-full">
                        <Button
                          className="flex h-[55px] items-center justify-center rounded-[50%] w-[55px]"
                          color="lime_50"
                          size="md"
                        >
                          <Img
                            className="h-[30px]"
                            src="images/img_checkmark.svg"
                            alt="checkmark"
                          />
                        </Button>
                        <Text
                          className="text-black-900 text-sm"
                          size="txtPublicSansLight14Black900"
                        >
                          12 Like
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2.5 items-center justify-between w-[23%] sm:w-full">
                        <Button
                          className="flex h-[55px] items-center justify-center rounded-[50%] w-[55px]"
                          color="red_50"
                          size="md"
                        >
                          <Img
                            className="h-[30px]"
                            src="images/img_location.svg"
                            alt="location"
                          />
                        </Button>
                        <Text
                          className="text-black-900 text-sm"
                          size="txtPublicSansLight14Black900"
                        >
                          Share
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="common-pointer cursor-pointer flex items-center justify-center min-w-[255px] mt-5 pl-7 py-[25px]"
                      onClick={() => navigate("/what-is-css")}
                      rightIcon={
                        <Img
                          className="h-[25px] mt-6 mb-[23px] ml-[19px] mr-[29px]"
                          src="images/img_arrowright.svg"
                          alt="arrow_right"
                        />
                      }
                      shape="round"
                      color="indigo_900_67"
                    >
                      <div className="font-bold font-publicsans leading-[normal] sm:pl-5 text-left text-lg tracking-[0.12px]">
                        Continue Reading
                      </div>
                    </Button>
                  </div>
                </div>
              </List>
              <div className="flex flex-row items-center justify-end md:ml-[0] ml-[450px] w-[29%] md:w-full">
                <Text
                  className="bg-indigo-900 flex h-10 items-center justify-center rounded-[50%] text-center text-lg text-white-A700 w-10"
                  size="txtPublicSansRegular18"
                >
                  1
                </Text>
                <Text
                  className="bg-white-A700 flex h-10 items-center justify-center ml-5 rounded-[50%] text-center text-indigo-900 text-lg w-10"
                  size="txtPublicSansRegular18Indigo900"
                >
                  2
                </Text>
                <div className="flex flex-row gap-[15px] items-start justify-between ml-10 w-[34%]">
                  <Text
                    className="text-indigo-900 text-lg"
                    size="txtPublicSansLight18Indigo900"
                  >
                    Next
                  </Text>
                  <Img
                    className="h-4 mt-[3px] w-4"
                    src="images/img_arrowright.svg"
                    alt="arrowright Three"
                  />
                </div>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col gap-[50px] items-start justify-start w-[32%] md:w-full">
              
              <div className="flex flex-col font-merriweather items-start justify-start w-full">
                <Text
                  className="text-gray-600 text-lg"
                  size="txtMerriweatherBold18"
                >
                  Tranding Blog
                </Text>
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[200px] items-center justify-start mt-5 rounded-[5px] w-full"
                  style={{ backgroundImage: "url('images/img_bloghead.png')" }}
                >
                  <div
                    className="bg-cover bg-no-repeat flex flex-col gap-2.5 h-[200px] items-start justify-end p-[26px] sm:px-5 rounded-[5px] w-full"
                    style={{ backgroundImage: "url('images/img_title.png')" }}
                  >
                    <Text
                      className="italic ml-3.5 md:ml-[0] mt-[71px] text-lg text-white-A700 w-[91%] sm:w-full"
                      size="txtMerriweatherBoldItalic18"
                    >
                      Consistent way of working to train yourself
                    </Text>
                    <Text
                      className="ml-3.5 md:ml-[0] text-sm text-white-A700"
                      size="txtPublicSansLight14WhiteA700"
                    >
                      5 minutes ago
                    </Text>
                  </div>
                </div>
                <List
                  className="flex flex-col gap-5 items-center mt-[25px] w-full"
                  orientation="vertical"
                >
                  <div className="flex flex-1 flex-row gap-[15px] items-center justify-between w-full">
                    <Img
                      className="h-24 md:h-auto object-cover rounded-[5px] w-24"
                      src="images/img_rectangle14.png"
                      alt="RectangleFourteen"
                    />
                    <div className="flex flex-col gap-2.5 items-start justify-start">
                      <Text
                        className="italic text-gray-600 text-lg w-full"
                        size="txtMerriweatherBoldItalic18Gray600"
                      >
                        Consistent way of working to train yourself
                      </Text>
                      <Text
                        className="text-bluegray-600 text-sm"
                        size="txtPublicSansLight14"
                      >
                        5 minutes ago
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-row gap-[15px] items-center justify-between w-full">
                    <Img
                      className="h-24 md:h-auto object-cover rounded-[5px] w-24"
                      src="images/img_rectangle14_96X96.png"
                      alt="RectangleFourteen One"
                    />
                    <div className="flex flex-col gap-2.5 items-start justify-start">
                      <Text
                        className="italic text-gray-600 text-lg w-full"
                        size="txtMerriweatherBoldItalic18Gray600"
                      >
                        Consistent way of working to train yourself
                      </Text>
                      <Text
                        className="text-bluegray-600 text-sm"
                        size="txtPublicSansLight14"
                      >
                        5 minutes ago
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-row gap-[15px] items-center justify-between w-full">
                    <Img
                      className="h-24 md:h-auto object-cover rounded-[5px] w-24"
                      src="images/img_rectangle14_1.png"
                      alt="RectangleFourteen Two"
                    />
                    <div className="flex flex-col gap-2.5 items-start justify-start">
                      <Text
                        className="italic text-gray-600 text-lg w-full"
                        size="txtMerriweatherBoldItalic18Gray600"
                      >
                        Consistent way of working to train yourself
                      </Text>
                      <Text
                        className="text-bluegray-600 text-sm"
                        size="txtPublicSansLight14"
                      >
                        5 minutes ago
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-row gap-[15px] items-center justify-between w-full">
                    <Img
                      className="h-24 md:h-auto object-cover rounded-[5px] w-24"
                      src="images/img_rectangle14_2.png"
                      alt="RectangleFourteen Three"
                    />
                    <div className="flex flex-col gap-2.5 items-start justify-start">
                      <Text
                        className="italic text-gray-600 text-lg w-full"
                        size="txtMerriweatherBoldItalic18Gray600"
                      >
                        Consistent way of working to train yourself
                      </Text>
                      <Text
                        className="text-bluegray-600 text-sm"
                        size="txtPublicSansLight14"
                      >
                        5 minutes ago
                      </Text>
                    </div>
                  </div>
                </List>
              </div>
              
            </div>
          </div>
          
          <Footer className="bg-gray-600 flex items-center justify-center mt-[129px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default LandingPagePage;
