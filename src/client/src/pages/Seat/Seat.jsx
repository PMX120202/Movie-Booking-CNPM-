import useFetch from "../../hooks/useFetch"
import "./Seat.css"
import React from "react";
import { useLocation } from 'react-router-dom';
import { useState } from "react";

const Seat = () => {
    const location = useLocation()
    const id = location.pathname.split("/")[2]
    const { data, loading, error } = useFetch(`http://localhost:8000/api/movies/find/${id}`)

    console.log(data.address)


    const count = document.getElementById('count');
    const total = document.getElementById('total');
    const listseat = document.getElementById('lseat');

    function updateSelectedCount() {
      const selectedSeats = document.querySelectorAll('.row .seat.selected');
      const selectedSeatsCount = selectedSeats.length;
      count.innerText = selectedSeatsCount;
      total.innerText = selectedSeatsCount * 90000;
      var arrseat = []
      selectedSeats.forEach((e) => {
        arrseat.push(e.getAttribute('value'))
      })
      listseat.innerText = arrseat
    }
    
    const handleClick = e => {
      if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
          e.target.classList.toggle('selected');
      }
      updateSelectedCount();
      console.log(listseat.textContent)
    };
    
  //==================================================
  return (

    <section>
    {loading ? (
      console.log("loading")
    ) : (
      <div className="movie-container">
        <select id="movie">
        </select>
        
        <ul className="showcase">
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
        </ul>

        <section>
          { data.map((itm, index) => (
              <option key={index}>{itm}</option>)
            )}
        </section>

        
        <div className="container">
          <div className="screen"></div>
          
          <div className="row">
              <input onClick={handleClick} type="button" className='seat' value="A1" />
              <input onClick={handleClick} type="button" className='seat' value="A2" />
              <input onClick={handleClick} type="button" className='seat' value="A3" />
              <input onClick={handleClick} type="button" className='seat' value="A4" />
              <input onClick={handleClick} type="button" className='seat' value="A5" />
              <input onClick={handleClick} type="button" className='seat' value="A6" />
              <input onClick={handleClick} type="button" className='seat' value="A7" />
              <input onClick={handleClick} type="button" className='seat' value="A8" />
            </div>
            <div className="row">
              <input onClick={handleClick} type="button" className='seat' value="B1" />
              <input onClick={handleClick} type="button" className='seat' value="B2" />
              <input onClick={handleClick} type="button" className='seat' value="B3" />
              <input onClick={handleClick} type="button" className='seat' value="B4" />
              <input onClick={handleClick} type="button" className='seat' value="B5" />
              <input onClick={handleClick} type="button" className='seat' value="B6" />
              <input onClick={handleClick} type="button" className='seat' value="B7" />
              <input onClick={handleClick} type="button" className='seat' value="B8" />
            </div>
            <div className="row">
              <input onClick={handleClick} type="button" className='seat' value="C1" />
              <input onClick={handleClick} type="button" className='seat' value="C2" />
              <input onClick={handleClick} type="button" className='seat' value="C3" />
              <input onClick={handleClick} type="button" className='seat' value="C4" />
              <input onClick={handleClick} type="button" className='seat' value="C5" />
              <input onClick={handleClick} type="button" className='seat' value="C6" />
              <input onClick={handleClick} type="button" className='seat' value="C7" />
              <input onClick={handleClick} type="button" className='seat' value="C8" />
            </div>
            <div className="row">
              <input onClick={handleClick} type="button" className='seat' value="D1" />
              <input onClick={handleClick} type="button" className='seat' value="D2" />
              <input onClick={handleClick} type="button" className='seat' value="D3" />
              <input onClick={handleClick} type="button" className='seat' value="D4" />
              <input onClick={handleClick} type="button" className='seat' value="D5" />
              <input onClick={handleClick} type="button" className='seat' value="D6" />
              <input onClick={handleClick} type="button" className='seat' value="D7" />
              <input onClick={handleClick} type="button" className='seat' value="D8" />
            </div>
            <div className="row">
              <input onClick={handleClick} type="button" className='seat' value="E1" />
              <input onClick={handleClick} type="button" className='seat' value="E2" />
              <input onClick={handleClick} type="button" className='seat' value="E3" />
              <input onClick={handleClick} type="button" className='seat' value="E4" />
              <input onClick={handleClick} type="button" className='seat' value="E5" />
              <input onClick={handleClick} type="button" className='seat' value="E6" />
              <input onClick={handleClick} type="button" className='seat' value="E7" />
              <input onClick={handleClick} type="button" className='seat' value="E8" />
            </div>
            <div className="row">
              <input onClick={handleClick} type="button" className='seat' value="F1" />
              <input onClick={handleClick} type="button" className='seat' value="F2" />
              <input onClick={handleClick} type="button" className='seat' value="F3" />
              <input onClick={handleClick} type="button" className='seat' value="F4" />
              <input onClick={handleClick} type="button" className='seat' value="F5" />
              <input onClick={handleClick} type="button" className='seat' value="F6" />
              <input onClick={handleClick} type="button" className='seat' value="F7" />
              <input onClick={handleClick} type="button" className='seat' value="F8" />
            </div>
          
          <p className="text">
            You have selected <span id="count">0</span> seats
            <br/>
            Total price : <span id="total">0</span>
            <br/>
            Your Seat : <span id="lseat">none</span>
          </p>
        </div>
      </div>
      )}
    </section>
    )
}

export default Seat