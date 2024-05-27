let OneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87,
}

test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
});

test("One dollar should be 146.26 Yens", function() {
    // Import the function from app.js
    const { fromDollarToYen } = require('./app.js');

    const Yens = fromDollarToYen(3.5);

    // If 1 dollar is 146.26 yens, then 3.5 dollars is 511.91 yens
    const expected = 3.5 * 146.26; 
    
    // This is the comparison for the unit test
     expect(fromDollarToYen(3.5)).toBe(511.90999999999997);
});

test("One Yen should be 0.005 Pounds", function() {
    // Import the function from app.js
    const { fromYenToPound } = require('./app.js');

    const Yens = fromYenToPound(3.5);

    // If 1 dollar is 146.26 yens, then 3.5 dollars is 511.91 yens
    const expected = 3.5 / 195.62; 
    
    // This is the comparison for the unit test
    expect(fromYenToPound(3.5)).toBe(0.017891373801916934);
});
