// import React, {useEffect} from 'react';
// import Rating from '@material-ui/lab/Rating';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
// import { useSelector, useDispatch } from 'react-redux';
// import { getReviews  } from '../../Redux/review';
// import axios from 'axios'



// //Muestra todas las review de un producto
// export default  function Review (){
//   const dispatch = useDispatch();
//   const reviews = useSelector(store => store.review.reviews);
    

// useEffect(()=>{
//   dispatch(getReviews())
// }, [reviews] )

//     return ( 
//     <div>
//         {reviews.map((rev)=>(
//         <div key={rev.id}> 
//         <Box component="fieldset" mb={3} borderColor="transparent">
//         <Typography component="legend">Calificación del Producto</Typography>
//         <Rating
//           name="simple-controlled"
//           value={rev.calification }
//         />
//         <Typography component='h2'>Fecha de creación: {rev.createAt } </Typography>
//         <Typography component='h2'>Descripción o comentario: {rev.commentary} </Typography>
//         </Box>       
//         </div> ))}
//         </div>
//     );
// };



