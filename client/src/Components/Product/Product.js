import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {getcerveza} from '../../Redux/beer'
import './Product.css'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ReviewCreate from '../Review/reviewcreate'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));


const Product = ({data, userId}) => {
 
  const dispatch = useDispatch()
  const beer = useSelector(store => store.beer.beer)
  // console.log(userId)
  // console.log(data.id)
  // console.log(data[0])
  // console.log(data[0][id])
  useEffect(()=>{
    dispatch(getcerveza(data[0]))
  },[])
  console.log(beer)
  console.log(beer.name)
  const classes = useStyles();
    return (
      <div style={{backgroundColor: "gray", height: "600px"}} >
        <div style={{paddingTop: "20px"}} >
          <div className="card text-center" style={{backgroundColor: "whiteSmoke", color: "black", marginLeft: "auto", marginRight: "auto", width: "500px"}} >
          <a href="javascript:history.back(1)" className='btn1' style={{marginTop: "10px"}} >
             <div  >
             <Button variant="contained" color="secondary"  >
              X
            </Button>
            </div></a>
            <h2 className="card-title">{beer.name}</h2><hr/>
                    <div class="card-body">
                      <div  >
                    <img src={beer.image} style={{width: "400px", height: "200px"}} />
                    </div><br/>
                <p className="card-text">{beer.description}</p>
              </div><hr/>
              <div>
                   <h5>${beer.price}</h5>
              </div>
                  <div className="card-footer text-muted"   >
                         <h5 style={{color: "black"}} >Stock:{beer.stock}</h5> 
               </div>
          </div> 
          </div>

          <div>
            {/* <ReviewCreate id={beer.id} userId={userId}/> */}
          </div>
          <div>
            
          </div>


          </div>
    );
}

export default Product