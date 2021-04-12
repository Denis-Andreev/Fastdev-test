import React from 'react'
import {IUsersListProps} from "./types";
import {UserItem} from "./UserItem";

const classes = require('./classes.module.scss')

export const UsersList: React.FC<IUsersListProps> = ({
                                                         selectedUsers,
                                                         toggleHandler,
                                                         users
                                                     }) => {
    return (
        <div className={classes.users_list}>
            {users.map(item => (
                <UserItem
                    user={item}
                    isSelected={selectedUsers.some(u => u.id === item.id)}
                    toggleHandler={() => toggleHandler(item)}
                />
            ))}
        </div>
    )
}