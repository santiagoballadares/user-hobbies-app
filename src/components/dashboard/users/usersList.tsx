import * as React from 'react';
import UserItem from './userItem';

import styles from '../../../styles/styles.module.scss';

interface Props {
  users: IUser[],
  selectedUser: IUser,
  selectUser: (user: IUser) => void,
}
interface ClassState {
}

export class UsersList extends React.Component<Props, ClassState> {
  renderUsers() {
    const { users, selectedUser } = this.props;
    return users.map(user => {
      const isSelected = selectedUser ? selectedUser.id === user.id : false;
      return (
        <UserItem
          key={user.id}
          user={user}
          isSelected={isSelected}
          selectUser={this.props.selectUser}
        />
      );
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
