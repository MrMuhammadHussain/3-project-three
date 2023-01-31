import { Image } from '@chakra-ui/react'
import React from 'react'
import gif from "../assets/coin.gif"

const Loader = () => {
  return (
    <div style={{display:"flex", justifyContent:"center",marginTop:"19%"}}> <Image src={gif} w={"300px"} h={"300px"} objectFit={"contain"} />
    
    
    
    
    
    </div>
  )
}

export default Loader