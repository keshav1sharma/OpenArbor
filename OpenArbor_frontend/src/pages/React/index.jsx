import React from "react";

import { Button, Img, Line, List, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const reactPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-publicsans gap-10 items-center justify-start mx-auto w-full">
        <Header className="flex items-center justify-center md:px-5 w-full" />
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col gap-[46px] items-center justify-start max-w-[1330px] mx-auto md:px-5 w-full">
            <div className="flex flex-col relative w-full">
              <Img
                className="h-[500px] mx-auto object-cover rounded-[25px] w-full"
                src="images/react_poster.png"
                alt="RectangleTwenty"
              />
              <div className="bg-white-A700 flex flex-col items-center justify-end mt-[-132px] mx-auto p-12 md:px-10 sm:px-5 rounded-[25px] shadow-bs3 w-[84%] z-[1]">
                <div className="flex flex-col items-start justify-start w-[97%] md:w-full">
                  
                  <Text
                    className="italic mt-[27px] text-5xl sm:text-[38px] md:text-[44px] text-gray-600 tracking-[0.12px] w-full"
                    size="txtMerriweatherBoldItalic48"
                  >
                    React JS : How it changed the internet
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
                  React (also known as React.js or ReactJS) is a free and open-source 
                  front-end JavaScript library for building user interfaces based
                   on components. It is maintained by Meta (formerly Facebook) and a 
                   community of individual developers and companies.

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
                      ReactJS: Where changing one line of code feels like defusing a bomb 
                      in a room full of programmers. Easy, right? 😅🧨
                    </Text>
                    <Text
                      className="text-bluegray-600 text-lg"
                      size="txtPublicSansLight18Bluegray600"
                    >
                      ChatGpt
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

                React was created by Jordan Walke, a software engineer at Meta, who 
                released an early prototype of React called "FaxJS". He was influenced 
                by XHP, an HTML component library for PHP. It was first deployed on
                Facebook's News Feed in 2011 and later on Instagram in 2012.
                It was open-sourced at JSConf US in May 2013.
                  <br></br>
                  

                </Text>

                <Text
                  className="leading-[35.00px] mt-5 text-bluegray-600 text-lg w-full"
                  size="txtPublicSansLight18Bluegray600"
                >

                On April 18, 2017, Facebook announced React Fiber, a new set of internal
                algorithms for rendering, as opposed to React's old rendering algorithm,
                Stack. React Fiber was to become the foundation of any future improvements
                and feature development of the React library. The actual syntax for programming 
                with React does not change; only the way that the syntax is executed has changed.
                React's old rendering system, Stack, was developed at a time when the focus of the 
                system on dynamic change was not understood. Stack was slow to draw complex animation,
                 for example, trying to accomplish all of it in one chunk. Fiber breaks down animation 
                 into segments that can be spread out over multiple frames. Likewise, the structure of a
                  page can be broken into segments that may be maintained and updated separately. JavaScript 
                  functions and virtual DOM objects are called "fibers", and each can be operated and updated 
                  separately, allowing for smoother on-screen rendering.         
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

                <u>Declarative :</u>
                <br></br>
                React adheres to the declarative programming paradigm.
                Developers design views for each state of an application,
                and React updates and renders components when data changes. 
                This is in contrast with imperative programming.
                <br></br>

                <u>Virtual DOM :</u>
                <br></br>
                React's Virtual DOM is often mentioned, but many users might not
                know how it works. It's a lightweight copy of the actual DOM, and 
                React uses it to improve performance by minimizing direct interaction
                with the real DOM.
                <br></br>
                  

                </Text>
                <div className="flex sm:flex-col flex-row gap-[29px] items-center justify-between mt-[50px] rounded-[15px] w-full">
                  <Img
                    className="h-[334px] md:h-auto object-cover rounded-[15px]"
                    src="images/history-of-react.png"
                    alt="History of React"
                  />
                  <Img
                    className="h-[334px] md:h-auto object-cover rounded-[15px]"
                    src="images/react_file_structure.png"
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

                Learning Curve:
                <br></br>
                 React can have a steep learning curve for beginners, 
                especially if they are not already familiar with JavaScript, JSX, and 
                modern front-end development concepts.

                <br></br>
                <br></br>

                State Management:
                <br></br>
                React's built-in state management can become unwieldy in larger
                applications. While libraries like Redux or MobX can help manage 
                application state, they introduce additional complexity.

                <br></br>
                <br></br>
                
                Performance:
                <br></br>
                 React's Virtual DOM is designed to optimize performance, 
                 but inefficient use of component updates or frequent re-renders can 
                 lead to performance issues.

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
                     Component-Based Architecture
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[15px] items-start justify-start mt-4 w-[72%] md:w-full">
                    <div className="bg-bluegray-600 h-2.5 my-[3px] rounded-[50%] w-2.5"></div>
                    <Text
                      className="text-bluegray-600 text-lg"
                      size="txtPublicSansLight18Bluegray600"
                    >
                      Declarative Syntax
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-[15px] items-start justify-start mt-[19px] w-[88%] md:w-full">
                    <div className="bg-bluegray-600 h-2.5 sm:mt-0 my-[3px] rounded-[50%] w-2.5"></div>
                    <Text
                      className="text-bluegray-600 text-lg"
                      size="txtPublicSansLight18Bluegray600"
                    >
                      Virtual DOM
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
                    React
                  </Button>
                  <Button
                    className="cursor-pointer font-thin leading-[normal] min-w-[93px] text-center text-lg"
                    shape="round"
                    color="gray_200"
                    size="sm"
                  >
                    DOM
                  </Button>
                  <Button
                    className="cursor-pointer font-thin leading-[normal] min-w-[77px] text-center text-lg"
                    shape="round"
                    color="gray_200"
                    size="sm"
                  >
                    Reactjs
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

export default reactPage;
