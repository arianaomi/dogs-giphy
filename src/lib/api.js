
const api_key = process.env.VUE_APP_RUTA_API
const baseUrl = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=`

const getDogsGifs = async () => {
  try {
    let res = await fetch(`${baseUrl}dogs`)
    res = await res.json()
    return res.data
  } catch (error) {
    console.log(error)
  }
}

const getSpecialGifs = async (keyword) => {
  try {
    console.log()
    let res = await fetch(`${baseUrl}${keyword}`)
    res = await res.json()
    return res.data
  } catch (error) {
    console.log(error)
  }
}

export default {
  getDogsGifs,
  getSpecialGifs
}