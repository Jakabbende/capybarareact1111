import React, { useState } from 'react'
import Card from '../components/Card'


export default function Home(props) {
  let cardContents = [
    {
      id:1,
      imgSrc: "/capy.jpg",
      title: "Rólunk",
      link: "/rolunk"
    }, 
    {
      id:2,
      imgSrc: "/capy.jpg",
      title: "Termékeink",
      link: "/termekek"
    },
    {
      id:3,
      imgSrc: "/capy.jpg",
      title: "Értékeléseink",
      link: "/ertekelesek"
    },
  ]
  
  const [bgcolor, setBgcolor] = useState("")
  function colorSet(event){
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
          return <Card key={c.id} title = {c.title} imgSrc={c.imgSrc} sitepath = {c.link} cardbg = {bgcolor}/>
        })}
      </div>
    </div>
  )
}
