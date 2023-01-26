counter = 0
ShowContent = () => {
    if (counter % 2 == 0) {document.getElementById("nav-mobile-content").style.display = "block"} else {document.getElementById("nav-mobile-content").style.display = "none"}    
    counter++
}
