import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

    const [categories, setCategories] = useState(['One Punch'])

    // const handleAdd = () => setcategories([...categories, 'Inuyasha']);

    // const handleAdd = () => setCategories(cats => [...cats, 'Inuyasha']);

    return (
        <div>
            <h2>Gif Expert App</h2>

            <AddCategory setCategories={setCategories} />
            <hr />

            {/* <button onClick={handleAdd}>Agregar</button> */}

            <ol>
                {
                    categories.map(category => <GifGrid key={category} category={category} />)
                }
            </ol>
        </div>
    )
}
