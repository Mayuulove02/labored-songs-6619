
import React, { useContext } from "react";

import {  Box, Button, Center, Heading,Image, Input, Spinner, Stack, Text, useToast, VStack} from "@chakra-ui/react"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContextProvider";
import { Loading } from "../Components/Loading";
import Navbar from "../Components/Navbar";
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { SiLinkedin, SiMessenger } from 'react-icons/si';




const Login = () => {

  const { loginUser, isAuth } = useContext(AuthContext);
    
  const [isLoading, setLoading] = useState(false);
  
  const [Name, setName] = useState("");
  const [Number, setNumber] = useState("");

  const navigate = useNavigate();
  const toast = useToast()
  // console.log(Name,Number)

 console.log(isAuth)
  
  const handleClick = () => {
    setLoading(true);

    setTimeout(() => {

       
      prompt("ENTER OTP")  
      toast({
        title: 'Login Successful.',
      
        description: "Redirecting To Home Page....",
        status: 'success',
        duration: 3000,
        isClosable: true,
      })

      setLoading(false);
      loginUser(Name)
      console.log(Name)
      navigate("/");
    }, 2000);
  };

 
 // is Loading   // 
 const [isPageLoading, setPageIsLoading] = useState(true);

 setTimeout(() => {
 setPageIsLoading(false)
 
 }, 1500);
  

 // console.log(data)

 if(isPageLoading){

  return (
  
    
     <Loading/>
   

    ) 

 }

  return (
    <>
    <Navbar />
      <Stack  direction={{base:"column" ,sm:"column", md:"row"}}  marginTop="20px" >
        
        <VStack 
       
        alignSelf="center" height={{base:"30vh" ,sm:"30vh", md:"80vh"}} width={{base:"300px", sm:"300px", md:"50%"}} >
          
          <Image src="https://ii1.pepperfry.com/media/wysiwyg/banners/Web_IMG_17Dec1x_1901.jpg" />
        </VStack>

        {/* <VStack   
        spacing={5}
        alignSelf="center"  
        w={{base:"300px",sm:"420px", md:"50%"}}  >
          <h2 style={{fontWeight :"bold"}}>Log in / Sign up</h2>
          <p>
            for Latest trends, exciting offers and everything DigiShop!
          </p>
          <Input
        minH={{base:"40px", md:"50px"}}
          w={{base:"300px",sm:"420px", md:"420px"}}
            style={{
             
              height: "60px",
              borderRadius: "5px",
              textAlign: "center",
              fontSize: "15px",
             
              border: "1px solid black",
            }}
            id="mobile_number"
            name="name"
            placeholder="Enter Your Name"
            value={Name}
            onChange={(e) => setName(e.target.value)}
          
          />
          <Input
minH={{base:"40px", md:"50px"}}
          w={{base:"300px", sm:"420px"}}
            style={{
             
              height: "60px",
              borderRadius: "5px",
              textAlign: "center",
              fontSize: "15px",
            
              border: "1px solid black",
            }}
         
            id="mobile_number"
            name="mobile"
            placeholder="Enter Mobile Number"
            value={Number}
            onChange={(e) => setNumber(e.target.value)}

          />

          <Button
         
           w={{base:"300px", sm:"420px"}}
            style={{
              backgroundColor: "blue",
              border: "none",
              color: " white",
              padding: "15px 32px",
              textAlign: "center",
              textDecoration: "none",
              display: "inline-block",
              fontSize: "20px",
              fontWeight: "600",
              borderRadius: "5px",
         
              height: "60px",
              textTransform: "uppercase",
             
            }}
            onClick={handleClick}
          >

            
            {!isLoading && "REGISTER"}
            {isLoading && (
              <Spinner
                thickness="4px"
                speed="0.55s"
                emptyColor="gray.200"
                color="blue.500"
                size="lg"
              />
            )}


          </Button>
          <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <div >--------------</div>
            <p >{`  OR  `} </p>
            <div >--------------</div>
          </div>

          <Button 
           w={{base:"300px", sm:"420px"}}
            style={{

              backgroundColor: "white",
              color: " #6B6B6B",
              padding: "5px 40px 10px 40px",
              textAlign: "center",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              fontSize: "16px",
              fontWeight: "600",
              border: "1px solid black",
              borderRadius: "5px",
              margin: "10px",
            
            }}
            onClick={handleClick}
          >
            <img
              style={{ width: "20px", margin: "0 15px 0px 15px" }}
              src="https://images.bewakoof.com/web/carbon-email-1620039620.png"
              alt=""
            />
            CONTINUE WITH EMAIL
          </Button>
          <HStack >
            <a
              href={`https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=https%3A%2F%2Fheady%2drabbits%2d8947%2eherokuapp%2ecom%2Fusers%2Fauth%2Fgoogle%2Fcallback&client_id=${process.env.REACT_APP_GOOGLE_CLIENTID}&response_type=code&prompt=consent&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email`}
            >
              <Button
             
                style={{
                  backgroundColor: "white",
                  color: " #6B6B6B",
                  padding: "5px 40px 5px 30px",
                  textAlign: "center",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  fontWeight: "600",
                  fontSize: "16px",
                  border: "1px solid black",
                  borderRadius: "5px",
                  margin: "2px",
                }}
              >
                <img
                  style={{ width: "20px", margin: "0px 15px 0px 10px" }}
                  src="https://images.bewakoof.com/web/group-3-2x-1558356035.png"
                  alt=""
                />
                GOOGLE
              </Button>
            </a>

            <a href="https://www.facebook.com/login.php?skip_api_login=1&api_key=1548728332017744&kid_directed_site=0&app_id=1548728332017744&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Foauth%3Fclient_id%3D1548728332017744%26scope%3Dpublic_profile%252Cemail%252Cuser_birthday%252Cuser_gender%252Cuser_hometown%252Cuser_location%26response_type%3Dtoken%26redirect_uri%3Dhttps%253A%252F%252Fwww.bewakoof.com%252Flogin%252Ffacebook%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3Dba16d91c-1c50-4965-97e6-31128372d4c2%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.bewakoof.com%2Flogin%2Ffacebook%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%23_%3D_&display=page&locale=en_GB&pl_dbl=0">
              <Button
                style={{
                  backgroundColor: "white",
                  color: " #6B6B6B",
                  padding: "5px 25px 5px 20px",
                  textAlign: "center",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  fontWeight: "600",
                  fontSize: "16px",
                  border: "1px solid black",
                  borderRadius: "5px",
                  margin: "2px",
                }}
              >
                <img
                  style={{ width: "20px", margin: "0px 15px 0px 10px" }}
                  src="https://images.bewakoof.com/web/bi-facebook2x-1620886445.png"
                  alt=""
                />
                FACEBOOK
              </Button>
            </a>
          </HStack>
          <HStack style={{ textAlign: "center" }}>
            <p
          
              style={{
              
                height: "30px",
                margin: "auto",
                marginTop: "30px",
                color: "gray",
              }}
            >
              By creating an account or logging in, you agree with DigiShop's
              <a
                style={{
                  textDecoration: "none",
                  color: "#1CB4C0",
                  fontWeight: "800",
                }}
                href="https://www.bewakoof.com/terms-and-conditions"
                target="_blank"
                rel="noreferrer"
              >
                &nbsp;Terms and Conditions{" "}
              </a>
              and
              <a
                style={{
                  textDecoration: "none",
                  color: "#00AFAF",
                  fontWeight: "800",
                }}
                href="https://www.bewakoof.com/privacy-policy-and-disclaimer"
                target="_blank"
                rel="noreferrer"
              >
                &nbsp;Privacy Policy
              </a>
              .
            </p>
          </HStack>
        </VStack> */}
        <Stack
          bg={'gray.50'}
          rounded={'xl'}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: 'lg' }}>
          <Stack spacing={4}>
            <Heading
              color={'gray.800'}
              lineHeight={1.1}
              fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
              
              <Text
                as={'span'}
                bgGradient="linear(to-r, red.400,pink.400)"
                bgClip="text">
                For Latest trends, exciting offers and everything Carpentry
              </Text>
            </Heading>
            <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
              
            </Text>
          </Stack>
          <Box as={'form'} mt={10} marginTop="30px">
            <Stack spacing={4}>
              <Input
                placeholder="Enter Your Name"
                bg={'gray.100'}
                border={0}
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500',
                }}
                value={Name}
            onChange={(e) => setName(e.target.value)}
              />
              <Input
                
                bg={'gray.100'}
                border={0}
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500',
                }}
                id="mobile_number"
            name="mobile"
            placeholder="Enter Mobile Number"
            value={Number}
            onChange={(e) => setNumber(e.target.value)}
              />
             
            </Stack>
            <Button
              fontFamily={'heading'}
              mt={8}
              w={'full'}
              onClick={handleClick}
              >
               {!isLoading && "REGISTER"}
            {isLoading && (
              <Spinner
                thickness="4px"
                speed="0.55s"
                emptyColor="gray.200"
                color="blue.500"
                size="lg"
              />
            )}
            </Button>
            <Stack spacing={2} align={'center'} maxW={'md'} w={'full'} marginTop="10px">
        {/* Facebook */}
        <Button w={'full'} colorScheme={'facebook'} leftIcon={<FaFacebook />}  >
          <Center>
            <Text>Continue with Facebook</Text>
          </Center>
        </Button>

        {/* Google */}
        <Button w={'full'} variant={'outline'} leftIcon={<FcGoogle />}>
          <Center>
            <Text>Sign in with Google</Text>
          </Center>
        </Button>

        {/* LinkedIn */}
        <Button w={'full'} colorScheme={'messenger'} leftIcon={<SiLinkedin />}>
          <Center>
            <Text>Send to Linkedin</Text>
          </Center>
        </Button>

        {/* Messenger */}
        <Button w={'full'} colorScheme={'messenger'} leftIcon={<SiMessenger />}>
          <Center>
            <Text>Send to Messenger</Text>
          </Center>
        </Button>
      </Stack>
            
          </Box>
          
        </Stack>


      </Stack>


   
    </>
  );
};

export default Login;
