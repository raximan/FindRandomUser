import { useParams } from "react-router-dom";
export default function ViewScore(){
    let {userName} = useParams()
    
    return(<div>
            <h1>Hey {userName} </h1>
          </div>
    )
          
}