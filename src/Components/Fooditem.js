import React from 'react'
import FoodCard from './FoodCard'
import FoodData from "../data/foodData"
import toast,{Toaster} from "react-hot-toast";
import { useSelector } from 'react-redux';

function Fooditem() {
  const category = useSelector((state)=>state.category.category)
  const search = useSelector((state)=>state.search.search)
  
  const handleToast = (name)=>
    toast.success (`Added ${name} }`);
  
  return (
    <>
    <Toaster position='top-center' reverseOrder={false}/>
    <div className='flex flex-wrap gap-10 justify-center lg:margin my=10 mx-6'>

      {
        FoodData.filter((food)=>{
          if(category==="All"){
            return food.name.toLowerCase().includes(search.toLowerCase());
          }else{
            return(
             category===food.category && food.name.toLowerCase().includes(search.toLowerCase())
            );
          }

        }).map((food)=>(
          <FoodCard key={food.id} id={food.id} name={food.name} price={food.price}
          desc={food.desc} rating={food.rating} img={food.img}handleToast={handleToast} />
        ))
      }
  
    </div>
    </>
  )
}

export default Fooditem