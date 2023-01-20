import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { Box, Button,  Checkbox, Grid, GridItem, Text } from '@chakra-ui/react';
import ProductCard from '../Components/ProductCard';
import { Loading } from '../Components/Loading';






const Products = () => {
  const [data,setData] = useState([]);
  const [order,setOrder] = useState("");  // asc or desc
  const [searchQuery,setSearchQuery] = useState("");
  const [loading,setLoading] = useState(true);




  const getPosts = (searchQuery)=>{
    const params =searchQuery ? {q:searchQuery} :{};
    axios.get(`https://json-server-vercel-sage-nu.vercel.app/posts`,{
      params,
    })
    .then((res)=>{
      setData(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  useEffect(()=>{
    getPosts(searchQuery)
  },[searchQuery])


  useEffect(()=>{
    if(order){
      if(order==="asc"){
        const arr =[...data].sort((a,b)=>a.price - b.price);
        setData([...arr]);
      }else if(order==="desc"){
        const arr =[...data].sort((a,b)=>b.price - a.price);
        setData([...arr]);
      }
    }
  },[order])


  setTimeout(()=>{
    setLoading(false)
  },2500)


  if(loading){

    return (  
       <Loading />
      ) 
  
   }

  return (
    <div>
      

      <hr />
      <div className='main-div' style={{
        display:"flex",
        justifyContent:"space-around",
        
       
      }}>

      
      <div className='sort-div' style={{textAlign:"left" ,height:"500px",width:"300px"}}>
      <Grid   p={4}  marginTop={20} gap="15px">
        <Text fontSize="lg" fontWeight="bold">Sort By</Text>
        <Button color='#ff7035' variant='outline' border="1px solid #ff7035" onClick={()=>setOrder("")}>Relevance</Button>
        <Button color='#ff7035' variant='outline' border="1px solid #ff7035" onClick={()=>setOrder("desc")}>Hightest Priced First</Button>
        <Button color='#ff7035' variant='outline' border="1px solid #ff7035" onClick={()=>setOrder("asc")}>Lowest Priced First</Button>
        <Button color='#ff7035' variant='outline' border="1px solid #ff7035">Fastest Shipping</Button>
        <Button color='#ff7035' variant='outline' border="1px solid #ff7035">Newest</Button>
      </Grid>
      <hr />
      <Grid   p={4}   gap="15px">
        <Text fontSize="lg" fontWeight="bold">Brand</Text>
        <Checkbox colorScheme='red' >CasaCraft</Checkbox>
        <Checkbox colorScheme='red' >Woodsworth</Checkbox>
        <Checkbox colorScheme='red' >Febonic</Checkbox>
        <Checkbox colorScheme='red' >Dreamzz Furniture</Checkbox>
        <Checkbox colorScheme='red' >Durian</Checkbox>
        <Checkbox colorScheme='red' >Adorn Homez</Checkbox>
        <Checkbox colorScheme='red' >ARRA</Checkbox>
        <Checkbox colorScheme='red' >Wakefit</Checkbox>
        <Checkbox colorScheme='red' >Vittoria</Checkbox>
        <Checkbox colorScheme='red' >Home Lifestylez</Checkbox>
        <Checkbox colorScheme='red' >Solance Craft</Checkbox>
        <Checkbox colorScheme='red' >Chumbak</Checkbox>
      </Grid>
      </div>
      <div className='grid-div'>
      <Box maxW='4xl' marginTop="30px" >
        <Grid templateColumns="repeat(3,1fr)" gap={2} >
          {data?.length > 0 &&
            data.map((e) => {
              return (

                <GridItem key={e.id}>
                  <ProductCard
                    category={e.category}
                    image={e.image}
                    id={e.id}
                    description={e.description}
                    title={e.title}
                    price={e.price}
                    rating={e.rating.rate}
                    count={e.rating.count}
                  />
                </GridItem>
              )
            })
          }
        </Grid>
        </Box>
      </div>
      </div>
    </div>
  )
}

export default Products