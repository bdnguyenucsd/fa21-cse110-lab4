1. "3" will be outputted to the console. The reason is that the variable "i" was defined in the declaration of the for   
   loop, and increments to 3.
2. "150" will be outputted. discountedPrice was declared as a variable inside the for loop, and it was last modified to 
   calculate 300/0.5
3. "150" will be outputted. finalPrice was declared as a variable in the beginning of the function, but was last modified 
   to calculate Math.round(150 * 100) / 100 = 150
4. The array [50,100,150] will be returned. discounted was declared as a variable in the beginning of the function, and 
   at the final step of  every iteration of the for loop, we push our new prices into discounted.
5. The code will return an error. This is because let i is defined in a different block than where console.log(i) is.
6. The code will return an error. This is because let discountedPrice is defined in a different block than where 
   console.log(discountedPrice) is.
7. "150" will be outputted to the console. The reason is that let finalPrice was declared in the same block as console.log(finalPrice). We calculated finalPrice = Math.round(150 * 100) / 100
8. The array [50,100,150] will be returned. let discounted was declared as a variable in the beginning of the function, and everything that modified it was in the same scope.
9. The code will return an error. This is because let i is defined in a different block than where console.log(i) is.
10. "3" will be printed to the console. We declare length to be const length = prices.length. The function call has 
    prices to be an array of length 3.
11. The array [50,100,150] will be returned. const discounted was declared as a variable in the beginning of the    
    function, and everything below modifies it. We note that const only forces the array discounted to have a constant reference, we are still allowed to modify it.
12. A) student.name;
    B) student['Grad Year'];
    C) student.greeting();
    D) student['Favorite Teacher']['name'];
    E) student.courseLoad[0];
13. A) '32', String was evaluated first, so it interpreted the int into a string for a string concatenation.
    B) 1, String was converted into an int due to the fact that we used a specific mathematical operator like -.
    C) 3, int was evaluated first, and null has a type conversion to 0.
    D) '3null', String was evaluated first, and so string concatenation occurred.
    E) 4, boolean values have explicit type conversions to integer values.
    F) 0, false has a type conversion to 0, and null has a type conversion to 0.
    G) '3undefined', String was evalued first, so string concatenation occurred.
    H) NaN, Specific mathematical operator was detected, but undefined has a type conversion to NaN.
14. A) true, '2' converts into 2 and becomes 2 > 1
    B) false, '2' < '12' is compared lexigraphically. '2' is not less than '1'
    C) true, '2' converts into 2 and becoems 2 == 2
    D) false, strict equality returns false on different types
    E) false, true has a type conversion to 1, which reduces to 1 == 2.
    F) true, Boolean(2) evaluates to true, which means true === true
15. === checks for strict equality between types, whereas == does not. '2' == 2 is true, but '2' === 2 is false.
17. The function should return the array [2,4,6]. The reason is, modifyArray loads doSomething as the callback function.
    We then iterate over the input array, multiplying the elements by 2 using the callback function doSomething.
19. First, after every number there is a new line. The output sequence is this order: 1 4 3 2