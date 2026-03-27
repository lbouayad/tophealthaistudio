import React from 'react';

const TextArea = ({ className, label, name, value, placeholder, onChange, rows, textStyle, cols, inputStyle }) => {
    return (
        <div className={`flex flex-col w-full md:mt-12 mt-6 ${className}`}>
            <p className={`pl-6 font-medium text-lg text-textGray ${textStyle}`}>{label}</p>
            <textarea
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                rows={rows}
                cols={cols}
                className={`border-2 border-textGray bg-[#fafafa] rounded-2xl font-medium outline-none text-lg py-2.5 px-6 w-full mt-2 ${inputStyle}`}
            />
        </div >
    );
};

export default TextArea;
