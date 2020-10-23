import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Text, Button } from 'react-native';
import { Picker } from '@react-native-community/picker';
import dayjs from 'dayjs';

import globalStyles from '../styles/globalStyle';
import LabelledInput from '../components/UI/LabelledInput';
import LabelledPicker from '../components/UI/LabelledPicker';
import DateTimePicker from '../components/UI/DateTimePicker';
import emailClient from '../clients/EmailClient';
import Colors from '../styles/colors';

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
    const [date, setDate] = useState(
        new Date(dayjs().add(1, 'day').startOf('hour').toISOString()),
    );
    const [service, setService] = useState('');
    const [error, setError] = useState(null);

    const updateDate = (selectedDate) => {
        if (!selectedDate) {
            return;
        }

        const newDate = new Date(date);
        newDate.setFullYear(selectedDate.getFullYear());
        newDate.setMonth(selectedDate.getMonth());
        newDate.setDate(selectedDate.getDate());
        setDate(newDate);
    };

    const updateTime = (selectedDate) => {
        if (!selectedDate) {
            return;
        }

        const newDate = new Date(date);
        newDate.setHours(selectedDate.getHours());
        newDate.setMinutes(selectedDate.getMinutes());
        setDate(newDate);
    };

    const updateDateTime = (selectedDate) => {
        setDate(new Date(selectedDate));
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
Name: ${name}
Email: ${email}
Phone Number: ${phoneNumber}
Date Requested: ${formatDate(date)}
Service: ${service}
`;
        await emailClient.sendEmail(to, subject, body);
    };

    const now = Date.now();
    const oneYear = new Date(dayjs().add(1, 'year').toISOString());

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
                <DateTimePicker
                    setDate={updateDate}
                    setTime={updateTime}
                    setDateTime={updateDateTime}
                    minimumDate={now}
                    maximumDate={oneYear}
                    minuteInterval={15}
                    date={date}
                />
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
