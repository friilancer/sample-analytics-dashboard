import Head from 'next/head'
import { useState } from 'react'
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

  let data = {
    "graph_data": {
      "views": {
        "2022-07-31": 1,
        "2022-08-01": 3,
        "2022-08-02": 3,
        "2022-08-03": 7,
        "2022-08-04": 8,
        "2022-08-05": 5,
        "2022-08-06": 20,
        "2022-08-07": 50,
        "2022-08-08": 100,
        "2022-08-09": 2
      }
    },
    "top_locations": [
      {
        "country": "Nigeria",
        "count": 68,
        "percent": 34
      },
      {
        "country": "Germany",
        "count": 37,
        "percent": 19
      },
      {
        "country": "Ghana",
        "count": 50,
        "percent": 25
      },
      {
        "country": "Finland",
        "count": 40,
        "percent": 20
      },
      {
        "country": "United Kingdom",
        "count": 4,
        "percent": 2
      }
    ],
    "top_sources": [
      {
        "source": "google",
        "count": 50,
        "percent": 25
      },
      {
        "source": "instagram",
        "count": 68,
        "percent": 34
      },
      {
        "source": "facebook",
        "count": 40,
        "percent": 20
      },
      {
        "source": "linkedin",
        "count": 41,
        "percent": 21
      }
    ]
  }

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
            graphData={data.graph_data}
          />
        </div>
        <div className={styles.pane__statscard}>
          <StatsCard 
            cardTitle='Top Locations'
            graphData={data.top_locations.map(({country, percent}) => ({root : country, percent}))}
          />
          <StatsCard 
            cardTitle='Top Sources'
            graphData={data.top_sources.map(({source, percent}) => ({root: source, percent}))}
          />
        </div>
      </div>

    </>
  )
}

export default Home
