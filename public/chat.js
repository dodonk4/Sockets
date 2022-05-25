const barraDeMensaje = document.getElementById('barraDeMensaje');
const botonDeEnviar = document.getElementById('botonDeEnviar');
const logearse = document.getElementById('logearse');
const mail = document.getElementById('mail');
const contenedorDeMensajes = document.getElementById('contenedorDeMensajes');

barraDeMensaje.disabled = true;
botonDeEnviar.disabled = true;


let mailGuardado = "";

logearse.addEventListener('click', ()=>{
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail.value)){
        
        console.log('Email Valido');
        barraDeMensaje.disabled = false;
        botonDeEnviar.disabled = false;
        let cosa = mail.value;
        mailGuardado = cosa;
    }else{
        console.log('Email invalido');
    }
})

botonDeEnviar.addEventListener('click', event=>{
    if(barraDeMensaje.value != ""){
    console.log(barraDeMensaje.value);
    const msj = document.createElement('li');
    let date = new Date();
    let adatado = date.toISOString().split('T')[0];
    const NewMsj = {"email": mailGuardado, "date": adatado, "msssj": barraDeMensaje.value}
    mensajes.push(NewMsj);
    msj.innerHTML = `${mailGuardado} ${date.toISOString().split('T')[0]} ${barraDeMensaje.value}`;
    contenedorDeMensajes.append(msj);
    const mssj = barraDeMensaje.value;
    barraDeMensaje.value = "";
    socket.emit('mensaje', {mailGuardado, adatado, mssj} )

    }
})