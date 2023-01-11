const url = "https://en.wikipedia.org/w/api.php?origin=*&action=query&list=search&format=json&srsearch=hello";
const input = document.querySelector('.input');
const btn1 = document.querySelector('button');
const output = document.querySelector('.output');

btn1.addEventListener('click',(e)=>{
    fetch(url).then((res)=>{return res.json()})
    .then((data)=>{
        //console.log(data);
        maker(data.query.search);
    })
})

function maker(data){
    data.forEach(element => {
        console.log(element);
        const div = document.createElement('div');
        div.innerHTML += `<h3><a href="https://en.wikipedia.org/wiki?cruid=${element.pageid}" target="_blank"> ${element.title}</a></h3>`;
        div.innerHTML += element.snippet;
        div.classList.add('box')
        output.append(div);
    });
}