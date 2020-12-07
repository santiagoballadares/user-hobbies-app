interface IUser {
  id: number
  name: string
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

type DispatchType = (args: UsersAction | UserAction) => UsersAction | UserAction
