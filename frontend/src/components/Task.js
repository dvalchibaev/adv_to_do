import React from "react";
// Компонента "навырост", не хватает бэкенда и включения в основной API

const TaskItem = ({task}) => {

    return (
        <tr>
            <td>
                {task.task_name}
            </td>
            <td>
                {task.user_name}
            </td>
        </tr>
    )
}

const TaskList = ({tasks}) => {

    return (
        <table>
            <th>
                Task
            </th>
            <th>
                User
            </th>
            {tasks.map((task) => <TaskItem task={task}/>)}
        </table>
    )
}

export default TaskList;
