import * as React from 'react';
import cx from 'classnames';

import styles from '../../../styles/styles.module.scss';

interface Props {
  user: IUser,
  isSelected: boolean,
  selectUser: (user: IUser) => void,
}
interface ClassState {
}

export class UserItem extends React.Component<Props, ClassState> {
  constructor(props: Props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.selectUser(this.props.user);
  }

  render() {
    const { user, isSelected } = this.props;
    return (
      <div
        className={cx(styles.userListItem, { [styles.selected]: isSelected })}
        onClick={this.handleClick}
      >
        {user.name}
      </div>
    )
  }
}

export default UserItem;
