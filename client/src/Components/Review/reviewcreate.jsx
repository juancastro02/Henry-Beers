import React, {useState} from 'react'
import Rating from '@material-ui/lab/Rating';
import axios from "axios";

const reviewCreate = ({id, userId}) =>{

    const [review, setReview] = useState({
        calification: parseInt(null),
        commentary: ""  
    });

    const {calification , commentary} = review

    const onChange = (e) => {
     setReview({
         ...review,
         [e.target.name]: e.target.value
     }) 
    } 

    const ReviewPost = async() =>{
        const info = {
            commentary: review.commentary,
            calification: review.calification
        }
     const {data} = await axios.post(`http://localhost:4000/review/product/${id}/user/${userId}`)

    }


    const handleSubmit = (e) => {
       e.preventDefault()
    }


    return(
        <form onSubmit={(e)=>handleSubmit(e)}>
          <div className='stars' >
                    <Rating name="calification" name='calification' value={calification} size="large" onChange={(e)=> onChange(e)} />
         </div>
         <div>
             <input type='text' value={commentary} name='commentary' onChange={(e)=> onChange(e)} />
         </div>
         <button type='submit' onClick={()=>ReviewPost()}>Enviar</button>
        </form>
    )
}

export default reviewCreate

