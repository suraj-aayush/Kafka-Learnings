# 🛠️ Kafka Learnings Project 🚀

Welcome to the **Kafka Learnings Project**! This repository contains basic implementations of Kafka Producer, Consumer, and Admin functionalities. The example revolves around a topic named **`rider-updates`**, divided into **2 partitions**. Perfect for learning Kafka!

---

## 📚 Features
- **Producer**: Sends rider updates like name, location, and food items to Kafka.
- **Consumer**: Consumes messages from the `rider-updates` topic.
- **Admin**: Basic admin operations like creating a topic.

---

## 🖥️ Prerequisites

Make sure the following tools are installed before running the project:

1. **Node.js**: Install the latest version from [Node.js Official Site](https://nodejs.org/).
2. **Yarn**: Use the following command to install Yarn globally:
   ```bash
   npm install --global yarn

## 🖥️ start Zookeeper

docker run -d -p 2181:2181 zookeeper

## 🖥️ start kafka

docker run -d -p 9092:9092 \
-e KAFKA_ZOOKEEPER_CONNECT="YOUR IP ADDRESS":2181 \
-e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://"YOUR IP ADDRESS":9092 \
-e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 \
--name kafka confluentinc/cp-kafka


## 📌 Commands Summary

| **Command**                          | **Description**                       |
|--------------------------------------|---------------------------------------|
| `yarn install`                       | Install project dependencies          |
| `node producer.js`                   | Run the Kafka producer                |
| `node consumer.js`                   | Run the Kafka consumer                |
| `node admin.js`                      | Run the Kafka admin operations        |
| `docker run ... (zookeeper)`         | Start Zookeeper                       |
| `docker run ... (kafka)`             | Start Kafka                           |
