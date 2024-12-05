//A validação do formulário com javascript é considerado um desafio extra, não é preciso fazer esta validação para realizar sua entrega
const formulario = document.getElementById('contato__formulario');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    // Enviando os dados para um servidor (exemplo com fetch)
    fetch('/enviar-contato', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nome, email, mensagem })
    })
    .then(response => {
        if (response.ok) {
            alert('Mensagem enviada com sucesso!');
        } else {
            alert('Erro ao enviar a mensagem.');
        }
    })
    .catch(error => {
        console.error('Erro:', error);
    });
});