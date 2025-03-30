import { useRef } from "react";

import { STATES } from "../utils/AppStates";

export default function NewProject({ onCloseNewProject, onAddNewProject }) {
    const LABEL_STYLE = "font-bold uppercase text-stone-500";
    const INPUT_STYLE = "mb-3 w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";

    const titleRef = useRef();
    const descriptionRef = useRef();
    const dueDateRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents default form submission
        onAddNewProject(titleRef.current.value, descriptionRef.current.value, dueDateRef.current.value);
    };

    return (
        <div id="new-project" className="flex-auto m-auto">
            <form onSubmit={handleSubmit} className="flex flex-col p-10 m-auto">
                <div className="mb-3 flex justify-end">
                    <input
                        className="px-7 py-1 border-4 rounded-md"
                        type="button"
                        value="Cancel"
                        onClick={() => onCloseNewProject(STATES.HOME)}
                    />
                    <input
                        className="px-8 py-1 mx-5 rounded-md bg-stone-500 text-slate-100"
                        type="submit"
                        value="Save"
                    />
                </div>
                <label className={LABEL_STYLE}>Title
                    <input
                        ref={titleRef}
                        type="text"
                        name="titleField"
                        className={INPUT_STYLE}
                        required
                    />
                </label>
                <label className={LABEL_STYLE}>Description
                    <textarea
                        ref={descriptionRef}
                        type="text"
                        name="descriptionField"
                        className={INPUT_STYLE}
                        //TODO ANBOL remove comment later
                        // required
                    />
                </label>
                <label className={LABEL_STYLE}>Due date
                    <input
                        ref={dueDateRef}
                        type="date"
                        name="dueDateField"
                        placeholder="dd/mm/yyyy"
                        className={INPUT_STYLE}
                        //TODO ANBOL remove comment later
                        // required
                    />
                </label>
            </form>
        </div>
    );
}