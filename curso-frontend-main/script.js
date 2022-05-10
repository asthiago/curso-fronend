    document.querySelector('input').addEventListener('focusout' , function(event) {
            
        event.preventDefaul();

        if( this.value == ""){
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento";
            return false;
        }


    });