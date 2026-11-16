function adicionar() {
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0].trim();
    let valorProduto = Number(produto.split('R$')[1]);
    let quantidade = parseInt(document.getElementById('quantidade').value);
    if (isNaN(quantidade) || quantidade <= 0) {
        alert('informe a quantidade de produtos que voce deseja.');
        return;
    }
 
    let subtotal = quantidade * valorProduto;
    let carrinho = document.getElementById('lista-produtos');
    let produtosCarrinhos = carrinho.querySelectorAll('.carrinho__produtos__produto');
    let produtoExistente = null;
    for (let item of produtosCarrinhos) {
        if (item.textContent.includes(nomeProduto)) {
            produtoExistente = item;
            break;
        }
    }
    if (produtoExistente) {
        let spans = produtoExistente.querySelectorAll('span');
        let quantidadeAtual = parseInt(spans[0].textContent);
        let novaQuantidade = quantidadeAtual + quantidade;
        spans[0].textContent = `${novaQuantidade}x`;
        spans[1].textContent = `R$${novaQuantidade * valorProduto}`;
    } else {
        carrinho.innerHTML += `<section class="carrinho__produtos__produto"><span class="texto-azul">${quantidade}x</span>${nomeProduto} <span class="texto-azul">R$${subtotal}</span></section>`;
    }
    let elementoTotal = document.getElementById('valor-total');
    let valorTotal = Number(elementoTotal.textContent.replace('R$', ''));
    elementoTotal.textContent = `R$${valorTotal + subtotal}`;
    document.getElementById('quantidade').value = '';
}
 
 
function limpar() {
    if (confirm('tem certeza que deseja limpar o carrinho?')) {
        document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$0';
    }
}