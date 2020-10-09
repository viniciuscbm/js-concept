const name = "Vinicius"
const age = "28"

const sayMyName = function(name, age = 20){
  console.log("Meu nome é " + name + " e eu tenho " + age + " anos.")
}

sayMyName(name, age)
