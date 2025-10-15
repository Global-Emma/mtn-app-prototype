
import {airtimeInput, dataBalance, loadFromStorageDataBalance, loadFromStorageTwo } from './scripts/buy-again.js'
import { getBundles } from './scripts/bundles.js'
// making the first cover visible on load  

const jsHot = document.querySelector('.hot')
jsHot.addEventListener('click', () => {
    const firstCover = document.querySelector('.cover')
    firstCover.style.display = 'block';
    document.querySelector('.cover2').style.display = 'none';
    document.querySelector('.cover3').style.display = 'none';
    document.querySelector('.cover4').style.display = 'none';
    document.querySelector('.cover5').style.display = 'none';
    document.querySelector('.cover6').style.display = 'none';
    document.querySelector('.cover7').style.display = 'none';
    document.querySelector('.cover8').style.display = 'none';
    document.querySelector('.hot').style.borderBottom = 'solid yellow 2px';
    document.querySelector('.mtn').style.border = 'none';
    document.querySelector('.fun').style.border = 'none';
    document.querySelector('.transport').style.border = 'none';
    document.querySelector('.shop').style.border = 'none';
    document.querySelector('.travel').style.border = 'none';
    document.querySelector('.health').style.border = 'none';
    document.querySelector('.finance').style.border = 'none';
    

})

const jsMtn = document.querySelector('.mtn')
jsMtn.addEventListener('click', () => {
    const secondCover = document.querySelector('.cover2')
    secondCover.style.display = 'block';
    document.querySelector('.cover').style.display = 'none';
    document.querySelector('.cover3').style.display = 'none';
    document.querySelector('.cover4').style.display = 'none';
    document.querySelector('.cover5').style.display = 'none';
    document.querySelector('.cover6').style.display = 'none';
    document.querySelector('.cover7').style.display = 'none';
    document.querySelector('.cover8').style.display = 'none';
    document.querySelector('.mtn').style.borderBottom = 'solid yellow 2px';
    document.querySelector('.hot').style.border = 'none';
    document.querySelector('.fun').style.border = 'none';
    document.querySelector('.transport').style.border = 'none';
    document.querySelector('.shop').style.border = 'none';
    document.querySelector('.travel').style.border = 'none';
    document.querySelector('.health').style.border = 'none';
    document.querySelector('.finance').style.border = 'none';

})

const jsFun = document.querySelector('.fun') 
jsFun.addEventListener('click', () => {
    const thirdCover = document.querySelector('.cover3')
    thirdCover.style.display = 'block';
    document.querySelector('.cover2').style.display = 'none';
    document.querySelector('.cover').style.display = 'none';
    document.querySelector('.cover4').style.display = 'none';
    document.querySelector('.cover5').style.display = 'none';
    document.querySelector('.cover6').style.display = 'none';
    document.querySelector('.cover7').style.display = 'none';
    document.querySelector('.cover8').style.display = 'none';
    document.querySelector('.fun').style.borderBottom = 'solid yellow 2px'
    document.querySelector('.mtn').style.border = 'none';
    document.querySelector('.hot').style.border = 'none';
    document.querySelector('.transport').style.border = 'none';
    document.querySelector('.shop').style.border = 'none';
    document.querySelector('.travel').style.border = 'none';
    document.querySelector('.health').style.border = 'none';
    document.querySelector('.finance').style.border = 'none';

});

const jsTransport = document.querySelector('.transport') 
jsTransport.addEventListener('click', () => {
    const fourthCover = document.querySelector('.cover4')
    fourthCover.style.display = 'block';
    document.querySelector('.cover2').style.display = 'none';
    document.querySelector('.cover').style.display = 'none'
    document.querySelector('.cover3').style.display = 'none';
    document.querySelector('.cover5').style.display = 'none';
    document.querySelector('.cover6').style.display = 'none';
    document.querySelector('.cover7').style.display = 'none';
    document.querySelector('.cover8').style.display = 'none';
    document.querySelector('.fun').style.borderBottom = 'none'
    document.querySelector('.mtn').style.border = 'none';
    document.querySelector('.hot').style.border = 'none';
    document.querySelector('.transport').style.borderBottom = 'solid yellow 2px';
    document.querySelector('.shop').style.border = 'none';
    document.querySelector('.travel').style.border = 'none';
    document.querySelector('.health').style.border = 'none';
    document.querySelector('.finance').style.border = 'none';

})

const jsShop = document.querySelector('.shop') 
jsShop.addEventListener('click', () => {
    const fifthCover = document.querySelector('.cover5')
    fifthCover.style.display = 'block';
    document.querySelector('.cover2').style.display = 'none';
    document.querySelector('.cover').style.display = 'none';
    document.querySelector('.cover4').style.display = 'none';
    document.querySelector('.cover3').style.display = 'none';
    document.querySelector('.cover6').style.display = 'none';
    document.querySelector('.cover7').style.display = 'none';
    document.querySelector('.cover8').style.display = 'none';
    document.querySelector('.fun').style.borderBottom = 'none'
    document.querySelector('.mtn').style.border = 'none';
    document.querySelector('.hot').style.border = 'none';
    document.querySelector('.transport').style.border = 'none';
    document.querySelector('.shop').style.borderBottom = 'solid yellow 2px';
    document.querySelector('.travel').style.border = 'none';
    document.querySelector('.health').style.border = 'none';
    document.querySelector('.finance').style.border = 'none';

})

const jsTravel = document.querySelector('.travel') 
jsTravel.addEventListener('click', () => {
    const sixthCover = document.querySelector('.cover6')
    sixthCover.style.display = 'block';
    document.querySelector('.cover2').style.display = 'none';
    document.querySelector('.cover').style.display = 'none';
    document.querySelector('.cover4').style.display = 'none';
    document.querySelector('.cover5').style.display = 'none';
    document.querySelector('.cover3').style.display = 'none';
    document.querySelector('.cover7').style.display = 'none';
    document.querySelector('.cover8').style.display = 'none';
    document.querySelector('.fun').style.borderBottom = 'none'
    document.querySelector('.mtn').style.border = 'none';
    document.querySelector('.hot').style.border = 'none';
    document.querySelector('.transport').style.border = 'none';
    document.querySelector('.shop').style.border = 'none';
    document.querySelector('.travel').style.borderBottom = 'solid yellow 2px';
    document.querySelector('.health').style.border = 'none';
    document.querySelector('.finance').style.border = 'none';

})

const jsHealth = document.querySelector('.health') 
jsHealth.addEventListener('click', () => {
    const seventhCover = document.querySelector('.cover7')
    seventhCover.style.display = 'block';
    document.querySelector('.cover2').style.display = 'none';
    document.querySelector('.cover').style.display = 'none';
    document.querySelector('.cover4').style.display = 'none';
    document.querySelector('.cover5').style.display = 'none';
    document.querySelector('.cover6').style.display = 'none';
    document.querySelector('.cover3').style.display = 'none';
    document.querySelector('.cover8').style.display = 'none';
    document.querySelector('.fun').style.borderBottom = 'none'
    document.querySelector('.mtn').style.border = 'none';
    document.querySelector('.hot').style.border = 'none';
    document.querySelector('.transport').style.border = 'none';
    document.querySelector('.shop').style.border = 'none';
    document.querySelector('.travel').style.border = 'none';
    document.querySelector('.health').style.borderBottom = 'solid yellow 2px';
    document.querySelector('.finance').style.border = 'none';

})

const jsFinance = document.querySelector('.finance') 
jsFinance.addEventListener('click', () => {
    const seventhCover = document.querySelector('.cover8')
    seventhCover.style.display = 'block';
    document.querySelector('.cover2').style.display = 'none';
    document.querySelector('.cover').style.display = 'none';
    document.querySelector('.cover4').style.display = 'none';
    document.querySelector('.cover5').style.display = 'none';
    document.querySelector('.cover6').style.display = 'none';
    document.querySelector('.cover7').style.display = 'none';
    document.querySelector('.cover3').style.display = 'none';
    document.querySelector('.fun').style.borderBottom = 'none'
    document.querySelector('.mtn').style.border = 'none';
    document.querySelector('.hot').style.border = 'none';
    document.querySelector('.transport').style.border = 'none';
    document.querySelector('.shop').style.border = 'none';
    document.querySelector('.travel').style.border = 'none';
    document.querySelector('.health').style.border = 'none';
    document.querySelector('.finance').style.borderBottom = 'solid yellow 2px';

});

/*-------------refreshing the info --------------*/

    // Get the databundles
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

        // making the airtime and data interactive

        loadFromStorageTwo();

        document.querySelector('.airtime-amt')
        .innerHTML = `N ${airtimeInput}`
  
        document.querySelector('.data-amt')
        .innerHTML = dataHTML

    // making the footer style

document.querySelector('.js-home').addEventListener('click', () => {
    document.querySelector('.fa-house').style.color = '#fcd312'
})

document.querySelector('.js-play').addEventListener('click', () => {
    document.querySelector('.fa-play').style.color = '#fcd312';
    document.querySelector('.play-para').style.color = '#fcd312';
    document.querySelector('.fa-house').style.color = '#5f5f5f';
    document.querySelector('#home-para').style.color = '#5f5f5f';
    document.querySelector('.fa-circle-question').style.color = '#5f5f5f';
    document.querySelector('.help-para').style.color = '#5f5f5f';
    document.querySelector('.fa-ellipsis').style.color = '#5f5f5f';
    document.querySelector('.more-para').style.color = '#5f5f5f';
    
})

document.querySelector('.js-help').addEventListener('click', () => {
    document.querySelector('.fa-circle-question').style.color = '#fcd312';
    document.querySelector('.help-para').style.color = '#fcd312';
    document.querySelector('.fa-play').style.color = '#5f5f5f';
    document.querySelector('.play-para').style.color = '#5f5f5f';
    document.querySelector('.fa-house').style.color = '#5f5f5f';
    document.querySelector('#home-para').style.color = '#5f5f5f';
    document.querySelector('.fa-ellipsis').style.color = '#5f5f5f';
    document.querySelector('.more-para').style.color = '#5f5f5f';
})

document.querySelector('.js-more').addEventListener('click', () => {
    document.querySelector('.fa-ellipsis').style.color = '#fcd312';
    document.querySelector('.more-para').style.color = '#fcd312';
    document.querySelector('.fa-circle-question').style.color = '#5f5f5f';
    document.querySelector('.help-para').style.color = '#5f5f5f';
    document.querySelector('.fa-play').style.color = '#5f5f5f';
    document.querySelector('.play-para').style.color = '#5f5f5f';
    document.querySelector('.fa-house').style.color = '#5f5f5f';
    document.querySelector('#home-para').style.color = '#5f5f5f';
    
})