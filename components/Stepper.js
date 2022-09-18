import React from "react";

function Stepper() {
  return (
    <div className="">
      <nav>
        <ol class="flex">
            <li class="relative w-[150px] text-center text-sm font-light italic
                after:content-[''] after:absolute after:left-[50%] after:top-[200%] after:w-5 after:h-5 
                after:bg-blue-500 after:rounded-full after:z-50
                ">
                Step One
            </li>
            <li class="relative w-[150px] text-center text-sm font-light italic
            before:content-[''] before:absolute before:left-[-50%] before:top-[calc(200%+0.5rem)] before:w-full before:h-1 
            before:bg-blue-500
            after:content-[''] after:absolute after:left-[50%] after:top-[200%] after:w-5 after:h-5 
            after:bg-blue-500 after:rounded-full after:z-50
                ">
                Step Two
            </li>

            <li class="relative w-[150px] text-center text-sm font-light italic
            before:content-[''] before:absolute before:left-[-50%] before:top-[calc(200%+0.5rem)] before:w-full before:h-1 
            before:bg-gray-300
            after:content-[''] after:absolute after:left-[50%] after:top-[200%] after:w-5 after:h-5 
            after:bg-gray-300 after:rounded-full after:z-50
                ">
                Step Three
            </li>
            <li class="relative w-[150px] text-center text-sm font-light italic
            before:content-[''] before:absolute before:left-[-50%] before:top-[calc(200%+0.5rem)] before:w-full before:h-1 
            before:bg-gray-300
            after:content-[''] after:absolute after:left-[50%] after:top-[200%] after:w-5 after:h-5 
            after:bg-gray-300 after:rounded-full after:z-50
                ">
                Final Step
            </li>
        </ol>
      </nav>
    </div>
  );
}

export default Stepper;
