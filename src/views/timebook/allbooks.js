import { CChart } from "@coreui/react-chartjs";
import { plugins } from "chart.js";
import { getStyle } from "chart.js/helpers";
import React from "react";

const Linecharts = () => {
    const data = {
        labels: ["January", "Febreary", "March", "April", "May", "June", "July"],
        datasets: [{
            label: "My First dataset",
            backgroundColor: "rgba(220,220,220,0.2)",
            borderColor: "rgba(220,220,220,1)",
            pointBackgroundColor: "rgba(220,220,220,1)",
            data: [40, 20, 12, 39, 10, 40, 39, 80, 40]
        }, {
            label: "My Second dataset",
            backgroundColor: "rgba(151,187,205,0.2)",
            borderColor: "rgba(151,187,205,1)",
            pointBackgroundColor: "rgba(151,187,205,1)",
            data: [40, 20, 12, 39, 10, 40, 39, 80, 40]
        }]
    }

    const options = () => {
        plugins: {
            legends: {
                labels: {
                    color: getStyle('--cui-body-color')
                }
            }
        }

        scales: {
            x: {
                grid: { color: getStyle('--cui-border-color-translucent') }
                ticks: { color: getStyle('--cui-body-color') }
            }

            y: {
                grid: { color: getStyle('--cui-border-color-translucent') }
                ticks: { color: getStyle('--cui-body-color') }
            }

        }
    }

    return (
        <CChart type="line" data={data} options={options} />
    )
}

const Allbooks = () => {
    <Linecharts />
}

export default Allbooks