var assert = require("assert"); // node.js core module
var C = require('../cash.js'); 
/*describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(4)); // 4 is not present in this array so indexOf returns -1
	  var coins = [5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 5, 2, 1]
    })
  })
});*/



describe('Cash Register', function(){
  describe('Module C', function(){
    it('should have a getChange Method', function(){
      assert.equal(typeof C, 'object');
      assert.equal(typeof C.getChange, 'function');
    })
  })
});