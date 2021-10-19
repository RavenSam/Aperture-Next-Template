// StyleSheets
import styles from "./RecentOrders.module.scss"

export default function RecentOrders() {
   const orders = [
      { name: "Star Refrigeratory", price: "$1,200", payment: "Paid", status: "delivered" },
      { name: "Casual Shoes", price: "$100", payment: "Paid", status: "delivered" },
      { name: "Wall Fanc", price: "$120", payment: "Paid", status: "delivered" },
      { name: "Denim Shirt", price: "$100", payment: "Paid", status: "pending" },
      { name: "Addidas Shoes", price: "$500", payment: "Paid", status: "delivered" },
      { name: "Casual Shoes", price: "$200", payment: "Paid", status: "pending" },
   ]

   return (
      <>
         <div className={styles.recentOrdres}>
            <div className={styles.cardHeader}>
               <h2>Recent Orders</h2>
               <a href="#" className={styles.btn}>
                  View All
               </a>
            </div>
            <table>
               <thead>
                  <tr>
                     {Object.keys(orders[0]).map((item) => (
                        <td key={item}>{item}</td>
                     ))}
                  </tr>
               </thead>
               <tbody>
                  {orders.map((order, index) => (
                     <tr key={index}>
                        <td>{order.name}</td>
                        <td>{order.price}</td>
                        <td>{order.payment}</td>
                        <td>
                           <span className={`${styles.status} ${styles[order.status]}`}>{order.status}</span>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </>
   )
}
