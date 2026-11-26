import React, { useState } from 'react'
import CapybaraCard from '../components/CapybaraCard';
import './Products.css';
import { useEffectEvent } from 'react';

export default function Products() {
  const [adatok, setAdatok] = useState([])

  useEffect(() => {
    fetch("/data.json")
    .then(response => response.json())
    .then(data =>{
      setAdatok(data)
      console.log("Hello")
    })
  }, [])
  

    return (
      <div className="products">
        <h1>Termékek</h1>
        <div className="products-grid">
          {adatok.map((capy) => (
            <CapybaraCard key={capy.id} name={capy.name} age={capy.age} price={capy.price}/>
          ))}
        </div>
      </div>
    );
}
 


