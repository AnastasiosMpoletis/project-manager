export default function NewProjectButton({ newProjectButtonLabel, onNewProject }) {
    return (
        <button
            className="p-2 m-9 rounded-md bg-stone-500 text-slate-100"
            onClick={onNewProject}
        >
            {newProjectButtonLabel}
        </button>
    );
}