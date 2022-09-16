import {useState,useEffect} from "react";
//import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { datas as randomDatas } from "../randomUserDatas";
export default function FindRandomUserGame() {

    const [dataIsLoaded,setdataIsLoaded] = useState(false)
    const [user,setUser] = useState(null)
    const [levelPassed,setlevelPassed]=useState(false)
    const [currentRound,setcurrentRound]=useState(1)
    const [buttonDatas,setbuttonDatas]=useState(randomDatas.sort(() => 0.5 -Math.random()).slice(0,4))
    //const userData = window.localStorage.getItem('user1');
    useEffect(() => {
          //setbuttonDatas(randomDatas.sort(() => 0.5 -Math.random()).slice(0,4))
          setUser(buttonDatas[Math.floor(Math.random() * 4)]);
          setdataIsLoaded(true)
          console.log(buttonDatas)
          console.log(user)  
          console.log(currentRound)                                                                              
      }, [levelPassed]); // eslint-disable-line react-hooks/exhaustive-deps

    let navigator= useNavigate()

    const handleClick =(button)=>{
        if(button.imageUrl===user.imageUrl){
            if(currentRound===5){
                setbuttonDatas(randomDatas.sort(() => 0.5 -Math.random()).slice(5,9))
                navigator("/congrats")
            }
            else{
            setbuttonDatas(randomDatas.sort(() => 0.5 -Math.random()).slice(5,9))
            setcurrentRound(num=>num+1)
            setdataIsLoaded(false)
            setlevelPassed(!levelPassed)
            }   
        }
        else if(button.imageUrl!==user.imageUrl){
        navigator("/fail/"+(currentRound-1))
        }
       }


    return <div style={{padding:"1% 40% "}} id="FindRandomUser" >
            <h1>Round {dataIsLoaded ? currentRound:"null"}</h1>
            <img src={dataIsLoaded ? user.imageUrl:"null"}  alt="Person" />
            <div>
                <h3> {dataIsLoaded ? buttonDatas[0].name:"null"} - { dataIsLoaded ? buttonDatas[0].country:"null"}  </h3>
                <button  onClick={()=>handleClick(buttonDatas[0])} disabled={dataIsLoaded ? false : true}>Choose</button> 
            </div>
            <div>
                <h3> {dataIsLoaded ? buttonDatas[1].name:"null"} - { dataIsLoaded ? buttonDatas[1].country:"null"}  </h3>
                <button  onClick={()=>handleClick(buttonDatas[1])} disabled={dataIsLoaded ? false : true}>Choose</button> 
            </div>
            <div>
                <h3> {dataIsLoaded ? buttonDatas[2].name:"null"} - { dataIsLoaded ? buttonDatas[2].country:"null"}  </h3>
                <button  onClick={()=>handleClick(buttonDatas[2])} disabled={dataIsLoaded ? false : true}>Choose</button> 
            </div>
            <div>
                <h3> {dataIsLoaded ? buttonDatas[3].name:"null"} - { dataIsLoaded ? buttonDatas[3].country:"null"}  </h3>
                <button  onClick={()=>handleClick(buttonDatas[3])} disabled={dataIsLoaded ? false : true}>Choose</button> 
            </div>
          <div  style={{ padding:"10% 0% 70%"}}>
          <button style={{margin:"30px", padding:"1% 4% "}} onClick={()=>navigator("/")}>Return Home</button>
          </div>
          <h6 style={{padding:"1% 10% "}}>{dataIsLoaded ? user.name:"null"}</h6>
         </div>
  
}