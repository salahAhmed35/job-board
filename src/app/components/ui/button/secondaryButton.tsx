import React, {FC} from "react";
import "./buttons.css"
interface ButtonProps {
    title:string
}
const SecondaryButton : FC<ButtonProps> = ({title}) => {
    return (
        <>
            <button className="secondary-btn find-talant text-white ml-2 w-[120px] text-md font-semibold py-2 px-4 rounded ">{title}</button>
        </>
    )
}


export default SecondaryButton