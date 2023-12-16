
var btn = document.querySelector("button");
var text = document.querySelector(".h3");
var arr = [

];
var url = 'https://v2.jokeapi.dev/joke/Programming?type=single';
var response = async function () {
  var data = await fetch(url);
  var jsonData = await data.json();
  
  arr.push(jsonData);
  console.log(arr[0].joke)
  text.innerHTML = jsonData.joke;
}



btn.addEventListener('click',response);
