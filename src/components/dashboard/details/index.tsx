import * as React from 'react'
import { connect } from 'react-redux';

import HobbiesList from './hobbiesList';
import AddHobbyForm from './addHobbyForm';

import { addHobby, deleteHobby } from '../../../store/actions/hobbyActions';

import styles from '../../../styles/styles.module.scss';

interface Props {
  selectedUser: IUser,
  addHobby: (hobby: IHobby) => void,
  deleteHobby: (hobbyId: number) => void,
}
interface ClassState {
}

export class Details extends React.Component<Props, ClassState> {
  render() {
    const { selectedUser } = this.props;
    if (!selectedUser) {
      return <div className={styles.emptyDetails} />;
    }
    return (
      <div className={styles.details}>
        <AddHobbyForm key={selectedUser.id} addHobby={this.props.addHobby} />
        <HobbiesList hobbies={selectedUser.hobbies} deleteHobby={this.props.deleteHobby} />
      </div>
    )
  }
}

const mapStateToProps = (state: any) => ({
  selectedUser: state.users.selectedUser,
});

const mapDispatchToProps = {
  addHobby,
  deleteHobby,
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
