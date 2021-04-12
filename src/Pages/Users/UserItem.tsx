import React from 'react'
import {IUserItemProps} from "./types";
import clsx from "clsx";

const classes = require('./classes.module.scss')
export const UserItem: React.FC<IUserItemProps> = ({
                                                       toggleHandler,
                                                       isSelected,
                                                       user
                                                   }) => {
    const {id, birthdate, displayName, email} = user
    return (
        <div
            onClick={toggleHandler}
            className={clsx(
                classes.item,
                isSelected && classes.item__active
            )}
        >
            <div>
                <FieldItem label={'Name:'} value={displayName}/>
                <FieldItem label={'Email:'} value={email}/>
            </div>
            <div>
                <FieldItem label={'Id:'} value={id}/>
                {birthdate && <FieldItem label={'Birthdate:'} value={new Date(birthdate).toLocaleString()}/>}
            </div>
        </div>
    )
}


interface IFieldItemProps {
    label: string
    value: string | number
}

const FieldItem: React.FC<IFieldItemProps> = ({
                                                  label,
                                                  value
                                              }) => {
    return (
        <div className={classes.field}>
            <span className={classes.label}>{label}</span>
            <span>{value}</span>
        </div>
    )
}