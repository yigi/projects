package com.example;

import java.time.Duration;
import java.util.Collection;
import java.util.Collections;
import java.util.Properties;

import org.apache.kafka.clients.consumer.ConsumerConfig;
import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.apache.kafka.clients.consumer.ConsumerRecords;
import org.apache.kafka.clients.consumer.KafkaConsumer;
import org.apache.kafka.common.serialization.StringSerializer;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;



/**
 * Hello world!
 *
 */
public class AppConsumer 
{
    public static void main( String[] args )
    {
        final Logger LOG = LoggerFactory.getLogger(AppProducerCallback.class);

        String bootstrapServers = "127.0.0.1:9092";
        String groupId = "my_second_application";
        Properties properties = new Properties(); 
        String topic = "first_topic";

        //create consumer configs
        properties.setProperty(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG, bootstrapServers);
        properties.setProperty(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, StringSerializer.class.getName());
        properties.setProperty(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, StringSerializer.class.getName());
        properties.setProperty(ConsumerConfig.GROUP_ID_CONFIG, groupId);
        properties.setProperty(ConsumerConfig.AUTO_OFFSET_RESET_CONFIG, "earliest"); //earliest, newest, none    

        //create a consumer 
        KafkaConsumer<String, String> kafkaConsumer = new KafkaConsumer<String,String>(properties);

        //subscribe consumer to our topic
        kafkaConsumer.subscribe(Collections.singleton(topic)); //subscribe only one topic -> singleton || Arrays.asList("a","b","c") ....

        //poll for new data
        while(true){
            ConsumerRecords <String, String> records = kafkaConsumer.poll(Duration.ofMillis(100));

            for (ConsumerRecord<String, String> record : records) {
                LOG.info("Key: " + record.key() + ", Value: " + record.value());
                LOG.info("Partition: " + record.partition() + ", Offset: " + record.offset());
            }
        }
    }
}
