
var arr = [
  {
    joke: "“Once, my father came home and found me in front of a roaring fire. That made my father very mad, as we didn’t have a fireplace.” —Victor Borge"
  },

  {
    joke: "Why don’t pirates take a shower before they walk the plank? They just wash up on shore."
  },

  {
    joke: "“Your mother has been with us for 20 years,” said John. “Isn’t it time she got a place of her own?” “My mother?” replied Helen. “I thought she was your mother.”—Joseph Lozanoff"
  },

  {
    joke: "One of the oddities of Wall Street is that it is the dealer and not the customer who is called broker. —Dallas News"
  },

  {
    joke: "What does a storm cloud wear under his raincoat? Thunderwear."
  },

  {
    joke: "What do you call a couple of chimpanzees sharing an Amazon account? PRIME-mates."
  },

  {
    joke: "Why did the teddy bear say no to dessert? Because she was stuffed"
  },

  {
    joke: "What’s a cat’s favorite dessert? A bowl full of mice-cream."
  },

  { 
	joke: "Where did the music teacher leave her keys? In the piano!" 
},

  {
    joke: "What did the policeman say to his hungry stomach? “Freeze. You’re under a vest.”"
  },

  {
    joke: " What did the left eye say to the right eye? Between us, something smells!"
  },

  { 
	joke: "What do you call a guy who’s really loud? Mike" 
},

{ 
	joke: "Why do birds fly south in the winter? It’s faster than walking!" 
},

{ 
	joke: "Why do birds fly south in the winter? It’s faster than walking!" 
},

{
    joke: "Why did the student eat his homework? Because the teacher told him it was a piece of cake",
  },

  {
	 joke: "What did Yoda say when he saw himself in 4k? HDMI." 
},

{
    joke: "Sandy’s mum has four kids; North, West, East. What is the name of the fourth child? Sandy, obviously!"
  },

  {
    joke: "Why did the blue jay get in trouble at school? For tweeting on a test!"
  },

  { 
	joke: " What did one pickle say to the other? Dill with it." 
},

  { 
	joke: "Why is a football stadium always cold? It has lots of fans!" 
},

  {
    joke: "What did one math book say to the other? “I’ve got so many problems.”"
  }

];

var btn = document.querySelector("button");
var text = document.querySelector(".h3");

btn.addEventListener('click', function (idx) {
	text.innerHTML = arr[Math.floor(Math.random(arr)*21)].joke;
	
});