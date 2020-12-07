import * as hobbyActionTypes from './hobbyTypes';

export function addHobby(hobby: IHobby) {
  const action: AddHobbyAction = {
    type: hobbyActionTypes.ADD_HOBBY,
    payload: { hobby },
  };
  return (disptach: HobbyDispatchType) => disptach(action);
}

export function deleteHobby(hobbyId: number) {
  const action: DeleteHobbyAction = {
    type: hobbyActionTypes.DELETE_HOBBY,
    payload: { hobbyId },
  };
  return (disptach: HobbyDispatchType) => disptach(action);
}
