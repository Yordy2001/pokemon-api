const handleLogout = async ()=>{
  await fetch('http://localhost:5000/auth/logout')
  window.location.href = '/login'
}   
// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const addBtn = document.getElementById("addBtn");
const deleteBtn = document.getElementById("deleteBtn");
// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];
const deleteCardBtn = document.querySelectorAll(".delete_card_btn");

// When the user clicks on the button, open the modal
addBtn.addEventListener('click', function(){
  modal.style.display = "block";
})

deleteBtn.addEventListener('click', function(){
  deleteCardBtn.forEach(each =>{
    each.style.display = "block";
  })
})

const deleteCard = ()=>{
  console.log(Event.parentElement)
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
