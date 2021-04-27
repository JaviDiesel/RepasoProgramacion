function existePar(numeros:number[]):boolean    {
    let respuesta:boolean = false;
    let i = 0;
    while(i<numeros.length && respuesta==false) {
        if(numeros[i]%2 == 0)   {
            respuesta = true;
        }
        i++;
    }
    return respuesta;
}

function f_nombresM(nombres:string[]):boolean   {
    let respuesta = true;
    let i = 0;
    while(i<nombres.length && respuesta==true)  {
        const letraM:string = 'm';
        let primera:string = nombres[i].split('')[0];
        if(primera != letraM)   {
            respuesta = false;
        }
        i++;
    }
    return respuesta;
}