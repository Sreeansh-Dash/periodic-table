const elements = [
    {symbol: 'H', name: 'Hydrogen', number: 1, group: 1, period: 1, category: 'nonmetal'},
    {symbol: 'He', name: 'Helium', number: 2, group: 18, period: 1, category: 'noble gas'},
    {symbol: 'Li', name: 'Lithium', number: 3, group: 1, period: 2, category: 'alkali metal'},
    // ... add more elements here
];
function renderTable() {
    const table = document.getElementById('table');
    table.innerHTML = '';
    elements.forEach(el => {
        const div = document.createElement('div');
        div.className = 'element';
        div.innerHTML = `<strong>${el.symbol}</strong><br>${el.number}`;
        div.title = `${el.name} (${el.category})`;
        table.appendChild(div);
    });
}
renderTable();
function filterCategory(category) {
    renderTable(category);
}

function renderTable(category = 'all') {
    const table = document.getElementById('table');
    table.innerHTML = '';
    elements
        .filter(el => category === 'all' || el.category === category)
        .forEach(el => {
            const div = document.createElement('div');
            div.className = 'element';
            div.innerHTML = `<strong>${el.symbol}</strong><br>${el.number}`;
            div.title = `${el.name} (${el.category})`;
            table.appendChild(div);
        });
}
renderTable();
