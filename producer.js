const {kafka} = require('./client')

async function init() {
    const producer = kafka.producer();

    console.log("CONNECTING PRODUCER");

    await producer.connect();

console.log("CONNECTED PRODUCER successfully ... ");

await producer.send({
    topic: 'rider-updates',
    messages: [
        {key:"Rider Name", value:"Amir Khan", partition: 0},
        {key:"Area Location", value:"Dehradun Cant", partition: 0},
        {key:"Food-item", value:"Biryani", partition: 0},
    ],
});
    
console.log(" Disconnecting Producer ");

   await producer.disconnect(); 
console.log("DISCONNECTED PRODUCER");

}

init();