const gallery = document.querySelector('.gallery');
const overlay = document.querySelector('.overlay');
const overlayInner= overlay.querySelector('.overlay-inner');
const overlayImg = overlay.querySelector('img');
const overlayClose = overlay.querySelector('.close');
const overlayAuthor = overlay.querySelector('p');

authors=[
    'Photo from <a target="_blank" href="https://unsplash.com/s/photos/free?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
    'Photo from <a target="_blank" href="https://unsplash.com/s/photos/free?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
    'Photo from <a target="_blank" href="https://unsplash.com/s/photos/free?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
    'Photo from <a target="_blank" href="https://unsplash.com/s/photos/free?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
    'Photo from <a target="_blank" href="https://unsplash.com/s/photos/free?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
    'Photo from <a target="_blank" href="https://unsplash.com/s/photos/free?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
    'Photo from <a target="_blank"  href="https://unsplash.com/s/photos/free?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
    'Photo from <a target="_blank"  href="https://unsplash.com/s/photos/free?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
    'Photo from <a target="_blank"  href="https://unsplash.com/s/photos/free?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
    'Photo from <a target="_blank"  href="https://unsplash.com/s/photos/free?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
    'Photo from <a target="_blank"  href="https://unsplash.com/s/photos/free?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
    'Photo from <a target="_blank"  href="https://unsplash.com/s/photos/free?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
    'Photo by <a  target="_blank" href="https://unsplash.com/@aronvisuals?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Aron Visuals</a> on <a href="https://unsplash.com/s/photos/free?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
    'Photo by <a target="_blank"  href="https://unsplash.com/@francistogram?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Fran</a> on <a href="https://unsplash.com/s/photos/free?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
    'Photo by <a  target="_blank" href="https://unsplash.com/@strandman?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Andreas Strandman</a> on <a href="https://unsplash.com/s/photos/free?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
    'Photo by <a  target="_blank" href="https://unsplash.com/@timbar?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Timothy Barlin</a> on <a href="https://unsplash.com/s/photos/free?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
    'Photo by <a  target="_blank" href="https://unsplash.com/@wulcan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jocke Wulcan</a> on <a href="https://unsplash.com/s/photos/free?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
    'Photo by <a  target="_blank" href="https://unsplash.com/@lukaes?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Luka E</a> on <a href="https://unsplash.com/s/photos/free?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
    'Photo by <a  target="_blank" href="https://unsplash.com/@imani_bht?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Imani Bahati</a> on <a href="https://unsplash.com/s/photos/free?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
    'Photo by <a  target="_blank" href="https://unsplash.com/@zorzf?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Zo Razafindramamba</a> on <a href="https://unsplash.com/s/photos/free?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
    'Photo by <a  target="_blank" href="https://unsplash.com/@rodlong?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Rod Long</a> on <a href="https://unsplash.com/s/photos/free?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
];

function generateHTML([h,v]){
    const nb = randomNumber(21);
    overlayAuthor.innerText = `authors[${nb-1}]`;
    return`
    <div class='item h${h} v${v}'>
    <img src='images/${nb}.jpg'>
    <div class='item__overlay'>
    <button>View →</button>
    <p>${authors[nb-1]}</p>
    </div>
    </div>
    `};

function randomNumber(limit) {
    return Math.floor(Math.random()*limit)+1};
const digits = Array.from({length:40}, ()=> [randomNumber(4), randomNumber(4)]).concat([[1,1],[1,1],[1,1],
    [1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],
    [1,1],[1,1],[1,1],[1,1],[1,1],[1,1]]);
// console.log(digits);

const html= digits.map(generateHTML).join('');
// console.log(html);
gallery.innerHTML=html;

function handleClick(e){
    // console.log(e.currentTarget)
    const src = e.currentTarget.querySelector('img').src;
    const aut = e.currentTarget.querySelector('p').innerHTML;
    overlayImg.src = src;
    overlayAuthor.innerHTML = aut;
    // console.log(overlayAuthor)
    overlay.classList.add('open');
 };

 function close(){
    overlay.classList.remove('open');
 }
const items = document.querySelectorAll('.item');
items.forEach(item => item.addEventListener('click', handleClick));

overlayClose.addEventListener('click', close)
