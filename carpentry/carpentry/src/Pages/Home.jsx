import { Image } from "@chakra-ui/image";
import { Container, Grid, GridItem, Heading, Text } from "@chakra-ui/layout";
import React from "react";
import Carousel from "../Components/Carousel";
// import {BsArrowRight} from 'react-icons/bs'

const Home = () => {
  return (
    <div style={{fontFamily:"Manrope,sans-serif"}}>
      <Container maxW="8xl">
        {/* <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
          gap={2}
        >
          <GridItem w="150%" border="1px solid red">
            <Carousel />
          </GridItem>

          <GridItem w="50%" marginTop="10px" marginLeft="280px" border="1px solid red">
            <Image src="https://ii2.pepperfry.com/media/wysiwyg/banners/RHS-WEB_2x_1301_16-jan.jpg" />
          </GridItem>
        </Grid> */}
        <Grid templateColumns={{base:'repeat(1, 1fr)',md:'repeat(2, 1fr)'}} gap={{base:2,md:2}}>
  <GridItem   w={{base:"150%",md:"150%"}} h={{base:"200px",md:null}}><Carousel /></GridItem>
  <GridItem   w={{base:"25%",md:"50%"}}  marginLeft={280} marginTop={2}><Image src="https://ii2.pepperfry.com/media/wysiwyg/banners/RHS-WEB_2x_1301_16-jan.jpg" w="500px" h="500px"/></GridItem>
</Grid>
<br />
<Heading as='h3' size='xl' marginTop={10}>
Shop By Room
  </Heading>
  <Container maxW="7xl" marginTop={5}>

  <Grid
        templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(4, 1fr)" }}
        templateRows={{ base: "repeat(4,250px)", lg: "repeat(1,100px)" }}
        gap={{base:2,lg:3}}
        >
        <GridItem ><Image src="https://ii2.pepperfry.com/media/wysiwyg/banners/Hp_section4_web_04012023_1.jpg"/><Text fontSize='xl'>Shop Living Room</Text></GridItem>
        <GridItem>
        <Image src="https://ii3.pepperfry.com/media/wysiwyg/banners/Hp_section4_web_04012023_2.jpg"/><Text fontSize='xl'>Shop Bedroom</Text>
        </GridItem>
        <GridItem>
        <Image src="https://ii1.pepperfry.com/media/wysiwyg/banners/Hp_section4_web_04012023_3.jpg"/><Text fontSize='xl'>Shop Dining Room</Text>
        </GridItem>
        <GridItem ><Image src="https://ii2.pepperfry.com/media/wysiwyg/banners/Hp_section4_web_04012023_4.jpg"/><Text fontSize='xl'>Shop Study Room</Text></GridItem>
      </Grid>
        </Container>
       
      </Container>
      <Container maxW={"7xl"} marginTop="200px">
      <Heading as='h3' size='xl' textAlign="left">
        What the Fry Deals
      </Heading>
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(4, 1fr)" }}
        templateRows={{ base: "repeat(4,400px)", lg: "repeat(1,100px)" }}
        gap={{base:2,lg:3}}
        marginTop="5px"
        textAlign={"left"}
        >
        <GridItem ><Image src="https://ii3.pepperfry.com/media/wysiwyg/banners/Home_Deal16_web_16012023_1.jpg"/><Text fontSize='2xl' as={"bold"} >For ₹219 at 73% Off</Text><Text fontSize='lg' color="#848484">Floral Bedding</Text></GridItem>
        <GridItem>
        <Image src="https://ii1.pepperfry.com/media/wysiwyg/banners/Home_Deal16_web_16012023_2.jpg"/><Text fontSize='2xl' as={"bold"}>For ₹89 at 74% Off</Text><Text fontSize='lg' color="#848484">SS Side Plates Set of 4</Text>
        </GridItem>
        <GridItem>
        <Image src="https://ii2.pepperfry.com/media/wysiwyg/banners/Home_Deal16_web_16012023_3.jpg"/><Text fontSize='2xl' as={"bold"}>For ₹179 at 82% Off</Text><Text fontSize='lg' color="#848484">Striped Floor Runner</Text>
        </GridItem>
        <GridItem ><Image src="https://ii3.pepperfry.com/media/wysiwyg/banners/HP_Deal_web_18012023_2.jpg"/><Text fontSize='2xl' as={"bold"}>For ₹59 at 82% Off</Text><Text fontSize='lg' color="#848484">Money Plant With Pot</Text></GridItem>
      </Grid>
      </Container>
      <Container maxW="7xl" marginTop="350px">
      <Heading as='h3' size='xl' textAlign="left">
        Trends in Furniture And Decor
      </Heading>
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(3, 1fr)" }}
        templateRows={{ base: "repeat(3,400px)", lg: "repeat(1,100px)" }}
        gap={{base:2,lg:3}}
        marginTop="15px"
        textAlign={"left"}
        >
        <GridItem ><Image src="https://ii1.pepperfry.com/media/wysiwyg/banners/Hp_section6_web_04012023_1.jpg"/><Text fontSize='2xl' as={"bold"}>Pantone Color Sofas</Text><Text fontSize='lg' color="#848484">Explore Starting ₹10939</Text></GridItem>
        <GridItem>
        <Image src="https://ii2.pepperfry.com/media/wysiwyg/banners/Hp_section6_web_04012023_2.jpg"/><Text fontSize='2xl' as={"bold"}>Gentle Lighting Shelf Lamps</Text><Text fontSize='lg' color="#848484">Explore Starting ₹1999</Text>
        </GridItem>
        <GridItem ><Image src="https://ii3.pepperfry.com/media/wysiwyg/banners/Hp_section6_web_04012023_3.jpg"/><Text fontSize='2xl' as={"bold"}>Maximalist Pieces By Chumbak</Text><Text fontSize='lg' color="#848484">Explore Starting ₹4495</Text></GridItem>
      </Grid>
      </Container>
      <Container maxW={"7xl"} marginTop="400px">
      <Heading as='h3' size='xl' textAlign="left">
        New Arrivals
      </Heading>
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(4, 1fr)" }}
        templateRows={{ base: "repeat(4,430px)", lg: "repeat(1,100px)" }}
        gap={{base:2,lg:3}}
        marginTop="5px"
        textAlign={"left"}
        >
        <GridItem ><Image src="https://ii1.pepperfry.com/media/wysiwyg/banners/Hp_section7_web_04012023_1.jpg"/><Text fontSize='2xl' as={"bold"} fontFamily={"Manrope,sans-serif"}>Premium Office Chairs</Text><Text fontSize='lg' color="#848484">06+ Options</Text><Text fontSize='lg' color="#848484" fontFamily={"Manrope,sans-serif"}>Starting ₹14499</Text></GridItem>
        <GridItem>
        <Image src="https://ii2.pepperfry.com/media/wysiwyg/banners/Hp_section7_web_04012023_2.jpg"/><Text fontSize='2xl' as={"bold"}>Unique Collectibles</Text><Text fontSize='lg' color="#848484">120+ Options</Text><Text fontSize='lg' color="#848484" fontFamily={"Manrope,sans-serif"}>Starting ₹249</Text>
        </GridItem>
        <GridItem>
        <Image src="https://ii3.pepperfry.com/media/wysiwyg/banners/Hp_section7_web_04012023_3.jpg"/><Text fontSize='2xl' as={"bold"}>Printed Cushion Covers</Text><Text fontSize='lg' color="#848484">150+ Options</Text><Text fontSize='lg' color="#848484" fontFamily={"Manrope,sans-serif"}>Starting ₹149</Text>
        </GridItem>
        <GridItem ><Image src="https://ii1.pepperfry.com/media/wysiwyg/banners/Hp_newarrival_17012023_web.jpg"/><Text fontSize='2xl' as={"bold"}>Upholstered Beds</Text><Text fontSize='lg' color="#848484">70+ Options</Text><Text fontSize='lg' color="#848484" fontFamily={"Manrope,sans-serif"}>Starting ₹9199</Text></GridItem>
      </Grid>
      </Container>
      <Container maxW="7xl" marginTop="350px">
      <Heading as='h3' size='xl' textAlign="left">
        The Winter Edit
      </Heading>
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(3, 1fr)" }}
        templateRows={{ base: "repeat(3,300px)", lg: "repeat(1,100px)" }}
        gap={{base:2,lg:3}}
        marginTop="15px"
        textAlign={"left"}
        >
        <GridItem ><Image src="https://ii2.pepperfry.com/media/wysiwyg/banners/Hp_section8_web_04012023_1.jpg"/></GridItem>
        <GridItem>
        <Image src="https://ii3.pepperfry.com/media/wysiwyg/banners/Hp_section8_web_04012023_2.jpg"/>
        </GridItem>
        <GridItem ><Image src="https://ii1.pepperfry.com/media/wysiwyg/banners/Hp_section8_web_04012023_3.jpg"/></GridItem>
      </Grid>
      </Container>
      <Container maxW={"7xl"} marginTop="350px">
      <Heading as='h3' size='xl' textAlign="left">
        Top Brands On Carpentry
      </Heading>
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(4, 1fr)" }}
        templateRows={{ base: "repeat(4,400px)", lg: "repeat(1,100px)" }}
        gap={{base:2,lg:3}}
        marginTop="10px"
        textAlign={"left"}
        >
        <GridItem ><Image src="https://ii2.pepperfry.com/media/wysiwyg/banners/Hp_section9_web_04012023_1.jpg"/><Text fontSize='2xl' as={"bold"} fontFamily={"Manrope,sans-serif"}>Popular For Sofas</Text><Text fontSize='lg' color="#848484">600+ Options</Text></GridItem>
        <GridItem>
        <Image src="https://ii3.pepperfry.com/media/wysiwyg/banners/Hp_section9_web_04012023_2.jpg"/><Text fontSize='2xl' as={"bold"}>Popular For Office Chairs</Text><Text fontSize='lg' color="#848484">45+ Options</Text>
        </GridItem>
        <GridItem>
        <Image src="https://ii1.pepperfry.com/media/wysiwyg/banners/Hp_section9_web_04012023_3.jpg"/><Text fontSize='2xl' as={"bold"}>Popular For Home Decor</Text><Text fontSize='lg' color="#848484">290+ Options</Text>
        </GridItem>
        <GridItem ><Image src="https://ii2.pepperfry.com/media/wysiwyg/banners/Hp_section9_web_04012023_4.jpg"/><Text fontSize='2xl' as={"bold"}>Popular For Serveware</Text><Text fontSize='lg' color="#848484">120+ Options</Text></GridItem>
      </Grid>
      </Container>
      <Container maxW={"7xl"} marginTop="330px">
      <Heading as='h3' size='xl' textAlign="left">
        Inspiration From Our BLog
      </Heading>
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(4, 1fr)" }}
        templateRows={{ base: "repeat(4,400px)", lg: "repeat(1,100px)" }}
        gap={{base:2,lg:3}}
        marginTop="10px"
        textAlign={"left"}
        >
        <GridItem ><Image src="https://ii3.pepperfry.com/media/wysiwyg/banners/Hp_section10_web_04012023_1.jpg"/><Text fontSize='lg' color="#848484">How to Declutter Your Based on Your Personality Type? Read More</Text></GridItem>
        <GridItem>
        <Image src="https://ii1.pepperfry.com/media/wysiwyg/banners/Hp_section10_web_04012023_2.jpg"/><Text fontSize='lg' color="#848484">5 Elegant Ideas for Your Dreamy Modern Master Bedroom | Read More</Text>
        </GridItem>
        <GridItem>
        <Image src="https://ii2.pepperfry.com/media/wysiwyg/banners/Hp_section10_web_04012023_3.jpg"/><Text fontSize='lg' color="#848484">7 Decor Ideas to Spruce up Your Hallway | Read More</Text>
        </GridItem>
        <GridItem ><Image src="https://ii3.pepperfry.com/media/wysiwyg/banners/Hp_section10_web_04012023_4.jpg"/><Text fontSize='lg' color="#848484">8 Trends You Can Use This Holiday Season in Your Home | Read More </Text></GridItem>
      </Grid>
      </Container>
      <Container maxW={"7xl"} marginTop="300px">
      <Heading as='h3' size='xl' textAlign="left">
        Customers Speaks
      </Heading>
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(3, 1fr)" }}
        templateRows={{ base: "repeat(3,220px)", lg: "repeat(1,100px)" }}
        gap={{base:2,lg:3}}
        marginTop="10px"
        textAlign={"left"}
        >
        <GridItem ><Image src="https://ii1.pepperfry.com/media/wysiwyg/banners/Testimonial_web_261221_7.jpg"/><Text fontSize='lg' >Bought these two grey puffy stools from carpentry. Found them to be surprisingly strong ! Blends....</Text></GridItem>
        <GridItem>
        <Image src="https://ii3.pepperfry.com/media/wysiwyg/banners/happy_customer_block_2_2906_0222.png"/><Text fontSize='lg' >I purchased Candy Study Chair in Pink Colour by Alex Daisy from carpentry looks awesome and My.</Text>
        </GridItem>
        <GridItem ><Image src="https://ii2.pepperfry.com/media/wysiwyg/banners/Testimonial_web_261221_9.jpg"/><Text fontSize='lg' >Purchased an ergonomic chair, I thought it would not be fitting for me but once it got delivered</Text></GridItem>
      </Grid>
      </Container>
      <Container maxW={"7xl"} marginTop="200px">
      <Heading as='h3' size='xl' textAlign="left">
        Need Help Buying
      </Heading>
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(6, 1fr)" }}
        templateRows={{ base: "repeat(6,350px)", lg: "repeat(1,100px)" }}
        gap={{base:2,lg:3}}
        marginTop="10px"
        textAlign={"left"}
        >
        <GridItem ><Image src="https://ii1.pepperfry.com/media/wysiwyg/banners/hp_need_help_p_1.jpg"/><Text fontSize='lg' >Here's How To Choose The Right Sofa</Text></GridItem>
        <GridItem>
        <Image src="https://ii2.pepperfry.com/media/wysiwyg/banners/hp_need_help_p_2.jpg"/><Text fontSize='lg' >How To Buy A Perfect Bed For Your Room</Text>
        </GridItem>
        <GridItem ><Image src="https://ii3.pepperfry.com/media/wysiwyg/banners/hp_need_help_p_3.jpg"/><Text fontSize='lg' >Your Guide To Buy The Perfect Mattress</Text></GridItem>
        <GridItem ><Image src="https://ii1.pepperfry.com/media/wysiwyg/banners/hp_need_help_p_4.jpg"/><Text fontSize='lg' >Everything About Cabinets </Text></GridItem>
        <GridItem ><Image src="https://ii2.pepperfry.com/media/wysiwyg/banners/hp_need_help_p_5.jpg"/><Text fontSize='lg' >What To Look For While Buying A Chair</Text></GridItem>
        <GridItem ><Image src="https://ii3.pepperfry.com/media/wysiwyg/banners/hp_need_help_p_6.jpg"/></GridItem>
      </Grid>
      </Container>
      <Container maxW={"7xl"} marginTop="180px">
      <Heading as='h3' size='xl' textAlign="left">
        Recommended for you
      </Heading>
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", lg:"repeat(6, 1fr)" }}
        templateRows={{ base:"repeat(6,400px)", lg:"repeat(1,100px)" }}
        gap={{base:2,lg:3}}
        marginTop="10px"
        textAlign={"left"}
        >
        <GridItem ><Image src="https://ii1.pepperfry.com/media/catalog/product/t/y/494x544/tyne-solid-wood-lounge-chair-in-abstract-print-in-rustic-teak-finish-by-amberville-tyne-solid-wood-l-bmpdxr.jpg"/><Text fontSize='lg' >Tyne Solid Wood</Text><Text fontSize='xl' color="#ff7035" >₹19,499</Text></GridItem>
        <GridItem>
        <Image src="https://ii1.pepperfry.com/media/catalog/product/t/y/494x544/tyne-solid-wood-lounge-chair-in-multicolour-abstract-print-in-rustic-teak-finish-by-amberville-tyne--e4k6rc.jpg"/><Text fontSize='lg' >Tyne Solid Wood</Text><Text fontSize='xl' color="#ff7035">₹19,499</Text>
        </GridItem>
        <GridItem ><Image src="https://ii1.pepperfry.com/media/catalog/product/t/o/494x544/toledo-arm-chair--set-of-2--in-brown-colour-by-dzyn-furnitures-toledo-arm-chair--set-of-2--in-brown--qb4rg8.jpg"/><Text fontSize='lg'>Toledo Arm Chair</Text><Text fontSize='xl' color="#ff7035">₹24,490</Text></GridItem>
        <GridItem ><Image src="https://ii1.pepperfry.com/media/catalog/product/t/a/494x544/tado-solid-wood-arm-chair-with-charcoal-grey-velvet-upholstery-by-woodsworth-tado-solid-wood-arm-cha-m0jfcx.jpg"/><Text fontSize='lg'>Taylor Arm Chair with</Text><Text fontSize='xl' color="#ff7035">₹28,499</Text></GridItem>
        <GridItem ><Image src="https://ii1.pepperfry.com/media/catalog/product/h/a/494x544/harmony-solid-wood-folding-chair---set-of-2---in-honey-oak-finish-by-woodsworth-harmony-solid-wood-f-tkkwvj.jpg"/><Text fontSize='lg'>Harmony Solid Wood</Text><Text fontSize='xl' color="#ff7035">₹13,499</Text></GridItem>
        <GridItem ><Image src="https://ii1.pepperfry.com/media/catalog/product/f/a/494x544/fansy-folding-chair-in-blue-colour-by-pansy-furniture-fansy-folding-chair-in-blue-colour-by-pansy-fu-pzfivh.jpg"/><Text fontSize='lg'>Fansy Folding Chair in</Text><Text fontSize='xl' color="#ff7035">₹2,300</Text></GridItem>
      </Grid>
      </Container>
    </div>
  );
};

export default Home;
