const button = document.querySelector(".header__li-button")
const modal = document.querySelector(".header-section")

modal.classList.remove('main-nav--nojs');

button.addEventListener("click", function(){
    if (modal.classList.contains("header-section--closed")){
        modal.classList.remove("header-section--closed");
        modal.classList.add("header-section--open");
    } else {
        modal.classList.add("header-section--closed")
        modal.classList.remove("header-section--open");
    }
})


"use strict"

document.addEventListener("DOMContentLoaded", function(){
    const form = document.getElementById("form");
    form.addEventListener("submit", formSend);

    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);

        let formData = new FormData(form);

        if(error === 0) {
            form.classList.add("_sending")
            let response = await fetch("sendmail.php", {
                method: "POST",
                body: formData
            });
            if(response.ok){
                let result = await response.json();
                alert(result.message);
                formPreview.innerHTML = "";
                form.reset();
                form.classList.remove("_sending");
            }else{
                alert("Ошибка");
                form.classList.remove("_sending");
            }
        }else {
            alert("Заполните обязательные поля")
        }
    }
    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelector("._req")

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);

            if(input.classList.contains("_tel")){
                if(telText(input)){
                    formAddError(input);
                    error++;
                } 
            }else{
                if(input.value === ""){
                    formAddError(input);
                    error++;
                }

            }
        }

    }
    
    function formAddError(input) {
        input.parentElement.classList.add("_error");
        input.classList.add("_error");
    }
    function formRemoveError(input) {
        input.parentElement.classList.remove("_error");
        input.classList.remove("_error");
    }
});

//Зугулярное выражение для проверки телефона
function telText(input) {
    return !/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(input.value)
}




