// && -> and e  
// || -> or ou
// ! -> not não

// Operador "AND" (&&):
//   A	     B	     A && B
// false	false	 false
// false	true	 false
// true	    false	 false
// true	    true     true

// Operador "OR" (||):
//   A	      B	       A || B
// false	false	   false
// false	true	   true
// true	    false	   true
// true	    true	   true

let n1 = 10
let n2 = 5 
let n3 = 2
let n4 = 13

if( n1 > n2 || n4 > n3 ){
    console.log("Verdadeiro")
} else {
    console.log("Falso")
}

