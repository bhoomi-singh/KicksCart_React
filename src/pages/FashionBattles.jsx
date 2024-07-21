import React from "react";
import "./FashionBattles.css";

const battles = [
  {
    id: 1,
    title: "Sporty Sneaker Showdown",
    description: "Top influencers battle it out with their best sporty sneaker collections.",
    category: "Sporty",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWkbCEUov_GZUIVTX38BndbkAzVpOUXyKKhg&s",
  },
  {
    id: 2,
    title: "Cozy Winter Sneaker Wars",
    description: "Who has the coziest and most stylish winter sneakers?",
    category: "Casual",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnDjjDbTU0gG-0WwebluKJMZRUyUZwi0VZ7w&s",
  },
  {
    id: 3,
    title: "Chic Street Sneaker Faceoff",
    description: "Influencers compete with their most eye-catching chic streetwear sneakers.",
    category: "Chic",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgQHiCr4GfbS7V_fzvf_Uvq8AZYjHJgaw97Q&s",
  },
  {
    id: 4,
    title: "Formal Sneaker Frenzy",
    description: "The best formal sneakers go head-to-head in this battle.",
    category: "Formal",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ6b1cEV65YcHsuzFZqzQgHCa7RQ7d2vGRAi9DKR_G7Z6WXLePieJsrSgVTr_Gwx_jobI&usqp=CAU",
  },
  {
    id: 5,
    title: "Date-Ready Sneaker Duel",
    description: "Influencers show off their best date-ready sneakers.",
    category: "Date Ready",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYH0lHTThZ2SKa3EoMtoHzg1nKvL04EF6XIQ&s",
  },
  {
    id: 6,
    title: "Semi-Formal Sneaker Contest",
    description: "Who has the best semi-formal sneakers? Vote now!",
    category: "Semi-Formal",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQwZGTfhMZmDfnETDJxQhAQ3b6m00ffkDd3Q&s",
  },
];

const FashionBattle = () => {
  return (
    <div className="fashion-battle-container">
      <div className="hero-section">
        <h1>Sneaker Battles</h1>
        <p>Witness the ultimate face-off between top sneaker influencers!</p>
      </div>
      <div className="battle-cards">
        {battles.map((battle) => (
          <div className="battle-card" key={battle.id}>
            <img src={battle.image} alt={battle.title} />
            <div className="battle-card-content">
              <h2>{battle.title}</h2>
              <p>{battle.description}</p>
              <p className="category-tag">{battle.category}</p>
              <button className="vote-button">Vote Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FashionBattle;
