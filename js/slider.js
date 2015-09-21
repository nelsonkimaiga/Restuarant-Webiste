el = document.getElementById("simple-ss");
el.onclick = links;

function links() {
  left = parseInt(getComputedStyle(el).getPropertyValue("background-position").split(" ", 1));
   

  if (left >= -400) {
  

    alert("first");

  
  } else if (left >= -1200) {
  
  
    alert("second");
  
    
  } else if (left >= -1600) {
    

    alert("third");

    
  }
   
}