import React from 'react';
import { FC } from 'react';
interface ButtonProps {
    title: string;
}

export const PrimaryButton : FC<ButtonProps> = ({title}) => {
    return (
        <div>
            <button className='bg-primary w-[120px]  text-white text-md font-semibold py-2 px-5 rounded'>{title}</button>
        </div>
    )
}
