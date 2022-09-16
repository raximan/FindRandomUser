import { useState } from "react"
import {useNavigate} from "react-router-dom"
export default function Home(){
    let navigate =useNavigate()


return<div>
            <h1 style={{padding:"4% 34% "}}>Welcome to Find Random User Game</h1>
            <h2 style={{padding:"1% 34% "}}>All you need to do is guess the people by their image </h2>
            <h3 style={{padding:"1% 37% "}}> Look at the bottom for the answer if you feel stuck</h3>
            <div style={{padding:"10% 45% "}} >
            <button  onClick={()=>navigate("/game")}>Press to Start</button>
            </div>
    </div>
}