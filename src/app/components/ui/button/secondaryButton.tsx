import React, {FC , MouseEvent} from "react";
import "./buttons.css";

type ButtonType = "button" | "submit" | "reset"
interface ButtonProps {
    title:any;
    onClick? :(e: MouseEvent<HTMLButtonElement>) => void, 
    type?: ButtonType;
}
const SecondaryButton : FC<ButtonProps> = ({title, onClick , type}) => {
    return (
        <>
            <button type={type} className="secondary-btn find-talant text-white ml-2 w-[120px] text-md font-semibold py-2 px-4 rounded " onClick={onClick}>{title}</button>
        </>
    )
}


export default SecondaryButton