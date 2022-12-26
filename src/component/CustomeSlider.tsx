import React from "react";
import { View,StyleSheet, Text } from "react-native";
import {GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler'
import Animated,{useAnimatedStyle,useSharedValue,useAnimatedGestureHandler} from "react-native-reanimated";

const RangeSlider = () => {
    const position = useSharedValue(0);
    const gestureHandler = useAnimatedGestureHandler({
        onStart: (_,ctx) => {
            ctx.startX = position.value;
        },
        onActive: (e, ctx) => {
            if(ctx.startX + e.translationX > 0)
            position.value = ctx.startX + e.translationX;
        },
    });

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{translateX: position.value}],
    }));
    return(
        <View style={styles.sliderContainer}>
            <View style={styles.sliderBack}></View>
            <View style={styles.sliderFront}></View>
            <PanGestureHandler onGestureEvent={gestureHandler}>
                <Animated.View style={[styles.thumb,animatedStyle]} />
            </PanGestureHandler>
        </View>
    );
};

const CustomeSlider = () => {
    return(
        <GestureHandlerRootView style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={styles.sliderTitle}>Slider</Text>
            <RangeSlider />
        </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
    sliderTitle: {
        color: 'black',
        fontSize: 20,
        fontFamily: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    sliderContainer: {
        justifyContent: 'center',
        alignSelf: 'center'
    },
    sliderBack: {
        height: 8,
        backgroundColor: 'yellow',
        borderRadius: 20,
        width: 300,
    },
    sliderFront: {
        height: 8,
        backgroundColor: 'blue',
        borderRadius: 20,
        width: 300,
        position: 'absolute'
    },
    thumb: {
        position: 'absolute',
        left: -10,
        width: 20,
        height: 20,
        backgroundColor: 'white',
        borderColor: 'grey',
        borderRadius: 10,
        borderWidth: 5,
    }
});

export default CustomeSlider;
