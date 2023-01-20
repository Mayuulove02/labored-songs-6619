import { StarIcon } from '@chakra-ui/icons';
import {
    Image,
    Box,
    Badge,
    Text,

} from '@chakra-ui/react';
// import { Link } from "react-router-dom"

export default function ProductCard({ image, id, title, price, rating, count, rate }) {
    return ( <div>


        {/* <Link to={`/products/${id}`}>
                    <Card maxW='sm'>
                        <CardBody>
                            <Image
                                src={image}
                                alt='Green double couch with wooden legs'
                                borderRadius='lg'
        
                            />
                            <Stack mt='6' spacing='3'>
                                
                                <Text align="left">
                                    {title}
                                </Text>
                                <Flex gap={10}>
                                <Text fontSize="lg" fontWeight="bold" align="left">₹{price}</Text>
                                
                                <Text fontSize="lg" align="left">♡ {rating}</Text>
                                </Flex>
                            </Stack>
                        </CardBody>
        
                    </Card>
                    </Link> */}
                    {/* <Card maxW='sm' textAlign={"left"}>
  <CardBody>
    <Image
      src={image}
      alt='Green double couch with wooden legs'
      
    />
    <Stack  >
      <Text size='md' text-overflow="ellipsis">{title}</Text>
      <Text color='blue.600' fontSize='2xl'>
      ₹{price}
      </Text>
      <Text>
      ♡ {rating} 
      </Text>
     
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card> */}
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
        

        <Box display='flex' mt='2' alignItems='center'>
          {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < rating ? 'teal.500' : 'gray.300'}
              />
            ))}
          <Box as='span' ml='2' color='gray.600' fontSize='sm'>
            {count} reviews
          </Box>
          <Text></Text>
        </Box>
      </Box>
    </Box>   
                </div>
        
            );
        }