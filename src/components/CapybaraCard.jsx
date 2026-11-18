import React from "react";

 export default function CapybaraCard({ name, age, price }) {
  return (
    <div className="capybara-card">
      <h3>{name}</h3>
      <p>Kor: {age} éves</p>
      <p>Ár: {price.toLocaleString("hu-HU")} Ft</p>
      <button>Kosárba</button>
    </div>
  );
}
