import Chat from './Components/Chat/Chat';
import { Routes, Route } from "react-router-dom";
import MobileView from './Components/View/MobileView';
import WebView from './Components/View/WebView';
import Login from './Components/Loging';
import Status from './Components/Status';
import Call from './Components/Call';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/userlist" element={ window.innerWidth <= 600? <MobileView/> : <WebView/> }></Route>
        <Route path="/Chat" element={<Chat/>}></Route>
        <Route path="/status" element={<Status/>}></Route>
        <Route path="/call" element={<Call/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
