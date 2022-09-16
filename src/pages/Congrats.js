
import { useNavigate } from "react-router-dom";
export default function Congrats(){
    let navigate=useNavigate()
    return <div style={{padding:"4% 36% "}}>
            <h1 style={{padding:"8% 25%"}}>Great Job</h1>
            <h2>You succesfully guessed all of the images</h2>
            <div style={{padding:"8% 30%"}}>
            <button onClick={()=>navigate("/")}>Back to Home</button>
            </div>
            
        
    </div>
}