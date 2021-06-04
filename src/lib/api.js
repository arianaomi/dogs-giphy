const api_key = process.env.VUE_APP_RUTA_API
const baseUrl = `http://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=`

const getDogsGif = async () => {
  try {
    let res = await fetch(`${baseUrl}dogs`, {
      headers: {
        "Accept": 'application/json',
      },
    })
    res = await res.json()
    return res.data
  } catch (error) {
    console.log(error)
  }
}

const getSpecialGif = async (keyword) => {
  try {
    console.log()
    let res = await fetch(`${baseUrl}${keyword}`, {
      headers: {
        "Accept": 'application/json',
      },
    })
    res = await res.json()
    return res.data
  } catch (error) {
    console.log(error)
  }
}

export default {
  getDogsGif,
  getSpecialGif
}