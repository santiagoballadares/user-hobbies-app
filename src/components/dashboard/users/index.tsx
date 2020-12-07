import * as React from 'react';
import { connect } from 'react-redux';

import UsersList from './usersList';
import AddUserForm from './addUserForm';

import { fetchUsers, addUser, selectUser } from '../../../store/actions/userActions';

import styles from '../../../styles/styles.module.scss';

interface Props {
  users: IUser[],
  selectedUser: IUser,
  fetchUsers: () => void,
  addUser: (user: IUser) => void,
  selectUser: (user: IUser) => void,
}
interface ClassState {
}

export class Users extends React.Component<Props, ClassState> {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    const { users, selectedUser } = this.props;
    return (
      <div className={styles.users}>
        <AddUserForm addUser={this.props.addUser} />
        <UsersList users={users} selectedUser={selectedUser} selectUser={this.props.selectUser} />
      </div>
    )
  }
}

const mapStateToProps = (state: any) => ({
  users: state.users.list,
  selectedUser: state.users.selectedUser,
});

const mapDispatchToProps = {
  fetchUsers,
  addUser,
  selectUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
