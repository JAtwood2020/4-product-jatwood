var modal;

function revealModal(number){
    modal = document.getElementById('modal' + number);
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function closeModal(number){
    modal = document.getElementById('modal' + number);
    modal.style.display = "none";
}