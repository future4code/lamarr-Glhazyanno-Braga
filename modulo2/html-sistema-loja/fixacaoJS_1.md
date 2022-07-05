http://momentous-group.surge.sh/

function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
let comissaoFixa = qtdeCarrosVendidos * 100   
let salarioFixo = 2000
let porcetagemVendas = valorTotalVendas * 0.05
let totalSalario = comissaoFixa + salarioFixo + porcetagemVendas 

 
 return totalSalario 
}