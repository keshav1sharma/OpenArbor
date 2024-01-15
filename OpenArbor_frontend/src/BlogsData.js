import { func } from "prop-types";
import React , {useState}  from "react";

// Define an initial array of card data (if needed)
const BlogDataArray = JSON.parse(localStorage.getItem("blogs")) || [];

const cardDataArray = JSON.parse(localStorage.getItem("cards")) || [];

const users = JSON.parse(localStorage.getItem("users")) || [];

let isLoggedIn = JSON.parse(localStorage.getItem("login")) || false;

let username = JSON.parse(localStorage.getItem("username")) || "";


function addUsers(username, password) {

  const existingUser = users.find(user => user.username === username);

  if (existingUser) {

    alert('Username already registered');
  } else {

    const newUser = { username, password };
    users.push(newUser);

    localStorage.setItem('users', JSON.stringify(users));
    window.location.href = '/';
    alert("User Successfully Registered");


  }
}

// Example usage:
//addUsers('newUser', 'password123');

// Function to create and add a new card data object
function addCardData(id,link, img, heading, author) {
  const newCardData = { id,link, img, heading, author };
  cardDataArray.push(newCardData);


  localStorage.setItem("cards",JSON.stringify(cardDataArray));
  //console.log(cardDataArray);

}

// Function to create and add a new card data object
function addBlogData(id ,link, img, heading, author , intro , quote, history, blogImg1, blogImg2, limitation ,advantage) {
  const newBlogData = { id ,link, img, heading, author , intro , quote, history, blogImg1, blogImg2, limitation ,advantage };
  BlogDataArray.push(newBlogData);

  localStorage.setItem("blogs",JSON.stringify(BlogDataArray));


}





export { cardDataArray , addCardData , addBlogData ,addUsers , isLoggedIn , username};
