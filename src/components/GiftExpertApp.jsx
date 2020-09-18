import React,{useState} from 'react'
import AddCategory from './AddCategory'
import { GiftGrid } from './GiftGrid'

function GiftExpertApp() {

    const [categories, setCategories] = useState(['One Punch'])

    return (
        <>
            <h2 className="text-gray-700 text-3xl">Gift App</h2>
            <AddCategory setCategories={setCategories}/>
            <hr className="mb-2 bg-gray-900"/>
            <ol>
                {categories.map(category=>(
                    // <li className="py-2 px-3 text-white bg-green-500 mb-2" key={anime} >{anime}</li>
                    <GiftGrid key={category}
                    category={category}/>
                ))}
            </ol>

        </>
    )
}

export default GiftExpertApp
