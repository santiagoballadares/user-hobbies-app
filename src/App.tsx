import React from 'react';
import Dashboard from './components/dashboard';

import styles from './styles/styles.module.scss';

function App() {
  return (
    <div className={styles.appContainer}>
      <Dashboard title="User Hobbies" />
    </div>
  );
}

export default App;
