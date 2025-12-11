function copyCode(button) {
    // Encontrar el bloque de código asociado
    const codeBlock = button.closest('.code-block');
    const codeContent = codeBlock.querySelector('code').textContent;

    // Copiar al portapapeles
    navigator.clipboard.writeText(codeContent).then(() => {
        // Cambiar el texto y estilo del botón temporalmente
        const originalText = button.textContent;
        button.textContent = 'Copiado ✓';
        button.classList.add('copied');

        // Restaurar el botón después de 2 segundos
        setTimeout(() => {
            button.textContent = originalText;
            button.classList.remove('copied');
        }, 2000);
    }).catch(err => {
        console.error('Error al copiar:', err);
        button.textContent = 'Error';
        setTimeout(() => {
            button.textContent = 'Copiar';
        }, 2000);
    });
}