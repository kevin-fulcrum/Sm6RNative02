import React from 'react';
import { View, StyleSheet } from 'react-native'
import { State, TapGestureHandler} from 'react-native-gesture-handler'
import Animated, { eq, Value} from 'react-native-reanimated';
import { withTransition, onGestureEvent, mix} from 'react-native-redash/lib/module/v1'
import ButtonPayment from '../../components/core/Buttons/ButtonPayment'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E8EDFF'
    }
})

const TapGesture = () => {
    const state = new Value(State.UNDETERMINED);
    const gestureHandler = onGestureEvent({ state });
    const progress = withTransition(eq(state, State.BEGAN), { duration: 2000 });
    const scale = mix(progress, 1, 1.2);
    return (
        <View style={styles.container}>
        <TapGestureHandler  {...gestureHandler}>
                <Animated.View style={{ transform: [{ scale }] }}>
                <ButtonPayment  {...progress}/>
                </Animated.View>
            </TapGestureHandler>
        
        </View>
    )
}

export default TapGesture;