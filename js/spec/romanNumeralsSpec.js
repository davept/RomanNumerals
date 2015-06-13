describe("RomanNumerals", function() {

  it("romanize(1) == I", function () {
      expect(romanNumerals.romanize(1)).toEqual('I');
  });

  it("deromanize('I') == 1", function () {
      expect(romanNumerals.deromanize('I')).toEqual(1);
  });

  it("romanize(2000) == MM", function () {
      expect(romanNumerals.romanize(2000)).toEqual('MM');
  });

  it("deromanize('MM') == 2000", function () {
      expect(romanNumerals.deromanize('MM')).toEqual(2000);
  });

  it("romanize(1904) == MCMIV", function () {
      expect(romanNumerals.romanize(1904)).toEqual('MCMIV');
  });

  it("deromanize('MCMIV') == 1904", function () {
      expect(romanNumerals.deromanize('MCMIV')).toEqual(1904);
  });

  describe('Test Range of Values', function () {

      var testData = [
           { d: 'I', n: 1 },
           { d: 'II', n: 2 },
           { d: 'III', n: 3 },
           { d: 'IV', n: 4 },
           { d: 'V', n: 5 },
           { d: 'VI', n: 6 },
           { d: 'VII', n: 7 },
           { d: 'VIII', n: 8 },
           { d: 'IX', n: 9 },
           { d: 'X', n: 10 },
           { d: 'XI', n: 11 },
           { d: 'XII', n: 12 },
           { d: 'XIII', n: 13 },
           { d: 'XIV', n: 14 },
           { d: 'XV', n: 15 },
           { d: 'XVI', n: 16 },
           { d: 'XVII', n: 17 },
           { d: 'XVIII', n: 18 },
           { d: 'XIX', n: 19 },
           { d: 'XX', n: 20 },
           { d: 'XXX', n: 30 },
           { d: 'XL', n: 40 },
           { d: 'L', n: 50 },
           { d: 'LX', n: 60 },
           { d: 'LXX', n: 70 },
           { d: 'LXXX', n: 80 },
           { d: 'XC', n: 90 },
           { d: 'C', n: 100 },
           { d: 'CC', n: 200 },
           { d: 'CCC', n: 300 },
           { d: 'CD', n: 400 },
           { d: 'D', n: 500 },
           { d: 'DC', n: 600 },
           { d: 'DCC', n: 700 },
           { d: 'DCCC', n: 800 },
           { d: 'CM', n: 900 },
           { d: 'M', n: 1000 },
           { d: 'MMMCMXLVII', n: 3947 }
      ];

      function test_deromanize(numerals, number) {
          it('deromanize(' + numerals + ') === ' + number, function () {
              expect(romanNumerals.deromanize(numerals)).toEqual(number);
          });
      }

      function test_romanize(number, numerals) {
          it('romanize(' + number + ') === ' + numerals, function () {
              expect(romanNumerals.romanize(number)).toEqual(numerals);
          });
      }

      for (var i = 0, testData_len = testData.length; i < testData_len; ++i) {
          test_romanize(testData[i].n, testData[i].d);
          test_deromanize(testData[i].d, testData[i].n);
      }
  });
});