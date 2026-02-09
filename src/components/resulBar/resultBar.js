import Image from "next/image";
import styles from "./_resultBar.module.scss"
export default function ResultBar() {
  return (
    <div className={styles.resultBar}>
        <div className={styles.container}>
            <div className={styles.infoCategory}>
                <p className={styles.bigCategory}>
                    <span className={styles.category}>
                        Economicos
                    </span>
                    <span className={styles.results}>
                        (45) Resultados
                    </span>
                </p>
            </div>
            <div className={styles.priceCateogry}>
                <p className={styles.textPrice}>
                    <span className={styles.categoryPrice}>+ Económicos</span>
                    <span className={styles.priceFrom}>Desde</span>
                </p>
                <p className="bigPrice">
                    <span className="numberPrice">$544.448</span>
                    <span className="separator"></span>
                    <span className="time">día</span>
                </p>
            </div>
        </div>
    </div>
  )
}