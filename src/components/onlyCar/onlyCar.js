import Image from "next/image";


import styles from "./_onlycar.module.scss"

export default function OnlyCar() {
  return (
    <div className={styles.car}>
        <Image
            src="/cards/car-blue-lg.png"
            alt=""
            width={220}
            height={115}
        ></Image>
        <ul className={styles.options}>
            <li>
                <Image
                    src="/cards/people.svg"
                    alt="people"
                    width={20}
                    height={20}
                ></Image>
                <span>5 Pasajeros</span>
            </li>
            <li>
                <Image
                    src="/cards/shopping-bag.svg"
                    alt="bags"
                    width={20}
                    height={20}
                ></Image>
                <span>3 Maletas</span>
            </li>
            <li>
                <Image
                    src="/cards/frozen.svg"
                    alt="frozen"
                    width={20}
                    height={20}
                ></Image>
                <span>Aire Acondinionado</span>
            </li>
            <li>
                <Image
                    src="/cards/transmition.svg"
                    alt="caja automarica"
                    width={20}
                    height={20}
                ></Image>
                <span>Caja Automática</span>
            </li>
        </ul>
    </div>
  )
}