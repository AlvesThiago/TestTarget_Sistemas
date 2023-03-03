let numero = 21;

let a = 0;
let b = 1;
let c = 0;

for (let i = 0; i <= numero; i++) { 
  c = a + b;
  a = b;
  b = c;
}

if (numero == c) {
  console.log("O número " + numero + " pertence à sequência de Fibonacci.");
} else {
  console.log("O número " + numero + " não pertence à sequência de Fibonacci.");
}