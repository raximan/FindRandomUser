import { useState } from "react"
import {useNavigate} from "react-router-dom"
export default function Home(){
    const[userName,setUserName]=useState("")
    let navigate =useNavigate()


return<div>
            {/* <label>Name: 
            <input
                type="text"
                id="message"
                name="message"
                onChange={(e)=>setUserName(e.target.value)}
                value={userName}
            /></label> */}
            <h1>Welcome {userName}</h1>
            
            <button onClick={()=>navigate("/game")}>Press to Start</button>
            {/* <button onClick={()=>navigate("/viewscore/"+userName)}>Go directly to the scoreboard</button> */}
    </div>
}