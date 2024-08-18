document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const itemList = document.getElementById('item-list');
    const items = Array.from(itemList.querySelectorAll('li'));

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();

        items.forEach(item => {
            const itemText = item.textContent.toLowerCase();
            if (itemText.includes(query)) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
