import React from 'react';

function ToggleButton(props) {

    var border = props.active == "0" ? "border-gray-200" : "border-[#63C8FC]";
    var innerShadow = props.active == "0" ? "" : "shadow-inner shadow-[inset_0px_0px_5px_3px_#63C8FC]";
    var textColor = props.active == "0" ? "text-black" : "text-[#63C8FC]";

    return (
        <button className={'w-[200px] h-[50px] rounded-lg bg-transparent border-[2px] ' + border + " " + innerShadow + " " + textColor + ' hover:border-[#63C8FC] p-0'}>
            {props.children}
        </button>
    );
}

export default ToggleButton;