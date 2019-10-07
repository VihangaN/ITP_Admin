function topmenu(e){$("#top_left_menu").children().hide(),0!=e?($("#top_left_menu").animate({width:"450px"}),$("#"+e).fadeIn()):$("#top_left_menu").hide}$(document).ready(function(){});

function student_login(){
    $("[id='admin']").hide();
}
function notlog(){
    $("#sidebar").hide();
    $(".left").width("0%");
    $(".right").width("100%");
    $('#top_right').hide();
    $('#topbar').hide();
}

function log(){
    $("#sidebar").show();
    $(".left").width("9%");
    $(".right").width("91%");
    $('#top_right').show();
    $('#topbar').show();
}