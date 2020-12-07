import * as React from 'react';
import { PASSION_LEVELS, isNumber } from '../../utils';

import styles from '../../../styles/styles.module.scss';

interface Props {
  addHobby: (hobby: IHobby) => void,
}
interface ClassState {
  passion: string,
  description: string,
  year: number | null,
}

export class addHobbyForm extends React.Component<Props, ClassState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      passion: '',
      description: '',
      year: null,
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handlePassionChange = this.handlePassionChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleYearChange = this.handleYearChange.bind(this);
  }

  isFormDataValid() {
    const { passion, description, year } = this.state;
    return (
      passion && description && year
    );
  }

  handleAdd() {
    if (!this.isFormDataValid()) {
      return;
    }
    const { passion, description, year } = this.state;
    const hobby: IHobby = {
      id: +(new Date()),
      passion,
      description,
      year: year,
    };
    this.props.addHobby(hobby);
    this.setState({ passion: '', description: '', year: null });
  }

  handlePassionChange(event: any) {
    this.setState({ passion: event.target.value });
  }

  handleDescriptionChange(event: any) {
    this.setState({ description: event.target.value });
  }

  handleYearChange(event: any) {
    if (!isNumber(event.target.value)) {
      return;
    }
    this.setState({ year: event.target.value });
  }

  renderPassionInput() {
    return (
      <select value={this.state.passion} onChange={this.handlePassionChange}>
        <option value="" disabled>Select passion level</option>
        {
          PASSION_LEVELS.map(option => (
            <option key={option} value={option}>{option}</option>)
          )
        }
      </select>
    )
  }

  renderDescriptionInput() {
    return (
      <input
        placeholder="Enter user hobby"
        value={this.state.description}
        onChange={this.handleDescriptionChange}
      />
    )
  }

  renderYearInput() {
    return (
      <input
        type="number"
        placeholder="Enter year"
        value={this.state.year || ''}
        onChange={this.handleYearChange}
      />
    )
  }

  renderAddButton() {
    const disabled = !this.isFormDataValid();
    return (
      <button onClick={this.handleAdd} disabled={disabled}>Add</button>
    );
  }

  render() {
    return (
      <div className={styles.addHobbyForm}>
        {this.renderPassionInput()}
        {this.renderDescriptionInput()}
        {this.renderYearInput()}
        {this.renderAddButton()}
      </div>
    )
  }
}

export default addHobbyForm;
