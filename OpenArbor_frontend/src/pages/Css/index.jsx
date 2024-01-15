import React from "react";

import { Button, Img, Line, List, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const cssPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-publicsans gap-10 items-center justify-start mx-auto w-full">
        <Header className="flex items-center justify-center md:px-5 w-full" />
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col gap-[46px] items-center justify-start max-w-[1330px] mx-auto md:px-5 w-full">
            <div className="flex flex-col relative w-full">
              <Img
                className="h-[500px] mx-auto object-cover rounded-[25px] w-full"
                src="images/css_poster.png"
                alt="RectangleTwenty"
              />
              <div className="bg-white-A700 flex flex-col items-center justify-end mt-[-132px] mx-auto p-12 md:px-10 sm:px-5 rounded-[25px] shadow-bs3 w-[84%] z-[1]">
                <div className="flex flex-col items-start justify-start w-[97%] md:w-full">
                  
                  <Text
                    className="italic mt-[27px] text-5xl sm:text-[38px] md:text-[44px] text-gray-600 tracking-[0.12px] w-full"
                    size="txtMerriweatherBoldItalic48"
                  >
                    Cascading Style Sheets (CSS) : Transforming Web Design and Presentation
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
                  CSS is a style sheet language used to define the look and feel of
                   HTML elements on a webpage. It allows developers to specify styles
                    for individual elements or groups of elements, defining properties
                     such as colors, fonts, spacing, layout, and more. By separating 
                     content (HTML) from presentation (CSS), web developers can create
                      websites that are easier to manage, modify, and adapt to various 
                      devices and screen sizes.

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
                      CSS is like Power Rangers. You have the selector, the declaration, and the curly braces which combine to become a mighty Megazord of style.
                    </Text>
                    <Text
                      className="text-bluegray-600 text-lg"
                      size="txtPublicSansLight18Bluegray600"
                    >
                      Stephen Shaw
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

                    CSS was first proposed by Håkon Wium Lie on 10 October 1994. At the time,
                         Lie was working with Tim Berners-Lee at CERN. Several other style sheet
                          languages for the web were proposed around the same time, and 
                        discussions on public mailing lists and inside World Wide Web Consortium
                        resulted in the first W3C CSS Recommendation (CSS1) being released in 1996.
                        In particular, a proposal by Bert Bos was influential; he became co-author 
                        of CSS1, and is regarded as co-creator of CSS.
                  <br></br>
                  

                </Text>

                <Text
                  className="leading-[35.00px] mt-5 text-bluegray-600 text-lg w-full"
                  size="txtPublicSansLight18Bluegray600"
                >

                    Style sheets have existed in one form or another since the beginnings
                     of Standard Generalized Markup Language (SGML) in the 1980s, and CSS 
                     was developed to provide style sheets for the web. One requirement 
                     for a web style sheet language was for style sheets to come from 
                     different sources on the web. Therefore, existing style sheet languages
                      like DSSSL and FOSI were not suitable. CSS, on the other hand, let a
                       document's style be influenced by multiple style sheets by way of
                        "cascading" styles
                  <br></br>
                  

                </Text>
                <Text
                  className="mt-[42px] text-2xl md:text-[22px] text-bluegray-600 sm:text-xl"
                  size="txtMerriweatherBold24Bluegray600"
                >
                Variations 
                </Text>
                <Text
                  className="leading-[35.00px] mt-5 text-bluegray-600 text-lg w-full"
                  size="txtPublicSansLight18Bluegray600"
                >

                CSS has various levels and profiles. Each level of CSS builds upon
                 the last, typically adding new features and typically denoted
                  as CSS 1, CSS 2, CSS 3, and CSS 4. Profiles are typically a subset
                   of one or more levels of CSS built for a particular device or user
                    interface. Currently, there are profiles for mobile devices, printers,
                     and television sets. Profiles should not be confused with media types, which were added in CSS 2.
                  <br></br>
                  

                </Text>
                <div className="flex sm:flex-col flex-row gap-[29px] items-center justify-between mt-[50px] rounded-[15px] w-full">
                  <Img
                    className="h-[334px] md:h-auto object-cover rounded-[15px]"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/W3C_CSS_Snapshot.png/440px-W3C_CSS_Snapshot.png"
                    alt="RectangleTwentyThree"
                  />
                  <Img
                    className="h-[334px] md:h-auto object-cover rounded-[15px]"
                    src="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics/css-declaration-small.png"
                    alt="RectangleTwentyFour"
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

                Cannot explicitly declare new scope independently of position
                Scoping rules for properties such as z-index look for the closest parent element with a position: absolute or position: relative attribute. This odd coupling has undesired effects. For example, it is impossible to avoid declaring a new scope when one is forced to adjust an element's position, preventing one from using the desired scope of a parent element.
                <br></br>
                <br></br>
                Pseudo-class dynamic behavior not controllable
                CSS implements pseudo-classes that allow a degree of user feedback by conditional application of alternate styles. One CSS pseudo-class, ":hover", is dynamic (equivalent of JavaScript "onmouseover") and has potential for misuse (e.g., implementing cursor-proximity popups), but CSS has no ability for a client to disable it (no "disable"-like property) or limit its effects (no "nochange"-like values for each property).
                <br></br>
                <br></br>
                Cannot name rules
                There is no way to name a CSS rule, which would allow (for example) client-side scripts to refer to the rule even if its selector changes.
                <br></br>
                <br></br>
                Cannot include styles from a rule into another rule
                CSS styles often must be duplicated in several rules to achieve the desired effect, causing additional maintenance and requiring more thorough testing. Some new CSS features were proposed to solve this but were abandoned afterward. Instead, authors may gain this ability by using more sophisticated stylesheet languages which compile to CSS, such as Sass, Less, or Stylus.
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
                     Separation of content from presentation
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[15px] items-start justify-start mt-4 w-[72%] md:w-full">
                    <div className="bg-bluegray-600 h-2.5 my-[3px] rounded-[50%] w-2.5"></div>
                    <Text
                      className="text-bluegray-600 text-lg"
                      size="txtPublicSansLight18Bluegray600"
                    >
                      Site-wide consistency
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-[15px] items-start justify-start mt-[19px] w-[88%] md:w-full">
                    <div className="bg-bluegray-600 h-2.5 sm:mt-0 my-[3px] rounded-[50%] w-2.5"></div>
                    <Text
                      className="text-bluegray-600 text-lg"
                      size="txtPublicSansLight18Bluegray600"
                    >
                      Page reformatting
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
                    CSS
                  </Button>
                  <Button
                    className="cursor-pointer font-thin leading-[normal] min-w-[93px] text-center text-lg"
                    shape="round"
                    color="gray_200"
                    size="sm"
                  >
                    Style
                  </Button>
                  <Button
                    className="cursor-pointer font-thin leading-[normal] min-w-[77px] text-center text-lg"
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

export default cssPage;
