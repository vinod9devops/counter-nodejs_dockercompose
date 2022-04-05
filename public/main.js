
window.onload = () => {
    fetch('/api/count', {
        method: 'PUT'
    })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const elem = document.getElementById("counter");
            elem.innerText = data.count;
        });
}