import {useState} from "react";

const TodoForm = ({ initialData, onSubmit }) => {
    const [title, setTitle] = useState(initialData?.title || "");
    const [description, setDescription] = useState(initialData?.description || "");
    const [status, setStatus] = useState(initialData?.status || "pending");


    const handleSubmit = () => {
        onSubmit(title, description, status);
    };

    return (
        <div>
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
            />
            <input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
            />
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="pending">pending</option>
                <option value="in progress">in progress</option>
                <option value="completed">completed</option>
            </select>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}
export default TodoForm