import React ,{useEffect, useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Post from "pages/Post/Post";

const BloggerDetails = React.lazy(() => import("pages/BloggerDetails"));
const ContactUs = React.lazy(() => import("pages/ContactUs"));
const BlogDetails = React.lazy(() => import("pages/BlogDetails"));
const LandingPage = React.lazy(() => import("pages/LandingPage"));
const HtmlPage = React.lazy(() => import("pages/Html"));
const AllPosts = React.lazy(() => import("pages/AllPosts"));
const CssPage = React.lazy(() => import("pages/Css"));
const ReactPage = React.lazy(() => import("pages/React"));
const BootstrapPage = React.lazy(() => import("pages/Bootstrap"));
const NewPost = React.lazy(() => import("pages/NewPost"));
const SignUp = React.lazy(() => import("pages/SignUp"));
const Login = React.lazy(() => import("pages/Login"));





const ProjectRoutes = () => {
  

  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/blogdetails" element={<BlogDetails />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/bloggerdetails" element={<BloggerDetails />} />
          <Route path="/what-is-html" element={<HtmlPage />} />
          <Route path="/all" element={<AllPosts />} />
          <Route path="/what-is-css" element={<CssPage />} />
          <Route path="/what-is-react" element={<ReactPage />} />
          <Route path="/what-is-bootstrap" element={<BootstrapPage />} />
          <Route path="/new-post" element={<NewPost />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/post/:id" element={<Post/>}/>
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
