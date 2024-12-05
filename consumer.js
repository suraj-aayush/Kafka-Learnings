const {kafka} = require('./client')

async function init() {
    const consumer = kafka.consumer({groupId: "group-1"});
    await consumer.connect();

    await consumer.subscribe({topics: ["rider-updates"], fromBeginning: true});

    console.log("//////////////// Consumer going to run ///////////////////");
    
    await consumer.run({
        eachMessage: async ({ topic, partition, message, heartbeat, pause }) =>{
            console.log(`[${topic}]: PARTITION: ${partition}: Message-> ${message.value.toString()} `);
            
        }
    });

    // console.log("//////////////// Consumer completed: Disconnecting now ////////////");
    
    // await consumer.disconnect();
}

init();