import { Button, Container, HStack, Radio, RadioGroup, } from '@chakra-ui/react'
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

  const currencySymbol = currency === "pkr" ? "Rs: " : currency === "eur" ? "€: " : "$: "
  /* //pagenation button */
  // const ChangePage = (page) => {
  //   setPage(page + 1)
  //   setLoading(true)

  // }
  // const PerPage = (page) => {
  //   setPage(page - 1)
  //   setLoading(true)
  // }
  // const firstPage = (page) => {
  //   setPage(1)
  //   setLoading(true)
  // }

  /* anothe mathed to print button */

  const ChangePage = (page) => {
    setPage(page)
    setLoading(true)

  }
  const btns = new Array(124).fill(1)



  useEffect(() => {

    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`)
        setCoins(data)
        setLoading(false)
        // console.log(data);

      } catch (error) {
        setError(true)
        setLoading(false)


      }
    }
    fetchCoins()

  }, [currency, page])
  if (error) { return <ErrorComponent />}



  return (
    <div >
      <Container maxW={"container.xl"}>
        <RadioGroup value={currency} onChange={setCurrency} p={"5"}>
          <HStack spacing={"4"} justifyContent={"flex-start"}>
            <Radio value="pkr">PKR</Radio>
            <Radio value="eur">EUR</Radio>
            <Radio value="usd">USD</Radio>
          </HStack>
        </RadioGroup>
        {
          Loading ? <Loader /> : <>


            <HStack wrap={"wrap"} justifyContent={"space-evenly"}>

              {
                coins.map((i) =>
                  <CoinCard name={i.name} image={i.image} id={i.id} price={i.current_price} symbol={i.symbol} currencySymbol={currencySymbol} key={i.id} />
                )
              }
            </HStack>

            <HStack overflowX={"auto"} p={"8"} >
              {/* //pagenation button */
              /* {
                page == "1" ? "" :page =="2" ? ""  : <Button bgColor={"blackAlpha.800"} color={"white"} onClick={() => firstPage(1)}>firstPage</Button>
              }
              {
                page == "1" ? "" : <Button bgColor={"blackAlpha.800"} color={"white"} onClick={() => PerPage(page)}>{`${page - 1}`}</Button>
              }
              <Button colorScheme={"blackAlpha"} color={"white"} onClick={() => ChangePage(page)}>{`${page + 1}>`}</Button> */}

              {/* anothe mathed to print button */}
              {
                btns.map((item, index) => {
                  return (
                    <Button colorScheme={"blackAlpha"} bgColor={"white"} color={"Black"} onClick={() => ChangePage(index + 1)} shadow={"lg"} key={index}>
                      {index + 1}
                    </Button>
                  )

                })
              }

            </HStack>

          </>

        }
      </Container>



    </div>
  )
}

export default Coins