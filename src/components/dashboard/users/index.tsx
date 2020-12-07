import * as React from 'react';
import { connect } from 'react-redux';

import UsersList from './usersList';
import AddUserForm from './addUserForm';

import { fetchUsers, addUser } from '../../../store/actions/userActions';

import styles from '../../../styles/styles.module.scss';

interface Props {
  users: IUser[],
  fetchUsers: () => void,
  addUser: (user: IUser) => void,
}
interface ClassState {
}

export class Users extends React.Component<Props, ClassState> {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    return (
      <div className={styles.users}>
        <AddUserForm addUser={this.props.addUser} />
        <UsersList users={this.props.users} />
      </div>
    )
  }
}

const mapStateToProps = (state: any) => ({
  users: state.users.list,
});

const mapDispatchToProps = {
  fetchUsers,
  addUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
