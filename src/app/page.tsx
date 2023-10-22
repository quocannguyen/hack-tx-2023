import styles from './page.module.css';

export default function Investment() {
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
      
 <div className={styles.spendingContainer}>
        <h4 className={styles.spendingHeader}>Great spending habits!</h4>
        <div className={styles.spending}>
          <p>This month, you have spent $1200, $200 less than last month. Your net worth has also increased by $30000 over the past month.</p>
        </div>
      </div>

      <div className={styles.playlist}>
        <p>Playlist based on your spending and net worth: </p>
        {/* Add content here */}
      </div>

      <div className={styles.investment} >
        <h2>Investment, made easy with temp</h2>
        <p>What is your goal for investing today?</p>
        {/* Add radio buttons or other input elements here */}
        <p>When would you like to reach the goal?</p>
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
