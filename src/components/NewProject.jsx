import Input from "./Input.jsx";

export default function NewProject() {
    return (
        <div>
            <menu>
                <li>Cancel</li>
                <li>Save</li>
            </menu>
            <div>
                <Input label="Title" />
                <Input label="Description" textarea /> {/* textarea is true. We do not need to declare it in other Inputs. */}
                <Input label="DueDate" />
            </div>
        </div>

    );
}