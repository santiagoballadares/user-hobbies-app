import * as React from 'react';
import { connect } from 'react-redux';

import { selectUser } from '../../../store/actions/userActions';

import styles from '../../../styles/styles.module.scss';

interface Props {
  user: IUser,
  selectUser: (user: IUser) => void,
}
interface ClassState {
}

export class User extends React.Component<Props, ClassState> {
  constructor(props: Props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.selectUser(this.props.user);
  }

  render() {
    return (
      <div className={styles.userListItem} onClick={this.handleClick}>
        {this.props.user.name}
      </div>
    )
  }
}

const mapStateToProps = (state: any) => ({
});

const mapDispatchToProps = {
  selectUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
