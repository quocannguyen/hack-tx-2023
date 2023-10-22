import styles from '/styles.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img className={styles.logo} src="/path_to_your_logo.png" alt="Logo" />
        <nav>
          <a href="#" className={styles.navItem}>Investment</a>
          <a href="#" className={styles.navItem}>Temp</a>
          <a href="#" className={styles.navItem}>Option</a>
        </nav>
        <button className={styles.loginButton}>Login</button>
      </header>

      <section className={styles.investmentForm}>
        {/* Your Investment Form code here */}
      </section>

      <section className={styles.featureSection}>
        <h2>Light, Fast & Powerful</h2>
        {/* Each feature block code */}
      </section>

      <section className={styles.priceSection}>
        <h2>A Price To Suit Everyone</h2>
        <span className={styles.price}>$40</span>
        <span className={styles.priceDescription}>UI Design Kit</span>
        <button className={styles.purchaseButton}>Purchase Now</button>
      </section>

      <footer className={styles.footer}>
        {/* Footer contents */}
      </footer>
    </div>
  )
}
