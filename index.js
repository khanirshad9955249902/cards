// let stats = document.querySelector('.status');
// let text = document.getElementById('text');
// let char = document.getElementById('char');
// let words = document.getElementById('words');
// let lines = document.getElementById('lines');
// let symbols = document.getElementById('symbols');
// function count(){
//     if(text.value.length === 0){
//         stats.style.display = "none";
//     }else{
//         stats.style.display = "block";
//     }
// }
// char.innerHTML = text.value.length + "Characters"
// words.innerHTML = text.value.trim().split(/\s+/).length + "Words";
// lines.innerHTML = text.value.split("\n").length + "Lines";
// symbols.innerHTML = text.value.split(/[!@#$%^&*+()_={};:'"<>.,?/-]/).length + "Symbols";
// text.addEventListener("input", count);

// let details = document.querySelector(".details");
// let imgContainer = document.querySelector(".img-container");
// let getUserBtn = document.getElementById("get-user-btn");
// let url = "https://random-data-api.com/api/v2/users?response_type=json";

// let getUser = ()=>{
//     fetch(url)
//     .then((resp) => resp.json())
//     .then((data) => { console.log(data);
//         console.log(data.first_name);
//         console.log(data.last_name);
//         console.log(data.avatar);
//         console.log(data.employment.title);
//         console.log(data.address.city);

//         imgContainer.innerHTML = `<img src= ${data.avatar}>`;
//         details.innerHTML = `
//         <h2>${data.first_name} ${data.last_name}</h2>`
//         `<h3>${data.employment.title}</h3>`
//         `<h4>${data.address.city}</h4>`
//     });
// };
// window.addEventListener("load",getUser);

// const questions = [
//     {
//         'que': 'Which of the follwing is a markup language',
//         'a': 'HTML',
//         'b': 'CSS',
//         'c': 'JAVASCRIPT',
//         'd': 'PHP',
//         'correct': 'a',
//     },
//     {
//         'que': 'What year was javascript language',
//         'a': '1996',
//         'b': '1995',
//         'c': '1994',
//         'd': 'none of the above',
//         'correct': 'b',
//     },
//     {
//         'que': 'What dose CSS stands for',
//         'a': 'Hyper text markup language',
//         'b': 'Styling',
//         'c': 'Cascading Style Sheet',
//         'd': 'Json object notation',
//         'correct': 'c',
//     },
// ]
// let index = 0;
// const quesBox= document.getElementById("quesBox")
// const optionInputs = document.querySelectorAll('.option')
// const loadQuestion = () => {
//     const data= questions[index]
//     console.log(data)
//     quesBox.innerText = `${index +1}) ${data.que}`;
//     optionInputs[0].nextElementSibling.innerText = data.a;
//     optionInputs[1].nextElementSibling.innerText = data.b;
//     optionInputs[2].nextElementSibling.innerText = data.c;
//     optionInputs[3].nextElementSibling.innerText = data.d;
// }

// const submitQuiz = () => {
//     const ans = getAnswer()
// }
// const getAnswer= () => {
//     optionInputs.forEach(
//         (input) => {
//             if(input.Checked) {
//                 console.log(input.value)
//             }
//         }
//     )
// }
// loadQuestion();


//this is my gallery project //

// this is birthday project//

// const PI2 = Math.PI * 2
// const random = (min, max) => Math.random() * (max - min + 1) + min | 0
// const timestamp = _ => new Date().getTime()
// // container
// class Birthday{
//     constructor(){
//         this.resize()

//         // create a lovely place to start the function
//         this.fireworks = []
//         this.counter = 0
//     }

//     resize(){
//         this.width = canvas.width  = window.innerWidth
//         let center  = this.width / 2 | 0 
//         this.spawnA = center - center / 4 | 0
//         this.spawnB = center + center / 4 | 0

//         this.height = canvas.height = window.innerHeight
//         this.spawnC = this.height * .1
//         this.spawnD = this.height * .5
//     }

//     onClick(evt){
//         let x = evt.clientX || evt.touches && evt.touches[0].pageX
//         let y = evt.clientY || evt.touches && evt.touches[0].pageY

//         let count = random(3,5)
//         for(let i= 0; i<count; i++) this.fireworks.push(new
//             this.fireworks(random(this.spawnA, this.spawnB),
//             this.height,
//             x,
//             y,
//             random(0, 260),
//             random(30, 110)))

//             this.counter = -1
//     }
//     update(delta){
//         ctx.globalCompositeOperation = 'hard-light'
//         ctx.fillStyle = `rgba(20,202,20,${7 * delta})`
//         ctx.fillRect(0,0, this.width, this.height)
        
//         ctx.globalCompositeOperation = 'lighter'
//         for (let firework of this.fireworks) firework.update(delta)
//     }
// }

// let progress = document.getElementById("progress")
// let song = document.getElementById("song")
// let ctrlIcon = document.getElementById("ctrlIcon")

// song.onloadedmetadata = function(){
//     progress.max = song.duration;
//     progress.value = song.currentTime;
// }
// function playPause(){
//     if(ctrlIcon.classList.contains(" fa-pause")){
//         song.pause();
//         ctrlIcon.classList.remove(" fa-pause");
//         ctrlIcon.classList.add("fa-play");
//     }else{
//         song.play();
//         ctrlIcon.classList.add (" fa-pause");
//         ctrlIcon.classList.remove(" fa-play");
//     }
// }


// let openBtn = document.getElementById('open');
// let container = document.getElementById('display');
// let closeBtn = document.getElementById("close");
// openBtn.addEventListener('click',function(){
//     container.style.display ="flex";
//     container.style.position ="absolute";
//     container.style.top ="0px"
// })
// closeBtn.addEventListener('click', function(){
//     container.style.display ="none";
// })
// window.addEventListener('click', function(e){
//     if(e.target === container){
//         container.style.display="none";
//     }
// })

// let openBtn= document.getElementById('open-btn');
// let modelContainer2= document.getElementById('container2');
// let closeBtn= document.getElementById('close-btn');

// openBtn.addEventListener('click',function(){
//     modelContainer2.style.display= "flex";
//     modelContainer2.style.position = "absolute";
//     modelContainer2.style.top="0px";
// });

// closeBtn.addEventListener('click', function(){
//     modelContainer2.style.display= "none";
// })
// window.addEventListener('click',function(e){
//     if(e.target === modelContainer2){
//         modelContainer2.style.display = 'none';
//     }
// });

// hello this is testing file //

document.write("hello hayat beta how are you");