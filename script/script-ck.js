/**
* @author Emily Anderson
*/$(document).ready(function(){function e(){$("header h1").append(" made it")}$.get("content/home.txt",function(e){$("#pageContent").html(e)});$("#three h1").click(function(e){var t=$(this).html().toLowerCase();$.get("content/"+t+function(e){$("#pageContent").html(e)})})});