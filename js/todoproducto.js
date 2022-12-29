let view = document.getElementById('todoProducto');
productos.forEach(element=>{
    view.innerHTML += `
    <div class="productos-item">
    <div class="productos-item_img"><img src="${element.src}" alt="${element.alt}"></div>
    <div>
    <h3 class="productos-item_name">${element.nombre}</h3>
    <p class="productos-item_price">${element.precio}</p>
    <a class="productos-item_view" href="">Ver producto</a>
    </div>
    </div>
    `
    console.log(element)
})

