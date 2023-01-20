// import { useDisclosure } from '@chakra-ui/react';
// import React, { useContext, useRef } from 'react'
// import { CartContext } from '../Context/CartContext/CartContextProvider'
// import {checkout,removeFromCart} from "../Context/CartContext/action"
// const Cart = () => {
//     const {state,dispatch} = useContext(CartContext);
//     const {isOpen,onOpen,onClose} = useDisclosure();
//     const cancelRef = useRef()


//     const handleCheckout = () => {
//         dispatch(checkout())
//         onClose()
//     }


//   return (
//     <div>Cart</div>
//   )
// }

// export default Cart

import {
    Box,
    Heading,
    Text,
    Stack,
    Image,
    Flex,
    Button,
    CardFooter,
    Divider,
    Card,
    CardBody,
    Container,
    Badge,
  } from '@chakra-ui/react';
import axios from 'axios';
import {  useEffect,  useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import "./Cart.css";
import { FiShoppingCart } from 'react-icons/fi';




export default function Cart() {
    const [cart ,setCart] = useState({})
    const {id} = useParams();
    const [count,setCount] = useState(1)
    

   

    useEffect(()=>{
       axios.get(`https://json-server-vercel-sage-nu.vercel.app/posts/${id}`).then(({data})=>{
        setCart(data);
       })
    },[id])

    const {image,price ,title} = cart;

    const handleAdd =()=>{
        setCount(count+1)
    }

    const handleSub =()=>{
        setCount(count-1)
    }
    return (
    <div>
        <Container maxW={'7xl'}>
    </Container>
    <Flex p={50} w="full" alignItems="center" justifyContent="center " gap={4}>
       <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' textAlign="left">

<Image src={image} />

<Box p='6'>
<Box display='flex' alignItems='baseline'>
    <Badge borderRadius='full' px='2' colorScheme='teal'>
      {Math.floor(Math.random() * 100)}%off
    </Badge>
    
  </Box>

  <Box
    mt='1'
    fontWeight='semibold'
    as='h4'
    lineHeight='tight'
    noOfLines={1}
  >
    {title}
  </Box>

  <Box color={"#ff7035"} fontWeight="bold">
  ₹{price}
    <Box as='span' color='#ff7035' fontSize='sm'>
      /- 
    </Box>
    
  </Box>
  
  <Button colorScheme='grey' variant='outline' borderRadius="20px" disabled={count===1} onClick={()=>handleSub(-1)}>
    -
  </Button>
  <Button colorScheme='teal' variant='ghost'>
    {count}
  </Button>
  <Button colorScheme='teal' variant='outline' borderRadius="20px" onClick={()=>handleAdd(1)}>
    +
  </Button>
  
  </Box>
  
</Box>
      <Card maxW='sm' marginLeft={300} marginBottom={200} padding="0px 50px">
  <CardBody>
    
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Order Summary</Heading>
      <Text>
       <Flex gap={10}>
        <Text>Price :-</Text>
        <Text>₹ {price}</Text>
       </Flex>
       <hr/>
       <br/>
       <Flex gap={10}>
        <Text>Quantity :-</Text>
        <Text>* {count}</Text>
        </Flex>
        <hr/>
        <br/>
       <Flex gap={10}>
       <Text>Delivery Charges :-</Text>
        <Text>Free</Text>
       </Flex>
       <hr/>
        <br/>
      </Text>
      
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <Text fontSize="xl" >Total Bill = ₹ {Math.floor(count * price)}</Text>
  </CardFooter>
  <NavLink to="/payments">
  <Button  color='#ff7035' border="1px solid #ff7035" variant='outline'>Proceed To Checkout <FiShoppingCart/> </Button>
  </NavLink>
</Card>
</Flex>
    </div>
    );
  }