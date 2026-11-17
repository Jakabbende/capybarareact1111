import React from 'react'
import Card from '../components/Card'

export default function Home(props) {
  // let cardContents = [
  //   {
  //     imgSrc:"",
  //     title: "Rólunk",
  //     link: "About.jsx"
  //   }, 
  //   {
  //     imgSrc:"",
  //     title: "Termékeink",
  //     link: "Product.jsx"
  //   },
  //   {
  //     imgSrc:"",
  //     title: "Értékeléseink",
  //     link: "Reviews.jsx"
  //   },
  // ]
  
  
  return (

    <div className='container'>

      <div className='row' style={{backgroundColor: props.bgcolor}}>
        <Card title = "Rólunk" imgSrc="" link = "About.jsx"/>
        <Card title = "Termékeink" imgSrc="" link = "Products.jsx"/>
        <Card title = "Értékelések" imgSrc="" link = "Reviews.jsx"/>
        <Card title = "Gyakorlas" imgSrc="" link = "Gyakorlas.jsx"/>
      </div>
      
    </div>
    // <div className="row m-3 p-3">
    //   {cardContents.forEach((c) => {
    //     return <Card title = {c.title} imgSrc={c.imgSrc} link = {c.link}/>
    //   })}
    // </div>
  )
}
