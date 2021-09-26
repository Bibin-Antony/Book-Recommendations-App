import React from "react";
import "./styles.css";
import { useState } from "react";

const BookDataBase = {
  Programming: [
    { name: "Eloquent JavaScript", 
    discription : "Completely revised and updated, this best-selling introduction to programming in JavaScript focuses on writing real applications.",
    Autor :"Marijn Haverbeke",
    rating: "4/5" },
    { name: "You Don't Know JS",
    discription : "Are you looking for a better way to deeply learn the fundamentals of JavaScript? Look no further!The foundation of all programs is the organization of its variables and functions into different nested scopes.",
    Autor :"Kyle Simpson",
    rating: "3.5/5" },
    { name: "Eloquent JavaScript", 
    discription : "Completely revised and updated, this best-selling introduction to programming in JavaScript focuses on writing real applications.",
    Autor :"Marijn Haverbeke",
    rating: "4/5" }
  ],

  Fiction: [
    {
      name: "The Complete Novel Of Sherlock Homes",
      discription : "The Complete Sherlock Holmes is the collection of all 56 stories and 4 novels starring the genius detective Sherlock Holmes and his loyal sidekick ",
      Autor : "Arthur Conan Doyle",
      rating: "3.5/5"
    },
    {
      name: "The Adventures Of Sherlock Homes",
      discription : "The Adventures of Sherlock Holmes is a collection of twelve short stories",
      Autor : "Arthur Conan Doyle",  
      rating: "4.5/5"
    },
    {
      name: "The Alchemist",
      discription : "The Alchemist is a novel by Brazilian author Paulo Coelho that was first published in 1988. Originally written in Portuguese, it became a widely translated international bestseller.",
      Autor : "Paulo Coelho",  
      rating: "4.5/5"
    }
  ],
  business: [
    {
      name: "Pyjama Profit",
      discription : "Pyjama Profit is a guide for millennials to get started with a self-sustained online freelance practice, while developing their skills needed to succeed. ",
      Autor : "Varun Maya",
      rating: "4.5/5"
    },
    {
      name: "Crushing It",
      discription : "Four-time New York Times bestselling author Gary Vaynerchuk offers new lessons and inspiration drawn from the experiences of dozens of influencers and entrepreneurs who rejected the predictable corporate",
      Autor : "Gary Vee",
      rating: "4.9/5"
    },
    {
      name: "The 4-Hour Workweek",
      discription : "The 4-Hour Workweek: Escape 9–5, Live Anywhere, and Join the New Rich is a self-help book by Timothy Ferriss, an American writer, educational activist, and entrepreneur.",
      Autor : "Tim Ferriss",  
      rating: "4.1/5"
    }

  ]
};

export default function App() {
  const [Genre, setGenre] = useState("Fiction");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> 📚 Goodbooks </h1>
      <p style={{ fontSize: "smaller", color:"white" }}>
        {" "}
        Checkout my favorite books. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(BookDataBase).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              backgroundColor: "purple",
              color:"white",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {BookDataBase[Genre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> {book.discription} </div>
              <div style={{ fontSize: "smaller" }}> {book.Autor} </div>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
              {" "}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
