const apiUrl = `https://api.artic.edu/api/v1/artworks?fields=id,title,artist_display,date_display,thumbnail,medium_display`

fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Failed to fetch art data. Please try again later.")
    }
    return response.json()
  })
  .then((data) => {
    console.log(data)
  })
  .catch((error) => {
    console.error("Error fetching artworks", error)
  })
