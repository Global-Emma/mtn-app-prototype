import {getBundles} from './bundles.js'

export let buyAgain;
export let dataBalance = 0;
export let airtimeInput = 0;

loadFromStorage()
loadFromStorageTwo()
loadFromStorageDataBalance()

if(!buyAgain) {
    buyAgain = []
}

function saveToStorage() {
    localStorage.setItem('buyAgain', JSON.stringify(buyAgain))
}
 
function loadFromStorage() {
    buyAgain = JSON.parse(localStorage.getItem('buyAgain'))
}

export function addToBuy(productId) {
    if(airtimeInput >= getBundles(productId).price){
        buyAgain.push({
            productId: productId
        })
    }

    saveToStorage();
}


function saveToStorageTwo() {
    localStorage.setItem('airtimeInput', JSON.stringify(airtimeInput))
}
export function loadFromStorageTwo() {
    airtimeInput = JSON.parse(localStorage.getItem('airtimeInput')) || 0
}

export function collectAirtime() {
        const inputvalue = (document.querySelector('.js-input').value);
        let inputValueNumber = Number(inputvalue);
        airtimeInput += inputValueNumber
        document.querySelector('.js-input').value = 0
        saveToStorageTwo()
        return airtimeInput;
}

export function buyDataFromAirtime(productId) {
    const product = getBundles(productId);
    if (airtimeInput >= product.price){
    airtimeInput -= product.price;
    saveToStorageTwo()
    } else {
        return alert('Not Enough Balance')
    }
}


export function saveToStorageDataBalance() {
    localStorage.setItem('dataBalance', JSON.stringify(dataBalance))
}

export function loadFromStorageDataBalance() {
    dataBalance = JSON.parse(localStorage.getItem('dataBalance')) || 0
}

export function bundlesBuy(productId) {
        
                const buyBundle = getBundles(productId);
                if(airtimeInput >= buyBundle.price) {
                    dataBalance += buyBundle.addedData;
                    saveToStorageDataBalance();
                } else{
                    return dataBalance;
                };
}