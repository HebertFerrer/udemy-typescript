// Arrow functions

let hulk = {
    name: 'Hulk',
    smash() {
        setTimeout(() => console.log(`${this.name} smash!!!`), 500);
    }
}

hulk.smash();
