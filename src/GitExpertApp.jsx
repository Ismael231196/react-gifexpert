import { useState } from "react";
import { AddCategory, GitGrid } from "./components";


export const GitExpertApp = () => {
    const [categories, setCategories] = useState(['Goku']);

    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory)) return
        setCategories([...categories, newCategory]); // Se corrige "truns"
    };

    return (
        <>
            <h1>GitExpertApp</h1>

            <AddCategory 
                //setCategories={setCategories} 
                onNewCategory={e => onAddCategory(e)}
            />

        
            {categories.map(item => (
                <GitGrid key={item} category={item}/>
            ))}
        
        </>
    );
};


