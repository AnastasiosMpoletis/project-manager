export default function NewProjectButton({ newProjectButtonLabel, onAddNewProject }) {
    return (
        <button
            className="px-4 py-2 my-7 rounded-md bg-stone-500 text-slate-100"
            onClick={onAddNewProject}
        >
            {newProjectButtonLabel}
        </button>
    );
}