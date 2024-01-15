import React from "react";

import { Button, Img, Line, List, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const bootstrapPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-publicsans gap-10 items-center justify-start mx-auto w-full">
        <Header className="flex items-center justify-center md:px-5 w-full" />
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col gap-[46px] items-center justify-start max-w-[1330px] mx-auto md:px-5 w-full">
            <div className="flex flex-col relative w-full">
              <Img
                className="h-[500px] mx-auto object-cover rounded-[25px] w-full"
                src="images/bootstrap_poster.png"
                alt="RectangleTwenty"
              />
              <div className="bg-white-A700 flex flex-col items-center justify-end mt-[-132px] mx-auto p-12 md:px-10 sm:px-5 rounded-[25px] shadow-bs3 w-[84%] z-[1]">
                <div className="flex flex-col items-start justify-start w-[97%] md:w-full">
                  
                  <Text
                    className="italic mt-[27px] text-5xl sm:text-[38px] md:text-[44px] text-gray-600 tracking-[0.12px] w-full"
                    size="txtMerriweatherBoldItalic48"
                  >
                    Bootstrap : The saviour for Front-end Developers
                  </Text>
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
                          By Khushboo Garg
                        </Text>
                        <Text
                          className="mt-[5px] text-bluegray-600 text-sm"
                          size="txtPublicSansLight14"
                        >
                          10 October, 2023
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="border border-pink-300 border-solid cursor-pointer flex items-center justify-center min-w-[191px] sm:mt-0 my-1"
                      leftIcon={
                        <Img
                          className="h-[30px] ml-[29px] mr-2.5 my-4"
                          src="images/img_signal.svg"
                          alt="signal"
                        />
                      }
                      shape="round"
                      color="white_A700"
                      size="2xl"
                    >
                      <div className="font-medium leading-[normal] text-left text-lg">
                        Share Now
                      </div>
                    </Button>
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
                  Bootstrap is a powerful and widely used front-end framework that
                   revolutionized web development. It provides a comprehensive set of tools,
                    pre-designed components, and a responsive grid system to simplify the process
                    of building stylish, responsive, and feature-rich web applications and
                    websites. Developed by Twitter and open-sourced, Bootstrap has become
                    an industry standard, empowering developers to create visually appealing
                    and user-friendly interfaces with ease. Whether you're a seasoned web 
                    developer or just starting out, Bootstrap's versatility and extensive 
                    documentation make it a go-to choice for crafting modern and responsive
                    web experiences. In this introduction, we'll explore the key features and
                    benefits of Bootstrap, highlighting its importance in the world of web
                    development.

                </Text>
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
                    Using Bootstrap is like buying a fancy cake mix and then calling
                     yourself a master chef. Just sprinkle some CSS sugar, and voila, 
                     you're a web designer extraordinaire! 🍰😄
                    </Text>
                    <Text
                      className="text-bluegray-600 text-lg"
                      size="txtPublicSansLight18Bluegray600"
                    >
                      ChatGPT
                    </Text>
                  </div>
                </div>
                
                <Text
                  className="leading-[35.00px] mt-2.5 text-bluegray-600 text-lg w-full"
                  size="txtPublicSansLight18Bluegray600"
                >
                </Text>
                <Text
                  className="mt-[42px] text-2xl md:text-[22px] text-bluegray-600 sm:text-xl"
                  size="txtMerriweatherBold24Bluegray600"
                >
                History 
                </Text>
                <Text
                  className="leading-[35.00px] mt-5 text-bluegray-600 text-lg w-full"
                  size="txtPublicSansLight18Bluegray600"
                >

                Bootstrap is a popular open-source front-end framework that was 
                originally created by Twitter developers Mark Otto and Jacob Thornton.
                 It was first released in August 2011. The framework has an interesting
                  history, with several significant milestones  
                  <br></br>
                  

                </Text>

                <Text
                  className="leading-[35.00px] mt-5 text-bluegray-600 text-lg w-full"
                  size="txtPublicSansLight18Bluegray600"
                >

                Twitter's Internal Project: Bootstrap began as an internal project at 
                Twitter, where it was developed to address the consistency and efficiency
                challenges the company was facing in its web development efforts. 
                Twitter's development team recognized the need for a unified and 
                responsive framework to streamline their web design process.         
                  <br></br>
                Renamed to Bootstrap: Shortly after its initial release, the project
                was renamed "Bootstrap." This new name better reflected the
                framework's ability to help developers "bootstrap" their web 
                development projects quickly.
                <br></br>
                </Text>
                <Text
                  className="mt-[42px] text-2xl md:text-[22px] text-bluegray-600 sm:text-xl"
                  size="txtMerriweatherBold24Bluegray600"
                >
                Notable Features 
                </Text>
                <Text
                  className="leading-[35.00px] mt-5 text-bluegray-600 text-lg w-full"
                  size="txtPublicSansLight18Bluegray600"
                >

                <u>Responsive Grid System:</u>
                <br></br>
                 Bootstrap provides a responsive, 12-column grid system that adapts to various
                 screen sizes and devices. It allows for the creation of flexible and responsive
                layouts.
                <br></br>

                <u>Pre-Designed UI Components:</u>
                <br></br>
                 Bootstrap offers a rich set of pre-designed user interface components,
                  including buttons, forms, navigation bars, alerts, modals, and more. 
                  These components save development time and ensure a consistent and 
                  attractive design.
                <br></br>
                  

                </Text>
                <div className="flex sm:flex-col flex-row gap-[29px] items-center justify-between mt-[50px] rounded-[15px] w-full">
                  <Img
                    className="h-[334px] md:h-auto object-cover rounded-[15px]"
                    src="images/bootstrap_navbar.png"
                    alt="History of React"
                  />
                  <Img
                    className="h-[334px] md:h-auto object-cover rounded-[15px]"
                    src="images/bootstrap_logo.png"
                    alt="React File Structure"
                  />
                </div>
                <Text
                  className="mt-[42px] text-2xl md:text-[22px] text-bluegray-600 sm:text-xl"
                  size="txtMerriweatherBold24Bluegray600"
                >
                Limitations 
                </Text>
                <Text
                  className="leading-[35.00px] mt-5 text-bluegray-600 text-lg w-full"
                  size="txtPublicSansLight18Bluegray600"
                >

                Heavy File Size: 
                <br></br>
                Bootstrap's CSS and JavaScript files can be relatively large, which
                 may impact page load times if you include the entire framework without 
                 customization. This can be a concern for performance optimization.

                <br></br>
                <br></br>

                Generic Look:
                <br></br>
                 Bootstrap's default styling can make websites and applications look 
                 generic, as many projects use the same set of components and styles. 
                 Without customization, your design may lack a unique and branded 
                 appearance.

                <br></br>
                <br></br>
                
                Override Challenges:
                <br></br>
                 Customizing Bootstrap styles or overriding default behavior can be
                  challenging. Overriding Bootstrap's styles without creating conflicts 
                  or unintended side effects can require careful handling.

                  <br></br>
                  

                </Text>
                

                <Text
                  className="mt-[42px] text-2xl md:text-[22px] text-bluegray-600 sm:text-xl"
                  size="txtMerriweatherBold24Bluegray600"
                >
                Advantages 
                </Text>
                <div className="flex flex-col font-publicsans items-start justify-end md:ml-[0] ml-[30px] mt-5 pr-2 py-2 w-1/2 md:w-full">
                  <div className="flex flex-row gap-[15px] items-start justify-start w-[54%] md:w-full">
                    <div className="bg-bluegray-600 h-2.5 my-[3px] rounded-[50%] w-2.5"></div>
                    <Text
                      className="text-bluegray-600 text-lg"
                      size="txtPublicSansLight18Bluegray600"
                    >
                     Rapid Development
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[15px] items-start justify-start mt-4 w-[72%] md:w-full">
                    <div className="bg-bluegray-600 h-2.5 my-[3px] rounded-[50%] w-2.5"></div>
                    <Text
                      className="text-bluegray-600 text-lg"
                      size="txtPublicSansLight18Bluegray600"
                    >
                      Cross-Browser Compatibility
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-[15px] items-start justify-start mt-[19px] w-[88%] md:w-full">
                    <div className="bg-bluegray-600 h-2.5 sm:mt-0 my-[3px] rounded-[50%] w-2.5"></div>
                    <Text
                      className="text-bluegray-600 text-lg"
                      size="txtPublicSansLight18Bluegray600"
                    >
                     Documentation
                    </Text>
                  </div>
                </div>
                <Text
                  className="leading-[35.00px] mt-5 text-bluegray-600 text-lg w-full"
                  size="txtPublicSansLight18Bluegray600"
                >
                  Thank you for reading so far , Please share how you liked the article.
                </Text>
              </div>
              <div className="flex flex-col gap-[15px] items-start justify-start mt-[50px] rounded-[5px] w-[52%] md:w-full">
                <Text
                  className="text-2xl md:text-[22px] text-bluegray-600 sm:text-xl"
                  size="txtPublicSansMedium24"
                >
                  Tags
                </Text>
                <div className="flex sm:flex-col flex-row gap-[15px] items-center justify-between rounded-[5px] w-full">
                  <Button
                    className="cursor-pointer font-thin leading-[normal] min-w-[96px] text-center text-lg"
                    shape="round"
                    color="gray_200"
                    size="sm"
                  >
                    Front-End
                  </Button>
                  <Button
                    className="cursor-pointer font-thin leading-[normal] min-w-[97px] text-center text-lg"
                    shape="round"
                    color="gray_200"
                    size="sm"
                  >
                    Bootstrap
                  </Button>
                  <Button
                    className="cursor-pointer font-thin leading-[normal] min-w-[93px] text-center text-lg"
                    shape="round"
                    color="gray_200"
                    size="sm"
                  >
                    Design
                  </Button>
                  <Button
                    className="cursor-pointer font-thin leading-[normal] min-w-[77px] text-center text-lg"
                    shape="round"
                    color="gray_200"
                    size="sm"
                  >
                    Resposive design
                  </Button>
                  <Button
                    className="cursor-pointer font-thin leading-[normal] min-w-[77px] text-center text-lg"
                    shape="round"
                    color="gray_200"
                    size="sm"
                  >
                    2023
                  </Button>
                </div>
              </div>
              
            </div>
          </div>
          
          <Footer className="bg-gray-600 flex items-center justify-center mt-[100px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default bootstrapPage;
