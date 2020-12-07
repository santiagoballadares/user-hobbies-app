import * as React from 'react';
import User from './user';

import styles from '../../../styles/styles.module.scss';

interface Props {
  users: IUser[],
}
interface ClassState {
}

export class UsersList extends React.Component<Props, ClassState> {
  renderUsers() {
    return this.props.users.map(user => {
      return <User key={user.id} user={user} />;
    });
  }

  render() {
    return (
      <div className={styles.userList}>
        {this.renderUsers()}
      </div>
    )
  }
}

export default UsersList;
