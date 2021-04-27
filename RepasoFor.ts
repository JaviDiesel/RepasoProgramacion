function f_caracteres(palabras:string[]):number {
    let suma = 0;
    for(let i=0;i<palabras.length;i++)  {
        let caracteres:number = palabras[i].length;
        suma += caracteres;
    }
    return suma;
}

function f_revertedArray(array:any[]):any[] {
    let revertedArray:any[] = [];
    for(let i=array.length-1;i>=0;i--)   {
        revertedArray.push(array[i]);
    }
    return revertedArray;
}

let p_arcoIris = (colores:string[]):void => {
    const arcoIris:string[] = ['rojo','naranja','amarillo','verde','azul','violeta'];
    for(let i=0;i<colores.length;i++)   {
        let respuesta:string = 'no';
        if(arcoIris.includes(colores[i]))   {
            respuesta = 'si';
        }
        console.log(`el color ${colores[i]} ${respuesta} se encuentra en el arcoiris`);
    }
}

function p_impares(numero:number):void   {
    //incluido tambien el numero del parametro de entrada
    let impares:number[] = [];
    for(let i=0;i<=numero;i++)  {
        if(i%2 != 0)    {
            impares.push(i);
        }
    }
    console.log(impares);
}