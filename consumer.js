var kafka = require("kafka-node");

var Consumer = kafka.Consumer,
    client = new kafka.KafkaClient("localhost:9092"),
    consumer = new Consumer(
    client, [ { topic: "crs-poc", partition: 0 } ], { autoCommit: false });
 
consumer.on("message", function (message) {
    /// For CSV messages
    // console.log(message.value.split(',')[1]);
    
    /// For JSON messages
    // console.log(JSON.parse(message.value).user_identifier);
    console.log(message.value);
});
