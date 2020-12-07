import * as React from 'react';
import HobbyItem from './hobbyItem';

import styles from '../../../styles/styles.module.scss';

interface Props {
  hobbies: IHobby[],
  deleteHobby: (hobbyId: number) => void,
}
interface ClassState {
}

export class HobbiesList extends React.Component<Props, ClassState> {
  renderHobbies() {
    return this.props.hobbies.map(hobby => {
      return <HobbyItem key={hobby.id} hobby={hobby} deleteHobby={this.props.deleteHobby} />
    });
  }

  render() {
    return (
      <div className={styles.hobbiesList}>
        {this.renderHobbies()}
      </div>
    )
  }
}

export default HobbiesList
