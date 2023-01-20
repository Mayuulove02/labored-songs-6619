import {
    Box,
    Flex,
    Container ,
    Image,
    Link,
    useDisclosure,
    Input,
    Menu,
    MenuButton,
    Button,
    Avatar,
    MenuList,
    Center,
    MenuDivider,
    MenuItem,
    
  } from "@chakra-ui/react";
  import "./Navbar.css";
  import admin from "../utils/admin.gif"
  import { HamburgerIcon } from '@chakra-ui/icons';
  import { MdLiveHelp} from 'react-icons/md'
 import  {FiShoppingCart} from 'react-icons/fi'
 import {VscAccount} from "react-icons/vsc"
  import img from "../utils/Logo.png"
 




 export default function Navbar() {
    const { isOpen, onToggle } = useDisclosure();
    return (
      <>
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
          <h3>Sell on Carpentry</h3>
          <h3>Become a Franchisee</h3>
          <h3>Buy in Bulk</h3>
          <h3>Find a Studio</h3>
          <h3>Find Design Inspiration</h3>
        </div>
         
        </Container>
      </div>
      <Container maxW='8xl' >
      <Flex as="nav" align="center" justify="space-around" wrap="wrap" marginTop="5px" gap="10px" >
        <Flex align="center" mr={5}>
          <Image src={img} width="100px" h="50px" borderRadius="10px" cursor="pointer"/>
        </Flex>
        <Box
          display={{ base: isOpen ? "block" : "none", md: "block" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          
        >
          <Input placeholder='What are you looking for ?' width={600}/>
          
        
        
        </Box>
        <MdLiveHelp style={{height:"30px", width:"50px"}}/>
        
        <FiShoppingCart  style={{height:"30px", width:"50px"}}/>
        <Menu >
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  {/* <Avatar
                    size={'sm'}
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                  /> */}
                 < VscAccount style={{height:"30px", width:"50px"}}/>
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={admin}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Admin Login</MenuItem>
                  <MenuItem>User Login</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
        <Box display={{ base: "block", md: "none" }} onClick={onToggle}>
          <HamburgerIcon
            aria-label="Open Navigation"
            icon={isOpen ? "close" : "menu"}
            size="lg"
          />
        </Box>
  
        
       
      </Flex>
      <hr/>
<Box
display={{ base: isOpen ? "block" : "none", md: "block" }}
width={{ base: "full", md: "auto" }}
alignItems="center"
flexGrow={1}

>
<nav>
<div className="wrapper" >
  <ul className="nav-links">
    <li id="first">
      <Link to="/products/beds">Furniture</Link>
      <div className="mega-box">
        <div className="content" >
          <div className="rowone">
            <header>Sofas</header>
            <ul className="mega-links a" >
              <li>
                <Link to="/">Sofas</Link>
              </li>
              <li>
                <Link to="/">3 Seater sofas</Link>
              </li>
              <li>
                <Link to="/">2 Seater Sofas</Link>
              </li>
              <li>
                <Link to="/">1 seater Sofas</Link>
              </li>
              <li>
                <Link to="/">Sofa Sets</Link>
              </li>
              <li>
                <Link to="/">Sectional Sofas</Link>
              </li>
              <li>
                <Link to="/">Recliners </Link>
              </li>
              <li>
                <Link to="/">Chaise Loungers</Link>
              </li>
              <li>
                <Link to="/">Sofa Cum Beds </Link>
              </li>
              <li>
                <Link to="/">Futons </Link>
              </li>
            </ul>
          </div>
          <div className="rowone">
            <header>Seating</header>
            <ul className="mega-links c">
              <li>
                <Link to="/">Settees</Link>
              </li>
              <li>
                <Link to="/">Benches</Link>
              </li>
              <li>
                <Link to="/">Ottomans</Link>
              </li>
              <li>
                <Link to="/">Pouffes</Link>
              </li>
              <li>
                <Link to="/">Recamiers</Link>
              </li>
              <li>
                <Link to="/">Foot Stools</Link>
              </li>
              <li>
                <Link to="/">Seating Stools </Link>
              </li>
              <li>
                <Link to="/">Bean Bags</Link>
              </li>
            </ul>
          </div>

          <div className="rowone" >
            <header>Chairs</header>
            <ul className="mega-links a">
              <li>
                <Link to="/">Arm Chairs</Link>
              </li>
              <li>
                <Link to="/">Rocking Chairs</Link>
              </li>
              <li>
                <Link to="/">Cantilever Chairs</Link>
              </li>
              <li>
                <Link to="/">Folding Chairs</Link>
              </li>
              <li>
                <Link to="/">Iconic Chairs</Link>
              </li>
              <li>
                <Link to="/">Cafe Chairs</Link>
              </li>
              <li>
                <Link to="/">Dining Chairs </Link>
              </li>
              <li>
                <Link to="/">Office Chairs</Link>
              </li>
            </ul>
          </div>

          <div className="rowone">
            <img
              alt="imgtag"
              className="d"
              src="https://ii1.pepperfry.com/media/wysiwyg/banners/2021_hover_Furniture.png"
            />
          </div>
        </div>
      </div>
    </li>
    <li>
      <Link to="/products/seettes">Recliners</Link>
      <div className="mega-box">
        <div className="content">
          <div className="rowone">
            <header>By Size</header>
            <ul className="mega-links a">
              <li>
                <Link to="/">3 Seater Sofas</Link>
              </li>
              <li>
                <Link to="/">2 Seater sofas</Link>
              </li>
              <li>
                <Link to="/">1 Seater Sofas</Link>
              </li>
              <li>
                <Link to="/">Sectional Sofas</Link>
              </li>
              <li>
                <Link to="/">Sofa Sets</Link>
              </li>
              <li>
                <Link to="/">1 Seater Recliners</Link>
              </li>
              <li>
                <Link to="/">2 Seater Recliners </Link>
              </li>
              <li>
                <Link to="/">3 Seater Recliners</Link>
              </li>
              <li>
                <Link to="/">Recliner Sets </Link>
              </li>
            </ul>
          </div>
          <div className="rowone">
            <header>By Type</header>
            <ul className="mega-links b">
              <li>
                <Link to="/">Corner Sofas</Link>
              </li>
              <li>
                <Link to="/">Modular Sofas</Link>
              </li>
              <li>
                <Link to="/">Sofa cum Beds</Link>
              </li>
              <li>
                <Link to="/">Futons</Link>
              </li>
              <li>
                <Link to="/">Chaise Loungers</Link>
              </li>
              <li>
                <Link to="/">Recliners</Link>
              </li>
            </ul>
          </div>

          <div className="rowone">
            <header>Sofa Chairs</header>
            <ul className="mega-links c">
              <li>
                <Link to="/">Lounge Chairs</Link>
              </li>
              <li>
                <Link to="/">Wing Chairs</Link>
              </li>
              <li>
                <Link to="/">Barrel Chairs</Link>
              </li>
              <li>
                <Link to="/">Slipper Chairs</Link>
              </li>
            </ul>
          </div>

          <div className="rowone">
            <img
              alt="imgtag"
              className="d"
              src="https://ii1.pepperfry.com/media/wysiwyg/banners/2021_hover_Sofa_Recliners.png"
            />
          </div>
        </div>
      </div>
    </li>
    <li>
      <Link to="/"> Cabinetry</Link>
      <div className="mega-box">
        <div className="content">
          <div className="rowone">
            <header>Wardrobes</header>
            <ul className="mega-links a">
              <li>
                <Link to="/">1 Door Wardrobes</Link>
              </li>
              <li>
                <Link to="/">2 Door Wardrobes</Link>
              </li>
              <li>
                <Link to="/">3 Door Wardrobes</Link>
              </li>
              <li>
                <Link to="/">4 Door Wardrobes</Link>
              </li>
              <li>
                <Link to="/">Fabric </Link>
              </li>
              <li>
                <Link to="/">Futons</Link>
              </li>
              <li>
                <Link to="/">Kids Wardrobes </Link>
              </li>
              <li>
                <Link to="/">Fabric Wardrobes</Link>
              </li>
            </ul>
          </div>
          <div className="rowone">
            <header>Storage</header>
            <ul className="mega-links b">
              <li>
                <Link to="/">Book Shelves</Link>
              </li>
              <li>
                <Link to="/">Book Cases</Link>
              </li>
              <li>
                <Link to="/">Chest of Drawers</Link>
              </li>
              <li>
                <Link to="/">Trunks</Link>
              </li>
              <li>
                <Link to="/">Plastic Cabinets</Link>
              </li>
              <li>
                <Link to="/">Office Cabinets</Link>
              </li>
            </ul>
          </div>

          <div className="rowone">
            <header>Kids Storage</header>
            <ul className="mega-links c">
              <li>
                <Link to="/">Book Shelves</Link>
              </li>
              <li>
                <Link to="/">Book Cases</Link>
              </li>
              <li>
                <Link to="/">Drawers</Link>
              </li>
              <li>
                <Link to="/"> Baskets</Link>
              </li>
              <li>
                <Link to="/">Boxes </Link>
              </li>
            </ul>
          </div>

          <div className="rowone">
            <img
              alt="imgtag"
              className="d"
              src="https://ii1.pepperfry.com/media/wysiwyg/banners/2021_hover_Cabinetry.png"
            />
          </div>
        </div>
      </div>
    </li>
    <li>
      <Link to="/">Beds</Link>
      <div className="mega-box">
        <div className="content">
          <div className="rowone">
            <header>Kids & Teens</header>
            <ul className="mega-links a">
              <li>
                <Link to="/">Cribs</Link>
              </li>
              <li>
                <Link to="/">Single Beds</Link>
              </li>
              <li>
                <Link to="/">Double Beds</Link>
              </li>
              <li>
                <Link to="/">Trundle Beds</Link>
              </li>
              <li>
                <Link to="/">Bookcase Beds</Link>
              </li>
              <li>
                <Link to="/">Novelty Beds</Link>
              </li>
              <li>
                <Link to="/">Tent Beds</Link>
              </li>
              <li>
                <Link to="/">Bed Units</Link>
              </li>
              <li>
                <Link to="/">Bunk Beds</Link>
              </li>
            </ul>
          </div>

          <div className="rowone">
            <header>Mattresses</header>
            <ul className="mega-links b">
              <li>
                <Link to="/">Single Bed Mattress</Link>
              </li>
              <li>
                <Link to="/"> Queen Bed Mattress</Link>
              </li>
              <li>
                <Link to="/"> King Bed Mattress</Link>
              </li>
              <li>
                <Link to="/"> Baby Mattress</Link>
              </li>
              <li>
                <Link to="/"> Kids Mattress </Link>
              </li>
            </ul>
          </div>
          <div className="rowone">
            <header>By Style</header>
            <ul className="mega-links c">
              <li>
                <Link to="/">Modern </Link>
              </li>
              <li>
                <Link to="/">Mid-Century</Link>
              </li>
              <li>
                <Link to="/"> Contemporary </Link>
              </li>
              <li>
                <Link to="/"> Transitional</Link>
              </li>
              <li>
                <Link to="/">Mission</Link>
              </li>
              <li>
                <Link to="/">Industrial </Link>
              </li>
              <li>
                <Link to="/">Platform </Link>
              </li>
              <li>
                <Link to="/">Poster Beds </Link>
              </li>
              <li>
                <Link to="/">Industrial </Link>
              </li>
              <li>
                <Link to="/">Folding Beds </Link>
              </li>
            </ul>
          </div>
          <div className="rowone">
            <img
              alt="imgtag"
              className="d"
              src="https://ii1.pepperfry.com/media/wysiwyg/banners/2021_hover_Beds.png"
            />
          </div>
        </div>
      </div>
    </li>
    <li>
      <Link to="/">Mattresses</Link>
      <div className="mega-box">
        <div className="content">
          <div className="rowone">
            <header>Mattresses</header>
            <ul className="mega-links a">
              <li>
                <Link to="/"> Mattress Sizes</Link>
              </li>
              <li>
                <Link to="/">Foldable Mattress</Link>
              </li>
              <li>
                <Link to="/"> Baby Mattress</Link>
              </li>
              <li>
                <Link to="/">Kids Mattress</Link>
              </li>
              <li>
                <Link to="/">Mattress Protectors</Link>
              </li>
              <li>
                <Link to="/">Mattress Toppers</Link>
              </li>
              <li>
                <Link to="/">Pillows</Link>
              </li>
              <li>
                <Link to="/">Bed Wedges </Link>
              </li>
              <li>
                <Link to="/">Mattress Steaming </Link>
              </li>
            </ul>
          </div>

          <div className="rowone">
            <header>Mattress Type</header>
            <ul className="mega-links a">
              <li>
                <Link to="/">Coir</Link>
              </li>
              <li>
                <Link to="/">Foam </Link>
              </li>
              <li>
                <Link to="/">Memory Foam </Link>
              </li>
              <li>
                <Link to="/">Bonnell Spring</Link>
              </li>
              <li>
                <Link to="/">Pocket Spring </Link>
              </li>
              <li>
                <Link to="/"> Latex </Link>
              </li>
              <li>
                <Link to="/">Coir & Foam </Link>
              </li>
              <li>
                <Link to="/"> HR Foam </Link>
              </li>
              <li>
                <Link to="/"> Cool Gel Foam </Link>
              </li>
              <li>
                <Link to="/"> Rebonded Foam </Link>
              </li>
            </ul>
          </div>
          <div className="rowone">
            <header>Mattress Brands</header>
            <ul className="mega-links b">
              <li>
                <Link to="/">Clouddio </Link>
              </li>
              <li>
                <Link to="/">Sleepyhead</Link>
              </li>
              <li>
                <Link to="/">Wake-fit </Link>
              </li>
              <li>
                <Link to="/">springtek</Link>
              </li>
              <li>
                <Link to="/">Duroflex</Link>
              </li>
              <li>
                <Link to="/">Durfi </Link>
              </li>
              <li>
                <Link to="/"> Comforto</Link>
              </li>
              <li>
                <Link to="/">SleepSpa </Link>
              </li>
              <li>
                <Link to="/"> Kurl-on</Link>
              </li>
              <li>
                <Link to="/"> SleepX </Link>
              </li>
            </ul>
          </div>
          <div className="rowone">
            <img
              alt="imgtag"
              className="d"
              src="https://ii1.pepperfry.com/media/wysiwyg/banners/2021_hover_Mattresses.png"
            />
          </div>
        </div>
      </div>
    </li>
    <li>
      <Link to="/"> Furnishings</Link>
      <div className="mega-box">
        <div className="content">
          <div className="rowone">
            <header>Bed Linen</header>
            <ul className="mega-links c">
              <li>
                <Link to="/"> Bed Sheets </Link>
              </li>
              <li>
                <Link to="/"> Bedding Sets</Link>
              </li>
              <li>
                <Link to="/"> Pillows </Link>
              </li>
              <li>
                <Link to="/"> Pillow Covers</Link>
              </li>
              <li>
                <Link to="/"> Bed Covers</Link>
              </li>
              <li>
                <Link to="/"> Diwan Sets</Link>
              </li>
              <li>
                <Link to="/"> Toppers</Link>
              </li>
              <li>
                <Link to="/"> Protectors </Link>
              </li>
              <li>
                <Link to="/"> </Link>
              </li>
            </ul>
          </div>

          <div className="rowone">
            <header>Curtains </header>
            <ul className="mega-links a">
              <li>
                <Link to="/">Door Curtains</Link>
              </li>
              <li>
                <Link to="/">Window Curtains </Link>
              </li>
              <li>
                <Link to="/">Blinds & Shades </Link>
              </li>
              <li>
                <Link to="/">Macrame Curtains</Link>
              </li>
              <li>
                <Link to="/">Curtain Rods </Link>
              </li>
              <li>
                <Link to="/"> Tie Backs </Link>
              </li>
            </ul>
          </div>
          <div className="rowone">
            <header> Cushion & Covers</header>
            <ul className="mega-links c">
              <li>
                <Link to="/"> Decorative Cushions </Link>
              </li>
              <li>
                <Link to="/">Floor Cushions</Link>
              </li>
              <li>
                <Link to="/">Cushion Covers </Link>
              </li>
              <li>
                <Link to="/">Sofa Covers</Link>
              </li>
              <li>
                <Link to="/">Sofa Throws</Link>
              </li>
              <li>
                <Link to="/">Chair Pads </Link>
              </li>
              <li>
                <Link to="/"> Chair Covers</Link>
              </li>
              <li>
                <Link to="/"> Cushion Inserts </Link>
              </li>
            </ul>
          </div>
          <div className="rowone">
            <img
              alt="imgtag"
              className="d"
              src="https://ii1.pepperfry.com/media/wysiwyg/banners/2021_hover_furnishing.png"
            />
          </div>
        </div>
      </div>
    </li>
    <li>
      <Link to="/">Decor</Link>
      <div className="mega-box">
        <div className="content">
          <div className="rowone">
            <header>Wall Art</header>
            <ul className="mega-links b">
              <li>
                <Link to="/">Metal Wall Art</Link>
              </li>
              <li>
                <Link to="/">Wooden Wall Art</Link>
              </li>
              <li>
                <Link to="/">Paintings</Link>
              </li>
              <li>
                <Link to="/">Art Panels </Link>
              </li>
              <li>
                <Link to="/"> Art Prints</Link>
              </li>
              <li>
                <Link to="/"> Ethnic Art</Link>
              </li>
              <li>
                <Link to="/">Wall Masks </Link>
              </li>
              <li>
                <Link to="/"> Faux Animal Busts</Link>
              </li>
              <li>
                <Link to="/">Wall Plates </Link>
              </li>
            </ul>
          </div>

          <div className="rowone">
            <header>Spiritual</header>
            <ul className="mega-links b">
              <li>
                <Link to="/"> Mandirs </Link>
              </li>
              <li>
                <Link to="/"> Pooja Shelves </Link>
              </li>
              <li>
                <Link to="/"> Religious Idols </Link>
              </li>
              <li>
                <Link to="/"> Religious Frames </Link>
              </li>
              <li>
                <Link to="/"> Chowkies </Link>
              </li>
              <li>
                <Link to="/">Feng Shui </Link>
              </li>
              <li>
                <Link to="/"> Pooja Essentials </Link>
              </li>
              <li>
                <Link to="/"> Festive Decor </Link>
              </li>
              <li>
                <Link to="/">Prayer Mats </Link>
              </li>
              <li>
                <Link to="/"> Spiritual Coins </Link>
              </li>
            </ul>
          </div>
          <div className="rowone">
            <header>Home Garden</header>
            <ul className="mega-links a">
              <li>
                <Link to="/">Pots & Planters </Link>
              </li>
              <li>
                <Link to="/"> Planter Stands</Link>
              </li>
              <li>
                <Link to="/">Natural Plants </Link>
              </li>
              <li>
                <Link to="/"> Artificial Plants</Link>
              </li>
              <li>
                <Link to="/">Artificial Flowers</Link>
              </li>
              <li>
                <Link to="/"> Artificial Grass </Link>
              </li>
              <li>
                <Link to="/">Decorative Pebbles </Link>
              </li>
              <li>
                <Link to="/"> Garden Figurines </Link>
              </li>
              <li>
                <Link to="/"> Bird Houses</Link>
              </li>
              <li>
                <Link to="/"> Gardening Tools</Link>
              </li>
            </ul>
          </div>
          <div className="rowone">
            <img
              alt="imgtag"
              className="d"
              src="https://ii1.pepperfry.com/media/wysiwyg/banners/2021_hover_Decor.png"
            />
          </div>
        </div>
      </div>
    </li>
    <li>
      <Link to="/"> Lighting</Link>
      <div className="mega-box">
        <div className="content">
          <div className="rowone">
            <header>Wall Lights</header>
            <ul className="mega-links b">
              <li>
                <Link to="/">Wall Sconces</Link>
              </li>
              <li>
                <Link to="/">Wall Lanterns</Link>
              </li>
              <li>
                <Link to="/">Picture Lights</Link>
              </li>
              <li>
                <Link to="/">Bath Lights</Link>
              </li>
            </ul>
          </div>

          <div className="rowone">
            <header>LED Lights</header>
            <ul className="mega-links b">
              <li>
                <Link to="/"> Lamps </Link>
              </li>
              <li>
                <Link to="/"> Ceiling Lights </Link>
              </li>
              <li>
                <Link to="/"> Wall Lights </Link>
              </li>
              <li>
                <Link to="/"> Bulbs and Batten </Link>
              </li>
            </ul>
          </div>
          <div className="rowone">
            <header>Table Lamps</header>
            <ul className="mega-links a">
              <li>
                <Link to="/">Table Lamps </Link>
              </li>
              <li>
                <Link to="/">Study Lamps</Link>
              </li>
              <li>
                <Link to="/">Table Lanterns </Link>
              </li>
              <li>
                <Link to="/"> Filament Bulbs</Link>
              </li>
            </ul>
          </div>
          <div className="rowone">
            <img
              alt="imgtag"
              className="d"
              src="https://ii1.pepperfry.com/media/wysiwyg/banners/2021_hover_Lighting.png"
            />
          </div>
        </div>
      </div>
    </li>
    <li>
      <Link to="/">Appliances</Link>
      <div className="mega-box">
        <div className="content">
          <div className="rowone">
            <header>Heating & Cooling</header>
            <ul className="mega-links a">
              <li>
                <Link to="/">Air Conditioners</Link>
              </li>
              <li>
                <Link to="/">Air Coolers</Link>
              </li>
              <li>
                <Link to="/">Fans</Link>
              </li>
              <li>
                <Link to="/">Water Geysers </Link>
              </li>
              <li>
                <Link to="/"> Room Heaters</Link>
              </li>
            </ul>
          </div>

          <div className="rowone">
            <header>Chimneys</header>
            <ul className="mega-links b">
              <li>
                <Link to="/"> Wall-Mounted </Link>
              </li>
              <li>
                <Link to="/"> Island Chimneys </Link>
              </li>
              <li>
                <Link to="/"> Designer Chimneys </Link>
              </li>
              <li>
                <Link to="/"> Straight Line </Link>
              </li>
            </ul>
          </div>
          <div className="rowone">
            <header>OTGs</header>
            <ul className="mega-links b">
              <li>
                <Link to="/">Microwaves </Link>
              </li>
              <li>
                <Link to="/">Ovens & OTGs</Link>
              </li>
              <li>
                <Link to="/">Fryers </Link>
              </li>
            </ul>
          </div>
          <div className="rowone">
            <img
              alt="imgtag"
              className="d"
              src="https://ii1.pepperfry.com/media/wysiwyg/banners/2021_hover_Appliances.png"
            />
          </div>
        </div>
      </div>
    </li>
    <li>
      <Link to="/"> Modular</Link>
      <div className="mega-box">
        <div className="content">
          <div className="rowone">
            <header>Modular Kitchens</header>
            <ul className="mega-links a">
              <li>
                <Link to="/">Straight Kitchen </Link>
              </li>
              <li>
                <Link to="/">L Shaped Kitchen </Link>
              </li>
              <li>
                <Link to="/">Parallel Kitchen</Link>
              </li>
              <li>
                <Link to="/"> U Shaped Kitchen </Link>
              </li>
              <li>
                <Link to="/">Island Kitchen </Link>
              </li>
            </ul>
          </div>

          <div className="rowone">
            <header>Modular Wardrobes</header>
            <ul className="mega-links b">
              <li>
                <Link to="/"> Hinged Wardrobes </Link>
              </li>
            </ul>
          </div>

          <div className="rowone">
            <img
              alt="imgtag"
              className="d1"
              src="https://ii2.pepperfry.com/media/wysiwyg/banners/Modular%206.png"
            />
          </div>
        </div>
      </div>
    </li>
  </ul>
 
</div>
</nav>
</Box>
        </Container>
        <hr />
      </>
    );
  }
  

  
  