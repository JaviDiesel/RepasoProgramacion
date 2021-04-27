function f_zodiaco(nacimiento:Date):string    {
    let mes:number = nacimiento.getMonth();
    let dia:number = nacimiento.getDay();
    let zodiaco:string = '';

    if((dia>=21 && mes==3) || (dia<=20 && mes==4))          {
        zodiaco = 'aries';

    }else if((dia>=21 && mes==4) || (dia<=21 && mes==5))    {
        zodiaco = 'tauro';

    }else if((dia>=22 && mes==5) || (dia<=21 && mes==6))    {
        zodiaco = 'geminis';

    }else if((dia>=22 && mes==6) || (dia<=22 && mes==7))    {
        zodiaco = 'cancer';

    }else if((dia>=23 && mes==7) || (dia<=23 && mes==8))    {
        zodiaco = 'leo';

    }else if((dia>=24 && mes==8) || (dia<=23 && mes==9))    {
        zodiaco = 'virgo';

    }else if((dia>=24 && mes==9) || (dia<=23 && mes==10))   {
        zodiaco = 'libra';

    }else if((dia>=24 && mes==10) || (dia<=22 && mes==11))  {
        zodiaco = 'escorpio';

    }else if((dia>=23 && mes==11) || (dia<=21 && mes==12))  {
        zodiaco = 'sagitario';

    }else if((dia>=22 && mes==12) || (dia<=20 && mes==1))   {
        zodiaco = 'capricornio';

    }else if((dia>=21 && mes==1) || (dia<=18 && mes==2))    {
        zodiaco = 'acuario';

    }else if((dia<=19 && mes==2) || (dia<=20 && mes==3))    {
        zodiaco = 'piscis';

    }else   {
        zodiaco = 'se ha producido un error';
    }
    return zodiaco;
}

let p_continente = (pais:string):void =>    {
    const europa:string[] = ['francia','italia','belgica','alemania','holanda'];
    const america:string[] = ['mexico','canada','ecuador','chile','brasil'];
    const asia:string[] = ['japon','indonesia','china','india','tailandia'];
    const africa:string[] = ['nigeria','kenia','tanzania','marruecos','senegal'];
    const oceania:string[]= ['australia','fiyi','samoa','palaos','micronesia'];
    
    let continente:string = '';
    if(europa.includes(pais))   {
        continente = 'europa';
    }else if(america.includes(pais))    {
        continente = 'america';
    }else if(asia.includes(pais))   {
        continente = 'asia';
    }else if(africa.includes(pais)) {
        continente = 'africa';
    }else if(oceania.includes(pais))    {
        continente = 'oceania';
    }else   {
        continente = 'no reconocido';
    }
    console.log(continente);
}

let p_esPar = (numero:number) =>    {
    let respuesta = 'impar';
    if(numero%2 == 0)   {
        respuesta = 'par';
    }
    console.log(`el numero es ${respuesta}`);
}