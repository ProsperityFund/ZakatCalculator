import React from "react";

function DueCardCategoryTitle(props) {
    return (
        <div className={"w-full rounded-xl px-2 py-1 " + (props.alternateStyle ? "bg-gray-50" : "bg-white")}>
            <p className={"text-left font-bold text-lg " + props.color}>{props.categoryTitle}</p>
        </div>
    );
}

export default DueCardCategoryTitle;