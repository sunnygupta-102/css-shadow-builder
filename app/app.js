const hOffset = document.getElementById("h-offset");
const hOffsetValue = document.getElementById("h-offset-value");
const vOffset = document.getElementById("v-offset");
const vOffsetValue = document.getElementById("v-offset-value");
const blur = document.getElementById("blur");
const blurValue = document.getElementById("blur-value");
const spread = document.getElementById("spread");
const spreadValue = document.getElementById("spread-value");
const color = document.getElementById("color");
const shadowBox = document.querySelector(".shadow-box");
const cssCode = document.getElementById("css-code");

hOffset.addEventListener("input", function() {
  hOffsetValue.innerHTML = hOffset.value;
  updateShadow();
});

vOffset.addEventListener("input", function() {
  vOffsetValue.innerHTML = vOffset.value;
  updateShadow();
});

blur.addEventListener("input", function() {
  blurValue.innerHTML = blur.value;
  updateShadow();
});

spread.addEventListener("input", function() {
  spreadValue.innerHTML = spread.value;
  updateShadow();
});

color.addEventListener("input", function() {
  updateShadow();
});

function updateShadow() {
  shadowBox.style.boxShadow = `${hOffset.value}px ${vOffset.value}px ${blur.value}px ${spread.value}px ${color.value}`;
  cssCode.innerHTML = `box-shadow: ${hOffset.value}px ${vOffset.value}px ${blur.value}px ${spread.value}px ${color.value};`;
}


function copyCss() {
    // Get the text field
    var copyText = document.getElementById("css-code");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    alert("Copied the text: " + copyText.value);
  }
