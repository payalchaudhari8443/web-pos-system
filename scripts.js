document.addEventListener('DOMContentLoaded', () => {
    const addSaleButton = document.getElementById('addSaleButton');
    const generateReportButton = document.getElementById('generateReportButton');
    const salesReport = document.getElementById('salesReport');

    function addSale() {
        const productName = document.getElementById('productName').value.trim();
        const price = document.getElementById('price').value.trim();

        if (productName && price) {
            const sales = JSON.parse(localStorage.getItem('sales')) || [];
            sales.push({ productName, price });
            localStorage.setItem('sales', JSON.stringify(sales));
            document.getElementById('productName').value = '';
            document.getElementById('price').value = '';
            alert('Sale added successfully!');
        } else {
            alert('Please fill in both fields.');
        }
    }

    function generateReport() {
        const sales = JSON.parse(localStorage.getItem('sales')) || [];
        salesReport.innerHTML = sales.map(sale => `<li>Product: ${sale.productName}, Price: ${sale.price}</li>`).join('');
    }

    addSaleButton.addEventListener('click', addSale);
    generateReportButton.addEventListener('click', generateReport);
});
