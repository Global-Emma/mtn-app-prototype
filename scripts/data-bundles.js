import {bundles, weeklyPlan, monthlyPlan, getBundles} from './bundles.js'
import { addToBuy, buyDataFromAirtime, bundlesBuy } from './buy-again.js';

// Display bundles on click
const dailyBundles = document.querySelector('.js-bundles')
const weeklyBundles = document.querySelector('.js-weekly-bundles')
const monthlyBundles = document.querySelector('.js-weekly-bundles')

const dailyBundlesBtn = document.querySelector('.daily')
const weeklyBundlesBtn = document.querySelector('.weekly')
const monthlyBundlesBtn = document.querySelector('.monthly')


function displayDailyBundles() {
let bundlesHtml = '';

bundles.forEach((bundle) => {
    bundlesHtml += `
                    <div class="bundles-flex">
                        <div class="bundles-offer">
                            <div class="offer-name">
                                <h3>${bundle.bundleName}</h3>
                                <p>${bundle.bundleSummary}</p>
                            </div>
                            <a href="#">i</a>
                        </div>
                        <div class="offer-price">
                            <div class="validity">
                                <p>Validity</p>
                                <h3>${bundle.validity} day</h3>
                            </div>
                            <div class="price">
                                <p>Price</p>
                                <h3>N ${bundle.price}</h3>
                            </div>
                            <button class="buy-now" data-product-id="${bundle.bundleName}">Buy Now</button>
                        </div>
                    </div>
                    `
})

document.querySelector('.js-bundles')
    .innerHTML = bundlesHtml ;

    const buyNow = document.querySelectorAll('.buy-now')

    for (let i = 0; i < buyNow.length; i++){
        const buy = buyNow[i]
        buy.addEventListener('click', () => {
            const productId = buy.dataset.productId;
            buyDataFromAirtime(productId);
            addToBuy(productId);
            bundlesBuy(productId);
        })
    }
            

}
displayDailyBundles();

// weekly bundles html
function displayWeeklyBundles() {
let weeklyBundlesHtml = '';

weeklyPlan.forEach((bundle) => {
    weeklyBundlesHtml += `
                    <div class="bundles-flex">
                        <div class="bundles-offer">
                            <div class="offer-name">
                                <h3>${bundle.bundleName}</h3>
                                <p>${bundle.bundleSummary}</p>
                            </div>
                            <a href="#">i</a>
                        </div>
                        <div class="offer-price">
                            <div class="validity">
                                <p>Validity</p>
                                <h3>${bundle.validity} days</h3>
                            </div>
                            <div class="price">
                                <p>Price</p>
                                <h3>N ${bundle.price}</h3>
                            </div>
                            <button class="buy-now" data-product-id="${bundle.bundleName}">Buy Now</button>
                        </div>
                    </div>
                    `
})
    document.querySelector('.js-bundles')
        .innerHTML = weeklyBundlesHtml ;

    const buyNow = document.querySelectorAll('.buy-now')

    for (let i = 0; i < buyNow.length; i++){
        const buy = buyNow[i]
        buy.addEventListener('click', () => {
            const productId = buy.dataset.productId;
            buyDataFromAirtime(productId)
            addToBuy(productId);
            bundlesBuy(productId);
        })
    }
            

}

// monthly bundles html

function displayMonthlyBundles() {
    let monthlyBundlesHtml = '';
    
    monthlyPlan.forEach((bundle) => {
        monthlyBundlesHtml += `
                        <div class="bundles-flex">
                            <div class="bundles-offer">
                                <div class="offer-name">
                                    <h3>${bundle.bundleName}</h3>
                                    <p>${bundle.bundleSummary}</p>
                                </div>
                                <a href="#">i</a>
                            </div>
                            <div class="offer-price">
                                <div class="validity">
                                    <p>Validity</p>
                                    <h3>${bundle.validity} days</h3>
                                </div>
                                <div class="price">
                                    <p>Price</p>
                                    <h3>N ${bundle.price}</h3>
                                </div>
                                <button class="buy-now" data-product-id="${bundle.bundleName}">Buy Now</button>
                            </div>
                        </div>
                        `
    })
        document.querySelector('.js-bundles')
            .innerHTML = monthlyBundlesHtml ;
    

    const buyNow = document.querySelectorAll('.buy-now')

    for (let i = 0; i < buyNow.length; i++){
        const buy = buyNow[i]
        buy.addEventListener('click', () => {
            const productId = buy.dataset.productId;
            addToBuy(productId);
            bundlesBuy(productId);
            buyDataFromAirtime(productId);
        })
    }
            
    }


dailyBundlesBtn.addEventListener('click', () => {
    displayDailyBundles();
    dailyBundlesBtn.style.borderBottom = 'solid 2px #fcd312'
    monthlyBundlesBtn.style.borderBottom = 'none'
    weeklyBundlesBtn.style.borderBottom = 'none'   
})

weeklyBundlesBtn.addEventListener('click', () => {
    displayWeeklyBundles();
    weeklyBundlesBtn.style.borderBottom = 'solid 2px #fcd312'
    monthlyBundlesBtn.style.borderBottom = 'none'
    dailyBundlesBtn.style.borderBottom = 'none'
    
});

monthlyBundlesBtn.addEventListener('click', () => {
    displayMonthlyBundles();
    monthlyBundlesBtn.style.borderBottom = 'solid 2px #fcd312'
    weeklyBundlesBtn.style.borderBottom = 'none'
    dailyBundlesBtn.style.borderBottom = 'none'
})
