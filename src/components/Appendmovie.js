import React ,{useState}from 'react'
import{Button,Modal}from 'react-bootstrap'

function Example({movies, setMovies}) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [title , setTitle]=useState('');
    const [description , setdescription]=useState('')
    const [posterURL , setposterURL]=useState('')
    const [Rate , setRate]=useState(0)
    const Add=()=>setMovies([...movies,{id:Math.random(), title,posterURL, description ,   rate:Rate }])
  
    return (
      <>
        <Button variant="primary" onClick={handleShow} className="a">
          Wanna add your favourite ? 
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>APPEND YOUR MOVIE</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <label>Title: <input type='text' value={title}onChange={(e)=>setTitle(e.target.value)}></input></label>
              <label>Description: <input type='text'value={description}onChange={(e)=>setdescription(e.target.value)}></input></label>
              <label>Poster url: <input type='text'value={posterURL}onChange={(e)=>setposterURL(e.target.value)}></input></label>
              <label>Rating: <input type='text'value={Rate}onChange={(e)=>setRate(e.target.value)}></input></label>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              close
            </Button>
            <Button variant="primary" onClick={Add}>
              save changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default Example 