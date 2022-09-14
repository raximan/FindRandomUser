import FindRandomUserGame from './pages/FindRandomUserGame'
import{BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './pages/Home';
import Fail from './pages/Fail';
import Congrats from './pages/Congrats';
import ViewScore from './pages/ViewScore';
export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/game" element={<FindRandomUserGame />} />
          <Route path="/fail/:score" element={<Fail />} />
          <Route path="/congrats" element={<Congrats />} />
          <Route path="/viewscore/:userName" element={<ViewScore />} />
      </Routes>
    </BrowserRouter>
  )
}
