import {getBundles} from './bundles.js'
import { buyAgain } from './buy-again.js'

const favor = document.querySelector('.favorite')
   favor.addEventListener('click', () => {
        document.querySelector('.favorite').style.background = '#fcd312'
        document.querySelector('.category').style.background = 'transparent'
        document.querySelector('.buy').style.background = 'transparent'

        document.querySelector('.js-favorite-bundles').style.display = 'flex'
        document.querySelector('.js-category-bundles').style.display = 'none'
        document.querySelector('.js-buyagain').style.display = 'none'
        document.querySelector('.field').style.display = 'none'
    })

document.querySelector('.category')
    .addEventListener('click', ()=> {
        document.querySelector('.category').style.background = '#fcd312'
        document.querySelector('.favorite').style.background = 'transparent'
        document.querySelector('.buy').style.background = 'transparent'
        
        document.querySelector('.js-favorite-bundles').style.display = 'none'
        document.querySelector('.js-category-bundles').style.display = 'grid'
        document.querySelector('.js-buyagain').style.display = 'none'
        document.querySelector('.field').style.display = 'block'

        
        
    })

document.querySelector('.buy')
    .addEventListener('click', ()=> {
        document.querySelector('.buy').style.background = '#fcd312'
        document.querySelector('.favorite').style.background = 'transparent'
        document.querySelector('.category').style.background = 'transparent'
        
        document.querySelector('.js-favorite-bundles').style.display = 'none'
        document.querySelector('.js-category-bundles').style.display = 'none'
        document.querySelector('.js-buyagain').style.display = 'flex'
        document.querySelector('.field').style.display = 'none'
    })

// ----------generating the buy-again bundles html------------

let buyAgainHtml = '';

buyAgain.forEach((buy) => {

    const buyAgainProductId = buy.productId;
    const buyAgainBundle = getBundles(buyAgainProductId)


    buyAgainHtml += `
                    <div class="favorite-bundles-flex">
                        <div class="offer">
                            <div class="offer-name">
                                <h3>${buyAgainBundle.bundleName}</h3>
                                <p>${buyAgainBundle.bundleSummary}</p>
                            </div>
                            <a href="#">i</a>
                        </div>
                        <div class="offer-price">
                            <div class="validity">
                                <p>Validity</p>
                                <h3>${buyAgainBundle.validity} days</h3>
                            </div>
                            <div class="price">
                                <p>Price</p>
                                <h3>N ${buyAgainBundle.price}</h3>
                            </div>
                            <button class="buy-now">Buy Now</button>
                        </div>
                    </div>
                    `
})

document.querySelector('.js-buyagain')
    .innerHTML = buyAgainHtml 

// generating the HTML of the favorite bundles

let favoriteHtml;

