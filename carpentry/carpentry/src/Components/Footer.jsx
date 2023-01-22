import { Container, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <div style={{marginTop:"200px",textAlign:"left",backgroundColor:"#f3f5f7",height:"650px"}}>
      <Container maxW={"7xl"} backgroundColor="#f3f5f7" >
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(4, 1fr)" }}
        templateRows={{ base: "repeat(4,200px)", lg: "repeat(1,100px)" }}
        backgroundColor="#f3f5f7" 
      >
        <GridItem marginTop={"20px"} backgroundColor="#f3f5f7" gap="10" >
        <Text fontSize='lg' fontWeight={"bold"}>Useful Links</Text>
        <Text fontSize='md' color="#848484">About Us</Text>
        <Text fontSize='md'color="#848484">Our Blog</Text>
        <Text fontSize='md'color="#848484">Careers</Text>
        <Text fontSize='md'color="#848484">Corporate</Text>
        <Text fontSize='md'color="#848484">Find a Studio</Text>
        <Text fontSize='md'color="#848484">Gift Cards</Text>
        </GridItem>
        <GridItem marginTop={"20px"}>
        <Text fontSize='lg' fontWeight={"bold"}>Partners</Text>
        <Text fontSize='md' color="#848484">Sell With Us</Text>
        <Text fontSize='md' color="#848484">Become a Franchise</Text>
        <Text fontSize='md' color="#848484">Become a Pep Home</Text>
        <Text fontSize='md' color="#848484">Design For Us</Text>
        <Text fontSize='md' color="#848484">Carpentry</Text>
        <Text fontSize='md' color="#848484">Corporate Enquires</Text>
        </GridItem>
        <GridItem marginTop={"20px"}>
        <Text fontSize='lg' fontWeight={"bold"}>Need Help?</Text>
        <Text fontSize='md' color="#848484">Contact Us</Text>
        <Text fontSize='md' color="#848484">Return & Refund</Text>
        <Text fontSize='md' color="#848484">Track Your Order</Text>
        <Text fontSize='md' color="#848484">FAQs</Text>
        <Text fontSize='md' color="#848484">Buy On Phone</Text>
        </GridItem>
        <GridItem marginTop={"20px"}>
        <Text fontSize='lg' fontWeight={"bold"}>Download App</Text>
        <Image src="https://www.nicepng.com/png/detail/37-374927_apple-app-store-and-google-play-logos-app.png" width={150}/>
        
          </GridItem>
      </Grid>
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(3, 1fr)" }}
        templateRows={{ base: "repeat(3,200px)", lg: "repeat(1,100px)" }}
        backgroundColor="#f3f5f7" 
        marginTop={150}
      >
        <GridItem marginTop={"20px"} backgroundColor="#f3f5f7" gap="10" >
        <Text fontSize='lg' fontWeight={"bold"}>Popular Categories</Text>
        <Text fontSize='md' color="#848484">Queen Size Beds, King Size Beds, Coffee Tables</Text>
        <Text fontSize='md'color="#848484">Sets, Recliners, Sofa cum Beds, Rocking Chairs</Text>
        <Text fontSize='md'color="#848484">Book Shelves, TV Unit, Wardrobes, Outdoor </Text>
        <Text fontSize='md'color="#848484">Cabinets, Wall Shelves, Photo Frames</Text>
        <Text fontSize='md'color="#848484">Mattresses, Table Cloth, Living Room Furniture</Text>
        <Text fontSize='md'color="#848484">Furniture, Dining Table, Beds, Sofas, Sofa Set</Text>
        </GridItem>
        <GridItem marginTop={"20px"}>
        <Text fontSize='lg' fontWeight={"bold"}>Popular Brands</Text>
        <Text fontSize='md' color="#848484">Mintwud, Woodsworth, CasaCraft, Amberville,</Text>
        <Text fontSize='md' color="#848484">Mudramark, Bohemiana, Clouddio, Spacewood</Text>
        <Text fontSize='md' color="#848484">Green Soul, Godrej Interio, Nilkamal, Orange Tree ,</Text>
        <Text fontSize='md' color="#848484">HomeTown , Duroflex , Sleepyhead , Peps India</Text>
        <Text fontSize='md' color="#848484">Jaipur Rugs , Obettee , Eliante by Jainsons</Text>
        <Text fontSize='md' color="#848484">India Circus by Krsnaa Mehta,</Text>
        </GridItem>
        <GridItem marginTop={"20px"}>
        <Text fontSize='lg' fontWeight={"bold"}>Cities we deliver to</Text>
        <Text fontSize='md' color="#848484">Bengaluru, Mumbai, Navi Mumbai, Delhi</Text>
        <Text fontSize='md' color="#848484">Chennai, Gurgaon, Kolkata, Noida, Goa, Ghaziabad,</Text>
        <Text fontSize='md' color="#848484">Ahmedabad, Coimbatore, Faridabad, Jaipur</Text>
        <Text fontSize='md' color="#848484">Kochi, Visakhapatnam, Chandigarh, Vadodara</Text>
        <Text fontSize='md' color="#848484">Aurangabad and many more</Text>
        </GridItem>
        
      </Grid>
      <hr style={{marginTop:"100px"}}/>
      <Text fontSize='lg' fontWeight={"bold"} marginTop="20px">We accept</Text>
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(10, 1fr)" }}
        templateRows={{ base: "repeat(4,200px)", lg: "repeat(1,100px)" }}
        backgroundColor="#f3f5f7" 
        
      >
        <GridItem marginTop={"20px"}  gap="10" >
        <Image src='https://i2.wp.com/www.born-2-fly.de/wp-content/uploads/2020/10/visa-logo.png?ssl=1' width={100}/>
        </GridItem>
        <GridItem marginTop={"20px"}>
        <Image src="https://w7.pngwing.com/pngs/92/785/png-transparent-mastercard-logo-mastercard-credit-card-payment-visa-nyse-ma-mastercard-logo-text-logo-sign.png" alt="hfhf" width={100}/>
        </GridItem>
        <GridItem marginTop={"20px"}>
        <Image src='https://www.goodreturns.in/img/2020/07/amexcreditcard1-1595418788.jpg' width={100} height="60px"/>
        </GridItem>
        <GridItem marginTop={"20px"}>
        <Image src='https://trak.in/wp-content/uploads/2020/01/Rupay-Cards-Big-1.jpg' width={100} height="60px"/>
        </GridItem>
        
        
      </Grid>
      <hr />
      <div className="topNav" style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        width: "100%",
        margin: "auto",
        background: "#f5f5f5",

        
      }}>
        <Container maxW="8xl">
        <div  style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        
        background: "#f5f5f5",
        
      }}>
          <h3>Buy In Bulk</h3>
          <h3>Write A Testimonial</h3>
          <h3>Whitehat</h3>
          <h3>Site Map</h3>
          <h3>Term Of Use</h3>
          <h3>Privacy Policy</h3>
          <h3>Yours Data & Security</h3>
          <h3>Grievance Redressal</h3>
        </div>
       
         
        </Container>
      </div>
      </Container>
    </div>
  )
}

export default Footer