import { useState } from "react";

export default function NewTask({ onAdd }) {
    /**
     * We use the empty string as default value to fix this error:
     * 
     * A component is changing an uncontrolled input to be controlled. 
     * This is likely caused by the value changing from undefined to a defined value, which should not happen. 
     * Decide between using a controlled or uncontrolled input element for the lifetime of the component.
     */
    const [enteredTask, setEnteredTask] = useState('');

    function handleChange(event) {
        setEnteredTask(event.target.value);
    }

    function handleClick() {
        if (enteredTask.trim() === '') {
            return;
        }
        setEnteredTask('');
        onAdd(enteredTask);
    }

    return (
        <div className="flex items-center gap-4">
            <input
                type="text"
                className="w-64 px-2 py-1 rounded-sm bg-stone-200"
                onChange={handleChange}
                value={enteredTask}
            />
            <button
                className="text-stone-700 hover:text-stone-950"
                onClick={handleClick}
            >Add Task</button>
        </div>
    );
}