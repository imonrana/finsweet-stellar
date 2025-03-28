// dnamic header & footer content load for all page

function loadConponent(id, file){
    fetch(file)
    .then((response)=> response.text())
    .then((data)=>document.getElementById(id).innerHTML = data)
    .then(()=>setActiveLinks())
}


loadConponent("header", "../header.html");
loadConponent("footer", "../footer.html");

// set active link daynamic 

function setActiveLinks() {
  let links =   document.querySelectorAll("nav li a");
  let currentPath = window.location.href.split("/").pop()
  links.forEach(link => {
    if(link.getAttribute("href") === currentPath){
        link.classList.add("active")
    }
    
  });

}

