
var keys = document.querySelectorAll('.key');
var black = document.querySelectorAll('.key.black');
var white = document.querySelectorAll('.key.white');


//adds addEventListener to eack keys
keys.forEach(function(key){
  key.addEventListener('click', function(){
    console.log(key);
    var id = key.getAttribute('id');
    playSound(id);
    key.classList.add('active');
    setTimeout(function(){
      key.classList.remove('active');
    }, 250);
  });
})

document.addEventListener('keydown', function(event){
  console.log(event.key);

})

//plays sound for the key pressed
function playSound(id){
  var audio = new Audio("Audio/"+id+".mp3");
  audio.play();
}
