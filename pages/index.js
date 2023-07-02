import Head from 'next/head'
import { useState } from 'react'
import Image from 'next/image'
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
      label: '7 Day',
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

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>

      <div className={styles.container}>
        <h4 className={styles.title}>Dashboard</h4>
        <div className={styles.header}>
         <div>
          <h3>Good morning, Blessing ⛅️</h3>
          <div className={styles.header__text}>Check out your dashboard summary.</div>
         </div>
         <div className={styles.header__analytics}>
            View analytics
         </div>
        </div>

        <div className={styles.filters}>
          {
            filterOptions.map((option, index) => {
              return (
                <Pill
                  key={index}
                  text={option.label}
                  isActive={activeFilterId === index}
                  onClick={() => setActiveFilterId(index)}
                />
              )
            })
          }
        </div>
      </div>

    </>
  )
}

export default Home
