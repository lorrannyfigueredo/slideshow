const container = document.querySelector('#container-img');

const images = [
    {'id': '1', 'url': './img/img1.jpg'},
    {'id': '2', 'url': './img/img2.jpg'},
    {'id': '3', 'url': './img/img3.jpg'},
    {'id': '4', 'url': './img/img4.jpg'},
    {'id': '5', 'url': './img/img5.jpg'},
    {'id': '6', 'url': './img/img6.jpg'},
]

const loadImages = (images, container) => {
    images.forEach(image => {
        container.innerHTML += `
        <div class="item">
            <img src="${image.url}">
            </div>
        `
    })
}

loadImages(images, container);

let items = document.querySelectorAll('.item');

const previous = () => {
    container.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}
const next = () => {
    const lastItem = items[items.length -1];
    container.insertBefore(lastItem, items[0]);
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous)
document.querySelector('#next').addEventListener('click', next)