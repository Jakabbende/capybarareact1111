import React, { useState } from 'react'
import Card from '../components/Card'

export default function Home(props) {
  let cardContents = [
    {
      imgSrc:"",
      title: "Rólunk",
      link: "About.jsx"
    }, 
    {
      imgSrc:"",
      title: "Termékeink",
      link: "Product.jsx"
    },
    {
      imgSrc:"",
      title: "Értékeléseink",
      link: "Reviews.jsx"
    },
  ]
  
  const [bgcolor, setBgcolor] = useState("")
  function colorSet(){
    setBgcolor(event.target.value)
  }
  
  return (

    // <div className='row'>
    //   <input type="color" onChange={colorSet} />
    //   <Card cardbg =  {bgcolor} title = "Rólunk" imgSrc="" link = "About.jsx"/>
    //   <Card cardbg =  {bgcolor} title = "Termékeink" imgSrc="" link = "Products.jsx"/>
    //   <Card cardbg =  {bgcolor} title = "Értékelések" imgSrc="" link = "Reviews.jsx"/>
    // </div>

    <div>
      <input type="color" onChange={colorSet} />
      
      <div className="row m-3 p-3">
        {cardContents.map((c) => {
          return <Card title = {c.title} imgSrc={c.imgSrc} link = {c.link} cardbg = {bgcolor}/>
        })}
      </div>
    </div>
  )
}
