/**
 * #1 Create an object literal named `monkey`
 * #2 Give it 3 unique properties
 * #3 Give it at least 2 behaviours/methods of your choice
 * #4 Calls the object's method(s) and output a result of your choice to the console.
 * #5 Convert the object literal to an Class
 * #6 Then call its method and output to the console.
 */

 var monkey = {
     name: "jojo", age: 5, language: "signs"
    monkeyDetails : function () {
        return this.name + " " + this.age + " " + this.language;
    }
 };

 console.log (monkeyDetails);


 class monkey {
     console.log(monkeyDetails);
 }

