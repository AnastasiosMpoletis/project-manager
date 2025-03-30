export default function Tasks({ project }) {

    const formattedDate = new Date(project.projectDueDate).toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric", });

    return (
        <div id="tasks" className="flex-auto">
            {console.log("Selected Project: " + JSON.stringify(project))}
            <form onSubmit={() => {}} className="flex flex-col p-10">
                <div className="flex place-content-between items-center mt-4">
                    <h1 className="flex-auto font-bold text-3xl text-stone-700">{project.projectTitle}</h1>
                    <input
                        className="flex-none px-7 py-1 border-4 rounded-md"
                        type="submit"
                        value="Delete"
                    />
                </div>
                <h2 className="text-slate-500 mt-2">{formattedDate}</h2>
                <p className="mt-4">{project.projectDescription}</p>
                <hr className="border-2 rounded-lg mt-4" />
                <h1 className="font-bold text-2xl mt-4 text-stone-700">Tasks</h1>
                {/* TODO ANBOL add task functionality */}


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
            </form>
        </div>
    );
}