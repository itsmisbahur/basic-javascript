

// Kilometer to Meter conveter
function kilometerToMeter(userKilometer) {
    // 1 kilometer equal 1000 meter
    const meter = 1000;

    if(userKilometer > 0) {
        const result = userKilometer * meter;
        return result;
    }
    else {
        return "Input value not valid"
    }
}


// Budget Calculator for Watch, Mobile and Laptop
function budgetCalculator(watch, mobile, laptop) {
    // Specific product price
    const watchPrice = 50;
    const mobilePrice = 100;
    const laptopPrice = 500;

    // Product based total calculation
    const watchTotal = watchPrice * watch;
    const mobileTotal = mobilePrice * mobile;
    const laptopTotal = laptopPrice * laptop;

    // All product calculation
    if(watch >= 0 && mobile >= 0 && laptop >= 0) {
        const totalPrice = watchTotal + mobileTotal + laptopTotal;
        return totalPrice;
    } else {
        return "Product input value not valid"
    }
}


// Hotel Cost Calculation with Multiple Offer
function hotelCost(duration) {
    // hotel costing list with discount price
    const dailyCost = 100;
    const discountPrice = 80;
    const megaPrice = 50;

    // hotel costing calculation variable
    let regularCost;
    let discountCost;
    let megaCost;

    if (duration > 0 && duration <= 10) {
        regularCost = duration * dailyCost;
        return regularCost
    } else if (duration > 10 && duration <= 20) {
        regularCost = 10 * dailyCost;
        discountCost = (duration - 10) * discountPrice;

        const totalCost = regularCost + discountCost;
        return totalCost;
    } else if (duration > 20){
        regularCost = 10 * dailyCost;
        discountCost = 10 * discountPrice;
        megaCost = (duration - 20) * megaPrice

        const totalCost = regularCost + discountCost + megaCost;
        return totalCost;
    } else {
        return "Wrong Input Value"
    }
}

var output = hotelCost(-3);
console.log(output)

//Largest name selector
function megaFriend(nameArrow) {
    let largeName = "";
    for(var i = 0; i < nameArrow.length; i++) {
        if(largeName.length < nameArrow[i].length){
            largeName = nameArrow[i];
        }
    }
    return largeName;
}