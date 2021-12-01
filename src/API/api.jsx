import axios from "axios";

const URL="https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";
const getPlaceData=async(sw,ne)=>{
    try{
        const {data: {data}}=await axios.get(URL,{
     params: {
    bl_latitude: sw.lat,
    tr_latitude: ne.lat,
    bl_longitude: sw.lng,
    tr_longitude: ne.lng,
   
  },
  headers: {
    "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
    "x-rapidapi-key": "e0fddc0b7amshdc9775cceae09dcp174573jsn701050f12fb3",
  }
});
        return data;

    }
    catch(error){
        console.log(error);
    }
}
export default getPlaceData;