import Head from 'next/head'
import { useEffect, useState } from 'react'
import PageView from '../components/dashboard/PageViews'
import StatsCard from '../components/dashboard/StatsCard'
import Pill from '../components/pill'
import styles from '../styles/Dashboard.module.css'

const Home = () => {
  const [activeFilterId, setActiveFilterId] = useState(4)
  const filterOptions = [
    {
      label: '1 Day',
    },
    {
      label: '3 Days',
    },
    {
      label: '7 Days',
    },
    {
      label: '30 Days',
    },
    {
      label: 'All Time',
    },
    {
      label: 'Custom Date',
    },

  ]
  const [graphData, setGraphData] = useState({
    "views" : {}
  })
  const [topLocations, setTopLocations] = useState([])
  const [topSources, setTopSources] = useState([])

  useEffect(()  => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fe-task-api.mainstack.io/")
        const data = await response.json()
        setGraphData(data?.graph_data)
        setTopLocations(data?.top_locations)
        setTopSources(data?.top_sources)
      } catch (e) { }
    }
    fetchData()
  }, [])

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>

      <div className={styles.container}>
        <h4 className={styles.title}>Dashboard</h4>
        <div className={styles.header}>
         <div>
          <h3 className={styles.header__title}>Good morning, Blessing ⛅️</h3>
          <div className={styles.header__subtitle}>Check out your dashboard summary.</div>
         </div>
         <div className={styles.header__actions}>
            View analytics
         </div>
        </div>

        <div className={styles.filters__container}>
          <div className={styles.filters}>
          {
            filterOptions.map((option, index) => {
              return (
                <Pill
                  id={index}
                  text={option.label}
                  isActive={activeFilterId === index}
                  onClick={() => setActiveFilterId(index)}
                />
              )
            })
          }
          </div>
        </div>
        <div className={styles.pane__pageview}>
          <PageView
            subTitle={filterOptions[activeFilterId].label}
            graphData={graphData}
          />
        </div>
        <div className={styles.pane__statscard}>
          <StatsCard 
            cardTitle='Top Locations'
            graphData={topLocations.map(({country, percent}) => ({root : country, percent}))}
          />
          <StatsCard 
            cardTitle='Top Sources'
            graphData={topSources.map(({source, percent}) => ({root: source, percent}))}
          />
        </div>
      </div>

    </>
  )
}

export default Home
