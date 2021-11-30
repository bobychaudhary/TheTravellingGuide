import axios from "axios";
const URL =


export const getPlaceData=async()=>{
    try{
        const response=await axios.get(URL,options);
        return response.data;

    }
    catch(error){
        console.log(error);
    }
}