document.addEventListener('DOMContentLoaded', () => {
   
    const form = document.getElementById('contactForm');
    const nomeInput = document.getElementById('nome');
    const telefoneInput = document.getElementById('telefone');
    const tableBody = document.querySelector('#contactTable tbody');

   
    form.addEventListener('submit', function(event) {
       
        event.preventDefault();

       
        const nome = nomeInput.value.trim();
        const telefone = telefoneInput.value.trim();

        
        if (nome === '' || telefone === '') {
            alert('Por favor, preencha todos os campos.');
            return; 
        }

        
        const newRow = tableBody.insertRow();

       
        const nomeCell = newRow.insertCell();
        const telefoneCell = newRow.insertCell();

        
        nomeCell.textContent = nome;
        telefoneCell.textContent = telefone;

       
        nomeInput.value = '';
        telefoneInput.value = '';
    });
});