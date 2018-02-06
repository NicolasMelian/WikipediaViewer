$(document).ready(function() {
    

    $("#getMessage").on("click", function(){
        
    var busqueda= $("#text").val();

       console.log(busqueda);
        
      $.getJSON("https://en.wikipedia.org/w/api.php?origin=*&action=query&list=search&srsearch=" +  encodeURIComponent(busqueda)  +"&utf8=&format=json&formatversion=2", function(json){
        
      var size = json.query.search;
      var dato = "";

      for( var x= 0; x < size.length; x++){
        dato += "<a  href=https://en.wikipedia.org/?curid=" + json.query.search[x].pageid +" target='_blank'><div class='info'><h3>"+ json.query.search[x].title + "</h3>";
        dato += json.query.search[x].snippet + "</div></a><br>";

        }
        $("#message").html(dato);
        $(".input").hide();
      });

    });

  });