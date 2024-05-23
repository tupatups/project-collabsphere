import Button from "./Button"
export default function ProjectSidebar({ onStartAddProject, projects }){
    return <aside className="w-1/3 px-8 py-16 bg-gradient-to-r from-stone-900 to-gray-700 text-gray-50 md:w-72 rounded-r-xl">
        <h2 className="mb-8 font-bold uppercase md:text-xl text-gray-200">CollabSphere</h2>
        <div>
            <Button onClick={onStartAddProject}>+ Add Project</Button>
        </div>
        <ul className="mt-8">
            {projects.map(project => <li key={project.id}>
                <button className="w-full text-left px-2 py-1 rounded-sm my-1 text-gray-400 hover:text-gray-200 hover:bg-gray-800">{project.title}</button>
            </li>)}
        </ul>
    </aside>
}