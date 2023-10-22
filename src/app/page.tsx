import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <nav>
        <a href="#">Investment</a>
        <a href="#">Temp</a>
        <a href='#'>Option</a>
        </nav>
      </div>
      
      <div className={styles.netWorth}>
        <h4>Net Worth</h4>
        {/* Add your graph component or image here */}
      </div>
      
      <div className={styles.spending}>
        <h4>Great spending habits!</h4>
        <p> This month, you have spent $1200, $200 less than last month. Your net worth has also increased by $30000 over the past month.</p>
       
      </div>

      <div className={styles.playlist}>
        Playlist based on your spending and net worth:
        {/* Add content here */}
      </div>

      <div className={styles.investment}>
        Investment, made easy with temp
        <br />
        What is your goal for investing today?
        {/* Add radio buttons or other input elements here */}
        <br />
        When would you like to reach the goal?
        {/* Add input elements here */}
      </div>

      <div className={styles.choices}>
        Based on your choices:
        <br />
        {/* Add content here */}
      </div>

    </div>
  );
}
