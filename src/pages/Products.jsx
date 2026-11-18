import React from 'react'
import CapybaraCard from '../components/CapybaraCard';
import './Products.css';

export default function Products() {
  
  const capybaras = [
    { id: 1, name: "Karcsi", age: 3, price: 150000 },
    { id: 2, name: "Bözsi", age: 5, price: 220000 },
    { id: 3, name: "Gizi", age: 1, price: 99000 },
    { id: 4, name: "Józsi", age: 7, price: 310000 },
  ];
  
    return (
      <div className="products">
        <h1>Termékek</h1>
        <div className="products-grid">
          {capybaras.map((capy) => (
            <CapybaraCard key={capy.id} name={capy.name} age={capy.age} price={capy.price}/>
          ))}
        </div>
      </div>
    );
}
 


