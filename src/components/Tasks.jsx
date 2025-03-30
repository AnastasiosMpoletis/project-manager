export default function Tasks({ project }) {
    return (
        <div id="tasks">
            <h1>{project.projectTitle}</h1>
            <p>{project.projectDescription}</p>
            <p>{project.projectDueDate}</p>
            <p>Tasos</p>
            {console.log("Selected Project: " + JSON.stringify(project))}
            {/* <form onSubmit={{}} className="flex flex-col p-10">
                <div className="mb-3 flex justify-end">
                    <input
                        className="px-7 py-1 border-4 rounded-md"
                        type="button"
                        value="Cancel"
                    // onClick={onCloseNewProject}
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
                    // required
                    />
                </label>
            </form> */}
        </div>
    );
}