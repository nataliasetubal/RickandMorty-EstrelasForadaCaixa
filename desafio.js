// consts dos elementos que serão manipulados
const image1 = document.getElementById('div1');
const image2 = document.getElementById('div2');
const image3 = document.getElementById('div3');
const image4 = document.getElementById('div4');
const p1 = document.getElementById('personagem1');
const p2 = document.getElementById('personagem2');
const p3 = document.getElementById('personagem3');
const p4 = document.getElementById('personagem4');

// Número máximo de personagens de acordo com a api (15/06)
const numeroMaximoDePersonagens = 671;

// gera os números aleatórios para selecionar os personagens
generateRandomNumber = () => {
    return Math.floor(Math.random() * numeroMaximoDePersonagens);
}

// funções que aplicam as imagens dos personagens e seus nomes nas divs correspondentes
getCharacterOne = () => {
    const id = generateRandomNumber();
    return fetch("https://rickandmortyapi.com/api/character/" + id, {
        method: 'GET', headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        var personagem1 = document.createElement("img");
        personagem1.src = data.image;
        p1.innerHTML = data.name;
        document.getElementById('div1').appendChild(personagem1);
    });

}

getCharacterTwo = () => {
    const id = generateRandomNumber();
    return fetch("https://rickandmortyapi.com/api/character/" + id, {
        method: 'GET', headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        var personagem2 = document.createElement("img");
        personagem2.src = data.image;
        p2.innerHTML = data.name;
        document.getElementById('div2').appendChild(personagem2);
    })
}

getCharacterThree = () => {
    const id = generateRandomNumber();
    return fetch("https://rickandmortyapi.com/api/character/" + id, {
        method: 'GET', headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        var personagem3 = document.createElement("img");
        personagem3.src = data.image;
        p3.innerHTML = data.name;
        document.getElementById('div3').appendChild(personagem3);
    })
}

getCharacterFour = () => {
    const id = generateRandomNumber();
    return fetch("https://rickandmortyapi.com/api/character/" + id, {
        method: 'GET', headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        var personagem4 = document.createElement("img");
        personagem4.src = data.image;
        p4.innerHTML = data.name;
        document.getElementById('div4').appendChild(personagem4);
    })
}

// função que organiza e chama todas as outras para manter o código organizado
showCharacters = () => {
    this.getCharacterOne()
    this.getCharacterTwo()
    this.getCharacterThree()
    this.getCharacterFour()
}

//método responsável por chamar a função que captura as imagens dos personagens
document.getElementById("myFrame").addEventListener("load", showCharacters());