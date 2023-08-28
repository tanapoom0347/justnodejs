const div = document.createElement('div');

fetch("https://jsonplaceholder.typicode.com/photos")
    .then(response => response.json())
    .then(photo => {
        photo.map((val) => {
            const p = document.createElement('p');
            const img = document.createElement('img');
            p.innerText = `${val.id}: ${val.title}`;
            img.src = `${val.thumbnailUrl}`;
            div.append(p);
            div.append(img);
            // console.log(p);
        })
        console.log(photo);
    })

function displayData() {
    const myBody = document.getElementById('myBody');
    myBody.appendChild(div);
}

displayData();