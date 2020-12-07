import * as React from 'react';
import { connect } from 'react-redux';

import { fetchUsers } from '../../store/actions/userActions';

interface Props {
  fetchUsers: () => void,
  users: IUser[],
}
interface ClassState {
}

export class Users extends React.Component<Props, ClassState> {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    return (
      <div>
        {
          this.props.users.map(user => (
            <div key={user.id}>{user.name}</div>
          ))
        }
      </div>
    )
  }
}

const mapStateToProps = (state: any) => ({
  users: state.users.list,
});

const mapDispatchToProps = {
  fetchUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
