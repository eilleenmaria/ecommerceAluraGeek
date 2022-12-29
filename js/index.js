function loguear(){
    let destaque=document.getElementById('destaque');    
    destaque.style.display='none';
    let login=document.getElementById('home');
    login.style.display='flex';
    let boton=document.getElementById('header-btn');
    boton.style.display='none';
}
function verProductos(){
    let destaque=document.getElementById('destaque');    
    destaque.style.display='none';
    let todos=document.getElementById('todos');
    todos.style.display='flex'
    let boton=document.getElementById('header-btn');
    boton.style.display='none';
}
function agregarProduct(){
    let todos=document.getElementById('todos');
    todos.style.display='none'
    let agregar = document.getElementById('agregar');
    agregar.style.display='flex';
    let boton=document.getElementById('header-btn');
    boton.style.display='none';
    let admin= document.getElementById('admin');
    admin.style.display='flex'


}