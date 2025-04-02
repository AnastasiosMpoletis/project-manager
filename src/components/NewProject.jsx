import { useRef } from "react";
import Input from "./Input.jsx";

export default function NewProject({ onAdd }) {
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave() {
        const entertedTitle = title.current.value;
        const entertedDescription = description.current.value;
        const entertedDueDate = dueDate.current.value;

        onAdd({
            title: entertedTitle,
            description: entertedDescription,
            dueDate: entertedDueDate
        });
    }

    return (
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li>
                    <button className="text-stone-800 hover:text-stone-950">Cancel</button>
                </li>
                <li>
                    <button
                        className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
                        onClick={handleSave}
                    >Save</button>
                </li>
            </menu>
            <div>
                <Input type="text" ref={title} label="Title" />
                <Input ref={description} label="Description" textarea /> {/* textarea is true. We do not need to declare it in other Inputs. */}
                <Input type="date" ref={dueDate} label="DueDate" />
            </div>
        </div>

    );
}