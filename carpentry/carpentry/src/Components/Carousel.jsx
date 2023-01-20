import styles from './Car.module.css'
import React from 'react'


const data=[
    "https://ii1.pepperfry.com/media/wysiwyg/banners/Web_Promo_2x_2001_r1.jpg",
    "https://ii2.pepperfry.com/media/wysiwyg/banners/Hp_section2_web_04012023_1.jpg",
    "https://ii3.pepperfry.com/media/wysiwyg/banners/Hp_section2_web_04012023_2.jpg",
    "https://ii1.pepperfry.com/media/wysiwyg/banners/Hp_section2_web_04012023_3.jpg",
    "https://ii2.pepperfry.com/media/wysiwyg/banners/Hp_section2_web_04012023_1.jpg"
]

const Carousel=()=>{
    const [count, setCount]=React.useState(0);


    React.useEffect(()=>{
      
     const id= setInterval(()=>{
        setCount((pre)=>{
            if(pre>=3){
                setCount(0)
            }
            
            return pre+1
        });
        
       },3000)
    const cleanUp=()=>{
        clearInterval(id)
    }
    return cleanUp

    },[])
    return <>
   
        <div className={styles.car}>

            <img style={{width:'100%', height:'100%'}} src={data[count]} alt="" />
        </div>
        
        
    
    </>
}
export default Carousel; 