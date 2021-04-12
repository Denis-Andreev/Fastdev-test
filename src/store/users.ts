import {makeAutoObservable} from "mobx";
import {IUser} from "../interfaces/users";
import {api} from "../api";
import { notification } from "antd";

export class UsersStore {
    users: IUser[] = []
    loading: boolean = false;

    selectedUsers: IUser[] = [];
    constructor() {
        makeAutoObservable(this)
    }
    *requestUsers() {
        this.loading = true;
        try {
            const data = yield api().open().getUsers();
            this.users = data.data || [];
        } catch (e) {
            notification.error({
                message: e.message,
            })
        }
        this.loading = false;
    }

    toggleSelectedUser(user: IUser) {
        if(this.selectedUsers.some(item => item.id === user.id)) {
            this.selectedUsers = this.selectedUsers.filter(item => item.id !== user.id)
        } else {
          this.selectedUsers = [...this.selectedUsers, user]
        }
    }
}

export const usersStore = new UsersStore()