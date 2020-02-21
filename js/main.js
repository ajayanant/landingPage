$(document).ready(function(){

    $(".nav-icon").click(function(){
        $(".full-nav").addClass("open");
    });
    $(".nav-close").click(function(){
        $(".full-nav").removeClass("open");
    });
    $(window).scroll(function(){
        var sc=$(window).scrollTop();
                   if(sc > 100){
                $(".nav").addClass("sticky");
            }
            else{
                $(".nav").removeClass("sticky");
            }
    });
    
    $('.bxslider').bxSlider({
        mode:'horizontal',
        moveSlides:1,
        slideMargin: 40,
        infiniteLoop:true,
        minSlides:1,
        maxSlides:1,
        speed:1200,
    });
    $("#work").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery:{
            enabled:true
        }
    });
    
});
$(function(){
    $("#clients-list").owlCarousel({
        items:6,
        autoPlay:false,
        smartSpeed:700,
        loop:true,
        autoPlayHoverPause:true,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:2
            },
    
            400:{
                items:3
            },
            768:{
                items:6
            }
        }
    });
});
//canvas

let canvas=document.querySelector('canvas');
canvas.width=1000;
canvas.height=500;

let xGrid=10;
let yGrid=10;
let cellSize=10;

let ctx=canvas.getContext('2d');
let data={
    Javascript:1000,
    Ruby:2700,
    HTML:500,
    ElIXIR:2100,
    Shell:3000,
}

const entries=Object.entries(data);

function drawGrids()
{
  ctx.beginPath();

  while(xGrid<canvas.height)
  {
      ctx.moveTo(0,xGrid);
      ctx.lineTo(canvas.width,xGrid);
      xGrid+=cellSize;
  }
  while(yGrid<canvas.width)
  {
      ctx.moveTo(yGrid,0);
      ctx.lineTo(yGrid,canvas.height);
      yGrid+=cellSize;
  }
  ctx.strokeStyle="gray";
   ctx.stroke();
}

function blocks(count){
    return count*10;
}
function drawAxis()
{
    let yPlot=40;
    let commit=0;
    ctx.beginPath();
    ctx.strokeStyle="black";
    ctx.moveTo(blocks(5),blocks(5));
    ctx.lineTo(blocks(5),blocks(40));
    ctx.lineTo(blocks(80),blocks(40));
    ctx.moveTo(blocks(5),blocks(40));

    for(let i=1;i<=10;i++)
    {
         ctx.strokeText(commit, blocks(2),blocks(yPlot));
         yPlot-=5;
         commit+=500;
    }
    ctx.stroke();
}

function drawChart()
{
    ctx.beginPath();
    ctx.strokeStyle="black";
    ctx.moveTo(blocks(5),blocks(40));

    var xPlot=10;

    for(const [language,commits] of entries)
    {
        var commitsInBlocks=commits/100;
        ctx.strokeText(language,blocks(xPlot),blocks(40-commitsInBlocks-2));
        ctx.lineTo(blocks(xPlot),blocks(40-commitsInBlocks));
        ctx.arc(blocks(xPlot),blocks(40-commitsInBlocks),2,0,Math.PI*2,true);
        xPlot+=5;
    }
    ctx.stroke();

}

drawGrids();
drawAxis();
drawChart();


///repository search
 function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myProjects");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

//repository search by button



//// When the user clicks on the button,
//toggle between hiding and showing the dropdown content 

function myButton() {
  document.getElementById("mydropdown").classList.toggle("show");
}
function filterFunction(){
var div, a,filter,ul,li,p,i,txtValue;
div=document.getElementById("mydropdown");
a=div.getElementsByTagName("a",function link(){
    filter=a.value.toUpperCase();
    ul = document.getElementById("myProjects");
    li = ul.getElementsByTagName("li");
    p=li.document.getElementsByTagName("p");
    for(i=0;i<li.length; i++){
        txtValue=p.textContent||p.innerText;
        if(txtValue.toUpperCase().indexOf(filter)> -1){
            p[i].style.display="";
        } else {
            p[i].style.display="none";
        }
    }
    
});
};
/*function filterFunction() {
  var span, filter,a, ul, li, p, i;
  span = document.getElementById("input");
   a=span.getElementsByTagName("a");
  filter = span.value.toUpperCase();
  ul = document.getElementById("myProjects");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    p = document.getElementById("language");
    txtValue = p[i].textContent || p[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      p[i].style.display = "";
    } else {
      p[i].style.display = "none";
    }
  }
}*/

