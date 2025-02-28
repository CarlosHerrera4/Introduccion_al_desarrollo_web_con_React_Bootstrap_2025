document.getElementById('loadData').addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
        .then(response => response.json()) // Convertir respuesta a JSON
        .then(data => {
            const dataList = document.getElementById('dataList');
            dataList.innerHTML = ''; // Limpiar lista antes de agregar nuevos datos
            data.forEach(post => {
                const li = document.createElement('li');
                li.textContent = `${post.id}: ${post.title}`;
                dataList.appendChild(li);
            });
        })
        .catch(error => console.error('Error al obtener datos:', error));
});
