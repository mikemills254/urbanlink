import React from 'react'

const CustomInput = ({onFocus, onIconAfterClicked, maxLength,type, ContainerStyles, placeholder, value , onChange, required, InputStyles, IconBefore, IconStyleBefore, IconStyleAfter, IconAfter}) => {
    return (
        <div className={`${ContainerStyles} flex items-center border-[1.5px] border-[#348345] rounded h-[40px] w-[100%]`}>
            {IconBefore && <IconBefore className={`m-4 hover:cursor-pointer ${IconStyleBefore}`}/>}
            <input
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
                type={type}
                maxLength={maxLength}
                onFocus={onFocus}
                className={`${InputStyles} w-[100%] h-[100%] rounded focus:outline-none`}
            />
            {IconAfter && <IconAfter onClick={onIconAfterClicked} className={`m-4 hover:cursor-pointer ${IconStyleAfter}`}/>}
        </div>
    )
}


export default CustomInput