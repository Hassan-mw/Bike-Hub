const getAllBike=async()=>{
try{
const response=await fetch(`127.0.0.1:5000/api/bike`)
console.log(response,'🐕🐕🐕🐕🐕🐕🐕🐕🐕🐕🐕🐕🐕🐕🐕')
const data=await response.json();
console.log(data)
return data;

}catch(error){

}


}

export default getAllBike;