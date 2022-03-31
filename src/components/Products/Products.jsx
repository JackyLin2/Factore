import React from 'react'
import { Grid } from '@material-ui/core'
import Product from './Product/Product'


const products = [ 
    {id: 1, name:'Shoes', description: ' Sneaker shoes', price: "$5"},
    {id: 2, name:'Ties', description: 'Bow Tie',price: "$5"},
    {id: 3, name:'Shorts', description: 'Nike Shorts', price: "$5"}      
]

fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>console.log(json))


function Products() {

  return (
    <main>  
        <Grid container justtify='center' spacing = {4}> 
            {
                products.map((product) => (
                    <Grid key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product}/>
                    </Grid>
                ))
            }
        </Grid>
    </main>
  )
}

export default Products