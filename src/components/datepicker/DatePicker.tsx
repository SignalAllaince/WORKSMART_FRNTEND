/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Icons } from '../icons';

interface DateSelectProps {
    className?: string,
    onChange?: (e: Date | null) => any,
    placeholderText?: string,
    selected? : Date | null,
    minDate? : Date,
    style?: React.CSSProperties,
    disbaled? : boolean,
    nullValuePlaceHolder? : string
}
export default function DateSelect(
    {
        className="",
        onChange,
        placeholderText,
        selected,
        minDate,
        style,
        disbaled=false,
        nullValuePlaceHolder=""
    }: DateSelectProps
) {
    const CustomInput = React.forwardRef(({value, onClick, onChange} : any, ref : any) => {
        return <div onClick={onClick}
                className={"flex flex-row-reverse !w-full item-center items-center border border-transparent  " + className + (disbaled ? " opacity-80" : ' hover:border-[#B0BACA]')} style={style}  >
            <Icons.dropdown className=''/>
            <input 
                className='disabled:cursor-not-allowed focus:outline-none text-sm lg:text[0.8rem] !w-full placeholder:text-[#6B7280] placeholder:text-xs text-blue-11 bg-transparent'
                value={value ? value : nullValuePlaceHolder}
                onChange={onChange}
                placeholder={placeholderText}
                ref={ref}
                // disabled={disbaled}
            />
        </div>
    })
    return <div>
        <DatePicker
            onChange={(e) => onChange && onChange(e)}
            customInput={<CustomInput />}
            selected={selected}
            minDate={minDate}
            // disabled={disbaled}
            dateFormat="dd/MM/yyyy" // Setting the date format
        />
    </div>
}