export function setForm() {

    let button = document.getElementById("otros");
    let paragraph = document.getElementById("otherOpt");
    

    button.addEventListener("click", function(){
        if (paragraph.style.display == 'none') {
            paragraph.style.display = 'block';
        } else {
            paragraph.style.display = 'none';
        }
    }, false);
}    
