import MenusList from "./MenusList.jsx";
import menus from "./data.js";

export default function Index(){
    return <div className="bg-amber-300 w-[500px] h-screen">
        <MenusList menus={menus} />
    </div>
}