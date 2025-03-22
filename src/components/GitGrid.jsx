// import { useEffect, useState} from "react"
// 
import { useFetchGifs } from "../hooks/useFetchGifs"
import { Gifgriditem } from "./Gifgriditem"

export const GitGrid = ({category}) => {

  const {images, isLoading} = useFetchGifs(category)
  console.log({images, isLoading});
  
  return (
    <>
        <h3>{category}</h3>
        <div className="card-grid">
          {images.map(img => (
            <Gifgriditem key={img.id} {...img}/>
          ))}
        </div>
        
    </>
  )
}
