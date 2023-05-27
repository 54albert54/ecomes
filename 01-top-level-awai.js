import { products } from "./product.js";
console.log(products[2].category.name)





const main = document.querySelector('.eshop')
const showMoreImagen = document.querySelector('.showMoreImagen2')
const showMoreImagenCentral = document.querySelector('.showMoreImagen')
const botonCerrar = document.querySelector('.botonCerrar')
const all = document.getElementById('All')
const furniture =document.getElementById('Furniture')
const shoes =document.getElementById('Shoes')
const New =document.getElementById("Clothes")
const Electronics =document.getElementById('Electronics')
const Other =document.getElementById('Other')
const botonCarritoCompra =document.querySelector('.Desktop_Menu_carritoCompra')
const seccionCompra =document.querySelector('.miCarritoCompra')
const close =document.getElementById('close')



all.addEventListener('click',()=>{main.innerHTML= "",rednderProduct(products) })
furniture.addEventListener('click',()=>{filtro('Furniture')})
shoes.addEventListener('click',()=>{filtro('Shoes')})
New.addEventListener('click',()=>{filtro("Clothes")})
Electronics.addEventListener('click',()=>{filtro('Electronics')})
Other.addEventListener('click',()=>{filtro('Others')})
botonCarritoCompra.addEventListener('click',()=>{
  seccionCompra.classList.toggle('inactive')
})

const filtro =(categoria) =>{
  const resultado = products.filter(a => a.category.name== categoria)
  main.innerHTML= ""
console.log(resultado);
rednderProduct(resultado)

}
const changeImg =(a)=> { 
  
  for (let i =0; i<a.length;i++){
    let moreImage = document.createElement('p')
  let img = a[i]
      moreImage.innerHTML =
      `<img onclick="" src="${img}" alt="s">`
      showMoreImagen.appendChild(moreImage)  
  }}
const rednderProduct =(lista)=>{
  for ( let i = 0; i< 100;i++){
let producto = lista[i]

close.addEventListener('click',()=>{main.innerHTML= "",seccionCompra.classList.add('inactive')})

const showImg =()=>{

  if (showMoreImagen.classList.contains('inactive')){
    showMoreImagen.classList.remove('inactive')
    showMoreImagenCentral.classList.remove('inactive')
    changeImg(producto.images)
    botonCerrar.addEventListener('click' ,()=>showImg())
    close.addEventListener('click' ,showImg)
    
    
  }else{ 
  showMoreImagenCentral.classList.add('inactive')
  showMoreImagen.classList.add('inactive')
  showMoreImagen.innerHTML=""
  }
  
}

  let newItem = document.createElement('div')
  
  newItem.innerHTML =
  `<div class="container">
  <h1>${producto?.title ==undefined?"" :producto.title} </h1>
  <P> ${producto?.description} </P>
  
  <img id="mi#ID${i}" onclick="" src=" ${producto?.images[0]}" alt="s">
  <div class="containerdatail">
  <p> Catergoria: ${producto?.category.name}</p>
  <p> ${producto?.images.length-1==0? "":`mas img: ${producto.images.length-1}`} </p>
  <p>Precio: ${producto?.price} $</p></div>

</div>`

  main.appendChild(newItem)
  let imgID = document.getElementById(`mi#ID${i}`)
  imgID.addEventListener('click' ,()=>showImg())
  
}
}
rednderProduct(products)



