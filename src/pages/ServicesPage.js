import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Text, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-community/picker';

import globalStyles from '../styles/globalStyle';
import LabelledInput from '../components/UI/LabelledInput';
import LabelledPicker from '../components/UI/LabelledPicker';
import emailClient from '../clients/emailClient';
import { sub } from 'react-native-reanimated';

const TEMPLE_EMAIL = 'eo@www.svtemplemi.org';

const ServicesPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [date, setDate] = useState(new Date(Date.now()));
    const [service, setService] = useState('');
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showTimePicker, setShowTimePicker] = useState(false);

    const updateDate = (_, selectedDate) => {
        toggleDatePicker();
        if (!selectedDate) {
            return;
        }

        const newDate = new Date(date);
        newDate.setFullYear(selectedDate.getFullYear());
        newDate.setMonth(selectedDate.getMonth());
        newDate.setDate(selectedDate.getDate());
        setDate(newDate);
    };

    const updateTime = (_, selectedDate) => {
        toggleTimePicker();
        if (!selectedDate) {
            return;
        }

        const newDate = new Date(date);
        newDate.setHours(selectedDate.getHours());
        newDate.setMinutes(selectedDate.getMinutes());
        setDate(newDate);
    };

    const toggleDatePicker = () => setShowDatePicker(!showDatePicker);
    const toggleTimePicker = () => setShowTimePicker(!showTimePicker);

    const onSubmit = async () => {
        const to = TEMPLE_EMAIL;
        const subject = `Requested Service: ${service}`;
        const body = 'Test';
        await emailClient.sendEmail(to, subject, body);
    };

    return (
        <ScrollView style={globalStyles.textContainer}>
            <View style={{ width: '95%' }}>
                <Text style={globalStyles.title}>Service Request Form</Text>
                <LabelledInput
                    style={globalStyles.textGroup}
                    label="Name"
                    placeholder="Name"
                    value={name}
                    onChangeText={setName}
                />
                <LabelledInput
                    style={globalStyles.textGroup}
                    label="Email"
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                />
                <LabelledInput
                    style={globalStyles.textGroup}
                    label="Phone Number"
                    placeholder="(123) 456-7890"
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                />
                <LabelledInput
                    style={globalStyles.textGroup}
                    label="Date"
                    value={date.toLocaleString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                    })}
                    editable={false}
                />
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
                </View>
                {showDatePicker && (
                    <DateTimePicker value={date} onChange={updateDate} />
                )}
                {showTimePicker && (
                    <DateTimePicker
                        value={date}
                        onChange={updateTime}
                        mode="time"
                    />
                )}
                <LabelledPicker
                    style={globalStyles.textGroup}
                    label="Service"
                    selectedValue={service}
                    onValueChange={setService}>
                    <Picker.Item label="First" value="first" />
                    <Picker.Item label="Second" value="second" />
                </LabelledPicker>
                <Button onPress={onSubmit} title="Submit" />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    button: {
        width: 250,
    },
});

export default ServicesPage;
