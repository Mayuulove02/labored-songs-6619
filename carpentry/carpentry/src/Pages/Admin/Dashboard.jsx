import { DeleteIcon } from "@chakra-ui/icons";
import {Button,Input, Box, Image, Badge, Grid} from "@chakra-ui/react"
import axios from "axios"
import {useEffect,useState} from "react"





export default function Dashboard() {
  const [data,setData] = useState([]);
  const [order,setOrder] = useState("") // "asc" or "desc" or " "
  const [searchQuery,setSearchQuery] = useState("")

  const handleDelete =(id)=>{
    axios.delete(`https://json-server-vercel-sage-nu.vercel.app/posts/${id}`
    )
    .then(()=>{
        getHouses();
    })
  };

  const getHouses =(searchQuery) =>{
    const params = searchQuery ? {q:searchQuery} :{};
    axios.get(`https://json-server-vercel-sage-nu.vercel.app/posts`,{
        params
    }
    )
    .then((res)=>{
        setData(res.data);
    })
    .catch((err)=>{
        console.log(err)
    })
  }

  useEffect(()=>{
    getHouses(searchQuery)
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
  

  return  (
    <div>
        <div className='main-div' style={{
        display:"flex",
        justifyContent:"space-around",
        
       
      }}>
        <div className="sortingButtons" style={{
            
            textAlign:"left" ,height:"500px",width:"300px",
        }}>
          
          <Input 
        className = "searchAddress"  
        placeholder = "Search Data" 
        value={searchQuery}
        onChange={(e)=>setSearchQuery(e.target.value)}
        marginTop={10}
        
        />
        <Button className = "sortByRentAsc" onClick={()=>setOrder("asc")} color='#ff7035' variant='outline' border="1px solid #ff7035" padding="0px 110px" marginTop={5}>  Sort by Asc </Button>
        <br/>
          <Button className = "sortByRentDesc" onClick={()=>setOrder("desc")} color='#ff7035' variant='outline' border="1px solid #ff7035" padding="0px 105px" marginTop={5}> Sort by Desc </Button>
        </div>

        
<div>
<Box maxW='4xl' marginTop="30px" >
        <Grid templateColumns="repeat(3,1fr)" gap={2} >

           
{data.map((el)=>(
            
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' textAlign="left" key={el.id}>

<Image src={el.image} />

<Box p='6'>
<Box display='flex' alignItems='baseline'>
    <Badge borderRadius='full' px='2' colorScheme='teal'>
      {Math.floor(Math.random() * 100)}%off 
    </Badge>
    <Button colorScheme='teal' variant='ghost' marginLeft="90px" onClick={()=>handleDelete(el.id)}>
<DeleteIcon color={"red"}/>
  </Button>

    
  </Box>

  <Box
    mt='1'
    fontWeight='semibold'
    as='h4'
    lineHeight='tight'
    noOfLines={1}
  >
    {el.title}
  </Box>

  <Box color={"#ff7035"} fontWeight="bold">
  ₹{el.price}
    <Box as='span' color='#ff7035' fontSize='sm'>
      /-
    </Box>
  </Box>
  
  
  
</Box>

</Box>

))}

</Grid>
</Box>
</div>
</div>
    </div>
  )
}
