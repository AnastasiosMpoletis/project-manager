export default function NewProject({ onCloseNewProject }) {
    const labelStyle = "font-bold uppercase text-stone-500";
    const inputStyle = "mb-3 w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";

    return (
        <div id="new-project" >
            <form onSubmit={onCloseNewProject} className="flex flex-col p-10">
                <div className="mb-3 flex justify-end">
                    <button className="px-7 py-1 border-4 rounded-md">Cancel</button>
                    <button className="px-8 py-1 mx-5 rounded-md bg-stone-500 text-slate-100">Save</button>
                </div>
                <label className={labelStyle}>Title</label>
                <input type="text" className={inputStyle} />
                <label className={labelStyle}>Description</label>
                <textarea type="text" className={inputStyle} />
                <label className={labelStyle}>Due date</label>
                <input type="date" placeholder="dd/mm/yyyy" className={inputStyle} />
            </form>
        </div>
    );
}