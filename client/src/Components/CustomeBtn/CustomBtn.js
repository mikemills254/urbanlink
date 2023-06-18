import React from 'react'

const CustomBtn = ({IconAfterStyle, IconBefore, IconAfter, type, text, ContainerStyle, IconBeforeStyle, onClick}) => {
    return (
        <div className={`${ContainerStyle} container flex items-center justify-center w-full h-[3rem] bg-slate-500 rounded`}>
            <div role='button' type={type} className='bg-slatw-900 w-full h-full flex items-center justify-center gap-2' onClick={onClick}>
            {IconBefore && <IconBefore className={`${IconBeforeStyle}`}/>}
                <p>{text}</p>
            {IconAfter && <IconAfter className={`${IconAfterStyle}`}/>}
            </div>
        </div>
    )
}


export default CustomBtn