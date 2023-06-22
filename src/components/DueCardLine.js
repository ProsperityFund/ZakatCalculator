import React from "react";

function DueCardLine(props) {
    return (
        <div className={"w-full rounded-xl flex px-2 py-1 " + (props.alternateStyle ? "bg-gray-50" : "bg-white")}>
            <p className={"block text-left pl-8 text-lg flex-initial"}>{props.lineTitle}</p>
            <div className="block flex-1"></div>
            <p className={"block text-right pr-8 text-lg flex-initial " + (props.isDeduction && props.lineTitle != "Zakatable Wealth" ? "text-red-500" : (props.lineTitle == "Zakatable Wealth" ? "text-black" : "text-green-500"))}>{(props.isDeduction ? "-$" : "$") + props.wealthEffect.toString()}</p>
        </div>
    );
}

export default DueCardLine;