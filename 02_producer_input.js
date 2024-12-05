const {kafka} = require("./client")

const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

async function init() {
    const producer = kafka.producer();

    await producer.connect();

    rl.setPrompt('>')
    rl.prompt();

    rl.on('line', async function(line) 
    {
        const [riderName, location, food] = line.split(' ')
        let partition = 0; // Default partition for north
        if (location.toLowerCase() === 'south') 
        {
            partition = 1;
        }

// const messageValue = JSON.stringify({ riderName, location, food });

        await producer.send({
            topic: "rider-updates",
            messages: [
                {
                    key: "RiderName", 
                    value: riderName, 
                    partition: partition,
                },
                {
                    key: "Area Location",
                    value: location,
                    partition: partition
                },
                {
                    key: "Food Items",
                    value: food,
                    partition: partition
                }

            ]
        })
    }).on('close', async ()=>{
        await producer.disconnect();
    })
}

init();