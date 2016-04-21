class HelloWorld {
    message: string;

    constructor(message: string) {
        this.message = message;
    }

    getMessage() {
        return this.message;
    }
}

let helloWorld = new HelloWorld('Typescript can compile');
document.querySelector('.typescript').innerHTML = helloWorld.getMessage();
