import { useState } from 'react'
import { AddCategory,GifGrid } from './components';


export const GifExpertApp = () => {
    const [categories,setCategories] = useState(["One punch"]);

    const onAddCategory = (newCategory) =>{
        if (categories.includes(newCategory))return;
        
        setCategories([newCategory,...categories]);
    }

    return (
      <>
        <h1>Giff expert app</h1>
        <AddCategory onNewCategory = {(value) => onAddCategory(value)}/>

        {
            categories.map( (category) =>(<GifGrid key={category} category={category}/>))
        }
      </>
  )
}

export default GifExpertApp