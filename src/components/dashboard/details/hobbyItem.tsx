import * as React from 'react';

import styles from '../../../styles/styles.module.scss';

interface Props {
  hobby: IHobby,
  deleteHobby: (hobbyId: number) => void,
}
interface ClassState {
}

export class HobbyItem extends React.Component<Props, ClassState> {
  constructor(props: Props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    this.props.deleteHobby(this.props.hobby.id);
  }

  renderHobbyDetails() {
    return (
      <>
        <div>{`Passion: ${this.props.hobby.passion}`}</div>
        <div>{this.props.hobby.description}</div>
        <div>{`Since ${this.props.hobby.year}`}</div>
      </>
    );
  }

  renderDeleteButton() {
    return (
      <button onClick={this.handleDelete}>delete</button>
    );
  }

  render() {
    return (
      <div className={styles.hobbyListItem}>
        {this.renderHobbyDetails()}
        {this.renderDeleteButton()}
      </div>
    )
  }
}

export default HobbyItem;
