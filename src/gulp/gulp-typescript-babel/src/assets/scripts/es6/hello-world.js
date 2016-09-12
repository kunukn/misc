class HelloWorld {
    constructor(message) {
        this.message = message;
    }
    getMessage() {
        return this.message;
    }
}

let helloWorld = new HelloWorld('ES6 can compile');
document.querySelector('.es6').innerHTML = helloWorld.getMessage();
	
