package com.example;

import java.util.Properties;

import org.apache.kafka.clients.producer.KafkaProducer;
import org.apache.kafka.clients.producer.ProducerConfig;
import org.apache.kafka.clients.producer.ProducerRecord;
import org.apache.kafka.common.serialization.StringSerializer;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
        //Create producer properties
        Properties properties = new Properties();
        properties.setProperty(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, "127.0.0.1:9092");
        properties.setProperty(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class.getName());
        properties.setProperty(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, StringSerializer.class.getName());

        //Create producer
        KafkaProducer<String,String> kafkaProducer = new KafkaProducer<String,String>(properties);

        //create Producer record
        ProducerRecord<String,String> record = new ProducerRecord<String,String>("quickstart-events", "hello");

        //Send data
        kafkaProducer.send(record);

        kafkaProducer.flush();
        kafkaProducer.close();
    }
}
