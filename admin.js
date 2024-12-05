// const {Kafka} = require("kafkajs");

// const kafka = new Kafka({
//     clientId: "my-app",
//     brokers: ["192.168.29.249:9092"]
// });  

//  USE THE ABOVE CODE OR IMPORT IT FROM CLIENT

const { kafka } = require("./client"); // Importing the kafka instance from client.js

async function init() 
{
    const admin = kafka.admin();
    console.log("ADMIN connecting...");
    await admin.connect();
    console.log("ADMIN connected successfully...");
    

console.log("Creating Topic [rider-updates]");
    
    await admin.createTopics({
        topics: [
            {
                topic: "rider-updates",
                numPartitions: 2, // 2 partitions... index-> 0 and 1
            },
        ],
    });

    console.log("TOPIC created successfully [rider-updates]");
    
    console.log("DISCONNECTING ADMIN...");
    
    await admin.disconnect();
}

init();