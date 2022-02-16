const handleLogout = async ()=>{
  await fetch('http://localhost:5000/auth/logout')
  window.location.href = '/login'
}
//Get Inpit value
const inputName = document.getElementById('input_name')
const inputImg = document.getElementById('input_img')
const inputDescription = document.getElementById('input_description')
const inputOwner = document.getElementById('input_owner')
const inputPokemonType = document.getElementById('input_pokemonTypeId')
const inputPokemonAbility = document.getElementById('input_pokemonAbilityId')
// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const addBtn = document.getElementById("addBtn");
const deleteBtn = document.getElementById("deleteBtn");
// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];
const deleteCardBtn = document.querySelectorAll(".delete_card_btn");
const updateCardBtn = document.querySelectorAll(".update_card_btn");
const enviar = document.getElementsByClassName("enviar");

const handleSubmit = () =>{
  window.location.reload()
  modal.style.display = "none";
}

// When the user clicks on the button, open the modal
addBtn.addEventListener('click', function(){
  modal.style.display = "block";
})

for (let e = 0; e < updateCardBtn.length; e++){
  updateCardBtn[e].addEventListener('click',function(e){
    const cardSelected = e.target.id
    fetch(`http://localhost:5000/pokemon/id/${cardSelected}`,{
    })
    .then(response => response.json())
    .then(data => console.log(data))
  })
}


for (let i = 0; i < deleteCardBtn.length; i++) {
  deleteCardBtn[i].addEventListener('click', async function(e){
    const cardSelected = e.target.id
    await fetch(`http://localhost:5000/pokemon/id/${cardSelected}`,{
      method: 'DELETE',

    })
    window.location.reload()
  })
}

// When the user clicks on <span> (x), close the modal
span.addEventListener('click', function(){
  modal.style.display = "none";
})

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', function(event){
  if (event.target == modal) {
    modal.style.display = "none";
  }

})
