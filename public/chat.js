const barraDeMensaje = document.getElementById('barraDeMensaje');
const botonDeEnviar = document.getElementById('botonDeEnviar');
const logearse = document.getElementById('logearse');
const mail = document.getElementById('mail');
const contenedorDeMensajes = document.getElementById('contenedorDeMensajes');

barraDeMensaje.disabled = true;
botonDeEnviar.disabled = true;


let email = "";

logearse.addEventListener('click', ()=>{
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail.value)){
        
        console.log('Email Valido');
        barraDeMensaje.disabled = false;
        botonDeEnviar.disabled = false;
        let cosa = mail.value;
        email = cosa;
    }else{
        console.log('Email invalido');
    }
})

botonDeEnviar.addEventListener('click', event=>{
    if(barraDeMensaje.value != ""){
    console.log(barraDeMensaje.value);
    const msj = document.createElement('li');
    let date1 = new Date();
    let date = date1.toISOString().split('T')[0];
    const msssj = barraDeMensaje.value;
    const NewMsj = {"email": email, "date": date, "msssj": msssj}
    mensajes.push(NewMsj);
    msj.innerHTML = `<p style ="color: blue; font-weight: bold; display: inline-block;">${email}</p> <p style ="color: brown; display: inline-block;">${date1.toISOString().split('T')[0]}</p> <p style ="color: green; font-style: italic; display: inline-block;">${msssj}</p>`;
    contenedorDeMensajes.append(msj);
    
    barraDeMensaje.value = "";
    socket.emit('mensaje', {email, date, msssj} )

    }
})