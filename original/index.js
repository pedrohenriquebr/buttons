$(document).ready(function () {
    $("button[startIcon]").each(function (){
        var icon = $(this).attr("startIcon");
        console.info()  
        $(this).prepend("<i class='material-icons'>"+icon +'</i>')
    });

    $("button[endIcon]").each(function (){
        var icon = $(this).attr("endIcon");
        $(this).append("<i class='material-icons'>"+icon +'</i>')
    });
});