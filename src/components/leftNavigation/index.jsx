import Link from "next/link"
import { useRouter } from "next/router"

// StyleSheets
import styles from "./LeftNavigation.module.scss"

export default function LeftNavigation({ toggle }) {
   const router = useRouter()

   const lis = [
      { title: "Aperture", icon: "aperture-outline", link: "#" },
      { title: "Dashboard", icon: "home-outline", link: "/" },
      { title: "Customers", icon: "people-outline", link: "#" },
      { title: "Help", icon: "help-circle-outline", link: "#" },
      { title: "Settings", icon: "settings-outline", link: "#" },
      { title: "Log Out", icon: "log-out-outline", link: "#" },
   ]

   return (
      <>
         <div className={`${styles.navigation}  ${toggle && styles.active}`}>
            <ul>
               {lis.map((li) => (
                  <li key={li.title} className={li.link == router.asPath ? styles.hovered : null}>
                     <Link href={li.link}>
                        <a>
                           <span className={styles.icon}>
                              <ion-icon name={li.icon}></ion-icon>
                           </span>
                           <span className={styles.title}>{li.title}</span>
                        </a>
                     </Link>
                  </li>
               ))}
            </ul>
         </div>
      </>
   )
}
