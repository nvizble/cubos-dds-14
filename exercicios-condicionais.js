const valorDaCompra = 100;
let parcelaMaxima = 12;
let jurosAcimaDeSete = 1 / 100;
let numeroDeParcelas = 8;
let descontoAVista = 0.9;
let totalAPagar;
let valorParcela;

if (numeroDeParcelas === 1) {
    totalAPagar = valorDaCompra * descontoAVista
    console.log(`Total a pagar R$ ${totalAPagar}`)
} else {

    if (numeroDeParcelas <= 6 && numeroDeParcelas > 1) {
        totalAPagar = valorDaCompra
        valorParcela = (totalAPagar / numeroDeParcelas).toFixed([2])
        console.log(`Total a pagar R$ ${totalAPagar.toFixed(2)} em ${numeroDeParcelas} de R$ ${valorParcela}`)

    } else if (numeroDeParcelas > 6 && numeroDeParcelas < parcelaMaxima) {
        totalAPagar = valorDaCompra * Math.pow(1 + jurosAcimaDeSete, numeroDeParcelas).toFixed([2])
        valorParcela = (totalAPagar / numeroDeParcelas).toFixed([2])
        console.log(`Total a pagar R$ ${totalAPagar.toFixed(2)} em ${numeroDeParcelas} de R$ ${valorParcela}`)

    } else if (numeroDeParcelas > parcelaMaxima || numeroDeParcelas < 1) {
        console.log("Numero de parcelas invalido.")

    }
}