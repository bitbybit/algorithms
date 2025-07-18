# BasicJS

### **Count cats!**

![Count cats!](https://i.imgur.com/fK1LS0B.png)  
Your task is to count the cats hidden in the backyard (presented by two-dimensional `Array`). Cats hide well, but their **ears** (`"^^"`) are clearly visible. Your task is to implement the `countCats(backyard)` function that will count cats. Good luck!

Number of cats found should be `number`. If no cats found, function should return `0`.

For example:

`countCats([
    [0, 1, '^^'],
    [0, '^^', 2],
    ['^^', 1, 2]
  ])` => `3`

Write your code in `src/count_cats.js`.

---

### **Carbon dating**

![Carbon dating](https://earthhow.com/wp-content/uploads/2018/12/Carbon-Dating-678x378.png)  
To determine the age of archaeological finds, **radioisotope dating** is widely used. One of its types is **radiocarbon dating**.

The approximate age of the sample is calculated by measuring the **ratio** of the **modern** activity of the C14 isotope to the activity of the same isotope in the **sample**.

[Read about method](https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Supplemental_Modules_(Physical_and_Theoretical_Chemistry)/Nuclear_Chemistry/Nuclear_Kinetics/Half-Lives_and_Radioactive_Decay_Kinetics#section_2)

[Reserved link](https://web.archive.org/web/20230522040038/https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Supplemental_Modules_%28Physical_and_Theoretical_Chemistry%29/Nuclear_Chemistry/Nuclear_Kinetics/Half-Lives_and_Radioactive_Decay_Kinetics#section_2)

---
<details>

  <summary>About calculations</summary>
  You can use the formula from the article at the link above. 0.693 is an approximation of the natural logarithm of two.

</details>

---

Your task is to implement the function `dateSample(sampleActivity)` that calculates sample approximate age (in years). Please use given `MODERN_ACTIVITY` and `HALF_LIFE_PERIOD`.

Function parameter `sampleActivity` is a `string`. Calculated sample age must be `number`.

Age must be **integer**. Age must be **rounded up** (ceiling). In case of wrong input parameter **type** or **inadequate** activity value or **absence** of argument function must return `false`.

For example:

`dateSample('1')` => `22387` (or `22392` depending on formula used)

`dateSample('WOOT!')` => `false`

Write your code in `src/carbon_dating.js`.

---

### **Dream team**

![Dream team](https://i0.wp.com/www.comicsbeat.com/wp-content/uploads/2021/05/power-rangers.jpg?fit=1420,945&ssl=1)  
Imagine you and your friends decide to create a **dream team**. This team should have a cool secret name that contains encrypted information about it. For example, these may be the **first letters** of the names of its members in **upper case** **sorted alphabetically**.
Your task is to implement the `createDreamTeam(members)` function that returns name of a newly made team (`string`) based on the names of its members (`Array`). Good luck!

Names of the members should be `strings`. Values with other **type** should be **ignored**. In case of wrong `members` **type** function must return `false`.

NB! Team member name may contain **whitespaces**.

For example:

`createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max'])` => `'ADMM'`

`createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null])` => `'LOO'`

Write your code in `src/dream_team.js`.

---

### **What season?**

![What season](https://images.twinkl.co.uk/tw1n/image/private/t_630_eco/image_repo/83/d2/T-T-224-four-seasons-posters-a4_ver_2.avif)  
Your task is to implement the function `getSeason(date)` that accepts `Date` object and returns the time of the year that matches it.
Time of the year must be `string`.

---
<details>

<summary>Seasons in English</summary>
The names of the seasons in English are: spring, summer, autumn (fall), winter.

</details>

---

If the `date` argument was not passed, the function must return the `string` `'Unable to determine the time of year!'`. If the `date` argument is **invalid**, the function must throw an `Error` with message `Invalid date!`.

Shh! An enemy scout has lurked among the arguments that come into this function.

![Disguised](https://www.famousbirthdays.com/faces/disguised-toast-image.jpg)  
He is guided by the famous proverb: “If it looks like a **duck**, swims like a **duck** and quacks like a **duck**, then it probably is a **duck** (who cares what it **really** is)”. He is **expertly disguised** as a real date, but a clever javascript developer can catch him and `throw` an `Error` with message `Invalid date!` just in time!

For example:

`const springDate = new Date(2020, 02, 31)`

`getSeason(springDate)` => `'spring'`

Write your code in `src/what_season.js`.

---

### **Tower of Hanoi**

![Tower of hanoi visualisation](https://ioecapsule.com/wp-content/uploads/2019/08/tower_of_hanoi_3_disks.gif)  
[Tower of Hanoi](https://www.britannica.com/topic/Tower-of-Hanoi) is famous mathematical puzzle of the 18th century.
It consists of three rods and a number of disks of different sizes, which can slide onto any rod. The puzzle starts with the disks in a neat stack in ascending order of size on one rod, the smallest at the top, thus making a conical shape.

The objective of the puzzle is to move the entire stack to another rod, obeying the following simple **rules**:
* Only **one** disk can be moved at a time.
* Each move consists of taking the **upper** disk from one of the stacks and placing it on **top** of another stack or on an empty rod.
* No **larger** disk may be placed on top of a **smaller** disk.

Your task is much easier than coming up with an algorithm that solves this puzzle :)

Implement the function `calculateHanoi` that accepts `diskNumber` and `turnsSpeed` parameters. `diskNumber` is a number of **disks** and `turnsSpeed` is the speed of moving discs (in **turns** per **hour**).
Both parameters are `numbers`.

`calculateHanoi` function returns an object with 2 properties:
* `turns` (minimum `number` of turns to solve the puzzle)
* `seconds` (minimum `number` of **seconds** to solve the puzzle at a given `turnsSpeed`, seconds must be an integer, obtained  from **rounded down** (floor) calculation result)

You don't need to validate parameters.

For example:

`calculateHanoi(9, 4308)` => `{ turns: 511, seconds: 427 }`

Write your code in `src/hanoi_tower.js`.

---

### **Transform array**

![Transform array](https://www.capturehighered.com/wp-content/uploads/2019/02/The-Call-720x332.jpg)  
Your task is to implement the function `transform(arr)` that takes an `array` and returns **transformed** array, based on the **control sequences** that `arr` contains.
**Control sequences** are defined `string` elements of the mentioned `array`:
* `--discard-next` excludes the next element of the array from the transformed array.
* `--discard-prev` excludes the previous element of the array from the transformed array.
* `--double-next` duplicates the next element of the array in the transformed array.
* `--double-prev` duplicates the previous element of the array in the transformed array.

For example:

`transform([1, 2, 3, '--double-next', 4, 5])` => `[1, 2, 3, 4, 4, 5]`

`transform([1, 2, 3, '--discard-prev', 4, 5])` => `[1, 2, 4, 5]`

The function must not affect inital array. Control sequences are applied **from left to right** to initial array elements. Control sequences **do not fall** into the transformed array. Control sequences in initial array don't occur in a row. If there is **no element** next to the control sequence **to which it can be applied** in the initial array, or this element was previously deleted, **it does nothing**. The function should throw an `Error` with message `'arr' parameter must be an instance of the Array!` if the `arr` is not an `Array`.

Write your code in `src/transform_array.js`.

---

### **Chain maker**

![Chaining](https://www.sdxcentral.com/cdn-cgi/image/w=748,h=374,fit=scale-down,f=auto,q=30/https://www.sdxcentral.com/wp-content/uploads/2018/08/Why-Problems-With-Service-Chaining-Are-Stalling-NFV.jpg)  
Let's practice in [chaining](https://en.wikipedia.org/wiki/Method_chaining)!

Your task is to create the object `chainMaker` that creates chains. The finished chain is a `string` and looks like this: `'( value1 )~~( value2 )~~( value3 )'`.
The `chainMaker` has several **methods** for creating chains and modifying them:
* `getLength` returns the current chain length as a number;
* `addLink(value)` adds a link containing a `string` representation of the `value` to the chain;
* `removeLink(position)` removes a chain link in the specified position;
* `reverseChain` reverses the chain;
* `finishChain` ends the chain and `returns` it.

`addLink`, `reverseChain` and `removeLink` methods are **chainable**, while the another ones are not. If `addLink` is called with no arguments, it adds an empty link (`'(  )'`) to the chain. If `removeLink` accepts **invalid** `position` (e.g. not a number, or a fractional number, or corresponding to a nonexistent link), it must throw an `Error` with message `You can't remove incorrect link!`. After calling the `finishChain` method, the existing chain must be deleted, as if an `Error` was thrown.

For example:

`chainMaker.addLink(1).addLink(2).addLink(3).finishChain()` => `'( 1 )~~( 2 )~~( 3 )'`

`chainMaker.addLink(1).addLink(2).removeLink(1).addLink(3).finishChain()` => `'( 2 )~~( 3 )'`

`chainMaker.addLink(1).addLink(2).reverseChain().addLink(3).finishChain()` => `'( 2 )~~( 1 )~~( 3 )'`

Write your code in `src/simple_chain.js`.

---

### **Recursive depth calculator**

![Go deeper](https://i.imgur.com/k7lADiM.jpg)  
Your task is to implement the class `DepthCalculator` with method `calculateDepth` that takes an `array` and returns its depth.

`calculateDepth` method must pass the given array **recursively**. Depth of a **flat** array is 1. Method must correctly work with `arrays` that contain no elements or contain empty `arrays`.

For example:

`const depthCalc = new DepthCalculator();`

`depthCalc.calculateDepth([1, 2, 3, 4, 5])` => `1`

`depthCalc.calculateDepth([1, 2, 3, [4, 5]])` => `2`

`depthCalc.calculateDepth([[[]]])` => `3`

Write your code in `src/recursive_depth.js`.

---
### **Extended repeater**

![Extended repater](https://upload.wikimedia.org/wikipedia/commons/4/4b/Macaws_at_Jurong_Bird_Park_-Singapore-8.jpg)  
Your task is to implement the function `repeater(str, options)`.
This function returns a repeating `string` based on the given parameters:
* `str` is a `string` to repeat;
* `options` is an `object` of options, that contains properties:
  * `repeatTimes` sets the `number` of repetitions of the `str`;
  * `separator` is a `string` separating repetitions of the `str`;
  * `addition` is an additional `string` that will be added to each repetition of the `str`;
  * `additionRepeatTimes` sets the `number` of repetitions of the `addition`;
  * `additionSeparator` is a `string` separating repetitions of the `addition`.

The `str` and `addition` parameters are `strings` by default. In case when **type** of these parameters is different, they must be converted to a `string`.

`separator` and `additionSeparator` parameters are `strings`. 

`repeatTimes` and `additionRepeatTimes` are integer `numbers` (in the absence of any of them, the corresponding string is not repeated).

The only indispensable parameter is `str`, any others may be not defined. `separator` default value is `'+'`. `additionSeparator` default value is `'|'`.

For example: `repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })` => `'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'`

Write your code in `src/extended_repeater.js`.

---

### **Vigenere cipher**

![Ciphering machine](https://live.staticflickr.com/1931/44960892745_471bee66bb_b.jpg)  
Cryptography is awesome! Let's try to organize production of encryption machines. Our machines will use one of the encryption methods that are easy to understand, but also not amenable to simple cryptanalysis - the [**Vigenere cipher**](https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher).

Our machine will have 2 modifications: **direct** and **reverse** (the type of machine is determined at the moment of creation). The **direct** machine simply encodes and decodes the string that was transmitted to it, and the **reverse** machine returns an **inverted** string after encoding and decoding.

Your task is to implement the class `VigenereCipheringMachine`. `constructor` of this `class` accepts `true` (**or nothing**) to create **direct** machine and `false` to create **reverse** machine.
Each instance of `VigenereCipheringMachine` must have 2 methods: `encrypt` and `decrypt`. 

`encrypt` method accepts 2 parameters: `message` (`string` to encode) and `key` (`string`-keyword).

`decrypt` method accepts 2 parameters: `encryptedMessage` (`string` to decode) and `key` (`string`-keyword).

These parameters for both methods are **mandatory**. If at least one of them has not been given, an `Error` with message `Incorrect arguments!` must be thrown. The text returned by these methods must be **uppercase**. Machines encrypt and decrypt **only latin alphabet** (all other symbols remain unchanged).

You don't need to validate value sent to `constructor` and to `encrypt` and `decrypt` methods (except throwing an `Error` on absence of argument for these methods).

For example:

`const directMachine = new VigenereCipheringMachine();`

`const reverseMachine = new VigenereCipheringMachine(false);`

`directMachine.encrypt('attack at dawn!', 'alphonse')` => `'AEIHQX SX DLLU!'`

`directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse')` => `'ATTACK AT DAWN!'`

`reverseMachine.encrypt('attack at dawn!', 'alphonse')` => `'!ULLD XS XQHIEA'`

`reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse')` => `'!NWAD TA KCATTA'`

Write your code in `src/vigenere_cipher.js`.

---

### **(ST) Common character count**
Your task is to implement function that accepts two **strings** (`s1` and `s2`) and returns **number** of common characters between them.

For example:

`getCommonCharacterCount('aabcc', 'adcaa')` => `3`

Write your code in `src/common_character_count.js`.

---

### **(ST) Delete digit**
Your task is to implement function that accepts **integer number** (`n`) and returns maximal **number** you can obtain by deleting exactly one digit of the given number.

For example:

`deleteDigit(152) => 52`

Write your code in `src/delete_digit.js`.

---

### **(ST) DNS stat**
Your task is to implement function that accepts an **array** of domains (`domains`) and returns the **object** with the appearances of the DNS.

For example:

`getDNSStats(['code.yandex.ru', 'music.yandex.ru', 'yandex.ru'])` => `{'.ru': 3, '.ru.yandex': 3, '.ru.yandex.code': 1,'.ru.yandex.music': 1}`

Write your code in `src/dns_stats.js`.

---

### **(ST) Encode line**
Your task is to implement function that accepts **string** (`str`) and returns its encoded version.

For example:

`encodeLine('aabbbc')` => `'2a3bc'`

Write your code in `src/encode_line.js`.

---

### **(ST) File names**
There's a list of file, since two files cannot have equal names, the one which comes later will have a suffix **(k)**, where k is the smallest **integer** such that the found name is not used yet.
Your task is to implement function that accepts **array** of names (`names`) and returns an **array** of names that will be given to the files.

For example:

`renameFiles(["file", "file", "image", "file(1)", "file"])` => `["file", "file(1)", "image", "file(1)(1)", "file(2)"]`

Write your code in `src/file_names.js`.

---

### **(ST) Get email domain**
Your task is to implement function that accepts email address (`email`) and returns it's **domain**.  

For example:

`getEmailDomain('prettyandsimple@example.com')` => `'example.com'`

Write your code in `src/get_email_domain.js`.

---

### **(ST) Is MAC-48 Address?**
The **MAC-48 address** is six groups of two hexadecimal digits (0 to 9 or A to F) separated by hyphens.
Your task is to implement function that accepts **string** (`inputString`) and returns `true` if **string** is valid **MAC-48 address**.  

For example:

`isMAC48Address('00-1B-63-84-45-E6')` => `true`

Write your code in `src/mac_adress.js`.

---

### **(ST) Matrix elements sum**
Given **matrix**, a rectangular matrix of **integers**, just add up all the values that **don't appear below a "0"**.

For example:

```
const matrix = [
 [0, 1, 1, 2],
 [0, 5, 0, 0],
 [2, 0, 3, 3]
];

getMatrixElementsSum(matrix) => 9
```

Write your code in `src/matrix_elements_sum.js`.

---

### **(ST) Minesweeper**
In the popular Minesweeper game you have a board with some mines and cells that have a **number** in it that indicates the total **number of mines** in the neighboring cells. Starting off with some arrangement of mines we want to create a Minesweeper game setup.

For example:

```
const matrix = [
 [true, false, false],
 [false, true, false],
 [false, false, false]
];

minesweeper(matrix) => [
 [1, 2, 1],
 [2, 1, 1],
 [1, 1, 1]
];
```

Write your code in `src/mine_sweeper.js`.

---

### **(ST) Sort by height**
Given an array with heights, sort them except if the value is `-1`.
Your task is to implement function that accepts **array** (`arr`) and returns it **sorted**

For example:

`sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180])` => `[-1, 150, 160, 170, -1, -1, 180, 190]`

Write your code in `src/sort_by_height.js`.

---

### **(ST) Sum digits**
Your task is to implement function that accepts a **number** (`n`) and returns the **sum of its digits** until we get to a **one digit number**.  

For example:

For 100, the result should be 1 (1 + 0 + 0 = 1)  
`getSumOfDigits(100)` => `1`

For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)  
`getSumOfDigits(91)` => `1`

Write your code in `src/sum_digits.js`.
