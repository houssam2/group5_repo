var rtscore;
var releaseyear;
var genre;
var limit;

// $('input:radio[name="rating"]').change(
//     function(){
//         if ($(this).is(':checked') && $(this).val() == 'Yes') {
//         }
//     });

$( "#submit-button" ).click(function() {

    //event.preventDefault();
    //console.log("capturing click"+this.val);
   // console.log( "Handler for .click() called." );
   var radiobutton=$("#rt1");

   console.log(radiobutton);
   
   if ($("#rt1").is(':checked') && $("#rt1").val() == true){
        console.log("***************1");
    }
    else if ($("#rt2").is(':checked') && $("#rt2").val() == true){
        console.log("****************2");
    }
    else if ($("#rt3").is(':checked') && $("#rt3").val() == true){
        console.log("****************3");
    }
    else if ($("#rt4").is(':checked') && $("#rt4").val() == true){
        console.log("****************4");
    }
    else if ($("#rt5").is(':checked') && $("#rt5").val() == true){
        console.log("****************5");
    }
  });