import { Button } from "flowbite-react";
import Users from "./components/Users";
import UsersData from './components/Users.json'
import Signup from "./components/Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  // console.log(data)
  return (
    <>
  
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Users Users={UsersData}/> }/>
      <Route path="/sign-up" element={<Signup/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}