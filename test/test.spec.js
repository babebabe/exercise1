var assert = require('assert')

describe('Array', function() {
  describe('#indexOf()', function() {
    test('当value不在数组中应当返回-1', function() {
      assert.equal(-1, [1, 2, 3].includes(10)? 1: -1)
    })
  })
})

describe('assert', function () {
  test('a和b应当深度相等', function () {
    var a = {
      c: {
        e: 1
      }
    }
    var b = {
      c: {
        e: 1
      }
    }
    // 修改下面代码使得满足测试描述
    assert.deepEqual(a, b)
  })

  test('可以捕获并验证函数fn的错误', function () {
    function fn() {
      xxx;
    }
    // 修改下面代码使得满足测试描述
    assert.throws(
      ()=>{
        throw fn();
      },
      (err)=>{
        assert(err instanceof ReferenceError)
        return true;
      },
      'unexpected error'
    );
  })
})