import React from 'react';
import { View, StyleSheet } from 'react-native'
import { State, TapGestureHandler} from 'react-native-gesture-handler'
import Animated, { cond, eq, Value} from 'react-native-reanimated';
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
    const isActive = eq(state, State.BEGAN);
    const duration = cond(isActive, 2000, 250)
    const progress = withTransition(isActive, { duration });
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