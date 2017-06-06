'use strict';

describe("pow", function() {
    
    describe("raises x to the power n", function(){ 
        it("2 raised to power 3 is 8", function() {
            assert.equal(pow(2, 3), 8);
        });

        it("3 raised to power 3 is 27", function() {
            assert.equal(pow(3,3), 27);
        });

        function makeTest(x) {
            let expected = x ** 3;
            it(`${x} raised to power 3 is ${expected}`, function() {
                assert.equal(pow(x, 3), expected);
            });
        }

        for(let x = 5; x <= 10; x++) {
            makeTest(x);
        }
    });

    it("for negative n the result is NaN", function() {
        assert.isNaN(pow(2, -1));
    });

    it("for non-integer n the result is NaN", function() {
        assert.isNaN(pow(2, 1.5));
    });
});