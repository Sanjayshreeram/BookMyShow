import { Disclosure } from '@headlessui/react';
import {BiChevronUp,BiChevronDown} from "react-icons/bi";



 export const Playsdisclosure=(props)=> {
  return (
    <Disclosure>
          {({ open }) => (
          <>
          <Disclosure.Button className="py-2 flex items-center gap-1 flex-row-reverse">
            {open ?<BiChevronUp/>:<BiChevronDown/>}
             
            <span className={open? "text-red-200" : "text-gray-600"} >
          {props.title}
                </span>
</Disclosure.Button>
<Disclosure.Panel >
    <div className='flex items-center gap-2 flex-wrap mb-2'>
   { props.tags.map((tag) =>
        <>
        <div className='border-2 border-gray-200 p-1 rounded-sm '>
            <span className='text-red-600'>
                {tag}

            </span>
        </div>
        
        
        </>

   )
 }
    </div>
  
</Disclosure.Panel> </>)}


     
    </Disclosure>
  )
}

