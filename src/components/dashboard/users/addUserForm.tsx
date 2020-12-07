import * as React from 'react';

import styles from '../../../styles/styles.module.scss';

interface Props {
  addUser: (user: IUser) => void,
}
interface ClassState {
  name: string,
}

export class addUserForm extends React.Component<Props, ClassState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      name: '',
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleAdd() {
    const { name } = this.state;
    if (!name) {
      return;
    }
    const user: IUser = {
      id: +(new Date()),
      name,
      hobbies: []
    };
    this.props.addUser(user);
    this.setState({ name: '' });
  }

  handleChange(event: any) {
    this.setState({ name: event.target.value });
  }

  renderNameInput() {
    return (
      <input value={this.state.name} onChange={this.handleChange} />
    )
  }

  renderAddButton() {
    return (
      <button onClick={this.handleAdd} disabled={!this.state.name}>Add</button>
    );
  }

  render() {
    return (
      <div className={styles.addUserForm}>
        {this.renderNameInput()}
        {this.renderAddButton()}
      </div>
    )
  }
}

export default addUserForm;
