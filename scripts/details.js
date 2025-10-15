import { dataBalance, airtimeInput, loadFromStorageTwo, loadFromStorageDataBalance, buyAgain } from "./buy-again.js";
import { getBundles } from "./bundles.js";
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js'


const dataButton = document.querySelector('.js-data-body')
const airtimeButton = document.querySelector('.js-airtime')
const balanceButton = document.querySelector('.js-balance')

const dataBodyHtml = document.querySelector('.data-body')
const airtimeBodyHtml = document.querySelector('.airtime-body');

dataButton.addEventListener('click', () => {
    dataBodyHtml.style.display = 'block'
    airtimeBodyHtml.style.display = 'none';
    dataButton.style.borderBottom = 'solid 2px yellow'
    airtimeButton.style.borderBottom = 'none'
    balanceButton.style.borderBottom = 'none'
});

airtimeButton.addEventListener('click', () => {
    dataBodyHtml.style.display = 'none';
    airtimeBodyHtml.style.display = 'block'
    dataButton.style.borderBottom = 'none'
    balanceButton.style.borderBottom = 'none'
    airtimeButton.style.borderBottom = 'solid 2px yellow'
})

balanceButton.addEventListener('click', () => {
    balanceButton.style.borderBottom = '2px solid yellow'
    dataBodyHtml.style.display = 'none';
    airtimeBodyHtml.style.display = 'none'
    dataButton.style.borderBottom = 'none'
    airtimeButton.style.borderBottom = 'none'
})

const bonus = document.querySelector('.js-bonus-quant')
    .innerHTML
    // Get the databundle
            loadFromStorageDataBalance()
                    // Differentiate GB from MB
            
                    let gbData = dataBalance
                        let ht = ''
                        if (gbData >= 1000) {
                            ht = 'GB'
                        } else{ht = 'MB'}
            
                        if (ht === 'GB') {
                            gbData = (dataBalance/ 1000).toFixed(2)
                        }

            let dataHTML = `${gbData} ${ht}`
            let dataHtmlTotal = `${Number(gbData) + Number(bonus) } ${ht}`


document.querySelector('.data-amt') 
    .innerHTML = `${dataHTML}<span>left</span>`

document.querySelector('.js-data') 
    .innerHTML = `Data-Balance: ${dataHTML}`;

    
document.querySelector('.js-data-tot')
    .innerHTML = `Total: <span>${dataHtmlTotal }</span>`

document.querySelector('.data-plan')
    .innerHTML = buyAgain[0].productId

document.querySelector('.data-exp')
    .innerHTML = buyAgain[0] ? `Exp ${dayjs().add(getBundles(buyAgain[0].productId).validity, 'day').format('DD MMMM YYYY')}` : 'No Active Data Plan'

document.querySelector('.bonus-exp')
    .innerHTML = buyAgain[0] ? `Exp ${dayjs().add(getBundles(buyAgain[0].productId).validity, 'day').format('DD MMMM YYYY')}` : 'No Active Data Plan'
// making the airtime interactive
    loadFromStorageTwo();

    document.querySelector('.air-bal')
        .innerHTML = `&#8358;${airtimeInput}`
