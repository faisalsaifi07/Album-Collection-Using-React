import React from 'react'
import Table from "react-bootstrap/Table";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function Album(props) {
  const {albums, handleChangeAlbum} = props;

  const deleteUser = (id)=>{
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}`,{
      method: 'DELETE',
    }).then((result)=>{
      result.json().then((res)=>{
        let updatedAlbums = albums.filter((album)=> album.id !==id);
        alert("Album Deleted");
        handleChangeAlbum(updatedAlbums)
      });
    });
  }

  const mappedAlbum = albums
     .sort((a,b)=> a.id - b.id)
     .map((album, index)=>{
      return (
        <tr>
          <td className='text-center'>{index + 1}</td>
          <td className='text-center' colSpan= "2">{album.title}</td>
          <td className='text-center'><Button size='lg' variant="primary" className='mb-4' >
            <Link style ={{color: "white", textDecoration: "none"}} to ={`/album/${album.id}`}>Update</Link></Button>
            <Button size="lg" variant="danger" onClick ={()=> deleteUser(album.id)} className="mb-4">Delete</Button>
            </td>
        </tr>
      );
     });

    const emptyAlbum = (
      <tr>
        <td colSpan="4" className="text-center"><Spinner varient ='info' animation= 'grow' /></td>
      </tr>
    );

    return (
      <div>
        <Table striped bordered hover varient = 'dark'>
          <thead>
            <tr>
              <th className='text-center'>No.</th>
              <th className='text-center' colSpan='2'>Album Name</th>
              <th className='text-center'>Action</th>
            </tr>
          </thead>
          <tbody>{mappedAlbum.length>0 ? mappedAlbum : emptyAlbum}</tbody>
        </Table>
      </div>
    )
  
}
