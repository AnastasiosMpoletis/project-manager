export default function NewProjectButton({ newProjectButtonLabel, onNewProject }) {
    return (
        <button
            className="px-4 py-2 mt-7 rounded-md bg-stone-500 text-slate-100"
            onClick={onNewProject}
        >
            {newProjectButtonLabel}
        </button>
    );
}