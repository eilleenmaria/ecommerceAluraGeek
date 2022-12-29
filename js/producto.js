
let div= document.getElementById('linea');
let num=1;
categoria.forEach(i=>{
    div.innerHTML+= 
    `  <div id="encabezado" class="productos-encabezado"> 
            <h2 id="titulo">${i}</h2>
            <button class="encabezado-button" onclick="verProductos()" >Ver todo <img src="./img/arrow_back_black_24dp 1.png" alt="flecha derecha" ></button>
        </div>
        <div id="galeria${num}" class="productos-contain"></div> ` ;
    let  galeria = document.getElementById(`galeria${num}`);
    num +=1;
        productos.forEach(producto =>{
            if( producto.categoria === i){                      
                galeria.innerHTML += `<div class="productos-item">
                <div class="productos-item_img"><img src="${producto.src}" alt="${producto.alt}"></div>
                <div>
                <h3 class="productos-item_name">${producto.nombre}</h3>
                <p class="productos-item_price">${producto.precio}</p>
                <a class="productos-item_view" href="">Ver producto</a>
                </div>
                </div>` ;                               
            }                          
        }); 
})