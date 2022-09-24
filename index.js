
  document.addEventListener('DOMContentLoaded', function (event) {
    var form = document.querySelector('form');
    form.onsubmit = function(e) {
      e.preventDefault();
      formsubmit()
    }

});
 
function formsubmit() {

  let name = document.getElementById("name").value;
  let birthDate = document.getElementById("birth-date").value;

  console.log(`Nome: ${name}`);
  console.log(`Data de Nascimento: ${birthDate}`);
  
  return false; 
}