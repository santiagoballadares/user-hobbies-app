interface IUser {
  id: number
  name: string
  hobbies: IHobby[]
}

type UsersState = {
  list: IUser[]
  selectedUser: IUser | null
}

type UsersAction = {
  type: string
  payload: {
    users: IUser[]
  }
}

type UserAction = {
  type: string
  payload: {
    user: IUser
  }
}

type UserDispatchType = (args: UsersAction | UserAction) => UsersAction | UserAction

interface IHobby {
  id: number
  description: string
  passion: string
  year: number | null
}

type AddHobbyAction = {
  type: string
  payload: {
    hobby: IHobby
  }
}

type DeleteHobbyAction = {
  type: string
  payload: {
    hobbyId: number
  }
}

type HobbyDispatchType = (args: AddHobbyAction | DeleteHobbyAction) => AddHobbyAction | DeleteHobbyAction
