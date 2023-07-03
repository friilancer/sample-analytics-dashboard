import { Doughnut } from "react-chartjs-2"
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
    SubTitle,
    ArcElement,
} from "chart.js";
import styles from "../../styles/StatsCard.module.css"
import Link from "next/link";
import Spinner from "../spinner";


ChartJS.register(
    LineElement, 
    PointElement, 
    ArcElement,
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

const Card = ({
    cardTitle ="",
    seeMore= () => {},
    graphData = [],
    isLoading = true,
}) => {

    const indicators = [
        "rgba(89, 158, 234, 1)",
        "rgba(132, 79, 246, 1)",
        "rgba(15, 183, 122, 1)",
        "rgba(250, 183, 10, 1)",
        "rgba(240, 148, 104, 1)"
    ]

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h4>{cardTitle}</h4>
                <Link href="#">
                    <a onClick={seeMore} className={styles.actions}>View full reports</a>
                </Link>
            </div>
            {
                isLoading ? <Spinner /> : (        
                    <div className={styles.main}>
                        <div className={styles.labels__container}>
                            {
                                graphData.map(({root, percent}, index) => {
                                    return (
                                        <div className={styles.label}>
                                            <div className={styles.label__source}>
                                                <img src={`/assets/icons/${root}.png`} />
                                                <span>{root}</span>
                                            </div>
                                            <div className={styles.label__count}>{percent}</div>
                                            <div className={styles.label__indicator} style={{backgroundColor: indicators[index]}}></div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className={styles.chart__container}>
                        <Doughnut 
                                data={{
                                    labels: graphData.map(item => item.root),
                                    datasets: [{
                                        label: "",
                                        data: graphData.map(item => item.percent),
                                        backgroundColor: indicators,
                                        borderWidth: 0 
                                    }]
                                }}
                                
                            />
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Card