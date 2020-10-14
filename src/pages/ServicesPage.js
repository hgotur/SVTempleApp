import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Text, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-community/picker';

import globalStyles from '~/src/styles/globalStyle';
import LabelledInput from '~/src/components/UI/LabelledInput';
import LabelledPicker from '~/src/components/UI/LabelledPicker';
import emailClient from '~/src/clients/EmailClient';
import Colors from '~/src/styles/colors';

const TEMPLE_EMAIL = 'eo@www.svtemplemi.org';
const SERVICES = [
    'Akshrabyasam',
    'Annaprasana',
    'Ayushhomam',
    'Bumi Pooja',
    'Half Saree',
    'Jananasanthi Homam',
    'Lakshmi Naraya Pooja',
    'Namakranam',
    'Navagraha Shanthi',
    'Satyanarayanam Vratham',
    'Seemantham',
    'Shasti Poorthi',
    'Shrardham',
    'Tharpanam',
    'Upanayanam',
    'Vadamal',
    'Wedding',
];

const ServicesPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [date, setDate] = useState(new Date(Date.now()));
    const [service, setService] = useState('');
    const [error, setError] = useState(null);
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

    const formatDate = (date) => {
        return date.toLocaleString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });
    };

    const toggleDatePicker = () => setShowDatePicker(!showDatePicker);
    const toggleTimePicker = () => setShowTimePicker(!showTimePicker);

    const onSubmit = async () => {
        setError(null);
        if (name.trim() === '') {
            setError('Name cannot be empty.');
            return;
        }
        if (email.trim() === '') {
            setError('Email cannot be empty.');
            return;
        }

        const to = TEMPLE_EMAIL;
        const subject = `Requested Service: ${service}`;
        const body = `
<!DOCTYPE html PUBLIC “-//W3C//DTD XHTML 1.0 Transitional//EN”
        “https://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd”>
<html xmlns=“https://www.w3.org/1999/xhtml”>

<head>
    <title>Test Email Sample</title>
    <meta http–equiv=“Content-Type” content=“text/html; charset=UTF-8” />
    <meta http–equiv=“X-UA-Compatible” content=“IE=edge” />
    <meta name=“viewport” content=“width=device-width, initial-scale=1.0 “ />
    <style>
        table, th, td {
            border: 1px solid black;
            border-collapse: collapse;
        }
        th, td {
            padding: 5px;
            text-align: left;
        }
        </style>
</head>

<body>
    <table style="width:95%">
        <tr>
            <th>Name</th>
            <td>${name}</td>
        </tr>
        <tr>
            <th>Email</th>
            <td>${email}</td>
        </tr>
        <tr>
            <th>Phone Number</th>
            <td>${phoneNumber}</td>
        </tr>
        <tr>
            <th>Date Requested</th>
            <td>${formatDate(date)}</td>
        </tr>
        <tr>
            <th>Service Requested</th>
            <td>${service}</td>
        </tr>
    </table>
</body>
`;
        await emailClient.sendEmail(to, subject, body);
    };

    return (
        <ScrollView style={globalStyles.body}>
            <View style={globalStyles.textContainer}>
                <Text style={globalStyles.title}>Service Request Form</Text>
                <Text style={[globalStyles.text, globalStyles.textGroup]}>
                    Fill out this form to request a temple service. When you
                    click "Submit", you will be redirected to your mail app with
                    a pre-populated email containing information from this form.
                    Send the email to submit the request. A temple volunteer
                    will follow up with you via email.
                </Text>
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
                    label="Requested Date of Service"
                    value={formatDate(date)}
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
                    {showDatePicker && (
                        <DateTimePicker
                            value={date}
                            onChange={updateDate}
                            minimumDate={new Date(Date.now())}
                        />
                    )}
                    {showTimePicker && (
                        <DateTimePicker
                            value={date}
                            onChange={updateTime}
                            mode="time"
                        />
                    )}
                </View>
                <LabelledPicker
                    style={globalStyles.textGroup}
                    label="Requested Service"
                    selectedValue={service}
                    onValueChange={setService}>
                    {SERVICES.map((value) => (
                        <Picker.Item label={value} value={value} key={value} />
                    ))}
                </LabelledPicker>
                <Text style={[globalStyles.text, styles.error]}>{error}</Text>
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
    error: {
        color: Colors.ErrorRed,
    },
});

export default ServicesPage;
