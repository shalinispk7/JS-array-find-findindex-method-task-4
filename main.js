const employees = [
 { name: "David Carlson", age: 30 },
 { name: "John Cena", age: 34 },
 { name: "Mike Sheridan", age: 25 },
 { name: "John Carte", age: 50 }
];

// Print the record for the employee whose name is John using find method
// Print the  record for the employee whose name is John index position using findIndex method


let result=employees.find(function(e){
	return e.name.indexOf('John') >=0
})
// console.log(result);

document.write("Index position Using findIndex method: "+" ")
document.write(Object.entries(result))
