import Image from "next/image";
import styles from "./_header.module.scss"
export default function Header() {
  return (
    <div className={styles.header}>
        <div className={styles.container}>
            <div className={styles.logo}>
              <Image
                className="hidden-md"
                src="/logo.png"
                alt="Viajemos-logo"
                width={165}
                height={35}
              />
              <Image
                className="hidden-xs"
                src="/logo.png"
                alt="Viajemos-logo"
                width={200}
                height={48}
              />
            </div>
            <ul className={styles.options}>
              <li className="item">
                <Image
                  className="hidden-md"
                  src="/icon-currency.svg"
                  alt="currency-icon"
                  width={18}
                  height={18}
                />
                <Image
                  className="hidden-xs"
                  src="/icon-currency.svg"
                  alt="currency-icon"
                  width={24}
                  height={24}
                />
                <span className="hidden-xs">COP</span>
              </li>
              <li className="item">
                <Image
                  className="hidden-md"
                  src="/co-xs.png"
                  alt="icon-country"
                  width={18}
                  height={18}
                />
                <Image
                  className="hidden-xs"
                  src="/co-xs.png"
                  alt="icon-country"
                  width={24}
                  height={24}
                />
                <span className="hidden-xs">Español</span>
              </li>
              <li className="hidden-xs separator"></li>
              <li  className={styles.opt}>
                <Image
                  className="hidden-md"
                  src="/icon-user.svg"
                  alt="icon-user"
                  width={18}
                  height={18}
                />
                <Image
                  className="hidden-xs"
                  src="/icon-user.svg"
                  alt="icon-user"
                  width={24}
                  height={24}
                />
                <span className="hidden-xs">Iniciar Sesión</span>
              </li>
              <li className="hidden-xs item">
                  <Image
                    className=""
                    src="/icon-help.svg"
                    alt="icon-help"
                    width={24}
                    height={24}
                  />
                  <span>Ayuda</span>
              </li>
            </ul>
        </div>
    </div>
  )
}