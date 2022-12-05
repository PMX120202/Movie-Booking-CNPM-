import axios from 'axios'
import { useState,useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import useFetch from "../../hooks/useFetch"
import "./Seat.css"

const Seat = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2]
    console.log(id)
    var { data, loading, error } = useFetch(`http://localhost:8000/api/movies/find/${id}`)
    const item = data
    
    loading ? console.log("loading"):(
      { data, loading, error } = useFetch(`hhttp://localhost:8000/api/movies?name=${item.name}`)
      

    )
    
  //==================================================
  return (

    <section>
       {loading ? (
              "loading"
          ) : (
        <div className="movie-container">
          <label>
            <h2 className="moviename">{data.name}</h2>
          </label>

          {/* <ul className="showcase">
            <li>
              <div className="seat"></div>
              <small>N/A</small>
            </li>
            <li>
              <div className="seat selected"></div>
              <small>Selected</small>
            </li>
            <li>
              <div className="seat occupied"></div>
              <small>Occupied</small>
            </li>    
          </ul> */}
          
          {/* <div className="container">
            <div className="screen"></div>
            
            <div className="row">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
              </div>
              <div className="row">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat occupied"></div>
                <div className="seat occupied"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
              </div>
              <div className="row">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat occupied"></div>
                <div className="seat occupied"></div>
              </div>
              <div className="row">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
              </div>
              <div className="row">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat occupied"></div>
                <div className="seat occupied"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
              </div>
              <div className="row">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat occupied"></div>
                <div className="seat occupied"></div>
                <div className="seat occupied"></div>
                <div className="seat"></div>
              </div> 
            
            <p className="text">
              You have selected <span id="count">0</span> seats for the total price of Rs. <span id="total">0</span>
            </p>
            <button className="payment"> Payment </button>
          </div>*/}
      </div>
      )}
    </section>
    )
}

export default Seat