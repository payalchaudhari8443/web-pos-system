document.getElementById('addSale').addEventListener('click', function() {
    const productName = document.getElementById('productName').value;
    const productPrice = document.getElementById('productPrice').value;
    
    if (productName && productPrice) {
        const salesReport = document.getElementById('salesReport');
        const listItem = document.createElement('li');
        listItem.textContent = `Product: ${productName}, Price: ${productPrice}`;
        salesReport.appendChild(listItem);

        document.getElementById('productName').value = '';
        document.getElementById('productPrice').value = '';
    } else {
        alert('Please fill in both fields.');
    }
});
