import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Styling from "./GetAll.module.css"

function GetAll() {
    const [photos, setPhotos] = useState([])

    useEffect(()=> {
        axios.get("https://jsonplaceholder.typicode.com/photos")
        .then(res => {
            console.log(res)
            setPhotos(res.data)
        })
        .catch(Error)
    }, [])



   /*  function sendEdit(){
        let 
        console.log("heeejjjj")
    } */



     let arr = []
     const deleteBtn = (id) => {
        photos.forEach((item) => {
          if (item.id !== id) {
            arr.push(item)
          }
        })
        setPhotos(arr)
        console.log(arr)
      } 

  return (
    <div>
        <br/>
        <div>Showing {photos.length} out of 5000</div>
        <ul>
            {
                photos.map(photo => 
                (<li key={photo.id}>{photo.title}
                <button className={Styling.updateBtn} /* onClick={sendEdit} */> Update </button>
                <button className={Styling.deleteBtn} onClick={() => deleteBtn(photo.id)}> Delete </button>
                </li>))
            }
        </ul>
    </div>
  )
}

export default GetAll