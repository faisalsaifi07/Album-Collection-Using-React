import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-light">
      <Link class="navbar-brand" Link to="/">Home</Link>
      <Link class="navbar-brand" Link to="/album">Album</Link>
      <Link class="navbar-brand" Link to="/newalbum">+Add Album</Link>
    </nav>
  )
}
