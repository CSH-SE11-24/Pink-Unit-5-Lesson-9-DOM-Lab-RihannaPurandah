console.log("Script running...")
// Task 1: Intro section
// Implement the DOM manipulation code flow such that when you click the "Click for location" button, the text below says "1300 Boynton Ave (moving soon!)"
// Make sure to add whatever IDs/classes you need to select the necessary elements
let button = document.querySelector("#location")
let p = document.querySelector("#locationText")

button.addEventListener("click", function(event){
  p.textContent = "1300 Boynton Ave (moving soon!)"
})




// Task 2: Our Values section
// Implement the DOM manipulation code flows for each of the SCORE <h3> tags such that when you click on them, the text changes to the full value
// S -> Self-awareness, C -> Consistency, O -> Ownership, R -> Resilience, E -> Excellence
let score1 = document.querySelector("#score1")
let s = document.querySelector("#score1")

score1.addEventListener("click", function(event){
  s.textContent = "Self-Awareness"
  s.style.color = "#3ab54b"
})

let score2 = document.querySelector("#score2")
let c = document.querySelector("#score2")

score2.addEventListener("click", function(event){
  c.textContent = "Consistency"
  c.style.color = "#3ab54b"
})

let score3 = document.querySelector("#score3")
let o = document.querySelector("#score3")

score3.addEventListener("click", function(event){
  o.textContent = "Ownership"
  o.style.color = "#3ab54b"
})

let score4 = document.querySelector("#score4")
let r = document.querySelector("#score4")

score4.addEventListener("click", function(event){
  r.textContent = "Resilience"
  r.style.color = "#3ab54b"
})

let score5 = document.querySelector("#score5")
let e = document.querySelector("#score5")

score5.addEventListener("click", function(event){
  e.textContent = "Excellence"
  e.style.color = "#3ab54b"
})

// Task 3: Uniform section
// Implement the DOM manipulation code flows for each of the images such that when your mouse is over the image, it displays the back image and when it is off the image, it displayes the front image
// First image: Mouse over -> joggers-front.webp, mouse off -> joggers-back.webp
// Second image: Mouse over -> sweater-front.webp, mouse off -> sweater-back.webp
let image1 = document.querySelector("#joggers")

image1.addEventListener("mouseout", function(event){
  image1.src ="joggers-front.webp"
})

image1.addEventListener("mouseover", function(event){
  image1.src ="joggers-back.webp"
})

let image2 = document.querySelector("#sweaters")

image2.addEventListener("mouseout", function(event){
  image2.src ="sweater-front.webp"
})

image2.addEventListener("mouseover", function(event){
  image2.src ="sweater-back.webp"
})


// EXTRA CREDIT
// Implement the DOM manipulation code flows for each of the SCORE <h3> tags such that when your mouse is over them, the text color changes to #3ab54b (and back to black when it is off it)





