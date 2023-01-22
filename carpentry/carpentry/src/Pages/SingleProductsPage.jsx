import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  List,
  ListItem,
  GridItem,
  Card,
  CardBody,
  Grid
      } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { MdLocalShipping } from 'react-icons/md';
import { Link, useParams } from 'react-router-dom';
import { Loading } from '../Components/Loading';
import Navbar from '../Components/Navbar';




export default function SingleProductsPage() {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();
  console.log(id)
  useEffect(() => {
      axios.get(`https://json-server-vercel-sage-nu.vercel.app/posts/${id}`).then(({ data }) => {
          setProduct(data)
      }).catch((err) => console.log(err))
  }, [id])

  const { image, title, price } = product;

  setTimeout(() => {
    setIsLoading(false)
     
    }, 1000);
     
    
  return  isLoading ? (<Loading />) : (
    <div>
    <Navbar />
      <Container maxW={'7xl'} align="left">
          
          <SimpleGrid
              columns={{ base: 1, lg: 2 }}
              spacing={{ base: 8, md: 10 }}
              py={{ base: 18, md: 24 }}>
              <Flex>
                  <Image
                      rounded={'md'}
                      alt={'product image'}
                      src={image}
                      fit={'cover'}
                      align={'center'}
                      w={'100%'}
                      h={{ base: '100%', sm: '400px', lg: '500px' }}
                  />
              </Flex>
              <Stack spacing={{ base: 6, md: 10 }}>
                  <Box as={'header'}>
                      <Heading
                          lineHeight={1.1}
                          fontWeight={400}
                          fontSize={{ base: 'xl', sm: '2xl', lg: '3xl' }}
                          align="left">
                          {title}
                      </Heading>
                      {/* <Text
              color={useColorModeValue('gray.900', 'gray.400')}
              
              
              alignText="left">
              {price}
            </Text> */}
                      <Text align="left" fontWeight={600}> ⭐⭐⭐⭐⭐ <Text>12 Month's Warranty</Text></Text>

                      <Text align="left" fontSize="2xl" fontWeight={600}>₹{price} /- <Text color="#67ad5b">(61% Off)</Text> </Text>
                      <Text align="left" fontSize="lg" > Save ₹ 26800 (Incl of all taxes)</Text>
                      <Text align="left" fontSize="xl" > EMI Starting ₹ 805</Text>
                      <Image src="https://ii2.pepperfry.com/media/wysiwyg/banners/Promo_a1_b1_c1_Web_VIPCoupon500_RepublicSale_2X_2001_ND.jpg" marginTop={10}/>
                  </Box>


                  <Stack
                      spacing={{ base: 4, sm: 6 }}
                      direction={'column'}
                      divider={
                          <StackDivider
                            //   borderColor={useColorModeValue('gray.200', 'gray.600')}
                          />
                      }>
                      <VStack spacing={{ base: 4, sm: 6 }} >
                          <Text
                            //   color={useColorModeValue('gray.500', 'gray.400')}
                              fontSize={'2xl'}
                              fontWeight={'300'}
                          >
                              {/* {rating.rate} */}
                              
                              <hr />
                          </Text>
                          
                      </VStack>
                      <Box>
                          <Text
                              fontSize={{ base: '16px', lg: '18px' }}
                              fontWeight={'500'}
                              textTransform={'uppercase'}
                              mb={'4'}>
                              More Offers
                          </Text>

                          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} align="left">
                              <List spacing={2}>
                                  <ListItem>Extra Rs.500 off on Kotak Bank Credit Card EMICode: KOTAKPF5</ListItem>
                                  <ListItem>Get flat discount of INR 500 on Kotak Bank Credit Card EMI transactions</ListItem>{' '}
                                  <ListItem>Extra Promo Benefit</ListItem>
                              </List>
                              <List spacing={2}>
                                  <ListItem>Extra Rs.500 off on BOB CCEMICode: BOBPF10</ListItem>
                                  <ListItem>Get flat discount of INR 500 on Bank Of Baroda Credit Cards </ListItem>
                                  <ListItem>Get additional coupon benefit by utilizing the cashback credits earned.</ListItem>
                              </List>
                          </SimpleGrid>
                      </Box>
                      <Box>
                          <Text
                              fontSize={{ base: '16px', lg: '18px' }}
                              fontWeight={'500'}
                              textTransform={'uppercase'}
                              mb={'4'}
                          >
                              Product Details
                          </Text>

                          <List spacing={2} align="left">
                              <ListItem>
                                  <Text as={'span'} fontWeight={'bold'}>
                                      Brand:
                                  </Text>{' '}
                                  @home
                              </ListItem>
                              <ListItem>
                                  <Text as={'span'} fontWeight={'bold'}>
                                  Dimensions(In Inches):
                                  </Text>{' '}
                                  H 34.5 x W 66.7 x D 88.5
                              </ListItem>
                              <ListItem>
                                  <Text as={'span'} fontWeight={'bold'}>
                                  Weight:
                                  </Text>{' '}
                                  114 KG
                              </ListItem>
                              <ListItem>
                                  <Text as={'span'} fontWeight={'bold'}>
                                  Seating Height:
                                  </Text>{' '}
                                  11.8
                              </ListItem>
                              <ListItem>
                                  <Text as={'span'} fontWeight={'bold'}>
                                  Assembly:
                                  </Text>{' '}
                                  Carpenter Assembly
                              </ListItem>
                              <ListItem>
                                  <Text as={'span'} fontWeight={'bold'}>
                                  Primary Material:
                                  </Text>{' '}
                                  Engineered Wood
                              </ListItem>
                              <ListItem>
                                  <Text as={'span'} fontWeight={'bold'}>
                                  Warranty:
                                  </Text>{' '}
                                  12 Months' Warranty{' '}
                              </ListItem>
                          </List>
                      </Box>
                  </Stack>
                  <Link to={`/cart/${id}`}>
                      <Button
                          rounded={'none'}
                          //   disabled={itemAlreadyExists(product.id,state)}
                          //   onClick={()=>dispatch(addToCart(product))}
                          w={'full'}
                          mt={8}
                          size={'lg'}
                          py={'7'}
                          color="black"
                          border="1px solid black"
                          // color={useColorModeValue('white', 'gray.900')}
                          textTransform={'uppercase'}
                          _hover={{
                              transform: 'translateY(2px)',
                              boxShadow: 'lg',
                          }}>
                          Add to cart
                      </Button>
                  </Link>
                  <Stack direction="row" alignItems="center" justifyContent={'center'}>
                      <MdLocalShipping />
                      <Text>2-3 business days delivery</Text>
                  </Stack>
              </Stack>
          </SimpleGrid>
          <hr />
          <Heading marginTop={10}>Similar Products</Heading>
          <Container maxW='7xl' >
              <Grid templateColumns='repeat(6, 1fr)' gap={2}>
                  <GridItem w='100%' ><Card maxW='sm'>
                      <CardBody>
                          <Image
                              src='https://ii1.pepperfry.com/media/catalog/product/m/a/494x544/magnus-queen-size-bed-with-box-storage---charger-in-mist-white-color-by-crystal-furnitech-magnus-que-i5oqd5.jpg'
                              alt='Green double couch with wooden legs'
                              borderRadius='lg'
                          />
                          <Stack mt='6' spacing='3'>

                              <Text align="left">
                                  Magnus Queen Size Bed
                              </Text>
                              <Text fontSize="lg" fontWeight="bold" align="left" color='#ff7035'>₹30,899</Text>
                          </Stack>
                      </CardBody>


                  </Card></GridItem>
                  <GridItem w='100%' ><Card maxW='sm'>
                      <CardBody>
                          <Image
                              src='https://ii1.pepperfry.com/media/catalog/product/m/a/494x544/madrid-queen-engineered-wood-box-bed---teak-madrid-queen-engineered-wood-box-bed---teak-gm5qj7.jpg'
                              alt='Green double couch with wooden legs'
                              borderRadius='lg'
                          />
                          <Stack mt='6' spacing='3'>

                              <Text align="left">
                                  Madrid Queen Size Bed
                              </Text>
                              <Text fontSize="lg" fontWeight="bold" align="left" color='#ff7035'>₹22299</Text>
                          </Stack>
                      </CardBody>


                  </Card></GridItem>
                  <GridItem w='100%' ><Card maxW='sm'>
                      <CardBody>
                          <Image
                              src='https://ii1.pepperfry.com/media/catalog/product/m/a/494x544/maltein-queen-size-bed-with-storage-in-wenge---white-finish-by-bluewud-maltein-queen-size-bed-with-s-ixccjo.jpg'
                              alt='Green double couch with wooden legs'
                              borderRadius='lg'
                          />
                          <Stack mt='6' spacing='3' >

                              <Text align="left">
                                  Maltein Queen Size Bed
                              </Text>
                              <Text fontSize="lg" fontWeight="bold" align="left" color='#ff7035'>₹15097</Text>
                          </Stack>
                      </CardBody>


                  </Card></GridItem>
                  <GridItem w='100%' ><Card maxW='sm'>
                      <CardBody>
                          <Image
                              src='https://ii1.pepperfry.com/media/catalog/product/m/y/494x544/mystique-queen-size-bed-with-hydraulic-storage-in-walnut-colour-by-hometown-mystique-queen-size-bed--o3mfsq.jpg'
                              alt='Green double couch with wooden legs'
                              borderRadius='lg'
                          />
                          <Stack mt='6' spacing='3'>

                              <Text align="left">
                                  Mystique Queen Size Bed
                              </Text>
                              <Text fontSize="lg" fontWeight="bold" align="left" color='#ff7035'>₹49907</Text>
                          </Stack>
                      </CardBody>


                  </Card></GridItem>
                  <GridItem w='100%' ><Card maxW='sm'>
                      <CardBody>
                          <Image
                              src='https://ii1.pepperfry.com/media/catalog/product/m/i/494x544/minerva-queen-size-bed-with-hydraulic-storage-in-white-colour-by-hometown-minerva-queen-size-bed-wit-ekab0z.jpg'
                              alt='Green double couch with wooden legs'
                              borderRadius='lg'
                          />
                          <Stack mt='6' spacing='3'>

                              <Text align="left">
                                  Minerva Queen Size Bed
                              </Text>
                              <Text fontSize="lg" fontWeight="bold" align="left" color='#ff7035'>₹67907</Text>
                          </Stack>
                      </CardBody>


                  </Card></GridItem>
                  <GridItem w='100%' ><Card maxW='sm'>
                      <CardBody>
                          <Image
                              src='https://ii1.pepperfry.com/media/catalog/product/m/a/494x544/magnum-queen-bed-with-hydraulic-storage-in-urban-walnut-colour-by-hometown-magnum-queen-bed-with-hyd-c57b77.jpg'
                              alt='Green double couch with wooden legs'
                              borderRadius='lg'
                          />
                          <Stack mt='6' spacing='3'>

                              <Text align="left">
                                  Magnum Queen Size Bed
                              </Text>
                              <Text fontSize="lg" fontWeight="bold" align="left" color='#ff7035'>₹36900</Text>
                          </Stack>
                      </CardBody>


                  </Card></GridItem>
                  
                  

              </Grid>

          </Container>
          <hr style={{marginTop:"60px"}}/>
          <Heading marginTop={10}>You May Also Like</Heading>
          <Container maxW='7xl' >
              <Grid templateColumns='repeat(6, 1fr)' gap={2}>
                  <GridItem w='100%' ><Card maxW='sm'>
                      <CardBody>
                          <Image
                              src='https://ii1.pepperfry.com/media/catalog/product/r/e/494x544/rebecca-3-seater-sofa-in-grey-colour-by-arra-rebecca-3-seater-sofa-in-grey-colour-by-arra-a8nlqq.jpg'
                              alt='Green double couch with wooden legs'
                              borderRadius='lg'
                          />
                          <Stack mt='6' spacing='3'>

                              <Text align="left">
                                  Rebecca 3 Seater Sofa Mold
                              </Text>
                              <Text fontSize="lg" fontWeight="bold" align="left" color='#ff7035'>₹30,899</Text>
                          </Stack>
                      </CardBody>


                  </Card></GridItem>
                  <GridItem w='100%' ><Card maxW='sm'>
                      <CardBody>
                          <Image
                              src='https://ii1.pepperfry.com/media/catalog/product/r/e/494x544/rebecca-3-seater-sofa-in-mustard-colour-by-arra-rebecca-3-seater-sofa-in-mustard-colour-by-arra-vjmme5.jpg'
                              alt='Green double couch with wooden legs'
                              borderRadius='lg'
                          />
                          <Stack mt='6' spacing='3'>

                              <Text align="left">
                                  Rebecca Mold 3 Seater
                              </Text>
                              <Text fontSize="lg" fontWeight="bold" align="left" color='#ff7035'>₹22299</Text>
                          </Stack>
                      </CardBody>


                  </Card></GridItem>
                  <GridItem w='100%' ><Card maxW='sm'>
                      <CardBody>
                          <Image
                              src='https://ii1.pepperfry.com/media/catalog/product/l/a/494x544/ladybug-3-seater-sofa-in-brown-colour-by-febonic-ladybug-3-seater-sofa-in-brown-colour-by-febonic-cdxgxu.jpg'
                              alt='Green double couch with wooden legs'
                              borderRadius='lg'
                          />
                          <Stack mt='6' spacing='3' >

                              <Text align="left">
                                  Ladybug 3 Seater Sofa
                              </Text>
                              <Text fontSize="lg" fontWeight="bold" align="left" color='#ff7035'>₹15097</Text>
                          </Stack>
                      </CardBody>


                  </Card></GridItem>
                  <GridItem w='100%' ><Card maxW='sm'>
                      <CardBody>
                          <Image
                              src='https://ii1.pepperfry.com/media/catalog/product/l/a/494x544/ladybug-3-seater-sofa-in-maroon-colour-by-febonic-ladybug-3-seater-sofa-in-maroon-colour-by-febonic-tyroua.jpg'
                              alt='Green double couch with wooden legs'
                              borderRadius='lg'
                          />
                          <Stack mt='6' spacing='3'>

                              <Text align="left">
                              Ladybug 3 Seater Sofa
                              </Text>
                              <Text fontSize="lg" fontWeight="bold" align="left" color='#ff7035'>₹49907</Text>
                          </Stack>
                      </CardBody>


                  </Card></GridItem>
                  <GridItem w='100%' ><Card maxW='sm'>
                      <CardBody>
                          <Image
                              src='https://ii1.pepperfry.com/media/catalog/product/t/y/494x544/tyne-solid-wood-lounge-chair-in-abstract-print-in-rustic-teak-finish-by-amberville-tyne-solid-wood-l-bmpdxr.jpg'
                              alt='Green double couch with wooden legs'
                              borderRadius='lg'
                          />
                          <Stack mt='6' spacing='3'>

                              <Text align="left">
                                  Type Solid Wood Lounge
                              </Text>
                              <Text fontSize="lg" fontWeight="bold" align="left" color='#ff7035'>₹67907</Text>
                          </Stack>
                      </CardBody>


                  </Card></GridItem>
                  <GridItem w='100%' ><Card maxW='sm'>
                      <CardBody>
                          <Image
                              src='https://ii1.pepperfry.com/media/catalog/product/t/y/494x544/tyne-solid-wood-lounge-chair-in-multicolour-abstract-print-in-rustic-teak-finish-by-amberville-tyne--qkuffl.jpg'
                              alt='Green double couch with wooden legs'
                              borderRadius='lg'
                          />
                          <Stack mt='6' spacing='3'>

                              <Text align="left">
                              Type Solid Wood Lounge
                              </Text>
                              <Text fontSize="lg" fontWeight="bold" align="left" color='#ff7035'>₹36900</Text>
                          </Stack>
                      </CardBody>


                  </Card></GridItem>
                  
                  

              </Grid>

          </Container>
          <hr style={{marginTop:"60px"}}/>


      </Container>
      </div>
  );
}