import Input from "./Input"
export default function NewProject(){
    return(
        <div className="w-[35rem]">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li><button className="text-gray-800 hover:text-gray-950">Cancel</button></li>
                <li><button className="px-6 py-2 rounded-md bg-gray-800 text-gray-50 hover:bg-gray-950">Save</button></li>
            </menu>
            <div>
               <Input label="Title"/>
               <Input label="Description" textarea/>
               <Input label="Due Date"/>
            </div>
        </div>
    )
}