
import { useNavigate } from "react-router-dom";
export default function Congrats(){
    let navigate=useNavigate()
    return <div>
            <h1>Great Job</h1>
            <button onClick={()=>navigate("/")}>Back to Home</button>
        
    </div>
}