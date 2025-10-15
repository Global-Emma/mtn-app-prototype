export let buyAgain;

loadFromStorage()

if(!buyAgain) {
    buyAgain = [
        {
            productId: 'Betamix Bundle Mini'
        },
        {
            productId: '75MB Daily Plan'
        }
    ]
}

function saveToStorage() {
    localStorage.setItem('buyAgain', JSON.stringify(buyAgain))
}

function loadFromStorage() {
    buyAgain = JSON.parse(localStorage.getItem('buyAgain'))
}

export function addToBuy(productId) {
    let similarBuyAgain;
 
    buyAgain.forEach((buy) => {
        if (buy.productId === productId){
            similarBuyAgain = buy
        }
    })

    if(similarBuyAgain) {
        buyAgain.push({
            productId: productId
        })
    }else {
        buyAgain.push({
            productId: productId
        })
    }

    saveToStorage();
    console.log(buyAgain);
}





// export function getAirtime() {
//     let airtime = 0
//     airtime = Math.floor((Math.random()) * 1000)
//     return airOut = airtime;
// }

// export let dataOut = 0;
// export function getData() {
//     let data = 0
//     data = ((Math.random()) * 10).toFixed(2)
//     return dataOut = data;
// }

