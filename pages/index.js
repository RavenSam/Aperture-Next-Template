import Head from "next/head"
import { useState } from "react"

import styles from "../src/styles/Home.module.scss"

// Components
import LeftNavigation from "../src/components/leftNavigation"
import TopNavigation from "../src/components/topNavigation"
import CardBox from "../src/components/cardBox"
import RecentOrders from "../src/components/recentOrders"
import RecentCustomers from "../src/components/recentCustomers"

export default function Home() {
   const [toggle, setToggle] = useState(false)

   const handleToggle = () => setToggle(!toggle)

   return (
      <>
         <Head>
            <title>Admin Dashboard - Aperture</title>
         </Head>

         <div className="home">
            <LeftNavigation toggle={toggle} />

            <main className={`${styles.main} ${toggle && styles.active}`}>
               <TopNavigation handleToggle={handleToggle} toggle={toggle} />

               <CardBox />

               <div className={styles.details}>
                  <RecentOrders />

                  <RecentCustomers />
               </div>
            </main>
         </div>
      </>
   )
}
