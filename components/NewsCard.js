import React from "react";
import { View, Text,Image,StyleSheet,Dimensions } from "react-native";

const NewsCard = ({news}) => {
    
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{uri:news.imageUrl}}/>
            <View style={styles.body}>
             <Text style={styles.title}>{news.title}</Text>
             <Text style={styles.description}>{news.description}</Text>
             <Text style={styles.author}>{news.author}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        margin:10,
        borderRadius:10,
    },
    image: {
        height: Dimensions.get("window").height / 4,
        borderTopRightRadius:10,
        borderTopLeftRadius:10,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
    },
    description: {
        margin:3,
    },
    body: {
        padding:5,
    },
    author:{
        fontStyle:"italic",
        textAlign:"right",
    },
});

export default NewsCard;