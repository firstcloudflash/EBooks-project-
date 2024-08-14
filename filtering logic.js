document.getElementById('search-input').addEventListener('input', function (e) {
    const searchTerm = e.target.value.toLowerCase();
    const items = document.querySelectorAll('.item'); // Assuming each ebook/product is wrapped in an element with the class 'item'
    
    items.forEach(item => {
        const title = item.querySelector('h3').textContent.toLowerCase();
        if (title.includes(searchTerm)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});
