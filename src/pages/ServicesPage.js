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

const TEMPLE_EMAIL = 'services@svtemplemi.org';
const SERVICES = [
    'Aksharabhyasam',
    'Annaprasana',
    'Ayushhomam',
    'Bhoomi Pooja',
    'Half Saree',
    'Jananasanthi Homam',
    'Lakshmi Narayana Pooja',
    'Namakaranam',
    'Navagraha Shanti',
    'Satyanarayanam Vratham',
    'Seemantham',
    'Shasti Poorthi',
    'Shraddham',
    'Tharpanam',
    'Upanayanam',
    'Vadamala',
    'Wedding',
    'Other',
];

const ServicesPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [date, setDate] = useState(
        new Date(dayjs().add(1, 'day').startOf('hour').toISOString()),
    );
    const [service, setService] = useState('');
    const [otherService, setOtherService] = useState('');
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
        const d = dayjs(date);
        return d.format('ddd MMM D YYYY h:mm A');
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

        const requestedService = service === 'Other' ? otherService : service;

        const to = TEMPLE_EMAIL;
        const subject = `Requested Service: ${requestedService}`;
        const body = `
Name: ${name}
Email: ${email}
Phone Number: ${phoneNumber}
Date Requested: ${formatDate(date)}
Service: ${requestedService}
`;
        await emailClient.sendEmail(to, subject, body);
    };

    const now = Date.now();
    const oneYear = new Date(dayjs().add(1, 'year').toISOString());

    const showOther = service === 'Other';

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
                    textContentType="name"
                    value={name}
                    onChangeText={setName}
                />
                <LabelledInput
                    style={globalStyles.textGroup}
                    label="Email"
                    placeholder="Email"
                    textContentType="emailAddress"
                    value={email}
                    onChangeText={setEmail}
                />
                <LabelledInput
                    style={globalStyles.textGroup}
                    label="Phone Number"
                    placeholder="(123) 456-7890"
                    textContentType="telephoneNumber"
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
                <View style={globalStyles.textGroup}>
                    <LabelledPicker
                        label="Requested Service"
                        selectedValue={service}
                        onValueChange={(val) =>
                            setService(val) || setOtherService('')
                        }>
                        {SERVICES.map((value) => (
                            <Picker.Item
                                label={value}
                                value={value}
                                key={value}
                            />
                        ))}
                    </LabelledPicker>
                    {showOther && (
                        <LabelledInput
                            label="Other"
                            placeholder="Service Name"
                            value={otherService}
                            onChangeText={setOtherService}
                        />
                    )}
                </View>
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
