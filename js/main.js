// 1. Berilgan foydalanuvchi ismlari massividan eng uzun ismni toping.

function longestName(arr) {
    arr.sort((a, b) => b.length - a.length)
    return arr[0]
}

// console.log(longestName(["Alice", "Bob", "Christina", "Abdialimov", "David"])); // "Christina"




// 2. Berilgan qator ichidagi bir xil belgilarni olib tashlab, yangi qator hosil qiling.

function removeConsecutiveDuplicates(str) {
    let new_arr = []
    for (let i = 0; i < str.length; i++) {
        if (!new_arr.includes(str[i]))
            new_arr.push(str[i])
    }
    return new_arr.join("")
}

// console.log(removeConsecutiveDuplicates("aaabbbcccaaa")); // "abc"





3. Berilgan massivning elementlarini k qadamga o'ngga ko'chiring.



function rotateArray(arr, k) {
    let n = arr.length;
    k = k % n; 
    let newArr = [];

    for (let i = 0; i < n; i++) {
        newArr[(i + k) % n] = arr[i];
    }

    return newArr;
}

console.log(rotateArray([1, 2, 3, 4, 5], 2)); // [4, 5, 1, 2, 3]








3. Berilgan massivning elementlarini k qadamga o'ngga ko'chiring.

function rotateArray(arr, k) {
    for (let i = 1; i <= k; i++) {
        arr.unshift(arr.pop())
        console.log(i)

    }
    console.log(arr)
}

console.log(rotateArray([1, 2, 3, 4, 5], 2)); // [4, 5, 1, 2, 3]





// 4. Berilgan ikki o'lchamli massivni bitta tekis qatorga aylantiring.

// birinchi yechim

function flattenArray(arr) {
    let new_arr = [arr].join().split()
    console.log(new_arr)
}

// console.log(flattenArray([[1, 2], [3, 4], [5]])); // [1, 2, 3, 4, 5]


// ikkinchi yechim

function flattenArray(arr) {
    return arr.flat(Infinity)
}

// console.log(flattenArray([[1, 2], [3, 4], [5]])); // [1, 2, 3, 4, 5]




uchinchi yo'l

function flattenArray(arr) {
    let newarr = []
    arr.forEach(element => {
        newarr.push(...element)
    });
    console.log(newarr)
}
console.log(flattenArray([[1, 2], [3, 4], [5]])); // [1, 2, 3, 4, 5]






// 5. Berilgan son n uchun n x n ko'paytirish jadvali yaratish.


function multiplicationTable(n) {
    let new_array = [];
    for (let i = 1; i <= n; i++) {
        let res = [];
        for (let g = 1; g <= n; g++) {
            res.push(i * g);
        }
        new_array.push(res);
    }
    return new_array;
}
console.log(multiplicationTable(3));




// 6. Berilgan massivni ikkita teng qismga ajrating. Agar massivning uzunligi toq bo'lsa, markaziy elementni ikkinchi qismga qo'shing.
function splitArrayInHalf(arr) {
    let  l = Math.ceil(arr.length / 2)
    let b = arr.slice(l)
    let c = arr.slice(0,l)
    console.log([c, b])


}

console.log(splitArrayInHalf([1, 2, 3, 4, 5])); // [[1, 2, 3], [4, 5]]
// console.log(splitArrayInHalf([1, 2, 3, 4]));    // [[1, 2], [3, 4]]




// 7. Berilgan kvadrat matritsaning asosiy va yordamchi diagonallarini almashtiring.


function swapDiagonals(matrix) {
    // Code here
}

console.log(swapDiagonals([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]));
// [
//   [3, 2, 1],
//   [4, 5, 6],
//   [9, 8, 7]
// ]





8. Berilgan massivdagi barcha elementlarning eng katta umumiy bo'luvchisini toping.


function findGCD(arr) {
    let new_arr = arr.sort((a,b) => a - b)
    let small_num = new_arr[0]
    let small_num_arr = []
    // console.log(small_num)

    for (let i = 1; i <= small_num; i++) {
        if (small_num % i == 0) {
            small_num_arr.push(i)
        }
    }

    let smal_chopil = new_arr.splice(1)

    for (let s = 0; s  < smal; s++) {
        console.log(s)
    }
}

findGCD([24, 36, 48,12]); // 12







function findGCD(arr) {
    let index = arr.indexOf(min)
    for (let i = 1; i < array.length; i++) {
        if (min % i == 0) {
            new_arr.push(i)
        }
    }
    arr.splice(index,1)
    let result = []
    for (let i = 0; i < arr.length; i++) {
        for (let g = 0; g < new_arr.length; g++) {
            if () {

            }

        }

    }
}








41 function swapDiagonals(matrix) {
    let new_arr = []

    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 == 0) {
            new_arr.push(matrix[i].reverse())
        }else{
            new_arr.push(matrix[i])
        }

    }
    console.log(new_arr)
}

console.log(swapDiagonals([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]));
// [
//   [3, 2, 1],
//   [4, 5, 6],
//   [9, 8, 7]
// ]



