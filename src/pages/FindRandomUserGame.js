import {useState,useEffect, useRef} from "react";
//import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { datas as randomDatas } from "../randomUserDatas";
export default function FindRandomUserGame() {

    const [dataIsLoaded,setdataIsLoaded] = useState(false)
    const [user,setUser] = useState(null)
    const [levelPassed,setlevelPassed]=useState(false)
    const [currentRound,setcurrentRound]=useState(1)
    const [buttonDatas,setbuttonDatas]=useState(randomDatas.sort(() => 0.5 -Math.random()).slice(0,4))
    const randomBool = useRef(() => Math.random() >= 0.5)
    //const userData = window.localStorage.getItem('user1');
    useEffect(() => {
          //setbuttonDatas(randomDatas.sort(() => 0.5 -Math.random()).slice(0,4))
          setUser(buttonDatas[Math.floor(Math.random() * 4)]);
          randomBool.current=randomBoolean()
          setdataIsLoaded(true)
          console.log(user)  
          console.log(currentRound)                                                                              
      }, [levelPassed]);

    let navigator= useNavigate()
    console.log(randomDatas.sort(() => 0.5 -Math.random()))

    const handleClick =(button)=>{
        if(button.imageUrl===user.imageUrl){
            if(currentRound===5){
                setbuttonDatas(randomDatas.sort(() => 0.5 -Math.random()).slice(0,4))
                navigator("/congrats")
            }
            else{
            setdataIsLoaded(false)
            setlevelPassed(!levelPassed)
            setcurrentRound(num=>num+1)
            }   
        }
        else if(button.imageUrl!==user.imageUrl){
        navigator("/fail/"+(currentRound))
        }
       }

    const randomBoolean = () => Math.random() >= 0.5; 

    return <div id="FindRandomUser" >
            <h1>Round {dataIsLoaded ? currentRound:"null"} {dataIsLoaded ? user.name:"null"} </h1>
            <img src={dataIsLoaded ? user.imageUrl:"null"} alt="Person" />
            <div>
                <h3> {dataIsLoaded ? buttonDatas[0].name:"null"}  { dataIsLoaded ? buttonDatas[0].country:"null"} right </h3>
                <button  onClick={()=>handleClick(buttonDatas[0])} disabled={dataIsLoaded ? false : true}>Choose</button> 
            </div>
            <div>
                <h3> {dataIsLoaded ? buttonDatas[1].name:"null"}  { dataIsLoaded ? buttonDatas[1].country:"null"} right </h3>
                <button  onClick={()=>handleClick(buttonDatas[1])} disabled={dataIsLoaded ? false : true}>Choose</button> 
            </div>
            <div>
                <h3> {dataIsLoaded ? buttonDatas[2].name:"null"}  { dataIsLoaded ? buttonDatas[2].country:"null"} right </h3>
                <button  onClick={()=>handleClick(buttonDatas[2])} disabled={dataIsLoaded ? false : true}>Choose</button> 
            </div>
            <div>
                <h3> {dataIsLoaded ? buttonDatas[3].name:"null"}  { dataIsLoaded ? buttonDatas[3].country:"null"} right </h3>
                <button  onClick={()=>handleClick(buttonDatas[3])} disabled={dataIsLoaded ? false : true}>Choose</button> 
            </div>
          <button style={{margin:"150px"}} onClick={()=>navigator("/")}>Return Home</button>
         </div>
  
}