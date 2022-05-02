import React, {useState, useEffect} from 'react'
import axios from 'axios'

function GetOne(props) {
    const [photo, setPhoto] = useState({})
    const [id, setId] = useState(1)
    const [idFromClick, setIdFromClick] = useState(1)

    const handleClick = () => {
        setIdFromClick(id)
    }


    useEffect(()=> {
        axios.get(`https://jsonplaceholder.typicode.com/photos/${idFromClick}`)
        .then(res => {
            console.log(res)
            setPhoto(res.data)
        })
        .catch(Error)
    }, [idFromClick])



  return (
    <div>
        <input type="text" value={id} onChange={e => setId(e.target.value)}/>
        <button type='button' onClick={handleClick}>Get One</button>
        <div>{photo.id}/5000 - {photo.title}</div>
        <img src={photo.url} alt={photo.title}></img>

        {/* <form onSubmit={handleEdit}>
            <input type="text" name='edit' onChange={(e)=>{setEdit(e.target.edit)}} value={edit} />
            <button onClick={sendEdit}> Send </button>
            {
                edit
                ? <h2>{edit}</h2>
                : ""
            }
        </form> */}
    </div>
  )
}

export default GetOne