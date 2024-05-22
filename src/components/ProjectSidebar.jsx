import Button from "./Button"
export default function ProjectSidebar({ onStartAddProject }){
    return <aside className="w-1/3 px-8 py-16 bg-gradient-to-r from-gray-900 via-green-900 to-gray-900 text-gray-50 md:w-72 rounded-r-xl">
        <h2 className="mb-8 font-bold uppercase md:text-xl text-gray-200">CollabSphere</h2>
        <div>
            <Button onClick={onStartAddProject}>+ Add Project</Button>
        </div>
        <ul>

        </ul>
    </aside>
}