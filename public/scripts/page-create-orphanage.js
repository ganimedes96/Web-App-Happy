//create map
const map = L.map('mapid').setView([-27.2109325,-49.6448719], 15);

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',)
.addTo(map);


//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29,68],
   
})


let marker;
//Create an add marker

map.on('click', (event) =>{
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;
    
    document.querySelector('[name=lat]').value = lat
    
    document.querySelector('[name=lng]').value = lng

    //remove icon
   marker && map.removeLayer(marker)

    //add icon layer
    marker = L.marker([lat, lng], {icon})
    .addTo(map)
    
})


//  photos upload 
function addPhotoField(){
    // pegar o container de fotos #images
    const container =  document.querySelector('#images')
    //pegar o containerr para duplicar .new=image
    const fieldsContainer = document.querySelectorAll('.new-upload')
    // realizar o clone da ultima image adicionada
    const newFieldContainer = fieldsContainer [fieldsContainer.length -1].cloneNode(true)
    
   //ferivicar se o campo esta vazio, se sim, nao adicionar ao container de images
    const input = newFieldContainer.children[0]
        if(input.value == ""){
            return
        }

   //limpar o campo antes de adicionar ao container de imagens 
   input.value = ""
   
   //adicionar o clone ao container de #images
    container.appendChild(newFieldContainer)
}

function deleteField(event) {
      const span = event.currentTarget

      const fieldsContainer = document.querySelectorAll('.new-upload')

      if(fieldsContainer.length < 2){
        span.parentNode.children[0].value = ""     
        return
      }
      //deletar o campo
      span.parentNode.remove();
}


function toggleSelect(event){

    // retirar a classe active dos botoes

    document.querySelectorAll('.button-select button')
        .forEach(function(button){
            button.classList.remove('active')
        })

    // colocar a class .active nesse botao clicado
     const button = event.currentTarget
     button.classList.add('active')   

    //atualizar o meu input hidden com o valor selecionado
     const input = document.querySelector('[nome="open-on-weekends"]')   
      
     input.value = button.dataset.value




}