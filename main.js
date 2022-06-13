// easy - 1
const twoSum = function(nums, target) {
    const obj = {}
  
    for (let i = 0; i < nums.length; i++) {
      const diff = target - nums[i]
      if (diff in obj) {
        return [obj[diff], i]
      } else {
        obj[nums[i]] = i
      }
    }
  
    return []
  }
  
  // use Map()
  const twoSum1 = function(nums, target) {
    const m = new Map()
    let res = []
    nums.forEach((item, idx) => {
      const diff = target - item
  
      if (m.has(diff)) {
        res = [m.get(diff), idx]
      }
  
      m.set(item, idx)
    })
  
    return res
  }
  // medium - 2
  function ListNode(val) {
    this.val = val
    this.next = null
  }
  
  const addTwoNumbers = (l1, l2) => {
    let current = new ListNode(0)
    const resultList = current
    let sum
    let carry = 0
    let idx = 0
    while (l1 || l2 || carry > 0) {
      idx += 1
      console.log(idx)
      sum = 0
  
      if (l1 !== null) {
        sum += l1.val
        l1 = l1.next
      }
  
      if (l2 !== null) {
        sum += l2.val
        l2 = l2.next
      }
  
      sum += carry
      current.next = new ListNode(sum % 10)
      current = current.next
  
      carry = sum > 9 ? 1 : 0
    }
  
    return resultList.next
  }
  // medium 3
  const lengthOfLongestSubstring = function(s) {
    let substring = new Set()
    let maxCount = 0
    let start = 0
  
    for (let i = start; i < s.length; i++) {
      if (substring.has(s[i])) {
        substring = new Set()
        start++
        i = start - 1
      } else {
        substring.add(s[i])
      }
  
      maxCount = Math.max(maxCount, substring.size)
    }
  
    return maxCount
  }
  // hard 4
  const findMedianSortedArrays = function(nums1, nums2) {
    const all = [...nums1, ...nums2]
    all.sort((a, b) => a - b)
  
    if (all.length % 2 !== 0) {
      return all[Math.ceil(all.length / 2 - 1)]
    }
  
    return (all[all.length / 2 - 1] + all[all.length / 2]) / 2
  }
  
  // medium 5
  const longestPalindrome = function(s) {
    let res = ''
    let longRes = 0
    for (let i = 0; i < s.length; i++) {
      let r = i
      let l = i
      while (l >= 0 && r < s.length && s[l] === s[r]) {
        if (r - l + 1 > longRes) {
          res = s.substring(l, r + 1)
          longRes = r - l + 1
        }
        l--
        r++
      }
      ;(r = i), (l = i + 1)
      while (l >= 0 && r < s.length && s[l] === s[r]) {
        if (r - l + 1 > longRes) {
          longRes = r - l + 1
          res = s.substring(l, r + 1)
        }
        l--
        r++
      }
    }
    return res
  }
  
  // medium 6 - so telent
  const zigzagConversion = function(s, numRows) {
    const layers = new Array(numRows).fill('')
    let count = 0
  
    while (count < s.length) {
      for (let i = 0; i < numRows; i++) {
        if (count >= s.length) break
        layers[i] += s[count]
        console.log(layers)
        count++
      }
      for (let i = numRows - 2; i > 0; i--) {
        if (count >= s.length) break
        layers[i] += s[count]
        console.log(layers)
        count++
      }
    }
    return layers.join('')
  }
  // medium 7
  const reverse = function(x) {
    let s = x.toString().split('')
    let ans = ''
  
    if (s[0] === '-') {
      ans = s[0]
      s = s.slice(1)
    }
  
    for (let i = s.length - 1; i >= 0; i--) {
      ans += s[i]
    }
  
    if (ans[0] === '0') {
      return ans.slice(1)
    }
  
    if (ans > 2147483647 || ans < -2147483648) return 0
  
    return ans
  }
  
  // medium 8
  
  const myAtoi = function(s) {
    s = s.trim()
    let ans = '0'
    let isPostive = 1
  
    if (s[0] === '-' || s[0] === '+') {
      s[0] === '-' ? (isPostive = -1) : null
      s = s.slice(1)
    }
  
    for (let i = 0; i < s.length; i++) {
      if (47 > s.charCodeAt(i) || s.charCodeAt(i) > 58) {
        break
      }
  
      ans += s[i]
    }
  
    ans = parseInt(ans) * isPostive
  
    const MAX_NUM = Math.pow(2, 31) - 1
    const MIN_NUM = -1 * Math.pow(2, 31)
  
    if (ans > 0 && ans > MAX_NUM) return MAX_NUM
    if (ans < 0 && ans < MIN_NUM) return MIN_NUM
  
    return ans
  }
  
  // easy 9
  const isPalindrome = function(x) {
    return x.toString() === x.toString().split('').reverse().join('')
  }
  
  // medium 11
  const maxArea = function(height) {
    let MaxArea = 0
    let left = 0
    let right = height.length - 1
  
    while (left < right) {
      const l = right - left
      const h = Math.min(height[left], height[right])
      MaxArea = Math.max(l * h, MaxArea)
      if (height[left] > height[right]) {
        right--
      } else {
        left++
      }
    }
    return MaxArea
  }
  // medium 12
  const mapper = [
    {
      decimal: 1000,
      roman: 'M',
    },
    {
      decimal: 900,
      roman: 'CM',
    },
    {
      decimal: 500,
      roman: 'D',
    },
    {
      decimal: 400,
      roman: 'CD',
    },
    {
      decimal: 100,
      roman: 'C',
    },
    {
      decimal: 90,
      roman: 'XC',
    },
    {
      decimal: 50,
      roman: 'L',
    },
    {
      decimal: 40,
      roman: 'XL',
    },
    {
      decimal: 10,
      roman: 'X',
    },
    {decimal: 9, roman: 'IX'},
    {
      decimal: 5,
      roman: 'V',
    },
    {
      decimal: 4,
      roman: 'IV',
    },
    {
      decimal: 1,
      roman: 'I',
    },
  ]
  
  const intToRoman = function(num) {
    if(num > 9999){
      return 'un support' 
    }
  
    let romanString = ''
  
    while (num > 0) {
      const romanObj = mapper.find((i) => i.decimal <= num)
      romanString += romanObj.roman
      num -= romanObj.decimal
    }
    return romanString
  }
  // medium - 15
  var threeSum = function(nums) {
      nums.sort((a,b)=>a-b)
  
      let ans = {}
      for(let s = 0;s<nums.length-2;s++){
        let p = s+1
        let e = nums.length-1
        while(p<e){
          let amount = nums[s] + nums[p] + nums[e]
  
          if(amount === 0){
            ans[`${nums[s]} ${nums[p]} ${nums[e]}`] = ([nums[s],nums[p],nums[e]])
          }
  
          if(amount < 0) p+=1
          else{ e -=1 }
        }      
      }
  
      return Object.values(ans)
  };
  
  console.log(threeSum([-1,0,1,2,-1,-4]))
  // easy 20
  const isValid = function(s) {
    const stack = []
    let current = ''
    let top = ''
  
    for (let i = 0; i < s.length; i++) {
      current = s[i]
      top = stack[stack.length - 1]
  
      if (
        (current === '}' && top === '{') ||
        (current === ')' && top === '(') ||
        (current === ']' && top === '[')
      ) {
        stack.pop()
      } else {
        stack.push(current)
      }
    }
  
    return stack.length === 0
  }
  // easy 35
  
  // easy - 905
  const sortArrayByParity = function(nums) {
    for (let left = 0, right = nums.length - 1; left < right; ) {
      while (left < right && nums[left] % 2 == 0) {
        console.log('l: ' + left)
        left++
      }
  
      while (left < right && nums[right] % 2 != 0) {
        console.log('r: ' + right)
        right--
      }
  
      ;[nums[left], nums[right]] = [nums[right], nums[left]]
    }
  
    return nums
  }
  // easy 206
  const reverseList = function(head) {
    if (!head || !head.next) return head
  
    let prev = null
    while (head) {
      next = head.next
      head.next = prev
      prev = head
      head = next
    }
    return prev
  }
  
  // easy 217
  
  const containsDuplicate = function(nums) {
    return new Set(nums).size !== nums.length
  }
  
  // easy 509
  var fib = function(n, cache = []) {
    if (cache[n]) return cache[n]
  
    cache[n] = n < 2 ? n : fib(n - 1, cache) + fib(n - 2, cache)
  
    return cache[n]
  }
  
  // easy 804
  const alphabet = {
    a: '.-',
    b: '-...',
    c: '-.-.',
    d: '-..',
    e: '.',
    f: '..-.',
    g: '--.',
    h: '....',
    i: '..',
    j: '.---',
    k: '-.-',
    l: '.-..',
    m: '--',
    n: '-.',
    o: '---',
    p: '.--.',
    q: '--.-',
    r: '.-.',
    s: '...',
    t: '-',
    u: '..-',
    v: '...-',
    w: '.--',
    x: '-..-',
    y: '-.--',
    z: '--..',
  }
  
  const uniqueMorseRepresentations = function(words) {
    return new Set(
        words.map((word) => {
          return word
              .split('')
              .map((letter) => alphabet[letter])
              .join('')
        }),
    ).size
  }
  // easy - 1064
  
  // console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]))
  