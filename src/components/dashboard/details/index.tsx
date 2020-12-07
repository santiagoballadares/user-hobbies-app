import * as React from 'react'

import styles from '../../../styles/styles.module.scss';

interface Props {
}
interface ClassState {
}

export class Details extends React.Component<Props, ClassState> {
  render() {
    return (
      <div className={styles.details}>
        DETAILS
      </div>
    )
  }
}

export default Details;
