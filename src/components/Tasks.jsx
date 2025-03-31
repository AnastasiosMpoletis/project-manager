export default function Tasks({ selectedProject, onDeleteSelectedProject }) {

    const formattedDate = new Date(selectedProject.projectDueDate).toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric", });

    return (
        <div id="tasks" className="flex-auto">
            {console.log("Selected Project: " + JSON.stringify(selectedProject))}
            <div className="flex flex-col p-10">
                <div className="flex place-content-between items-center mt-4">
                    <h1 className="flex-auto font-bold text-3xl text-stone-700">{selectedProject.projectTitle}</h1>
                    <button
                        className="flex-none px-7 py-1 border-2 rounded-md cursor-pointer hover:bg-stone-200 hover:border-stone-400"
                        onClick={onDeleteSelectedProject}
                    >Delete</button>
                </div>
                <h2 className="text-slate-500 mt-2">{formattedDate}</h2>
                <p className="mt-4">{selectedProject.projectDescription}</p>
                <hr className="border-2 rounded-lg mt-4" />
                <h1 className="font-bold text-2xl mt-4 text-stone-700">Tasks</h1>
                <div id="tasks-controller">
                    <input
                        // ref={titleRef}
                        type="text"
                        name="taskField"
                        className="mb-3 w-[50%] p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
                        // required
                    />

                </div>


                {/*
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
                </label> */}
            </div>
        </div>
    );
}