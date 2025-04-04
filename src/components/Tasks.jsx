import { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Tasks({ selectedProject, onDeleteSelectedProject, onAddNewTaskToSelectedProject, onDeleteTask }) {

    const taskRef = useRef();

    const formattedDate = new Date(selectedProject.projectDueDate).toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric", });

    function addTaskToSelectedProject() {
        const taskRefValue = taskRef.current.value;
        // check if empty or whitespace task
        if (taskRefValue.trim().length > 0) {
            onAddNewTaskToSelectedProject(taskRefValue.trim());
        }
        taskRef.current.value = ''; //clear task input
    }

    return (
        <div id="tasks" className="flex-auto">
            <div className="flex flex-col p-10 h-screen">

                <div id="task-header" className="flex place-content-between items-center mt-4">
                    <h1 className="flex-auto font-bold text-3xl text-stone-700">{selectedProject.projectTitle}</h1>
                    <button
                        className="flex-none px-7 py-1 border-2 rounded-md cursor-pointer hover:bg-stone-200 hover:border-stone-400"
                        onClick={onDeleteSelectedProject}
                    >Delete</button>
                </div>

                <h2 className="text-slate-500 mt-2">{formattedDate}</h2>
                <p className="mt-4 h-[25vh] overflow-y-auto">{selectedProject.projectDescription}</p>
                <hr className="border-2 rounded-lg mt-4" />
                <h1 className="font-bold text-2xl mt-4 text-stone-700">Tasks</h1>

                <div id="tasks-controller">
                    <div id="task-add">
                        <input
                            ref={taskRef}
                            type="text"
                            name="taskField"
                            className="my-3 w-[60%] p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
                        />
                        <button
                            className="ml-9 px-7 py-1 border-2 rounded-md cursor-pointer hover:border-stone-400"
                            onClick={addTaskToSelectedProject}
                        >+ Add Task</button>
                    </div>
                </div>

                <div id="task-list" className="h-[70vh] overflow-y-auto overflow-x-hidden">
                    {selectedProject.projectTasks.length < 1 && <h3>This project does not have any tasks yet.</h3>}
                    <ul className="list-none">
                        {/* Prevents animation on first load */}
                        <AnimatePresence initial={false}>
                            {
                                selectedProject.projectTasks.map((task, index) => {
                                    return (
                                        <motion.li
                                            key={index}
                                            layout // Smoothly animates position of remaining items
                                            initial={{ opacity: 0, y: -10 }} // Start slightly above
                                            animate={{ opacity: 1, y: 0 }} // Fade in + move to normal
                                            exit={{ opacity: 0, clipPath: "inset(0% 0% 0% 100%)" }} // Prevents shifting
                                            transition={{ duration: 0.2 }}
                                            className="bg-stone-100 p-3 my-3 w-auto border-2 border-transparent rounded-md hover:border-stone-200">
                                            <div className="flex place-content-between">
                                                <label>
                                                    {task.taskTitle}
                                                </label>
                                                <button
                                                    className="mr-10 hover:text-red-600"
                                                    onClick={() => onDeleteTask(task.taskId)}
                                                >Clear</button>
                                            </div>
                                        </motion.li>);
                                })
                            }
                        </AnimatePresence>
                    </ul>
                </div>

            </div>
        </div >
    );
}