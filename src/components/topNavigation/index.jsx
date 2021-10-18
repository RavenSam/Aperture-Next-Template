import Image from "next/image"

// StyleSheets
import styles from "./TopNavigation.module.scss"

export default function TopNavigation({ handleToggle, toggle }) {
   return (
      <>
         <div className={styles.topbar}>
            <div className={styles.toggle} onClick={handleToggle}>
               <ion-icon name="menu-outline"></ion-icon>
            </div>

            <div className={styles.search}>
               <label>
                  <input type="text" placeholder="Search here" />
                  <ion-icon name="Search-outline"></ion-icon>
               </label>
            </div>

            <div className={styles.user}>
               <Image src="/images/user.jpg" alt="Picture of the author" layout="fill" />
            </div>
         </div>
      </>
   )
}
