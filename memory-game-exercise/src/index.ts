//pseudokod
//ge kortens baksida ett random nummervärde (2 av varje nummer)
//sen när korten kickas ska baksidans nummrvärde bli till framsidans nummervärde, som visas (kanske flip effekt)
//om korten är samma är positionen fast och dom är oklickbara
//om int vänds båda korten tbx igen




let memoryCard: NodeListOf<Element> = document.querySelectorAll('.memory-card')
let memoryCardsBack: NodeListOf<Element> = document.querySelectorAll('.back')
let memoryCardsFront :NodeListOf<Element>= document.querySelectorAll('.front')
let listOfUseableNums: number[]= [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8]

let flippedCards = [];

function flipCard(element: any): void{
    if (!element.classList.contains('flip')) {
        element.style.backgroundColor = "blue";
        element.classList.add('flip');
        element.style.pointerEvents = "none";
        flippedCards.push(element)
    } else {
        element.style.backgroundColor = "#692D55";
        element.classList.remove('flip');
        element.style.pointerEvents = "auto";
    }
        if (flippedCards.length == 2) {
            //jämför korten
            checkMatch();
        }
}
function checkMatch(): void {
    let card1 = flippedCards[0];
    let card2 = flippedCards[1];

    //jämför innertext
    if ((card1 as HTMLElement).innerText === (card2 as HTMLElement).innerText) {
        console.log("Match!");
    } else {
        console.log("Ingen match");
        setTimeout(() => {
            card1.classList.remove('flip');
            card2.classList.remove('flip');
            card1.style.backgroundColor = "#692D55";
            card2.style.backgroundColor = "#692D55";
            card1.style.pointerEvents = "auto";
            card2.style.pointerEvents = "auto";
        }, 500);
    }

    //töm flippedCards arrayen
    flippedCards = [];
}
//lägg till eventlisteners på korten
memoryCard.forEach(element => {
    element.addEventListener('click', () => {
        flipCard(element);
    });
});

function getRandomNum(): number{
    let randomIndex = Math.floor(Math.random() * listOfUseableNums.length);
    let randomNum = listOfUseableNums[randomIndex];
    listOfUseableNums.splice(randomIndex, 1);
    return randomNum;
}
function assignNums(): void{
    for(let i=0; i<16; i++){
        (memoryCardsFront[i] as HTMLElement).innerText = getRandomNum().toString();
    }
}
assignNums()





