 // MORNING CHALLENGE: create a Wu-Tang Clan name generator. Present the user with 5 survey questions and based on those answers randomly generate their name. The name doesn't have to be exact names, but Wu-Tang sounding-ish names. Ex: Childish Gambino (who actually got his name from a Wu-Tang name generator). I'll be out of office for ~1hr this morning

let firstNames =['Dynamic','Irate','Bittah','Annoying','Vulgar','Phantom','Scratching','Intellectual','Peeping','Wonderful','Dynamic','Irate','Bittah','Annoying','Vulgar','Phantom','Scratching','Intellectual','Peeping','Wonderful']
let lastNames = ['Mastermind','Demon','Contender','Prophet','Wizard','Madman','Swami','Pikachi','Chardroid','Panther','Mastermind','Demon','Contender','Prophet','Wizard','Madman','Swami','Pikachi','Chardroid','Panther']


let sumFirstName = 0;
let sumLastName = 0;
document.querySelector('button').addEventListener('click', ()=>{
  let test1 = document.querySelector('.answer1').value
  let test2 = document.querySelector('.answer2').value
  let test3 = document.querySelector('.answer3').value
  let test4 = document.querySelector('.answer4').value
  let test5 = document.querySelector('.answer5').value
  sumFirstName = test1.length + test2.length
  sumLastName = test3.length + test4.length + test5.length
  console.log(sumFirstName)
  console.log(sumLastName)
  let indexFirstName = determFirst()
  let indexLastName = determLast()
  console.log(`indexFirstName ${indexFirstName}`)
  console.log(`indexLastName ${indexLastName}`)
  let createFirst = generateFirstName(indexFirstName)
  let createLast = generateLastName(indexLastName)
  document.querySelector('#first').textContent = createFirst
  document.querySelector('#last').textContent = createLast
  // sum += document.querySelector('.answer1').value.length
})
//note: when we wrote test wrote globably, we cannot write variable test inside addEventListener and console log it. question?

function determFirst(){
  return Math.floor(sumFirstName/2)
}

function  determLast(){
  return Math.floor(sumLastName/5)
}

function generateFirstName(indexFirstName){
  console.log(`generateFirstName ${firstNames[indexFirstName]}`)
  return firstNames[indexFirstName]
}

function generateLastName(indexLastName){
  console.log(`generateLastName ${lastNames[indexLastName]}`)
  return lastNames[indexLastName]
}
