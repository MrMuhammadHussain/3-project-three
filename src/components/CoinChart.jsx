import React from 'react'
import { Line } from "react-chartjs-2"
import { Chart as ChartJs, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js"


ChartJs.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const CoinChart = ({ arry = [], currency, days }) => {
    const prices = [1,2,3,4]
    const date = ["12/01/203","455456","212123"]
    const data = {

    }


    return (
        <div>
            <Line options={
                { responsive: true }}
                data={
                    {labels:date,datasets:[{
                        label:`Price In ${currency}`,
                        data:prices,
                        borderColor:"rgb(255,93,123)",
                        backgroundColor:"rgb(255,93,123,0.7)",
                    }] }} />



        </div>
    )
}

export default CoinChart