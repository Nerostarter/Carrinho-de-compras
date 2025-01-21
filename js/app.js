let totalgeral = 0;
document.getElementById ('lista-produtos').innerHTML = "";
document.getElementById ("valor-total").innerHTML = 'R$ 0';
function adicionar(){
let Produto = document.getElementById('produto').value;
let nomeProduto = Produto.split ("-")[0];
let valorDoProduto = Produto.split("-")[1];
let quantidade = document.getElementById('quantidade').value;
let ListaDeCompra = document.getElementById('lista-produtos');
let valorPuro = valorDoProduto.replace('R$', '');
let subtotalPuro = (quantidade * valorPuro)
let valorTotal = document.getElementById('valor-total');







  document.getElementById('quantidade').value = 1;
 
   if(quantidade.includes(".") || quantidade < 0){
    alert ("Verifique se quantidade está certa.");
   }else{
    ListaDeCompra.innerHTML = ListaDeCompra.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${subtotalPuro}</span>
  </section>`;
  totalgeral = totalgeral + subtotalPuro
valorTotal.innerHTML = `R$${totalgeral}`;
   }
 
    
  console.log ( quantidade);
}





function limpar(){
    let ListaDeCompra = document.getElementById('lista-produtos');
    ListaDeCompra.innerHTML = '';
    let valorTotal = document.getElementById('valor-total');
    valorTotal.innerHTML = 'R$ 0';
    totalgeral = 0;
    
}
