const operacao = process.argv[2]
const valor1 = Number(process.argv[3])
const valor2 = Number(process.argv[4])

switch(operacao){
	case "soma":
		resultado = valor1 + valor2
		break;
	
    case "subt":
        resultado =  valor1 - valor2	
		break;
    
    case "mult":
		resultado = valor1 * valor2
		break;
	
    case "div":
        resultado = valor1 / valor2
        
		break;
        
}

console.log(resultado)