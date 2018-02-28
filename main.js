function ColorLuminance(hex, lum) {
  // validate hex string
  hex = String(hex).replace(/[^0-9a-f]/gi, "");
  if (hex.length < 6) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  lum = lum || 0;

  // convert to decimal and change luminosity
  var rgb = "#",
  c,
  i;
  for (i = 0; i < 3; i++) {
    c = parseInt(hex.substr(i * 2, 2), 16);
    c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
    rgb += ("00" + c).substr(c.length);
  }

  return rgb;
}

function previewColor(color){
  color = color.toString();
  console.log(color)
  var borderString = `10px solid ${{color}}`;
  console.log(borderString);
  
  $('#hex-value').css('border-right', borderString)
}

function extendHex(hex){
  if(hex.length === 3){
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }

  return hex;
}

$(document).ready(function() {
  document.getElementById("hex-value").addEventListener("input", function() {
    var baseValue = $("#hex-value").val();
    var baseLength = baseValue.length;

    console.log(baseValue);
    console.log(baseLength);

    // # in kleurcode wordt weggehaald
    if (baseValue.indexOf("#") !== -1) {
      baseValue = baseValue.replace("#", '');
      $('#hex-value').attr("maxlength", "7");
    }else{
      $("#hex-value").attr("maxlength", "6");      
    }

    // Wanneer de code 3 cijferig is, wordt de code verlengd
    if (baseLength == 3) {
      var hex = extendHex(baseValue);
      console.log(hex)
      previewColor(hex);
      
    } else if(baseLength == 6){
      previewColor(baseValue);
    }





  });
});

