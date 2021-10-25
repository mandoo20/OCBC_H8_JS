// var pageTitleElement = document.getElementById("page-title");
// // menyeleksi DOM berdasarkan ID element dan menampungnya ke dalam variable. isinya merupakan object HTML element

// var pageBoxElements = document.getElementsByClassName("page-box");
// // menyeleksi DOM berdasarkan nama class element dan menampungnya ke dalam variable. Isinya merupakan array dari object HTML element, walau <h1> hanya da 1.

// var pageHeading   = document.getElementsByTagName("h1");
// // menyeleksi DOM berdasarkan tag<h1> dan menampungnya kedalam variable. Isinya merupakan array dari object HTML element.

// var pageTitleElementsContent = pageTitleElement.innerHTML;

// console.log('isi <div id="page-title"> : ' + pageTitleElementsContent);

// // isi <div id="page-title"> adalah sample page title

// for(var i = 0; i< pageBoxElements.length;i++){
//     var currentPageBoxElement = pageBoxElements[i];
//     var currentPageBoxElementsContent = currentPageBoxElement.innerHTML;


//     console.log('isi <div id="page-box"> : ' + currentPageBoxElementsContent);

// }

$("h1").css("background-color","#2db54f");
$("#page-title").css("background-color","#d63636");
$(".page-box").css("background-color","#24bbf2");



$(document).ready(function (){
    //console.log($('#title));
    //console.log($('.class));

    $('#page-title').click(function(){
        alert("Saya klik page title")
    })

    $('#submitButton').click(function(e){
        e.preventDefault()

        let username = $('#username').val();

        alert("Hallo, " + username);
    })

    console.log('.page-box:first')

})
