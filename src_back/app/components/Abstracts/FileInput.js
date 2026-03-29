import React from 'react'

const FileInput = ({ label, type, name, value, placeholder, onChange, className }) => {
    return (
        <div className={`flex flex-col w-full md:mt-8 mt-5 ${className}`}>
            <p className='pl-6 font-medium text-lg text-textGray'>{label}</p>
            <input
                required
                type="file"
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className='border-2 border-textGray bg-[#fafafa] rounded-2xl font-medium outline-none text-lg py-2.5 px-6 w-full mt-2'
            />
        </div>
    );
};

export default FileInput;