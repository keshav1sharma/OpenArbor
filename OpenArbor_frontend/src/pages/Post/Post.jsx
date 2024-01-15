import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

import { Button, Img, Line, List, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const Post = () => {
    const {pathname} = useLocation();
    const {id} = useParams();
    //console.log(pathname,id);

    const dataArray = JSON.parse(localStorage.getItem("blogs"));
    //console.log(dataArray);
    const data = dataArray.find(post => post.id === id);

    //console.log(data);


  return (

    <>
    <div className="bg-white-A700 flex flex-col font-publicsans gap-10 items-center justify-start mx-auto w-full">
      <Header className="flex items-center justify-center md:px-5 w-full" />
      <div className="flex flex-col items-center justify-start w-full">
        <div className="flex flex-col gap-[46px] items-center justify-start max-w-[1330px] mx-auto md:px-5 w-full">
          <div className="flex flex-col relative w-full">
            <Img
              className="h-[500px] mx-auto object-cover rounded-[25px] w-full"
              src={data.img}
              alt="RectangleTwenty"
            />
            <div className="bg-white-A700 flex flex-col items-center justify-end mt-[-132px] mx-auto p-12 md:px-10 sm:px-5 rounded-[25px] shadow-bs3 w-[84%] z-[1]">
              <div className="flex flex-col items-start justify-start w-[97%] md:w-full">
                
                <Text
                  className="italic mt-[27px] text-5xl sm:text-[38px] md:text-[44px] text-gray-600 tracking-[0.12px] w-full"
                  size="txtMerriweatherBoldItalic48"
                >
                  {data.heading}
                </Text>
                <div className="flex sm:flex-col flex-row font-publicsans sm:gap-10 items-center justify-between mt-[50px] w-full">
                  <div className="flex sm:flex-1 flex-row gap-3.5 items-center justify-between w-[31%] sm:w-full">
                    <Img
                      className="h-[70px] md:h-auto rounded-[50%] w-[70px]"
                      src="../images/img_ellipse5.png"          
                      alt="EllipseFive"
                    />
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="text-2xl md:text-[22px] text-bluegray-600 sm:text-xl"
                        size="txtPublicSansSemiBold24"
                      >
                        By {data.author}
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
                        src="../images/img_signal.svg"
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
                {data.intro}

              </Text>
              <div className="flex md:flex-col flex-row gap-5 items-start justify-between mt-[50px] w-[97%] md:w-full">
                <Img
                  className="h-10 w-10"
                  src="../images/img_trash.svg"
                  alt="trash"
                />
                <div className="flex flex-col gap-[15px] items-start justify-start">
                  <Text
                    className="italic text-4xl sm:text-[32px] md:text-[34px] text-bluegray-600 w-full"
                    size="txtMerriweatherBoldItalic36"
                  >
                    {data.quote}
                  </Text>
                  <Text
                    className="text-bluegray-600 text-lg"
                    size="txtPublicSansLight18Bluegray600"
                  >
                    {data.author}
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

              {data.history}
                <br></br>
                

              </Text>

              
              <div className="flex sm:flex-col flex-row gap-[29px] items-center justify-between mt-[50px] rounded-[15px] w-full">
                <Img
                  className="h-[334px] md:h-auto object-cover rounded-[15px]"
                  src={data.blogImg1}
                  alt="History of React"
                />
                <Img
                  className="h-[334px] md:h-auto object-cover rounded-[15px]"
                  src={data.blogImg2}
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

              {data.limitation}
              <br></br>
              <br></br>

                

              </Text>
              

              <Text
                className="mt-[42px] text-2xl md:text-[22px] text-bluegray-600 sm:text-xl"
                size="txtMerriweatherBold24Bluegray600"
              >
              Advantages 
              </Text>
              <Text
                className="leading-[35.00px] mt-5 text-bluegray-600 text-lg w-full"
                size="txtPublicSansLight18Bluegray600"
              >

              {data.advantage}
              <br></br>
              <br></br>

                

              </Text>
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

  )
}

export default Post