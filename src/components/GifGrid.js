import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';

export const GifGrid = ({ category }) => {
    const {data: gifs, loading} = useFetchGifs(category);

    console.log(loading);
    console.log(gifs);

    return (
        <div>
            <h2 className="animate__animated animate__fadeIn">{category}</h2>

            { loading && <p className="animate__animated animate__flash">Cargando...</p> }
            <div className="card-grid">
                {
                    gifs.map(gif => (<GifItem key={gif.id} {...gif} />))
                }
            </div>
        </div>
    )
}
