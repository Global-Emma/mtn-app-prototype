export function getBundles(productId) {
    let similarBundle;

    bundles.forEach((bundle) => {
        if(productId === bundle.bundleName){
            similarBundle = bundle
        }
    })
    
    weeklyPlan.forEach((bundle) => {
        if(productId === bundle.bundleName){
            similarBundle = bundle
        }
    })

    monthlyPlan.forEach((bundle) => {
        if(productId === bundle.bundleName){
            similarBundle = bundle
        }
    })

    return similarBundle
}

export const bundles = [
    {
        bundleName: 'Betamix Bundle Mini',
        bundleSummary: 'Get 40MB Data and 1 minute for N50 (only on BetaGist)',
        validity: 1,
        addedData: 40,
        price: 50
    },
    {
        bundleName: '75MB Daily Plan',
        bundleSummary: 'Get 75MB for N75. Valid for 1 day',
        validity: 1,
        addedData: 75,
        price: 75
    },
    {
        bundleName: 'Betamix Bundle Max',
        bundleSummary: 'Get 100MB Data and 2 minutes for N100 (Only on BetaGist)',
        validity: 1,
        addedData: 100,
        price: 100
    },
    {
        bundleName: '110 MB Daily Plan',
        bundleSummary: 'Get 100MB for N100. Valid for 1 day',
        validity: 1,
        addedData: 100,
        price: 100
    },

]

export const weeklyPlan = [
    {
        bundleName: '500MB Weekly Plan',
        bundleSummary: 'Get 500MB 1GB YouTube Night 100MB Youtube Music for N500 Valid for 7 days',
        validity: 7,
        addedData: 500,
        price: 500
    },
    {
        bundleName: '75MB Daily Plan',
        bundleSummary: 'Get 75MB for N75. Valid for 1 day',
        validity: 1,
        addedData: 75,
        price: 75
    },
    {
        bundleName: 'Betamix Bundle Max',
        bundleSummary: 'Get 100MB Data and 2 minutes for N100 (Only on BetaGist)',
        validity: 1,
        addedData: 100,
        price: 100
    },
    {
        bundleName: '110 MB Daily Plan',
        bundleSummary: 'Get 100MB for N100. Valid for 1 day',
        validity: 1,
        addedData: 100,
        price: 100
    },

]


export const monthlyPlan = [
    {
        bundleName: '2GB+2mins Monthly Plan',
        bundleSummary: 'Get 2GB 2mins 2GB All Night Streaming 200MB Youtube Music for N1500 Valid for 30 days',
        validity: 30,
        addedData: 2000,
        price: 1500
    },
    {
        bundleName: '75MB Daily Plan',
        bundleSummary: 'Get 75MB for N75. Valid for 1 day',
        validity: 1,
        addedData: 75,
        price: 75
    },
    {
        bundleName: 'Betamix Bundle Max',
        bundleSummary: 'Get 100MB Data and 2 minutes for N100 (Only on BetaGist)',
        validity: 1,
        addedData: 100,
        price: 100
    },
    {
        bundleName: '110 MB Daily Plan',
        bundleSummary: 'Get 100MB for N100. Valid for 1 day',
        validity: 1,
        addedData: 100,
        price: 100
    },

]
