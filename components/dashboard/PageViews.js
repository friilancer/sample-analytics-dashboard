import { Line } from "react-chartjs-2"
import dayjs from "dayjs";
import { 
    Chart as ChartJS, 
    LineElement, 
    PointElement, 
    LinearScale, 
    Title,
    CategoryScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Tooltip,
    SubTitle
} from "chart.js";
import styles from "../../styles/PageViews.module.css"
import { useEffect, useRef, useState } from "react";


ChartJS.register(
    LineElement, 
    PointElement, 
    LinearScale, 
    Title,
    CategoryScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    //Legend,
    Tooltip
 );

const PageView = ({
    graphData = {},
    status = "loading",
    subTitle= "All time"
}) => {

    const [size, setSize] = useState(0);
    const chartRef = useRef(null)
    const chartContainerRef = useRef(null)

    useEffect(() => {
        
        const updateSize = () => {
          setSize(window.innerWidth);
        };
        
        window.addEventListener('resize', updateSize);
        
        updateSize();

        return () => window.removeEventListener('resize', updateSize);
    }, []);

    useEffect(() => {
        const chart = chartRef.current;
        if (chart) {
            chartRef.current.canvas.style.width = `${chartContainerRef.current.clientWidth}px`;
            chartRef.current.canvas.style.height = `${window.innerHeight*0.4}px`;
        };
    }, [size])

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div>
                    <h4 className={styles.header__title}>Page Views</h4>
                    <div className={styles.header__subtitle}>{`${subTitle}.`}</div>
                </div>
                <div className={styles.header__actions}>
                    <img src="/assets/icons/info.png" alt="info icon" />
                </div>
            </div>
            <h1 className={styles.chart__title}>500</h1>
            <div ref={chartContainerRef}  className={styles.chart__container}>
                <Line
                    ref={chartRef}
                    data={{
                        labels: Object.keys(graphData?.views).map((date) => dayjs(date).format("DD MMM")),
                        datasets: [{
                            label: "",
                            data: Object.values(graphData?.views),
                            borderColor: "rgba(255, 84, 3, 1)",
                            backgroundColor: (context) => { 
                                const ctx = context.chart.ctx; 
                                const gradient = ctx.createLinearGradient(0, 0, 0, 600); 
                                gradient.addColorStop(0, "rgba(255, 84, 3, 0.3)"); 
                                gradient.addColorStop(1, "rgba(255,84,3,0)"); 
                                return gradient; 
                            },
                            borderWidth: 2,
                            fill: true,
                            tension: 0,
                            
                        }]
                    }}
                    options={{
                        elements : {
                            point : {
                                pointStyle: "circle",
                                radius: 0
                            }
                        },
                        scales: {
                            x: {
                                grid : {
                                    display: false,
                                },
                                grace: "5%",
                                offset: true
                            },
                            y: {
                                border: {
                                    color: "#fff",
                                    dash: [5],
                                    dashOffset: 3
                                },
                                grid:{
                                    drawTicks: false,
                                },
                                grace: "1%",
                            }
                        },
                        maintainAspectRatio: false,
                        
                    }}
                />
            </div>
        </div>
    )
}

export default PageView