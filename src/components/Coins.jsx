import { Button, Container, HStack, } from '@chakra-ui/react'
import axios from 'axios'
import CoinCard from './CoinCard'
import Loader from './Loader'
import { useState, useEffect } from "react"
import ErrorComponent from "./ErrorComponent";
import { server } from '../index'
// import {FcPrevious , FcNext} from "react-icons/fc"


const Coins = () => {
  const [coins, setCoins] = useState([])
  const [Loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [page, setPage] = useState(1)
  const [currency, setCurrency] = useState("pkr")

  const currencySymbol = currency === "pkr" ? "Rs. " : currency === "eur" ? "€" : "$"

  const ChangePage = (page) => {
    setPage(page + 1)
    setLoading(true)

  }
  const PerPage = (page) => {
    setPage(page - 1)
    setLoading(true)
  }
  const firstPage = (page) => {
    setPage(1)
    setLoading(true)
  }
  useEffect(() => {

    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`)
        setCoins(data)
        setLoading(false)
        console.log(data);

      } catch (error) {
        setError(true)
        setLoading(false)


      }
    }
    fetchCoins()

  }, [currency, page])
  if (error) {
    return <ErrorComponent />
  }



  return (
    <div >
      <Container maxW={"container.xl"} pos={"absolute"}>
        {
          Loading ? <Loader /> : <>
            <HStack wrap={"wrap"}>

              {
                coins.map((i) =>
                  <CoinCard name={i.name} image={i.image} id={i.id} price={i.current_price} symbol={i.symbol} currencySymbol={currencySymbol} key={i.id} />
                )
              }
            </HStack>

            <HStack w={"full"} justifyContent={"center"}>

              {
                page == "1" ? "" :page =="2" ? ""  : <Button bgColor={"blackAlpha.800"} color={"white"} onClick={() => firstPage(1)}>firstPage</Button>
              }

              {
                page == "1" ? "" : <Button bgColor={"blackAlpha.800"} color={"white"} onClick={() => PerPage(page)}>{`${page - 1}`}</Button>
              }

              <Button bgColor={"blackAlpha.800"} color={"white"} onClick={() => ChangePage(page)}>{`${page + 1}>`}</Button>

            </HStack>

          </>

        }
      </Container>



    </div>
  )
}

export default Coins