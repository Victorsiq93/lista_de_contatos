function addContact() {
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;

    if (name && phone) {
        const table = document.getElementById('contactTable').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow(table.rows.length);

        let cell1 = newRow.insertCell(0);
        let cell2 = newRow.insertCell(1);

        cell1.innerHTML = name;
        cell2.innerHTML = phone;

        document.getElementById('name').value = '';
        document.getElementById('phone').value = '';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}