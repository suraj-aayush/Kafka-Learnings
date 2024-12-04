const { kafka } = require('./client')


async function init() 
{
    const admin = kafka.admin();
    console.log("ADMIN connecting...");
    admin.connect();
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