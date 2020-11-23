import React, { useState } from 'react';
import { View, StyleSheet, Button, Platform } from 'react-native';
import RNDateTimePicker from '@react-native-community/datetimepicker';

import Colors from '../../styles/colors';
import globalStyles from '../../styles/globalStyle';

const DEFAULT_MINUTE_INTERVAL = 1;

const DateTimePicker = (props) => {
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showTimePicker, setShowTimePicker] = useState(false);
    const [showIOSPicker, setShowIOSPicker] = useState(true);

    const toggleDatePicker = () => setShowDatePicker(!showDatePicker);
    const toggleTimePicker = () => setShowTimePicker(!showTimePicker);
    const toggleIOSPicker = () => setShowIOSPicker(!showIOSPicker);

    const {
        date,
        setDate,
        setTime,
        setDateTime,
        minimumDate,
        maximumDate,
    } = props;

    const updateDateTimeIos = (_, selectedDate) => {
        setDateTime(selectedDate);
    };

    const updateDateAndroid = (_, selectedDate) => {
        toggleDatePicker();
        setDate(selectedDate);
    };

    const updateTimeAndroid = (_, selectedDate) => {
        toggleTimePicker();
        setTime(selectedDate);
    };

    const minuteInterval = props.minuteInterval
        ? props.minuteInterval
        : DEFAULT_MINUTE_INTERVAL;

    if (Platform.OS === 'ios') {
        return (
            <View style={[globalStyles.textGroup]}>
                <Button
                    style={styles.button}
                    onPress={toggleIOSPicker}
                    title={`${showIOSPicker ? 'Hide' : 'Show'} Date Picker`}
                />
                {showIOSPicker &&
                    <RNDateTimePicker
                        value={date}
                        onChange={updateDateTimeIos}
                        minimumDate={minimumDate}
                        maximumDate={maximumDate}
                        minuteInterval={minuteInterval}
                        mode="datetime"
                        style={styles.iosPicker}
                    />
                }
            </View>
        );
    } else {
        return (
            <View style={[styles.buttonContainer, globalStyles.textGroup]}>
                <Button
                    style={styles.button}
                    onPress={toggleDatePicker}
                    title="Set Date"
                />
                <Button
                    style={styles.button}
                    onPress={toggleTimePicker}
                    title="Set Time"
                />
                {showDatePicker && (
                    <RNDateTimePicker
                        value={date}
                        onChange={updateDateAndroid}
                        minimumDate={minimumDate}
                        maximumDate={maximumDate}
                    />
                )}
                {showTimePicker && (
                    <RNDateTimePicker
                        value={date}
                        onChange={updateTimeAndroid}
                        minuteInterval={minuteInterval}
                        mode="time"
                    />
                )}
            </View>
        );
    }
};

export default DateTimePicker;

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    button: {
        width: 250,
    },
    error: {
        color: Colors.ErrorRed,
    },
    iosPicker: {
        borderWidth: 1,
        borderColor: Colors.Black,
    },
});
