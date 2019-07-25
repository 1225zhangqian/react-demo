import React, { Component } from 'react'

class Algorithm extends Component {
  state = {
    result: '',
    result2: '',
    result3: ''
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
      default: return;
    }


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
      <p>arr=[1,3,2,8,5,6,1,4,5]</p>
      <button onClick={() => this.getResultHandler(3, [1, 2, 3, 4, 5, 6, 7, 8, 9])}>result</button>
      <p>{this.state.result3}</p>
    </div>
  }
}


export default Algorithm
