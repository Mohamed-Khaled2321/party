//    HOME

function openNav() {
    if ($('#navbar').width() =='250') {
        closeNav();
    } else {
        $('#navbar').width('250px');
        $('#head').css('margin-left','250px');
    }
}

function closeNav() {
    $('#navbar').width('0px');
    $('#head').css('margin-left', '0px');
}



//       DETAAILS

$('.singers p:first').css('display', 'block');
$('.singers h3').click(function () {
    $(this).next().slideToggle(1000);
    $('.singers p').not($(this).next()).slideUp(1000);
});






//           Counter

let countdown=new Date("Dec 31,2023 23:59:59").getTime();

 let counter =setInterval(() => {
    let dateNow= new Date().getTime();

    let dateDiff= countdown-dateNow;
    //console.log(dateDiff)

    let d = Math.floor(dateDiff / (1000*60*60*24));
    
    let h=Math.floor((dateDiff%  (1000*60*60*24))/(1000*60*60));
    
    let m=Math.floor((dateDiff%  (1000*60*60))/(1000*60));
    
    let s=Math.floor((dateDiff%  (1000*60))/(1000));

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    document.getElementById("days").innerHTML=d +'<span class="ps-1">D</span>';
    document.getElementById("hours").innerHTML=h +'<span class="ps-1">h</span>';
    document.getElementById("minutes").innerHTML=m +'<span class="ps-1">m</span>';
    document.getElementById("second").innerHTML=s +'<span class="ps-1">s</span>';


 
    
 }, 1000);
   







//                 text area

let max=100
$('textarea').keyup(function(){
    let x= $(this).val().length
    let y= max-x
    if(y<=0){
        $('#char').text("your available character finished");
    } else {
        $('#char').text(y);
    }
})












