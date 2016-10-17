class Greeter {
  greeting: string;

  constructor (public message: string) {}
  greet() {
    return "Hello, " + this.message;
  }
}

var greeters: Greeter[] = [];
greeters.push(new Greeter("world"));
greeters.push(new Greeter("how old are you?"));
greeters.push(new Greeter("my baby, hello my honey"));
console.log(greeters);

for(var greeter of greeters) {
  alert(greeter.greet());
}
