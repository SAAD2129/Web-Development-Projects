// const articles = [
//     `In the example above, the variable products is an array of four strings. The array is created using bracket ([]) notation. Each array item is separated by a comma. On line 2, the first array item ('soccer ball') is accessed using its position in the array (0) and logged to the console. On line 3, the last item ('shorts') is accessed using its position in the array (3) and logged to the console.
// An array can contain items of differing data types. For example, you can create an array that stores both numbers and strings. You can even nest an array inside of another array to create a two-dimensional array.
// var twoDimensional = [[41, 13], [7, 29]];
// The array in this example is two-dimensional because it contains two nested arrays. Each nested array contains two numbers. In order to access items inside of the nested arrays, you must first access one of the nested arrays by index. Then, you can access an item inside of that array by its index. access first array access 13 in first array
// In the example above, the first line logs the array [41, 13] to the console. The second line logs 13 to the console. The code, twoDimensional[0], accesses the first element in the array, which is the array [41, 13]. The code on line 2, twoDimensional[0][1], accesses the first element ([41, 13]) and then accesses the second element in this nested array, 13.

// The output of this code is:`,
//     `Arrays vs. Vectors
// If you’ve used C++ vectors in the past, you may be wondering what exactly the difference is between them and arrays, and when you should use which.
// As was mentioned earlier, arrays are inherited from C, C++’s parent language. They are a low-level data structure and are incredibly rigid. With arrays, you can’t add or remove elements; you can only modify existing elements.
// Vectors are originated from arrays. Early in the creation of C++, the language developers took these basic arrays and wrote code to enhance them and make them more flexible and powerful. Therefore you can think of vectors as super arrays!
// Vectors don’t require a static size. It’s possible to add and remove elements from them, as well as access their current size at any time.
// Creating an Array
// When creating an array, you have to keep two pieces of information in mind:
// The type of data you want to store inside of it.
// How many items you want it to be able to hold (its size).
// We can create an array a lot like we create normal variables, by specifying the data type, giving it a descriptive name, and also specifying its size: In the above code example, we’ ve created an array with a size of 4, meaning it can hold four integers(all four elements will initially have the
//     default int value of 0).
// In many cases, you won’ t know what data needs to go in the array until after you’ ve created it, but
// if you do happen to know the contents of the array ahead of time, you can initialize it with custom values upfront: `,
//     `In computer interactions, the possible affordances of any computer are usually relatively limited. Consider a web application in a browser—a user can essentially click, execute key commands or type, and potentially execute touch events or voice commands. Because of the relatively limited range of affordances, using proper signifiers is especially important to direct users properly. Users can click anywhere on a page, but not every click will have a result. Often, websites and applications use a combination of visual feedback and common UX patterns to help solve this issue. In web browsers, one common example of visual feedback is the cursor image itself: it can demonstrate what behavior might be expected from a click: a pointing hand indicating that an interaction will occur, an i-beam shape indicating that text can be selected, a four-directional arrow showing that an element can be moved, and many more cursor styles and interactions.

// As stated above, the hovering, pointing hand cursor is a nearly universal pattern to indicate that an element or text is clickable. But users do not want to hover a cursor over every element to determine if it is clickable, and mobile devices do not even have the ability to hover a cursor! For this reason, designers also use signifiers to demonstrate elements that afford interaction. On the web, these signifiers come in the form of CSS styles that differentiate clickable from non-clickable elements. A ubiquitous example is the styling of hyperlinks—hyperlinks should be easily differentiated from other text in a block by different colors, underline styles, or font weights.

// There is no universal “right answer” to the issues surrounding signifiers and affordances on the web, but web designers should always keep these ideas in mind while creating web designs and interfaces.`
// ]