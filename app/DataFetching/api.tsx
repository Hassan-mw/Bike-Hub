const getAllBike=async({filter}:{filter:URLSearchParams})=>{
    console.log(filter)
try{ 
const queryString=new URLSearchParams(filter).toString()

const response = await fetch(`http://127.0.0.1:5000/api/bike?${queryString}`);
const data=await response.json();
return data;
}catch(error){
console.error(error)
}


}

export default getAllBike;