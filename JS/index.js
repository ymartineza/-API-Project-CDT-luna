const apiUrl = `https://api.artic.edu/api/v1/artworks?fields=id,fields=image_id,title,artist_display,date_display,thumbnail,medium_display`

fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Failed to fetch art data. Please try again later.")
    }
    return response.json()
  })
  .then((data) => {
    console.log(data)
    const artworks = data.data
    const artList = document.getElementById("artwork-list")

    for (let i = 0; i < 3; i++) {
      const art = artworks[i]
      const artItem = document.createElement("li")
      artItem.classList.add("artwork-item")

      const titleEl = document.createElement("h3")
      titleEl.classList.add("artwork-title")
      titleEl.textContent = art.title || "Untitled"
      artItem.appendChild(titleEl)

      const artistEl = document.createElement("p")
      artistEl.classList.add("artist")
      artistEl.textContent = art.artist_display || "Unknown artist"
      artItem.appendChild(artistEl)

      const dateEl = document.createElement("p")
      dateEl.classList.add("date")
      dateEl.textContent = `Date: ${art.date_display || "Unknown date"}`
      artItem.appendChild(dateEl)

      const mediumEl = document.createElement("p")
      mediumEl.classList.add("medium")
      mediumEl.textContent = `Medium: ${art.medium_display || "Not specified"}`
      artItem.appendChild(mediumEl)

    
      //   const imgEl = document.createElement("img")
      //   imgEl.classList.add("thumbnail")
      //   imgEl.src = art.thumbnail.lqip
      //   imgEl.alt = art.title || "Artwork image"
      //   artItem.appendChild(imgEl)

      artList.appendChild(artItem);
    } 
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

    productList.innerHTML = ""

    data.forEach((product) => {
      const li = document.createElement("li")
      const titleText = document.createTextNode(product.title + " — ")

      const link = document.createElement("a")
      link.href = product.web_url || "#"
      link.textContent = "Buy Here"
      link.target = "_blank"
      link.rel = "noopener noreferrer"

      li.appendChild(titleText)
      li.appendChild(link)

      productList.appendChild(li)
    })

    // for (let i = 0; i < data.length; i++) {
    //   const product = data[i]
    //   console.log(product.title)
    //   const productListItem = document.createElement("li")
    //   productListItem.innerText = product.title
    //   productList.appendChild(productListItem)
    // }
  })
  .catch((error) => {
    console.error("Error fetching products", error)
  })
