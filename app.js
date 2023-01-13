const url = "https://en.wikipedia.org/w/api.php?origin=*&action=query&list=search&format=json&srsearch=";
const input = document.querySelector('.input');
const btn1 = document.querySelector('button');
const output = document.querySelector('.output');

input.addEventListener('keyup',(ele)=>{
    console.log(input.value);
})

btn1.addEventListener('click',(e)=>{
    let inputeVal = input.value || "java";
    console.log(inputeVal);
    let tempUrl = url + inputeVal;
    //url = url + tempUrl;
    fetch(tempUrl).then((res)=>{return res.json()})
    .then((data)=>{
        maker(data.query.search);
    })
})

function maker(data){
    output.innerHTML = ''
    data.forEach(element => {
        console.log(element);
        let div = document.createElement('div');
        div.innerHTML = `<h3><a href="https://en.wikipedia.org/wiki?cruid=${element.pageid}" target="_blank"> ${element.title}</a></h3>` + element.snippet;
        //div.innerHTML += element.snippet;
        div.classList.add('box')
        output.append(div);
    });
}