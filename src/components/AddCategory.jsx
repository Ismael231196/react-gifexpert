import { useState } from "react"
export const AddCategory = ({onNewCategory}) => {
    
    const [inputValue, setInputValue] = useState('')
    const onInputChane = (e)=> {
        setInputValue(e.target.value)
    }

    const onSubmit = (e)=> {
        
        e.preventDefault()
        if(inputValue.trim().length <= 1) return
        //setCategories((categories)=>[...categories, inputValue])
        onNewCategory(inputValue.trim())
        setInputValue('')
    }
    return (
        <form onSubmit={onSubmit}>
            <input type="text"
                placeholder="Buscar gits"
                value={inputValue}
                onChange={(e)=>onInputChane(e)}
            />
        </form>
    
    )
}
