// var img2019 = document.getElementsByid("img2019");

// img2019.addEventListener("mouseover",function(){
//   this.src="2019b.png"
// })
// function e(id) { 
//     return document.getElementById("img2019"); 
//     } 

//     function changeimg_bw(ele) { 
//      e(ele).src='2019b.png'; 
//     } 

//     function changeimg_color(ele){
//      e(ele).src='../DWG img/2019.png'; 
//     } 

//     for(var i=1;i<=5;i++) { 
//     var img ='rating'+i; 
//     e(img).addEventListener('mouseover', function(event) { 
//       changeimg_color(img); 
//     }); 
//     e(img).addEventListener('mouseout', function(event) { 
//       changeimg_bw(img); 
//     }); 
//     } 
function changeover(obj){
    obj.src="DWG img/2018b.jpg"; 
}
function changeout(obj){
    obj.src="DWG img/2018.jpg"; 
}