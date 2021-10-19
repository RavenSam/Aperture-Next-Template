import Image from "next/image"

// StyleSheets
import styles from "./RecentCustomers.module.scss"

export default function RecentCustomers() {
   const customers = [
      { name: "David", country: "Italy", image: "/images/img1.jpg" },
      { name: "Muhammad", country: "India", image: "/images/img2.jpg" },
      { name: "Amelia", country: "France", image: "/images/img3.jpg" },
      { name: "Olivia", country: "USA", image: "/images/img4.jpg" },
      { name: "Aumit", country: "Japan", image: "/images/img5.jpg" },
      { name: "Autnaf", country: "India", image: "/images/img6.jpg" },
   ]

   return (
      <>
         <div className={styles.recentCustomers}>
            <div className={styles.cardHeader}>
               <h2>Recent Customers</h2>
            </div>

            <table>
               {customers.map((customer, index) => (
                  <tr key={index}>
                     <td width="60px">
                        <div className={styles.imgBx}>
                           <Image src={customer.image} alt={customer.name} layout="fill" />
                        </div>
                     </td>
                     <td>
                        <h4>
                           {customer.name} <br />
                           <span>{customer.country}</span>
                        </h4>
                     </td>
                  </tr>
               ))}
            </table>
         </div>
      </>
   )
}
