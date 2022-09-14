import {useState,useEffect, useRef} from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { datas as randomDatas } from "../randomUserDatas";
export default function FindRandomUserGame() {

    const [dataIsLoaded,setdataIsLoaded] = useState(false)
    const [user,setUser] = useState(null)
    const [levelPassed,setlevelPassed]=useState(false)
    const [round,setRound]=useState(0)
    const randomBool = useRef(() => Math.random() >= 0.5)

    const userData = window.localStorage.getItem('user1');

    useEffect(() => {
        const fetchData = async () => {
          const result = await axios.get('https://randomuser.me/api/') 
            .catch((error)=> {
                if (error.response) {
                // Request made and server responded
                console.log("response.data"+error.response.data);
                console.log("response.status"+error.response.status);
                console.log("response.headers"+error.response.headers);
                } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error.message', error.message);
                }
                });
                
          setUser(result.data.results[0]);
          randomBool.current=randomBoolean()
          setdataIsLoaded(true)
        };
     console.log("Use Effect")
        fetchData();
      }, [levelPassed]);

    let navigator= useNavigate()

    const handleClick =(boolean)=>{
        if(boolean===true){
            if(round===4){
                navigator("/congrats")
            }
            else{
            setdataIsLoaded(false)
            setlevelPassed(!levelPassed)
            setRound(num=>num+1)
            }   
        }
        if(boolean===false){
        navigator("/fail/"+(round+1))
        }
       }

    const randomBoolean = () => Math.random() >= 0.5; 

    function RenderButtons(){
          if(randomBool.current===true){
              return(<div>
                <div>
                <h3>{dataIsLoaded ? user.name.title:"null"} {dataIsLoaded ? user.name.first:"null"} { dataIsLoaded ? user.name.last:"null"} { dataIsLoaded ? user.location.country:"null"} { dataIsLoaded ? user.picture.large:"null"}</h3>
                <button  onClick={()=>handleClick(true)} disabled={dataIsLoaded ? false : true}>Choose</button> 
            </div>
            <div>
                <h3>{dataIsLoaded ? randomDatas[round].name:"null"} { dataIsLoaded ? randomDatas[round].country:"null"}</h3>
                <button  onClick={()=>handleClick(false)} disabled={dataIsLoaded ? false : true}>Choose</button> 
            </div>
            </div>
              )
          }
          else if(randomBool.current===false){
            return(
              <div>
                  <div>
                      <h3>{dataIsLoaded ? randomDatas[round].name:"null"} { dataIsLoaded ? randomDatas[round].country:"null"}</h3>
                      <button  onClick={()=>handleClick(false)} disabled={dataIsLoaded ? false : true}>Choose</button> 
                  </div>
                  <div>
                      <h3>{dataIsLoaded ? user.name.title:"null"} {dataIsLoaded ? user.name.first:"null"} { dataIsLoaded ? user.name.last:"null"} { dataIsLoaded ? user.location.country:"null"} { dataIsLoaded ? user.picture.large:"null"}</h3>
                      <button  onClick={()=>handleClick(true)} disabled={dataIsLoaded ? false : true}>Choose</button> 
                  </div>
              </div>
            )
          }
    }

    return <div id="FindRandomUser" >
            <h1>Round {dataIsLoaded ? round+1:"null"}</h1>
            <img src={dataIsLoaded ? user.picture.large:"null"} alt="Person" />
            <RenderButtons/>
          <h1>{JSON.parse(userData).name}</h1>
          <button onClick={()=>navigator("/")}>Return Home</button>

         </div>
  
}