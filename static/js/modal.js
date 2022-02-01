const handleLogout = async ()=>{
  await fetch('http://localhost:5000/auth/logout')
  window.location.href = '/login'
}   
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
const openModal = (e)=>{
  console.log(e.target)
  
  modal.style.display = "block";
}

btn.addEventListener('click', function(){
  console.log("open")
  modal.style.display = "block";
})
// When the user clicks on <span> (x), close the modal
span.addEventListener('click', function(){
  console.log("close")
  modal.style.display = "none";
})

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', function(event){
  if (event.target == modal) {
    modal.style.display = "none";
  }
})
