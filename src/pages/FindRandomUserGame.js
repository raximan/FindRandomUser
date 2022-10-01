import "../css/FindRandomUser.css"
import {useState,useEffect} from "react";
//import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { datas as randomDatas } from "../randomUserDatas";
import { Button,Grid,Typography } from "@mui/material";
//Robofont
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export default function FindRandomUserGame() {

    const [dataIsLoaded,setdataIsLoaded] = useState(false)
    const [user,setUser] = useState(null)
    const [levelPassed,setlevelPassed]=useState(false)
    const [currentRound,setcurrentRound]=useState(1)
    const [ButtonDatas,setButtonDatas]=useState(randomDatas.sort(() => 0.5 -Math.random()).slice(0,4))
    //const userData = window.localStorage.getItem('user1');
    useEffect(() => {
          //setButtonDatas(randomDatas.sort(() => 0.5 -Math.random()).slice(0,4))
          setUser(ButtonDatas[Math.floor(Math.random() * 4)]);
          setdataIsLoaded(true)
          console.log(ButtonDatas)
          console.log(user)  
          console.log(currentRound)                                                                              
      }, [levelPassed]); // eslint-disable-line react-hooks/exhaustive-deps

    let navigator= useNavigate()

    const handleClick =(Button)=>{
        if(Button.imageUrl===user.imageUrl){
            if(currentRound===5){
                setButtonDatas(randomDatas.sort(() => 0.5 -Math.random()).slice(5,9))
                navigator("/congrats")
            }
            else{
            setButtonDatas(randomDatas.sort(() => 0.5 -Math.random()).slice(5,9))
            setcurrentRound(num=>num+1)
            setdataIsLoaded(false)
            setlevelPassed(!levelPassed)
            }   
        }
        else if(Button.imageUrl!==user.imageUrl){
        navigator("/fail/"+(currentRound-1))
        }
       }


    return <div  id="FindRandomUser" >
            <div id="Head">   
            <Typography variant="h5" className="centerinFindRandomUser" id="Round">ROUND: {dataIsLoaded ? currentRound:"null"}</Typography>
            <img className="centerinFindRandomUser" src={dataIsLoaded ? user.imageUrl:"null"}  alt="Person" />
            </div>
            <Grid container spacing={4}>
            <Grid className="GridItem" item xs={6}>
                
                    <Typography className="GridItemText"  > {dataIsLoaded ? ButtonDatas[0].name:"null"} - { dataIsLoaded ? ButtonDatas[0].country:"null"}  </Typography>
                    <Button className="GridButton" variant="contained"  onClick={()=>handleClick(ButtonDatas[0])} disabled={dataIsLoaded ? false : true}>Choose</Button> 
                   
            </Grid>
            <Grid className="GridItem" item xs={6}>
                
                    <Typography className="GridItemText" > {dataIsLoaded ? ButtonDatas[1].name:"null"} - { dataIsLoaded ? ButtonDatas[1].country:"null"}  </Typography>
                    <Button className="GridButton" variant="contained"  onClick={()=>handleClick(ButtonDatas[1])} disabled={dataIsLoaded ? false : true}>Choose</Button> 
                
            </Grid>
            <Grid className="GridItem" item xs={6}>
                
                    <Typography className="GridItemText" > {dataIsLoaded ? ButtonDatas[2].name:"null"} - { dataIsLoaded ? ButtonDatas[2].country:"null"}  </Typography>
                    <Button className="GridButton" variant="contained"  onClick={()=>handleClick(ButtonDatas[2])} disabled={dataIsLoaded ? false : true}>Choose</Button> 
                
            </Grid>
            <Grid className="GridItem" item xs={6}>
                
                    <Typography className="GridItemText" > {dataIsLoaded ? ButtonDatas[3].name:"null"} - { dataIsLoaded ? ButtonDatas[3].country:"null"}  </Typography>
                    <Button className="GridButton" variant="contained"  onClick={()=>handleClick(ButtonDatas[3])} disabled={dataIsLoaded ? false : true}>Choose</Button> 
                
            </Grid>
            </Grid>
    

          <Button className="centerinFindRandomUser" id="ReturnHome"  onClick={()=>navigator("/")}>Return Home</Button>

          <h6 style={{padding:"45% 10% "}}>{dataIsLoaded ? user.name:"null"}</h6>
         </div>
  
}