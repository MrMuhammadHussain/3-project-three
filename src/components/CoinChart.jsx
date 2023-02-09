import React from 'react'
import { Line } from "react-chartjs-2"
import { Chart as ChartJs, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js"


ChartJs.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const CoinChart = ({ arry = [], currency, days }) => {
    const prices = []
    const date = []

    for (let i = 0; i < arry.length; i++) {
        if (days === "24h") { date.push(new Date(arry[i][0]).toLocaleTimeString()); }
        else { date.push(new Date(arry[i][0]).toLocaleDateString()) };
        prices.push(arry[i][1]);

    }
    const data = {
        labels: date,
        datasets: [
            {
                label: `Price In ${currency}`.toUpperCase(),
                data: prices,
                borderColor: "rgb(255,93,123)",
                backgroundColor: "rgb(255,93,123,0.7)",
            }]

    }


    return (
        <div >
            <Line options={
                { responsive: true }}
                data={data}  />



        </div>
    )
}

export default CoinChart