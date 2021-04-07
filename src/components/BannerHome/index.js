import styles from './styles.module.scss';
import img from '../../assets/images/camera-banner.png'

export function BannerHome({ infos }) {
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.bannerContent}>
        <img src={img} alt="Banner" />
        <div className={styles.contentInfo}>
          <p className={styles.title}>{infos.title}</p>
          <p className={styles.subtitle}>{infos.subtitle}</p>
          <p className={styles.text}>{infos.text}</p>
          <div className={`${styles.button} ${styles.price}`}>{infos.price}</div>
          <button type="button" className={`${styles.button} ${styles.addButton}`}>Add to cart</button>
        </div>
      </div>
    </div>
  )
}
