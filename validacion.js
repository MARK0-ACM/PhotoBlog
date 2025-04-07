<script>
document.getElementById('formulario-contacto').addEventListener('submit', function(event) {
    event.preventDefault();  // Evita el envío tradicional del formulario

    // Mostrar el mensaje de éxito
    document.getElementById('mensaje-exito').style.display = 'block';

    // Opcional: limpiar el formulario después de mostrar el mensaje
    document.getElementById('formulario-contacto').reset();
});
</script>
