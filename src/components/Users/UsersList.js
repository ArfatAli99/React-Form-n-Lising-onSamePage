import React from "react";
import Card from '../UI/Card';
import classes from "../Users/UsersList.module.css";

const UsersList = props => {

    return <Card className={classes.users}>
        <ul>
            {props.users.map((user) => (
                <li>{user.name} (is {user.age} old)</li>
            ))}
        </ul>
    </Card>
}

export default UsersList;