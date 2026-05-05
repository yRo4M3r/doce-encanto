function verificarVisibilidade() {

    const produtos = document.querySelectorAll('.produto');

    produtos.forEach((el, index) => {

        const rect = el.getBoundingClientRect();

        if (rect.top < window.innerHeight * 0.9) {

            setTimeout(() => {
                el.classList.add('ativo');
            }, index * 120);

        }

    });
}

window.addEventListener('scroll', verificarVisibilidade);
verificarVisibilidade();


const botoes = document.querySelectorAll('.botao-carrinho');
const mensagem = document.getElementById('mensagem');

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        mensagem.classList.add('mostrar');

        setTimeout(() => {
            mensagem.classList.remove('mostrar');
        }, 2000);
    });
});