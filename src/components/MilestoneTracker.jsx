import { useState } from "react";
import api from "../api/axios";
import {MILESTONES} from "../constants/milestones.js";

function MilestoneTracker ({ currentMilestoneId }){
    console.log(MILESTONES);

  return (
    <div className="p-6">
        <div className="flex gap-2">
            <p>Revisa la consola</p>
            {
                MILESTONES.map((milestone) => {
                    let isCompleted = currentMilestoneId >= milestone.id;
                    return(
                   <span key={milestone.id} className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full ${isCompleted ? "bg-teal/10 text-teal" : "bg-gray-100 text-gray-400"}`}>
                        <p>{milestone.label}</p>
                    </span>
                    )
                    
                })
            }
        </div>
    </div>
  );
}
export default MilestoneTracker;