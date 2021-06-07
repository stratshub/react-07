export const getGifs = async (category) => {
    const apiKey = 'AF9ACmIJoBidQd3wMJ2jsJJ2OQCzdIrH';
    const limit = '10';
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=${limit}&api_key=${apiKey}`;

    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(gif => { return { id: gif.id, title: gif.title, url: gif.images.downsized_medium.url } });

    return gifs;
}