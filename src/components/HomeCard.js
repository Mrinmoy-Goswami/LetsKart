import React from 'react'
import "./HomeCard.css"
import { Link } from 'react-router-dom'

export default function HomeCard(props) {
  return (
    <div style={{display:"flex",flexWrap:"wrap"}}>

    <div className='CardContainer '>
      <div className="card my-3 mx-5" >
  <img src={props.img}
  style={{height:"30vh",width:"13vw"}}
  className="card-img-top" alt="Product Image"/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.des}</p>
    <Link to={'/products'}  className="btn btn-dark btn-sm">Go Shopping</Link>
  </div>
    </div>
    </div>
    </div>
  )
}
