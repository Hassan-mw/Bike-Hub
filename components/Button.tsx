import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { Jost } from "next/font/google";

const jost=Jost({
  weight:['500'],
  subsets:['latin']
})
const  Button=()=> {
  return <InteractiveHoverButton className={`${jost.className} text-sm  rounded-sm w-full bg-blue-500  text-white py-3 xl:py-4 `}>Find Bike</InteractiveHoverButton>;
}

export default Button;