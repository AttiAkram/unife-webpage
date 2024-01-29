$(document).ready(function() {
    const altezzaColArg = $('#Col-arg').height();

    console.log(altezzaColArg);
    
    $('#Col-twt').css('max-height', `${altezzaColArg}px`);
  });