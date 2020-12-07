import * as React from 'react'

import Users from './users';
import Details from './details';

import styles from '../../styles/styles.module.scss';

interface Props {
  title: string,
}
interface ClassState {
}

export class Dashboard extends React.Component<Props, ClassState> {
  static defaultProps = {
    title: 'Dashboard Title',
  };

  renderHeader() {
    return (
      <div className={styles.dashboardHeader}>
        {this.props.title}
      </div>
    );
  }

  renderContent() {
    return (
      <div className={styles.dashboardContent}>
        <Users />
        <Details />
      </div>
    );
  }

  render() {
    return (
      <div className={styles.dashboard}>
        {this.renderHeader()}
        {this.renderContent()}
      </div>
    );
  }
}

export default Dashboard;
