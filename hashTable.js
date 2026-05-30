// hash table
// hanshing
// hash function
// collision
// solutions : 
//  1. Chaining (open hashing)
//  2. Open Addressing (closed hashing)
//    - Linear probing
//    - Quadratic probing
//    - Double hashing

// Load factor
// Rehashing - what, when


//Application
// 1. O(1) adding, deleting and searching
// 2. Database indexing
// 3. Caching and memoization


    // Array vs hashtable

    // | Data Structure | Definition                                         |
    // | -------------- | -------------------------------------------------- |
    // | Array          | Stores elements in contiguous memory using indexes |
    // | Hash Table     | Stores data as key → value pairs using hashing     |


    // | Feature         | Array        | Hash Table  |
    // | --------------- | ------------ | ----------- |
    // | Storage         | Sequential   | Key-value   |
    // | Access          | By index     | By key      |
    // | Search          | O(n)         | O(1) avg    |
    // | Ordering        | Ordered      | Unordered   |
    // | Memory          | Efficient    | More usage  |
    // | Collision issue | No           | Yes         |
    // | Best use        | Ordered data | Fast lookup |



    // properties of a good hash function:
    //  - deterministic
    //  - fast to compute
    //  - uniform distribution
    //  - minimize collisions

// Why cryptographic hash functions are a bad fit for hash tables?
// They are designed for SECURITY,
// not SPEED.

// Hash tables need:

// extremely fast hashing
// simple computation
// quick insert/search/delete

// Cryptographic hashes are:

// slower
// computationally expensive
// unnecessary for normal hash table operations


// Minimal Perfect Hash Functions (MPHF)
// A collision-free hash function that maps n keys into exactly n slots.

// This is an advanced hashing concept often used in:

// compilers
// databases
// keyword lookup
// search engines
// networking systems



// What is a Hash Map?

// A Hash Map is usually:

// A practical implementation of a hash table.

// It provides:

// APIs/methods
// dynamic resizing
// key-value operations




const hash = {};
hash['name'] = 'Noora';
console.log(hash['name']);


//Remove Duplicates from String Using Hash Table
function removeDuplicates(str){
  const seen = {};
  let res = '';

  for(let char of str){
    if(!seen[char]){
      seen[char] = true;
      res += char;
    }
  }
  return res;
}

console.log(removeDuplicates('programming'));


//Find Elements with Second Least Frequency
function secondLeastFrequent(arr){
  const freq = {};
  for(let n of arr){
    freq[n] = (freq[n] || 0) + 1;
  }

  const uniqueFrequencies = [...new Set(Object.values(freq))];
  const sorted = uniqueFrequencies.sort((a,b) => a - b);

  if(sorted.length < 2) return [];

  let secondLeast = sorted[1];
  let res = [];

  for(let key in freq){
    if(freq[key] === secondLeast){
      res.push(Number(key))
    }
  }
  return res;
}
console.log(secondLeastFrequent([1,1,2,2,2,3,3,4]));




//First Non-Repeating Character Using Hash Table
function firstNonRepeating(str){
  const freq = {}
  for(let char of str){
    freq[char] = (freq[char] || 0) + 1
  }

  for(let char of str){
    if(freq[char] === 1){
      return char;
    }
  }
  return null;
}

console.log(firstNonRepeating("aabbcdde"));