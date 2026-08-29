import { useState } from "react";

function Sidebar (){
    const [expanded, setExpanded] = useState(true);

    return (
        <aside className={`bg-navy text-white h-screen p-4 transition-all duration-300
        ${expanded ? "w-56" : "w-16"}`}>
        <p>Hola, soy el sidebar</p>
        <p>Estado Actual:{expanded ? 'abierto' : 'cerrado'}</p>
        <button onClick={() => setExpanded(!expanded)}
        className="bg-white/10 hover:bg-white/20 text-white text-sm font-medium px-3 py-2 rounded-md transition-colors"
        >Click aqui para cambiar el estado</button>
        </aside>
    )
}

export default Sidebar;