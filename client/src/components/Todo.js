const Todo = ( {todo} ) => {
    return (
        <div>
            <div>_id: {JSON.stringify(todo._id)}</div>
            <div>title: {JSON.stringify(todo.title)}</div>
            <div>description: {JSON.stringify(todo.description)}</div>
            <div>status: {JSON.stringify(todo.status)}</div>
            <div>createdBy: {JSON.stringify(todo.createdBy)}</div>
        </div>
    )
}
export default Todo;