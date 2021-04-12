import {observer} from 'mobx-react-lite'
import React, {useEffect} from 'react'
import {usersStore} from "../../store/users";
import {Spin} from "antd";
import {UsersList} from "./UsersList";

const classes = require('./classes.module.scss')

export const Users: React.FC = observer(() => {
    const {
        users, loading,
        selectedUsers, toggleSelectedUser
    } = usersStore
    useEffect(() => {
        usersStore.requestUsers()
    }, [])
    return (
        <div className={classes.wrap}>
            <div className={classes.container}>
                {loading && (
                    <Spin size="large"/>
                )}
                {!loading && users.length && (
                    <UsersList
                        users={users}
                        toggleHandler={toggleSelectedUser.bind(usersStore)}
                        selectedUsers={selectedUsers}
                    />
                )}
            </div>
        </div>
    )
})