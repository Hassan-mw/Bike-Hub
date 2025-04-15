// import { error } from "console";

export const getAllBike=async({filter}:{filter:URLSearchParams})=>{
    console.log(filter)
try{ 
const queryString=new URLSearchParams(filter).toString()

const response = await fetch(`http://127.0.0.1:6000/api/bike?${queryString}`);
const data=await response.json();
return data;
}catch(error){
console.error(error)
return null;

}


}

export default getAllBike;


export const getAllItems=async({filter}:{filter:URLSearchParams})=>{
try{ 
const queryString=new URLSearchParams(filter).toString()

const response = await fetch(`http://127.0.0.1:6000/api/item?${queryString}`);
if(!response.ok){
    return console.error("Error is data fetching",response.status)
}
const data=await response.json();
return data;
}catch(error){
console.error(error)
return null;
}


}






export const getBikeById=async({bikeNames}:{bikeNames:string})=>{
try{
 const response = await fetch(`http://127.0.0.1:6000/api/bike/${bikeNames}`);

 const data=await response.json();

return data

}catch(err){
return null
    console.error(err)
}


}