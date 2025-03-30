'use client';
import { Jost } from 'next/font/google'
import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
 



const jost=Jost({
  weight:['500'],
  subsets:['latin']
})


const BikeSelector = ({value,border}:{value:string,border:string}) => {
  console.log(value)
  const [selectBike,setSelectBike]=useState('')
  const [selectedBikeName,setSelectedBikeName]=useState('')
  const pathname=usePathname();
  const searchParams=useSearchParams()
  const router=useRouter()
  console.log(selectBike,selectedBikeName,'🐖🐖🐖🐖🐖🐖🐖🐖🐖🐖')


    function  updateBikeSelection (bike: string,name:string)  {
      setSelectedBikeName(name);
      setSelectBike(bike);
      // console.log(selectBike,bike)
      const params = new URLSearchParams(searchParams);
      const storedBike = params.get(value);
      console.log(storedBike,'🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀')
      if (bike !== '' ) {
        params.set(value, bike);
      } else {

        params.delete(value);
      }
    
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    };


    useEffect(() => {
      const params = new URLSearchParams(searchParams);
      const storedBike = params.get(value);
      console.log(storedBike, "🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺");
     setSelectedBikeName( getBikeNameById(storedBike))
    
    }, [searchParams, value]);

    // useEffect(() => {
    //   const params = new URLSearchParams(searchParams);
    //   if(selectBike!==''){

    //     params.set(value, selectBike);
    //   }else{
    //     params.delete(value)
    //   }
    //   router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    // }, [selectBike,value]);
    
    
  return (

    <div className={`${jost.className} w-full flex items-center justify-center h-16 ${border} relative group hover:cursor-pointer `}>
{selectedBikeName===undefined ?
    <DropdownMenu >
    <DropdownMenuTrigger asChild>
      <div  className='border-none hover:cursor-pointer bg-none hover:bg-none shadow-none flex flex-col items-center justify-center '> 
      {/* <div className='size-12 md:size-16 flex items-center justify-center   text-xl md:text-2xl rounded-full group-hover:border-green-500  duration-500  '>+</div> */}
      <div style={{fontWeight:300}} className={`${jost.className} text-sm`}>Select Bike</div>
    </div>
    </DropdownMenuTrigger>
    <DropdownMenuContent className={`${jost.className}  w-56 text-2xl`}>
      <DropdownMenuGroup>
        {/* 1 */}
        <DropdownMenuSub>
          <DropdownMenuSubTrigger className={`${jost.className} text-xl`}>Triump</DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent  style={{fontWeight:300}} className={`${jost.className} text-sm`}>
            <DropdownMenuItem onClick={() => updateBikeSelection('67dda2e4c92b5fdeb986ba1f','Triump Tiger 900')}>Triump Tiger 900</DropdownMenuItem>
            <DropdownMenuItem onClick={() => updateBikeSelection('67dda9c7f089a983c560ee93','Triump Bonneville T100')}>Triump Bonneville T100</DropdownMenuItem>
            <DropdownMenuItem onClick={() => updateBikeSelection('67ddadb5f089a983c560eebd','Triump Speed Triple 1200 RS')}>Triump Speed Triple 1200 RS</DropdownMenuItem>

  
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
     
        {/* 2 */}
        <DropdownMenuSub>
          <DropdownMenuSubTrigger  className={`${jost.className} text-xl`}>Ducati</DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent  style={{fontWeight:300}} className={`${jost.className} text-sm`}>
            <DropdownMenuItem onClick={() => updateBikeSelection('67dda6eaf089a983c560ee6b',' Ducati Panigale V 4')}> Ducati Panigale V 4</DropdownMenuItem>
            <DropdownMenuItem onClick={() => updateBikeSelection('67ddab57f089a983c560eea5','Ducati Multistrada V 4')}>Ducati Multistrada V 4</DropdownMenuItem>
  
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
     
        {/* 3 */}
        <DropdownMenuSub>
          <DropdownMenuSubTrigger className={`${jost.className} text-xl`}>Harley Davidson</DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent  style={{fontWeight:300}} className={`${jost.className} text-sm`}>
            <DropdownMenuItem onClick={() => updateBikeSelection('67dda7d3f089a983c560ee73','Harley Davidson Iron 883')}>Harley Davidson Iron 883</DropdownMenuItem>
            <DropdownMenuItem onClick={() => updateBikeSelection('67ddac46f089a983c560eeb1','Harley Davidson Street 750')}>Harley Davidson Street 750</DropdownMenuItem>
  
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
     
     
        {/* 4 */}
        <DropdownMenuSub>
          <DropdownMenuSubTrigger className={`${jost.className} text-xl`}>Honda</DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent style={{fontWeight:300}} className={`${jost.className} text-sm`}>
            <DropdownMenuItem onClick={() => updateBikeSelection('67dda3a8f089a983c560ee50','Honda CBR500R')}>Honda CBR500R</DropdownMenuItem>
            <DropdownMenuItem onClick={() => updateBikeSelection('67dda8f8f089a983c560ee83','Honda Gold Wing')}>Honda Gold Wing</DropdownMenuItem>
  
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
     

      </DropdownMenuGroup>
    </DropdownMenuContent>
  </DropdownMenu>   
  :
<div className='flex flex-col items-center justify-center space-y-3'>
  {selectedBikeName}
  {/* <div className=' bg-red-500 rounded-md text-white hover:bg-red-600 flex items-center justify-center px-3 py-1' onClick={()=>updateBikeSelection('','')}>Cancel</div> */}
  </div>
  }
     
      </div>

  )
}

export default BikeSelector


function getBikeNameById(storedBike:string){
const data=[
  {url:'67dda2e4c92b5fdeb986ba1f',name:"Triump Tiger 900"},
  {url:'67dda9c7f089a983c560ee93',name:'Triump Bonneville T100'},
]
const {name}=data.filter(el=>el.url===storedBike)[0] || []
console.log(name,'🤺👁👁👁👁👁👁👁👁👁👁👁👁👁👁👁👁👁👁👁👁👁👁👁👁')
return name;
}
// "use client";
// import { Jost } from "next/font/google";
// import React, { useEffect, useState } from "react";
// import { usePathname, useSearchParams } from "next/navigation";
// import { useRouter } from "next/navigation";
// import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuPortal, DropdownMenuSub, DropdownMenuSubTrigger, DropdownMenuSubContent } from "@/components/ui/dropdown-menu";

// const jost = Jost({
//   weight: ["500"],
//   subsets: ["latin"],
// });

// const BikeSelector = ({ value, type, border }: { value: string; type: string; border: string }) => {
//   console.log(value, "🐖🐖🐖🐖🐖🐖🐖🐖🐖🐖");

//   const pathname = usePathname();
//   const searchParams = useSearchParams();
//   const router = useRouter();

//   const [selectBike, setSelectBike] = useState("");
//   const [selectedBikeName, setSelectedBikeName] = useState("");

  // Sync selected bikes on mount
  // useEffect(() => {
//     const params = new URLSearchParams(searchParams);
//     const storedBike = params.get(value); // Get left or right from URL
// console.log(storedBike,'🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺')
//     if (storedBike) {
//       setSelectBike(storedBike);
//       // You might need a way to store bike names based on ID
//       setSelectedBikeName(getBikeNameById(storedBike));
//     }
//   }, [searchParams, value]); // Run on mount & when URL params change

//   function updateBikeSelection(bike: string, name: string) {
//     setSelectedBikeName(name);
//     setSelectBike(bike);

//     const params = new URLSearchParams(searchParams);
    
//     if (bike !== "") {
//       params.set(value, bike);
//     } else {
//       params.delete(value);
//     }

//     router.replace(`${pathname}?${params.toString()}`, { scroll: false });
//   }

//   return (
//     <div className={`${jost.className} w-full flex items-center justify-center h-80 ${border} relative group hover:cursor-pointer `}>
//       {selectBike === "" ? (
//         <DropdownMenu>
//           <DropdownMenuTrigger asChild>
//             <div className="border-none hover:cursor-pointer bg-none hover:bg-none shadow-none flex flex-col items-center justify-center">
//               <div className="size-12 md:size-16 flex items-center justify-center border-4 text-xl md:text-2xl rounded-full group-hover:border-green-500 duration-500">
//                 +
//               </div>
//               <div style={{ fontWeight: 300 }} className={`${jost.className} text-sm`}>
//                 Select Bike
//               </div>
//             </div>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent className={`${jost.className} w-56 text-2xl`}>
//             <DropdownMenuGroup>
//               <DropdownMenuSub>
//                 <DropdownMenuSubTrigger className={`${jost.className} text-xl`}>Triumph</DropdownMenuSubTrigger>
//                 <DropdownMenuPortal>
//                   <DropdownMenuSubContent style={{ fontWeight: 300 }} className={`${jost.className} text-sm`}>
//                     <DropdownMenuItem onClick={() => updateBikeSelection("67dda2e4c92b5fdeb986ba1f", "Triumph Tiger 900")}>Triumph Tiger 900</DropdownMenuItem>
//                     <DropdownMenuItem onClick={() => updateBikeSelection("67dda9c7f089a983c560ee93", "Triumph Bonneville T100")}>Triumph Bonneville T100</DropdownMenuItem>
//                     <DropdownMenuItem onClick={() => updateBikeSelection("67ddadb5f089a983c560eebd", "Triumph Speed Triple 1200 RS")}>Triumph Speed Triple 1200 RS</DropdownMenuItem>
//                   </DropdownMenuSubContent>
//                 </DropdownMenuPortal>
//               </DropdownMenuSub>
//             </DropdownMenuGroup>
//           </DropdownMenuContent>
//         </DropdownMenu>
//       ) : (
//         <div className="flex flex-col items-center justify-center space-y-3">
//           {selectedBikeName}
//           <div className="bg-red-500 rounded-md text-white hover:bg-red-600 flex items-center justify-center px-3 py-1" onClick={() => updateBikeSelection("", "")}>
//             Cancel
//           </div>
//         </div>
//       )}
//       <div className={`${jost.className} ${type}`}>vs</div>
//     </div>
//   );
// };

// // Function to get bike names based on ID
// function getBikeNameById(bikeId: string): string {
//   const bikeMap: { [key: string]: string } = {
//     "67dda2e4c92b5fdeb986ba1f": "Triumph Tiger 900",
//     "67dda9c7f089a983c560ee93": "Triumph Bonneville T100",
//     "67ddadb5f089a983c560eebd": "Triumph Speed Triple 1200 RS",
//     "67dda6eaf089a983c560ee6b": "Ducati Panigale V4",
//     "67ddab57f089a983c560eea5": "Ducati Multistrada V4",
//     "67dda7d3f089a983c560ee73": "Harley Davidson Iron 883",
//     "67ddac46f089a983c560eeb1": "Harley Davidson Street 750",
//     "67dda3a8f089a983c560ee50": "Honda CBR500R",
//     "67dda8f8f089a983c560ee83": "Honda Gold Wing",
//   };

//   return bikeMap[bikeId] || "Unknown Bike";
// }

// export default BikeSelector;
