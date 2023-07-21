bargar = document.querySelector(".bargar")
navb = document.querySelector(".nav")
rightNav = document.querySelector("navr")
var tt = document.querySelector(".tt")
bargar.addEventListener('click',()=>{
    navb.classList.toggle('h-nev');
    rightNav.classList.toggle('v-class');
    tt.style.top="-10%"
     
})
var body = document.querySelector("body")
var tm = document.querySelector("#tm")
var nav= document.querySelector(".nav")
var nal= document.querySelector("span")
var nal1= document.querySelector("#nal")
var btn = document.querySelector("#eee")
var PAGE3 = document.querySelector("#HM")
var page4 = document.querySelector(".page4")
var page5 = document.querySelector(".page5")
var page6 =document.querySelector(".page6")
// var aa= document.querySelectorAll(".vv")
var n= 0;
tm.addEventListener("click", function(){
    
    if(n===0){
        // body.style.backgroundColor = "#a5ded4"
        body.style.backgroundColor = "#9ea7ae"
        body.style.color = " #d9e9e"
        aa.style.color = "white"
        aa.style.color = "white"
        tm.style.color= "white"
        page4.style.color= " #d9e9e"
        page4.style.backgroundColor="#9ea7ae"
        // page5.style.backgroundColor="#a5ded4"
        page6.style.backgroundColor="#9ea7ae"
        

        // PAGE3.style.backgroundColor= "rgba(104, 111, 5, 0.56)"
        btn.style.backgroundColor = "rgb(48, 80, 80)"
        nav.style.backgroundColor = "rgb(48, 80, 80)"
        nav.style.color = "white"
        // nal.style.color= " rgb(181, 154, 19)"
        nal1.style.color= " rgb(181, 154, 19)"

        n=1;

    }else{
        body.style.backgroundColor = "rgb(255,255,255)"
        body.style.color = "black"
        tm.style.color = "black"
        nav.style.backgroundColor = " aliceblue"
        nav.style.color = "black"
        // aa.style.color = "black"
        btn.style.backgroundColor = "green"
        page4.style.color= "black"
        page4.style.backgroundColor="rgb(255,255,255)"
        page6.style.backgroundColor=" #cedcd9"

        n=0;
    }
})
 var tr=gsap.timeline();
tr
.from(".nav",{
    // backgroundColor:"black",
    // opacity:0,
    duration:0.5,
    backgroundColor:"rgb(36, 129, 129)",
    // overFlow:top,
    y:-100
})
.from("#rrrr",{
    // backgroundColor:"black",
    opacity:0,
    duration:2,
    // backgroundColor:"rgb(36, 129, 129)",
    // overFlow:top,
    x:100
})
gsap.from("#eee",{
    // backgroundColor:"black",
    opacity:0,
    duration:2,
    // backgroundColor:"rgb(36, 129, 129)",
    // overFlow:top,
    x:100,
    // y:50
})
gsap.from(".page1right",{
    // backgroundColor:"black",
    opacity:0,
    duration:3,
width:400,
    x:100
})
gsap.from("#hbm",{
    // backgroundColor:"black",
    opacity:0,
    duration:1,
    // backgroundColor:"rgb(36, 129, 129)",
    // overFlow:top,
    x:-100
})
gsap.from(".ppp",{
    // backgroundColor:"black",
    opacity:0,
    duration:2,
    // backgroundColor:"rgb(36, 129, 129)",
    // overFlow:top,
    x:-100
})


var flag=0
document.querySelector(".bargar").addEventListener("click",function(){
if(flag==0){

        document.querySelector(".tt").style.opacity="0"
        flag=1
}else{
        document.querySelector(".tt").style.opacity="1"
        flag=0
    }
})

// import LocomotiveScroll from 'locomotive-scroll';

// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.page1'),
//     smooth: true
// });


var arr=[
    {img:"https://i.pinimg.com/564x/8d/0c/72/8d0c72f49aaa0a6a35d34c7b98035baa.jpg", hfor:"JAVA Programing",hth:"Topic:- Array,oops,DSA,Collection ",bb:"499$"},
    {img:"https://i.pinimg.com/564x/d4/83/2d/d4832d57058dfb68363c9f1c3d055201.jpg", hfor:"Front-end Web Design",hth:"Topic:- HTML,CSS,javascript",bb:"399$"},
    {img:"https://i.pinimg.com/736x/08/86/77/0886779176db12da5565ca4b9541e2b8.jpg", hfor:"Node js & Back-End",hth:"Topic:-Basic-js,node-js,express-js",bb:"379$"},
    {img:"https://i.pinimg.com/564x/50/25/89/5025891bd086c6712be1cc27e9f256f7.jpg", hfor:"React js & UI/UX Design  " ,hth:"Topic:- react-js,UI/UX Design ",bb:"559$"},
    {img:"https://i.pinimg.com/564x/e8/ab/b4/e8abb49f605c7f61553c8268ef0a56aa.jpg", hfor:"Mongo DB & DBMS",hth:"Topic:-database Management",bb:"99$"},
    {img:"https://i.pinimg.com/564x/fb/fa/25/fbfa257f4a8b911ddbd86721e7bed6c3.jpg", hfor:"Full-Stack Design",hth:"Topic:-front-End,back-End",bb:"599$"},
   ]

var clutter= ""
arr.forEach(function(i){
    clutter+=  `
    <div class="elem">
    <img src="${i.img}" alt="">
    <h4>${i.hfor} <i class="${i.bb}"></i></h4>
    <h3> ${i.hth} </h3>
     <h6>Fees:-${i.bb} </h6>
// <button id="eeeem">Enroll Now</button> 
<a href="/user"><button id="eeeem">Enroll Now</button> </a>
</div>
`
    
})
document.querySelector(".page52").innerHTML=clutter
var tr= gsap.timeline();
