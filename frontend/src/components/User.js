import React from "react";


const UserItem = ({user}) => {

    return (
        <tr>
            <td>
                {user.user_name}
            </td>
            <td>
                {user.first_name}
            </td>
            <td>
                {user.last_name}
            </td>
            <td>
                {user.email_address}
            </td>
        </tr>
    )
}

const UserList = ({users}) => {

    return (
        <table>
            <th>
                User
            </th>
            <th>
                First Name
            </th>
            <th>
                Last Name
            </th>
            <th>
                email
            </th>
            {users.map((user) => <UserItem user={user}/>)}
        </table>
    )
}

export default UserList;
