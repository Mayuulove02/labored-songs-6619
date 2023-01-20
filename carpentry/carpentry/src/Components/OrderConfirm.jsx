import { Button, Container, VStack } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";


const OrderConfirm = () => {



  const navigate = useNavigate();
  

  return (
    <div>
      <Container maxW={'7xl'}>
  
  
  
  </Container>
      <VStack margin="auto"  style={{marginTop:"50px", marginBottom:"80px",}} >
        <div>
          <img 
          
            src="https://www.pinkwigscloset.com/images/success-tick.gif"
            alt="img"
          />
        </div>
       
        <Button width="50%"  style={{marginTop:"20px"}}  onClick={()=>navigate("/")} fontSize="x" padding={3} w="50%" border="1px solid grey"> CONTINUE SHOPPING  </Button>
      </VStack>
    </div>
  );
};

export default OrderConfirm;
