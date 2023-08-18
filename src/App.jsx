import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import NewPlayerForm from "./components/NewPlayerForm";
import SinglePlayer from "./components/SinglePlayer";
import AllPlayers from './components/AllPlayers';
import './App.css'
import fetchAllPlayers from "./API/index"

function App() {


  return (
    <>
    <BrowserRouter>
    <div class="header">
    <h1>˖⁺‧₊˚ ♡ ˚₊‧⁺˖Puppy Bowl˖⁺‧₊˚ ♡ ˚₊‧⁺˖</h1>
  </div>
      <div id="navbar">
        <NavBar />
      </div>

    <Routes>
        <Route path='/' element={<AllPlayers/>} />
        <Route path='/players/:id' element={<SinglePlayer />} />
        <Route path='/newplayer' element={<NewPlayerForm />} />
    </Routes>
</BrowserRouter>

{/* <NewPlayerForm /> */}
    </>
  )
}

export default App
