export default function NewProject({ onCloseNewProject }) {
    return (
        <div id="new-project" className="justify-items-center">
            <dialog open>
                <form method="dialog" onSubmit={onCloseNewProject}>
                    <button>Cancel</button>
                    <button>Save</button>
                </form>
            </dialog>
        </div>
    );
}