import { ReactNode } from "react"

interface IFlexCard{
    children:ReactNode;
    className?:string;
}

export default function FlexCard({children,className}:IFlexCard) {
  return (
    <div className={`flex justify-between items-center w-full ${className}`} >
        {children}
    </div>
  )
}
