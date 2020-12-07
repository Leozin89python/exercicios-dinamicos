let sum = ( ) =>{
  let num = parseInt(prompt('numero 1'))
     let numb = parseInt(prompt('numero 2'))
	document.write( 'sum:' )
        document.write( num + numb )
        document.write( ',sub:' )
	document.write( num - numb )
	document.write( ',div:' )
	document.write( num / numb )
	document.write( ',mult:' )
	document.write( num * numb )
}


let triang = ( ) =>{
   
    let isc = parseInt(prompt('valor 1:'))
    let equ = parseInt(prompt('valor 2:'))
    let esc = parseInt(prompt('valor 3:'))
    if(isc == equ && isc == esc && equ == esc ){
    document.write(isc + ','+ equ + ',' + esc + ':')
    document.write('equilátero')
    }else if(isc != equ && isc != esc && equ != esc){
    document.write(isc + ','+ equ + ',' + esc + ':')
    document.write('escaleno')
    }else{
    document.write(isc + ','+ equ + ',' + esc + ':')
    document.write('isóceles')
    }

}

let pot = ( ) => {
 let num1 = parseInt(prompt('numero 1:'))
  let num2 = parseInt(prompt('numero 2:'))
   document.write(Math.pow(num1,num2))
}

let divide = ( ) => {
 let num1 = parseInt(prompt('valor:'))
  let num2 = parseInt(prompt('valor:'))
   document.write(('divisão:' + num1 / num2) + 'resto:' )
    document.write((num1 / num2) % 2 )
}

let dinheiro = ( ) => {
 let real = parseFloat(prompt('moeda:'))
   document.write('valor' + real.toFixed(3))
}