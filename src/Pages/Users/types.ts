import {IUser} from "../../interfaces/users";

export interface IUsersListProps {
    users: IUser[]
    selectedUsers: IUser[]
    toggleHandler(item: IUser): void
}

export interface IUserItemProps {
    user: IUser
    toggleHandler(): void
    isSelected: boolean
}