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

const apiUrlProductList = `https://api.artic.edu/api/v1/products?limit=5`

fetch(apiUrlProductList)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Failed to fetch product data Please try again later.")
    }
    return response.json()
  })
  .then((response) => {
    console.log(response)
    const data = response.data
    const productList = document.getElementById("product-list")
    for (let i = 0; i < data.length; i++) {
      const product = data[i]
      console.log(product.title)
      const productListItem = document.createElement("li")
      productListItem.innerText = product.title
      productList.appendChild(productListItem)
    }
  })
  .catch((error) => {
    console.error("Error fetching products", error)
  })
