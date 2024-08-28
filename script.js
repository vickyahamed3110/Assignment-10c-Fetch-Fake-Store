const getData = async () => {
    const response = await fetch(`https://fakestoreapi.com/products?limit=5`,{
        method:'GET'
    })

const data = await response.json()
console.log(data)
renderTable(data)
}

//Function to render data into the table
function renderTable(data) {
    const dataList = document.getElementById('dataList');
    data.forEach(item => {
        const row = document .createElement('tr');
        row.innerHTML = `
        <td>${item.id}</td>
        <td>${item.title}</td>
        <td>${item.price}</td>
        <td>${item.description}</td>
        <td>${item.category}</td>`
        dataList.appendChild(row);
    });
}
//Call the function to render data
getData()