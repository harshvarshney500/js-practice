
/*. Write a function to remove a specific element from an array.

	arr = [1,2,3,4,5];
	remove = 3

	output :- [1,2,4,5]
*/



elements = [1,2,3,4,5];

elements.reduce((acc, e) =>{
    if (e != 3){
        acc.push(e);
    }
    return acc;
}, []);
