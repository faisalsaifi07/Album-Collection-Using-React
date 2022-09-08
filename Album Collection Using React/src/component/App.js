import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import '../App.css';
import UpdateAlbum from './UpdateAlbum'
import Home from './Home'
import Navbar from './Navbar'
import Album from './Album'
import Newalbum from "./Newalbum";

export default function App() {
  const [albums, setAlbum] = useState([]);

  useEffect(()=>{
    getAlbums();
  },[]);

  const getAlbums =()=>{
    fetch("https://jsonplaceholder.typicode.com/albums").then((result)=>{
      result.json().then((res)=>{
        setAlbum(res)
      })
    })
  }

  const handleChangeAlbum = (updatedAlbums)=>{
    setAlbum(updatedAlbums);
  }
  return (
    <>
    <div className="App">
     
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/album" element = {<Album albums = {albums} handleChangeAlbum ={handleChangeAlbum} />} />
        <Route path="/newalbum" element = {<Newalbum  albums = {albums} handleChangeAlbum ={handleChangeAlbum}/>} />
        <Route path="/album/:id" element = {<UpdateAlbum albums = {albums} handleChangeAlbum ={handleChangeAlbum} />} />
      </Routes>
      </BrowserRouter>

    </div>
    </>
  );
}

