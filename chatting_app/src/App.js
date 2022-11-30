import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import InputFeild from './Components/InputField';
import { Box,Flex, Spacer, VStack } from '@chakra-ui/react';

import { Routes, Route } from "react-router-dom";
import MobileView from './Components/MobileView';
import WebView from './Components/WebView';
import Loging from './Components/Loging';
import Status from './Components/Status';
import Call from './Components/Call';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Loging/>}></Route>
        <Route path="/userlist" element={window.innerWidth <= 600?<MobileView/>:<WebView/>}></Route>
        <Route path="/singleUser" element={<InputFeild/>}></Route>
        <Route path="/status" element={<Status/>}></Route>
        <Route path="/call" element={<Call/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
