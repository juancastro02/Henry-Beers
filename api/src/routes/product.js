const server = require('express').Router();
const { Product } = require('../db.js');

server.get('/', (req, res, next) => {
	Product.findAll()
		.then(products => {
			res.send(products);
		})
		.catch(next);
});

server.post('/create', (req,res)=>{

	const {name, description, price, stock, image, category} = req.body
	if(!category){
		Product.findOrCreate({where:{
			name, description, price, stock, image
		},defaults: {category:[]} })
	.then(product =>{
			res.status(200).json('Agregado correctamente')
		  })
	.catch(err=>{
			  console.log()
			 res.status(400).json(err)
	})
	}else{
		Product.findOrCreate({where:{
			name, description, price, stock, image,category
		}})
	.then(product =>{
			res.status(200).json('Agregado correctamente')
		  })
	.catch(err=>{
			  console.log()
			  res.status(400).json(err)
	})
	} 
	
	
})

server.put('/update/:id', (req,res)=>{
  const id = req.params.id	
  const {name, description, price, stock, image, category} = req.body
  Product.update({
   name, description, price, stock, image, category
},{where: {id}})
.then((product)=>{
	res.status(200).send('Modificado correctamente')
	console.log(product)
 })
.catch((err)=>{
	res.status(400).json(err)
	console.log(err)
 }) 
})



module.exports = server;




// {
//     "name": "hola",
//     "description": "holaaa",
//     "price": 999,
//     "stock": 324,
//     "image": "sadas",
//     "category": [1,2,3,5]
// }