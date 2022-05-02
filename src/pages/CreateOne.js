import React from 'react'

function CreateOne(props) {
    const [title, setTitle] = useState("")
/*     const [description, setDescription] = useState("")
    const [author, setAuthor] = useState("")
    const [body, setBody] = useState("")
    const [changes, setChanges] = useState([])  */


/* const [empty, setEmpty] = useState([]) */

const handleSubmit = () => {
    setTitle([...title, title])
    console.log(title)
/*     setDescription([...description, description])
    setAuthor([...author, author])
    setBody([...body, body]) */
}



  return (
    <div>
        <input type="text" placeholder='Title' value={title}></input> <br/>
        {/* <input type="text" placeholder='Decription' value={description}></input><br/>
        <input type="text" placeholder='Author' value={author}></input><br/>
  <input style={{height: "200px"}}type="text" placeholder='Body' value={body}></input><br/>*/}
        <button style={{width: "180px"}} onClick={handleSubmit}> SUMBMIT </button> 
    </div>
  )
}

export default CreateOne