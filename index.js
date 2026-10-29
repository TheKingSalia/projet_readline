const emoji = require("node:readline");

const rl = emoji.createInterface(
    {
        input: process.stdin,
        output: process.stdout,
    }
)

rl.question("Quel est le nombre : ", 
    (answer)=> {
        const value = Number(answer)
        console.log("Le nombre est : " + value);
        rl.close()

    }
)