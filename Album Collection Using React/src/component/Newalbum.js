import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Newalbum(props) {
    const {albums } = props;

    const [Id, setId] = useState();
    const [userId, setUserId] = useState();
    const [title, setTitle] = useState();

    function saveUser(e) {
        e.preventDefault();
        let data = {Id, userId, title};
        fetch("https://jsonplaceholder.typicode.com/albums", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                Accept : "application/json",
                "Content-type": "application/json; charset=UTF-8",
            },
        }).then((response)=> response.json())
          .then((data)=>{
            let newAlbum = data;
            let prevAlbum = albums;
            prevAlbum.push(newAlbum);
            alert("Album added succefully")
          });
    };
  return (
    <div className="album">
        <h1 id="albumHeading" className="mt-4">
            Add Album To Your List
        </h1>
        <form>
            <Form.Group className="mb-3" controlId="Title">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Title" value={title} onChange = {(e)=> {
                    setTitle(e.target.value)
                }} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Id">
                <Form.Label>Id</Form.Label>
                <Form.Control type="text" placeholder="Id" value={Id} onChange = {(e)=> {
                    setId(e.target.value)
                }} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="UserID">
                <Form.Label>UserID</Form.Label>
                <Form.Control type="text" placeholder="UserID" value ={userId} onChange = {(e)=> {
                    setUserId(e.target.value)
                }} />
            </Form.Group>
            <Button varient ="primary" type ='submit' onClick = {saveUser}>Add To Album</Button>
        </form>
    </div>
  )
}
