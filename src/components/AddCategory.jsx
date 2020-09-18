import React,{useRef ,useState,useEffect } from 'react'
import PropTypes from 'prop-types'


function AddCategory({setCategories}) {
    
    const inputRef = useRef()
    useEffect(() => {
        
      inputRef.current.focus();
    }, [])


    const [inputValue, setInputValue] = useState("")

    const handleSubmit =e=>{
        e.preventDefault()
        
        if (inputValue!=="" && inputValue!==null ) {
            setCategories(cat=>[inputValue,...cat])
            setInputValue("")
        }
    }

    return (
        <form onSubmit={handleSubmit}>
          <input 
          ref={inputRef}
          className="w-full my-5 px-3 border border-gray-400 text-xl text-gray-600" 
          type="text"
          value={inputValue}
          onChange={(e)=>setInputValue(e.target.value)}
          />
        </form>
    )
}

export default AddCategory
 

AddCategory.propTypes={
    setCategories:PropTypes.func.isRequired
}