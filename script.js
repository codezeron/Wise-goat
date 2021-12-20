async function fetchData(){
    // Recuperar dados
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();
    let result = data.slip.advice;
    //concatenando string
    result = `"` + result +  `"` ;

    // Adicionar o texto do conselho no HTML
    const txtContainer = document.querySelector('.texto');
    const txt = document.createElement('p');
    txt.innerText = result;
    txtContainer.appendChild(txt);

    
}
fetchData();