import { useState } from "react";
import { Menu, Package } from "lucide-react";

function Sidebar (){
    const [expanded, setExpanded] = useState(true);

    return (
        <aside className={`bg-navy text-white h-screen p-4 transition-all duration-300
        ${expanded ? "w-56" : "w-19"}`}>
            <button onClick={() => setExpanded(!expanded)}
            className="bg-white/10 hover:bg-white/20 text-white text-sm font-medium px-3 
            py-2 rounded-md transition-colors mb-5 flex justify-center"
            >
        <Menu size={20} />
        </button>
        <div className="flex items-center gap-2">
            <Package size={24} />
            {expanded && <p>Shipment Tracker</p>}
        </div>
        </aside>
    )
}

export default Sidebar;