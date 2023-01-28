
import { Button, HStack } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div>
        <HStack p={"4"} shadow={"base"} backgroundColor={"blackAlpha.800"} spacing={"7"} justifyContent={"center"}>
            <Button variant={"unstyled"} color={"white"}>
                <Link to={"/"}>Home</Link>
            </Button>


            <Button variant={"unstyled"} color={"white"}>
                <Link to={"/exchanges"}>Exchanges</Link>
            </Button>


            <Button variant={"unstyled"} color={"white"}>
                <Link to={"/coins"}>Coins</Link>
            </Button>
    
        
        </HStack>


    </div>
  )
}

export default Header