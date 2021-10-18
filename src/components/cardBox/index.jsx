// StyleSheets
import styles from "./CardBox.module.scss"

export default function CardBox() {
   const boxs = [
      { numbers: "1,504", name: "Daily Views", icon: "eye-outline" },
      { numbers: "88", name: "Sales", icon: "cart-outline" },
      { numbers: "257", name: "Comments", icon: "chatbubbles-outline" },
      { numbers: "$780", name: "Earnings", icon: "cash-outline" },
   ]

   return (
      <>
         <div className={styles.cardBox}>
            {boxs.map((box) => (
               <div key={box.name} className={styles.card}>
                  <div>
                     <div className={styles.numbers}>{box.numbers}</div>
                     <div className={styles.cardName}>{box.name}</div>
                  </div>

                  <div className={styles.iconBx}>
                     <ion-icon name={box.icon}></ion-icon>
                  </div>
               </div>
            ))}
         </div>
      </>
   )
}
