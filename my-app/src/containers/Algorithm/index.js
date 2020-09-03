import React, { Component } from 'react'
// es5实现数组的map方法
// Array.prototype.MyMap = function (fn, context) {
//  运用silce转化类数组
//   var arr = Array.prototype.slice.call(this);
//   var mapperdArr = []
//   for (var i = 0; i < arr.length; i++) {
//     if (!arr.hasOwnProperty(i)) continue;
//     mapperdArr.push(fn.call(context, arr[i], this));
//     return mapperdArr
//   }
// }

// 有关this指向问题
function Person2() {
  this.name = '1';
  let that = this
  function setName() {
    that.name = 'b';
    console.log(that.name, that, this)
  }
  setName()
}
let a = new Person2()
console.log(a)
// Person2{name:'b'}

// 将字符串转化成数组
let mapFun = Array.prototype.map
a = mapFun.call('sfafasfassfafdf', function (i) { return i })
console.log(a)

// 用apply将数组各项添加到另一个数组
let arr = [1, 2, 3]
arr.push.apply(arr, [3, 4, 5])
console.log(arr)
class Algorithm extends Component {
  state = {
    result: '',
    result2: '',
    result3: '',
    result4: '',
    result5: ''
  }
  findDuplicateByHashMap = nums => {
    let ret = []
    const record = new Set()
    nums.forEach(i => {
      if (record.has(i)) {
        ret.push(i)
      }
      record.add(i)
    })
    console.log(record)
    return ret
  }
  // 思路很有意思，但是有bug； 二分法可以用递归和while遍历两种方式实现
  findDuplicateByBinary = nums => {
    debugger
    nums.sort()//遍历有序数组
    let start = 1
    let end = nums.length - 1
    while (start < end) {
      let mid = Math.floor(start + (end - start) / 2)
      let smllerNum = this.getSmallerNum(nums, nums[mid])
      // 首先需要遍历 nums 数组，获取不大于当前中间数的数字的个数；
      // 如果个数大于中间数，那么下一轮搜索区间落在左半区间；
      // 如果个数小于中间数，那么下一轮搜索区间落在右半区间；
      if (smllerNum > mid) {
        end = mid
      } else {
        start = mid + 1
      }
      console.log(nums[start])
    }
  }
  getSmallerNum = (num, target) => {
    let count = 0
    num.forEach(i => {
      if (i < target || i === target) {
        count++
      }
    })
    return count
  }
  // 判断是否为奇数
  isEven = num => num % 2 !== 0
  // 求二倍数
  double = num => num * 2
  // 求和
  add = (sum, num) => sum += num
  // 遍历数组求累加和
  magic = (sum, num) => {
    if (this.isEven(num)) {
      sum = this.add(sum, this.double(num))
    }
    return sum
  }

  // 比较两个对象是否相等y
  equalsObj = (x, y) => {
    // 指向同一内存时y
    let xType = x instanceof Object;
    let yType = y instanceof Object;
    if (!xType || !yType) {
      // 两个值不是对象，直接比较值是否相等
      return x === y
    }
    else if ((typeof x === "object" && x !== null) && (typeof y == "object" && y != null)) {
      if (Object.keys(x).length !== Object.keys(y).length)
        return false;
      for (var prop in x) {
        if (y.hasOwnProperty(prop)) {
          if (!this.equalsObj(x[prop], y[prop]))
            return false;
        }
        else
          return false;
      }
      return true;
    }
    else
      return false;
  }


  // 替换数组中相同的某个对象，并置顶
  changPositionIndex = (arr, obj) => {
    arr.filter(i => i !== obj)
    arr.unshift(obj)
  }

  // 实现对象的深度拷贝

  getResultHandler = (type, arr) => {
    switch (type) {
      case 1:
        let result = this.findDuplicateByHashMap(arr)
        this.setState({ result })
        break;
      case 2:
        let result2 = this.findDuplicateByBinary(arr)
        this.setState({ result2 })
        break;
      case 3:
        let result3 = arr.reduce((sum, num) => this.magic(sum, num), 0)
        // let result3 = arr.reduce((sum, num) => this.isEven(num) ? this.add(sum, this.double(num)) : sum, 0)
        this.setState({ result3 })
        break;
      case 4:
        let result4 = this.missingNumber(arr)
        this.setState({ result4 })
        break;
      case 5:
        let result5 = this.sortArray(arr)
        this.setState({ result5 })
        break;
      default: return;
    }
  }
  missingNumber = (nums) => {
    let missingNumber = -1
    for (let i = 0; i <= nums.length; i++) {
      if (nums[i] !== i) {
        missingNumber = i
        break;
      }
    }
    return missingNumber === -1 ? nums.length : missingNumber
  };
  sortArray = (nums) => {
    // 按行按列排序
    let arr = nums.map(i => i.sort((c, d) => c - d))
      .sort((a, b) => {
        let length = a.length > b.length ? b.length : a.length
        let flag = 0
        for (let i = 0; i < length; i++) {
          if (a[i] - b[i] !== 0) {
            flag = a[i] - b[i]
            return flag
          }
        }
        return flag
      })
    console.log(arr)
    return arr.join(',')
  }
  sortArrayEntries = (nums) => {
    // 用entries实现

  }
  render() {
    return <div>
      <a href='https://juejin.im/entry/5d1bfc146fb9a07edf275f48?utm_source=gold_browser_extension'>一组有关算法的练习</a>
      <h3>寻找重复数组</h3>
      <p>1.HashMap</p>
      <p>arr=[1,3,2,4,2,3,1,4,5]</p>
      <button onClick={() => this.getResultHandler(1, [1, 3, 2, 4, 2, 3, 1, 4, 5])}>result</button>
      <p>{this.state.result}</p>
      <p>2.Binary Search</p>
      <p>arr=[1,3,2,8,5,6,1,4,5]</p>
      <button onClick={() => this.getResultHandler(2, [1, 3, 2, 8, 5, 6, 1, 4, 5])}>result</button>
      <p>{this.state.result2}</p>
      <p>2.filter map reduce</p>
      <p>求数组中的奇数的2倍数累加和</p>
      <p>arr=[1, 2, 3, 4, 5, 6, 7, 8, 9]</p>
      <button onClick={() => this.getResultHandler(3, [1, 2, 3, 4, 5, 6, 7, 8, 9])}>result</button>
      <p>{this.state.result3}</p>
      <p>一个长度为n-1的递增排序数组中的所有数字都是唯一的，并且每个数字都在范围0～n-1之内。在范围0～n-1内的n个数字中有且只有一个数字不在该数组中，请找出这个数字。</p>
      <p>[0,1,3]</p>
      <button onClick={() => this.getResultHandler(4, [0, 1, 3])}>result</button>
      <p>{this.state.result4}</p>
      <p>二维数组按行排序</p>
      <p>var arr = [[1,34],[456,2,3,44,234],[4567,1,4,5,6],[34,78,23,1]];</p>
      <button onClick={() => this.getResultHandler(5, [[1, 34], [456, 2, 3, 44, 234], [4567, 1, 4, 5, 6], [34, 78, 23, 1]])}>result</button>
      <p>{this.state.result5}</p>
      <p>深度遍历比较对象的值{`obj= {a:{b:1 , c:2}} obj2= {a:{b:1 , c:2}}`} </p>
      <button onClick={() => this.equalsObj({ a: { b: 1, c: 2 } }, { a: { b: 1, c: 2 } })}>result</button>

    </div >
  }
}


export default Algorithm
