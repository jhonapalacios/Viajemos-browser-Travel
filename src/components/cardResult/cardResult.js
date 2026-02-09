import Image from "next/image";
import Link from "next/link";

import styles from "./_cardResult.module.scss"

const FEATUERS_ICONS = {
  pleople: '/cards/people.svg',
  bag: '/cards/shopping-bag.svg',
  frezer: '/cards/frozen.svg',
  atraction: '/cards/transmition.svg',
};

export default function CardResult({ name, category, carImage, brandImage , features, price, badge, typeBadge }) {
  return (
    <div className={styles.card}>
        <div className={styles.headCard}>
            <div className={styles.headerResult}>
                <div className={styles.infoCompany}>
                    <div className={styles.contentInfoBrand}>
                        <Image
                            className="brandCompany"
                            src={`/cards/${brandImage}`}
                            alt="brand-logo"
                            width={63}
                            height={26}
                        />
                        <div className={styles.rating}>
                            <Image
                                className="starRating"
                                src="/cards/start-icon.png"                        
                                alt="start-icon"
                                width={18}
                                height={18}
                            />
                            <span className="qualification">4.8</span>
                        </div>

                    </div>
                    <div className={styles.airport}>
                        <Image
                            className="plane"
                            src="/cards/icon-plane.png"
                            alt="start-icon"
                            width={16}
                            height={18}
                        />
                        <span className="inAirport">En Aeropuerto &gt;</span>
                    </div>
                </div>
                <Image
                    className="Seal"
                    src="/cards/Seal.svg"
                    alt="seal"
                    width={70}
                    height={70}
                ></Image>
            </div>
            <div className={styles.contentCar}>
                <Image
                    className="hidden-md"
                    src={`/cards/${carImage.xs}`}
                    alt={name}
                    width={110}
                    height={60}
                ></Image>
                <Image
                    className="hidden-xs"
                    src={`/cards/${carImage.md}`}
                    alt={name}
                    width={180}
                    height={100}
                ></Image>
                <div className={styles.infoCar}>
                    <p className={`${styles.category} hidden-xs`}>{category}</p>
                    <p className={styles.brandCar}>
                        <span className={styles.nameBrand}>{name}</span> o <span className={styles.similarBrand}>Similar</span>
                    </p>
                    <ul className={styles.features}>
                        {Object.entries(features).map(([key, value]) => ( 
                            <li key={key} className="detail-item">
                                {FEATUERS_ICONS[key] && (
                                    <Image
                                        className="icon-detail"
                                        src={FEATUERS_ICONS[key]} 
                                        alt={key} 
                                        width={16}
                                        height={16}
                                    ></Image>
                                )}
                                <span className="textFeature">{value}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.footCard}>
            <div className={styles.details}>
                <div className={`${styles.containerDetails} ${styles.policyOn}`}>
                    <div className={styles.infoDetails}>
                        <p className={styles.headDetails}>
                            <span className={styles.titleDetails}>Con seguro</span>
                            <span className="hidden-xs"> - </span>
                            <span>Tarifa todo incluido</span>
                        </p>
                        <ul className={styles.bodyDetails}>
                            <li className="item">
                                <Image
                                    className=""
                                    src="/cards/shield-tick.svg"
                                    alt="shield-tick"
                                    width={20}
                                    height={20}
                                ></Image>
                                <span>Seguro Auto Rentado</span>
                            </li>
                            <li className="item">
                                <Image
                                    className=""
                                    src="/cards/security-user.svg"
                                    alt="security-user"
                                    width={20}
                                    height={20}
                                ></Image>
                                <span>Seguro a Terceros</span>
                            </li>
                        </ul>
                        <div className={styles.footDetails}>
                            {badge?.trim().length > 0 && (
                                <div className={`badgeOutline ${typeBadge}`}>
                                    <p className="textBadge">{badge}</p>
                                </div>
                            )}
                            <div className={styles.showDetails}>
                                <Link
                                    href="/"
                                >
                                    Ver detalles
                                    <Image
                                        className=""
                                        src="/cards/info-circle.svg"
                                        alt="shield-tick"
                                        width={14}
                                        height={14}
                                    ></Image>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={styles.priceDetails}>
                        <div className={styles.infoPrice}>
                            <div className={styles.oldPrice}>
                                <p className={styles.txtPrice}>Antes <span>{price.oldPrice} </span></p>
                                <div className={styles.dcto}>
                                    <span className="valueDcto">{price.dcto}% </span>
                                </div>
                            </div>
                            <p className="bigPrice">
                                <span className="numberPrice">{price.actualPrice} </span>
                                <span className="separator"></span>
                                <span className="time">día</span>
                            </p>
                            <p className={styles.totalPrice}>
                                Total {price.totalPrice}
                            </p>
                        </div>
                        <Link
                            href="/"
                            className="btn btn-primary"
                        >Reservar</Link>
                    </div>
                </div>
            </div>
            <div className={`${styles.divider}  visible-lg` }></div>
            
            <div className={`${styles.details} visible-lg` }>
                <div className={`${styles.containerDetails} ${styles.policyOff}`}>
                    <div className={styles.infoDetails}>
                        <p className={styles.headDetails}>
                            <span className={styles.titleDetails}>Sin Seguros</span>
                            <span className="hidden-xs"> - </span>
                            <span>Tarifa Básica</span>
                        </p>
                        <ul className={styles.bodyDetails}>
                            <li className="item">
                                <Image
                                    className=""
                                    src="/cards/icon-shield-gray.png"
                                    alt="shield-tick"
                                    width={20}
                                    height={20}
                                ></Image>
                                <span>Tarifa sin seguros</span>
                            </li>
                        </ul>
                        <div className={styles.footDetails}>
                            <div className={styles.showDetails}>
                                <Link
                                    href="/"
                                >
                                    Ver detalles
                                    <Image
                                        className=""
                                        src="/cards/info-circle.svg"
                                        alt="shield-tick"
                                        width={14}
                                        height={14}
                                    ></Image>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={styles.priceDetails}>
                        <div className={styles.infoPrice}>
                            <div className={styles.oldPrice}>
                                <p className={styles.txtPrice}>Antes <span>{price.oldPrice} </span></p>
                            </div>
                            <p className="bigPrice">
                                <span className="numberPrice">{price.actualPrice} </span>
                                <span className="separator"></span>
                                <span className="time">día</span>
                            </p>
                            <p className={styles.totalPrice}>
                                Total {price.totalPrice}
                            </p>
                        </div>
                        <Link
                            href="/"
                            className="btn btn-secundary"
                        >Reservar</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}