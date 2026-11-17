import React from 'react'

export default function Header(props) {

    function Bgset(event) {
        props.setbg(event.target.value)
    }
  return (
    <div>
        <h1>Capybara Shop</h1>
        <input type="color" onChange={Bgset} />
    </div>
  )
}
