let ul = document.querySelector("ul")

class productsList {
    constructor() {
        this.all = []
    }

add (product) {
    this.all.push(product)
    }
}

class Product {
    constructor( title, price, body_html, images) {
        this.title = title
        this.price = price
        this.body_html = body_html
        this.images = images
    }
}


axios.get("https://www.redbullshopus.com/products.json").then((response) => {
    let data = response.data
    let products = new productsList()

    data.products.forEach((singleProduct) => {
        let p = document.createElement("p")
        let img = document.createElement("img")
        let li = document.createElement("li")
        let h2 = document.createElement("h2")
    // li.classList.add ot add a class to a list element
    // li.id = to add an id to a list element

        let product = new Product(
            singleProduct["title"],
            singleProduct.variants[0]["price"],
            singleProduct["body_html"],
            singleProduct.variants[0].featured_image["src"],
        )

        products.add(product)

        img.setAttribute('src', product.images)

        h2.innerHTML = product.title + "<br>" 

        p.innerHTML = 
            product.price

        li.appendChild(h2)
        li.appendChild(img)
        li.appendChild(p)
        ul.appendChild(li)

    })

    }).catch((error) => {
        console.log(error)
})

