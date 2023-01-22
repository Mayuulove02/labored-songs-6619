
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
   
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';


export default function Form() {
    const [formData,setFormData] = useState({
        title:"",
        price:"",
        category:"",
        image:""
    })
  
    const handleSubmit =(e)=>{
        e.preventDefault();
        axios.post(`https://json-server-vercel-sage-nu.vercel.app/posts`,{
            ...formData,
        }
        )
        .then((res)=>console.log(res));
    }
  

  return (
      <div className = "addHouseContainer" >
        <form className = "form" onSubmit={handleSubmit}>
            <Flex
      minH={'100vh'}
      
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Hello Admin</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            Welcome to add new <Link color={'blue.400'}>Products</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
          width="400px"
          >
          <Stack spacing={4}>
            <FormControl id="title">
              <FormLabel>Title</FormLabel>
              <Input type="text"  onChange={(e)=>setFormData({...formData,title:e.target.value})} value={formData.title}/>
            </FormControl>
            <FormControl id="price">
              <FormLabel>Price</FormLabel>
              <Input type="number" onChange={(e)=>setFormData({...formData,price:e.target.value})} value={formData.price}/>
            </FormControl>
            <FormControl id="category">
              <FormLabel>Category</FormLabel>
              <Input type="text" onChange={(e)=>setFormData({...formData,category:e.target.value})} value={formData.category}/>
            </FormControl>
            <FormControl id="image">
              <FormLabel>Image</FormLabel>
              <Input type="url" onChange={(e)=>setFormData({...formData,image:e.target.value})} value={formData.image}/>
            </FormControl>
            <Stack spacing={10}>
              
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }} 
                onClick={handleSubmit}
                marginTop="20px"
                >
                Submit
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
        </form>
      </div>
  )
}

