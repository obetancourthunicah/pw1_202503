//Archivo para validar formulario.

document.addEventListener("DOMContentLoaded", ()=>{
    const myForm = document.getElementById("commentForm");
    const nameInput = document.getElementById("name");
    const nameError = document.getElementById("nameError");
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    const commentInput = document.getElementById("comment");
    const commentError = document.getElementById("commentError");
    const submitButton = document.getElementById("btnSubmit");

    const isEmptyRegex = /^\s*$/;
    const isValidEmailRegex = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/;
    const isValidComment = /^\s*\S+(?:\s+\S+){2,}\s*$/;

    myForm.addEventListener("submit", (e)=>{
        e.preventDefault();
        let isValid = true;
        /*
            Resetear el Estado
            Validar Campo por Campo
                Si el campo es invalido
                    mostrar el Error
            Si el formulario es valido, enviar.
        */
       nameError.style.display = "none";
       if (isEmptyRegex.test(nameInput.value)){
            console.log("Name Input viene vacio");
            nameError.style.display = 'block';
            isValid = false;
       }

       emailError.style.display = "none";
       if(!isValidEmailRegex.test(emailInput.value)) {
            console.log("Email Input esta en formato incorrecto");
            emailError.style.display = 'block';
            isValid = false;
       }

       commentError.style.display = "none";
       if(!isValidComment.test(commentInput.value)) {
            console.log("Comentario es requerido");
            commentError.style.display = 'block';
            isValid = false;
       }

       if (isValid) {
            console.log("Formulario Válido hay que enviar")
            console.log("Información A enviar: ", {
                "name": nameInput.value,
                "email": emailInput.value,
                "comment": commentInput.value
            });
            myForm.submit();
       }
    });

});