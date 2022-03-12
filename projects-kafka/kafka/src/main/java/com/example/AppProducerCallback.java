package com.example;

import java.util.Properties;

import org.apache.kafka.clients.producer.Callback;
import org.apache.kafka.clients.producer.KafkaProducer;
import org.apache.kafka.clients.producer.ProducerConfig;
import org.apache.kafka.clients.producer.ProducerRecord;
import org.apache.kafka.clients.producer.RecordMetadata;
import org.apache.kafka.common.serialization.StringSerializer;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


public class AppProducerCallback 
{
    public static void main( String[] args )
    {

        final Logger LOG = LoggerFactory.getLogger(AppProducerCallback.class);

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
        kafkaProducer.send(record, new Callback() {
            public void onCompletion(RecordMetadata metadata, Exception exception) {
                // executes every time a record is successfully sent or an exception is thrown
                if(exception == null){
                    //record successfully sent
                    LOG.info("New metadata received \n" + 
                    "Topic: " + metadata.topic() + "\n" +
                    "Partition: " + metadata.partition() + "\n" +
                    "Offset: " + metadata.offset() + "\n" +
                    "Timestamp: " + metadata.timestamp());
                }
                else {
                    LOG.error("Error", exception);
                }

            }
            
        });

        kafkaProducer.flush();
        kafkaProducer.close();
    }
}
