export function setForm() {

    let form = document.querySelector('#contactFormID');
    let oContact = {}
    form.addEventListener('submit', enviar);

    function enviar(oEv){
        oEv.preventDefault();

        oContact.name = document.querySelector('#name').value;
        oContact.email = document.querySelector('#email').value;
        oContact.phone = document.querySelector('#phone').value;
        oContact.others = document.querySelector('#others').value;
        oContact.feedback = document.querySelector('#feedback').value;
        oContact.radios = getRadio(document.querySelectorAll('[name="radios"]'));

        console.log(oContact)

    }

    function getRadio(aNodos){
        console.dir(aNodos);
        for(let i = 0; i < aNodos.length; i++){
            const item = aNodos[i]
            if(item.checked){return item.value}
        }
    }
    
    // let button = document.getElementById("otros");
    // let paragraph = document.getElementById("otherOpt");
    

    // button.addEventListener("click", function(){
    //     if (paragraph.style.display == 'none') {
    //         paragraph.style.display = 'block';
    //     } else {
    //         paragraph.style.display = 'none';
    //     }
    // }, false);
}    
