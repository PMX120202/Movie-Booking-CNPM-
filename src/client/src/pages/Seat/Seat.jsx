import useFetch from "../../hooks/useFetch"
import "./seat.css"
import React, {useContext, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { useState } from "react";
import { AuthContext } from '../../context/AuthContext'
import axios from "axios";

const Seat = () => {
    const location = useLocation()
    const id = location.pathname.split("/")[2]

    const { data, loading, error } =  useFetch(`http://localhost:8000/api/movies/find/${id}`)
    const [isload,setIsload] = useState(false)

    const count = document.getElementById('count');
    const total = document.getElementById('total');
    const listseat = document.getElementById('lseat');
    var seat = document.getElementsByClassName('seat')
    seat = [...seat]


    const [seatbooking,setSeatbooking] = useState([])
    const [adrs,seatAdrs] = useState([])
    const [time,setTime] = useState([])
    const [lseat,SetLseat] = useState([])
    const [cinema,setCinema] = useState('chọn rạp')
    const [gettime,setGettime] = useState('chọn giờ chiếu')
    const { user } = useContext(AuthContext)

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

    function setupSeat (){
      setSeatbooking(data.booked_seats)
      for (let i in seatbooking){
        seat[seatbooking[i]+2].classList.toggle('occupied')
        console.log(seatbooking[i])
      }
      seatAdrs(data.address)
      setTime(data.dates)
    }
  
    useEffect(()=>{
      setupSeat()
      console.log("loa")
    },[data])
    
    const handleClick = e => {
      if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
          e.target.classList.toggle('selected');
      }
      updateSelectedCount();
      console.log(listseat.textContent)
    };

    function setupTime(e){
      var d = new Date(e)
      return d.toLocaleString('es-us')
    }

    const createTicket = async (s,c,t,mid,uid) => {
      const movie_id = mid
      const customer_id =uid
      const seat_number = s
      const cinema_complex = c
      const movie_show_time = t
      const total_price = 90000
      const createdAt = new Date()
      const updatedAt = new Date()
      try {
        // console.log({firstName,lastName,username,email,password})
        const res = await axios.post(`http://localhost:8000/api/tickets/${uid}`,{movie_id,customer_id,seat_number,cinema_complex,movie_show_time,total_price,createdAt,updatedAt})
        console.log(res)

      } catch (err) {
        console.log(err)
      }
    }

    const handlePayment=()=>{
      var splitted = listseat.textContent.split`,`.map(x=>+x)
      SetLseat(splitted)
      console.log(splitted)
      console.log(cinema)
      console.log(gettime)
      for (let i in lseat){
        createTicket(lseat[i],cinema,gettime,id,)
      }
    }

  //==================================================
  return (
    <section>
    {loading ? (
      console.log("loading api")
    ) : (
      <div className="movie-container"  >
        <label htmlFor="moviename">{data.name}</label>
        
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

        <select value={cinema} onChange={e => setCinema(e.target.value)} className="cinema">
          {adrs && adrs.map ((item,idx) => (
            <option  key={idx} value={item}> {item}</option>
          ))}
        </select>

        <select value={gettime} onChange={e=>setGettime(e.target.value)} className="time">
          {time && time.map ((item,idx) => (
            <option key={idx} value={item}> {setupTime(item)}</option>
          ))}
        </select>
        
        <div className="container">
          <div className="screen"></div>
          
          <div className="row">
              <input onClick={handleClick} type="button" className='seat' value="1" />
              <input onClick={handleClick} type="button" className='seat' value="2" />
              <input onClick={handleClick} type="button" className='seat' value="3" />
              <input onClick={handleClick} type="button" className='seat' value="4" />
              <input onClick={handleClick} type="button" className='seat' value="5" />
              <input onClick={handleClick} type="button" className='seat' value="6" />
              <input onClick={handleClick} type="button" className='seat' value="7" />
              <input onClick={handleClick} type="button" className='seat' value="8" />
            </div>
            <div className="row">
              <input onClick={handleClick} type="button" className='seat' value="9" />
              <input onClick={handleClick} type="button" className='seat' value="10" />
              <input onClick={handleClick} type="button" className='seat' value="11" />
              <input onClick={handleClick} type="button" className='seat' value="12" />
              <input onClick={handleClick} type="button" className='seat' value="13" />
              <input onClick={handleClick} type="button" className='seat' value="14" />
              <input onClick={handleClick} type="button" className='seat' value="15" />
              <input onClick={handleClick} type="button" className='seat' value="16" />
            </div>
            <div className="row">
              <input onClick={handleClick} type="button" className='seat' value="17" />
              <input onClick={handleClick} type="button" className='seat' value="18" />
              <input onClick={handleClick} type="button" className='seat' value="19" />
              <input onClick={handleClick} type="button" className='seat' value="20" />
              <input onClick={handleClick} type="button" className='seat' value="21" />
              <input onClick={handleClick} type="button" className='seat' value="22" />
              <input onClick={handleClick} type="button" className='seat' value="23" />
              <input onClick={handleClick} type="button" className='seat' value="24" />
            </div>
            <div className="row">
              <input onClick={handleClick} type="button" className='seat' value="25" />
              <input onClick={handleClick} type="button" className='seat' value="26" />
              <input onClick={handleClick} type="button" className='seat' value="27" />
              <input onClick={handleClick} type="button" className='seat' value="28" />
              <input onClick={handleClick} type="button" className='seat' value="29" />
              <input onClick={handleClick} type="button" className='seat' value="30" />
              <input onClick={handleClick} type="button" className='seat' value="31" />
              <input onClick={handleClick} type="button" className='seat' value="32" />
            </div>
            <div className="row">
              <input onClick={handleClick} type="button" className='seat' value="33" />
              <input onClick={handleClick} type="button" className='seat' value="34" />
              <input onClick={handleClick} type="button" className='seat' value="35" />
              <input onClick={handleClick} type="button" className='seat' value="36" />
              <input onClick={handleClick} type="button" className='seat' value="37" />
              <input onClick={handleClick} type="button" className='seat' value="38" />
              <input onClick={handleClick} type="button" className='seat' value="39" />
              <input onClick={handleClick} type="button" className='seat' value="40" />
            </div>
            <div className="row">
              <input onClick={handleClick} type="button" className='seat' value="41" />
              <input onClick={handleClick} type="button" className='seat' value="42" />
              <input onClick={handleClick} type="button" className='seat' value="43" />
              <input onClick={handleClick} type="button" className='seat' value="44" />
              <input onClick={handleClick} type="button" className='seat' value="45" />
              <input onClick={handleClick} type="button" className='seat' value="46" />
              <input onClick={handleClick} type="button" className='seat' value="47" />
              <input onClick={handleClick} type="button" className='seat' value="48" />
            </div>
          
          <p className="text">
            You have selected <span id="count">0</span> seats
            <br/>
            Total price : <span id="total">0</span>
            <br/>
            Your Seat : <span id="lseat">none</span>
          </p>
          <input type="button" value="payment" onClick={handlePayment}/>
        </div>
      </div>
      )}
    </section>
    )
}

export default Seat