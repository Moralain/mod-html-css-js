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
    // Show and Hide input "Others"   
    let button = document.getElementById("otros");
    let paragraph = document.getElementById("otherOpt");
    let hideOther = document.getElementsByClassName('hideOther');
    /*-- Show Input --*/ 
    button.addEventListener("click", function(){
        if (paragraph.style.display === 'none') {
            paragraph.style.display = 'block';
        }
    }, false); 
    /*-- Hide Input --*/
    for(let i = 0; i < hideOther.length; i++ ){
        var aNode = hideOther[i];
        aNode.addEventListener("click", function(){
            if (paragraph.style.display === 'block') {
                paragraph.style.display = 'none';
            }
        }, false); 
    }

    // Limit text area words  
    let textArea = document.getElementById('feedback'); 
    textArea.addEventListener('keyup', calculate);
    
    function calculate(event) {
        let tooltip = document.getElementById('tooltip');
        let x = event.keyCode;
        let string = document.querySelector('#feedback').value;
        let length = string.split(/[^\s]+/).length - 1;
        if (x === 32) {
            if(length >= 50){
                tooltip.style.display = 'block';
                textArea.style.color = 'red';
            } 
        } 
        else if( x === 8){
            if(length < 50){
                tooltip.style.display = 'none'; 
                textArea.style.color = 'black';
            }
        }
    };
}   
