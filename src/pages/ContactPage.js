import React from 'react';
import {
    View,
    Image,
    StyleSheet,
    Text,
    ScrollView,
    TouchableOpacity,
} from 'react-native';

import globalStyles from '../styles/globalStyle';
import Images from '../styles/images';
import CollapsibleGroup from '../components/UI/CollapsibleGroup';
import LabelledText from '../components/UI/LabelledText';
import mapClient from '../clients/MapClient';

const ContactPage = () => {
    return (
        <ScrollView style={globalStyles.body}>
            <TouchableOpacity onPress={mapClient.openMap}>
                <Image
                    style={styles.image}
                    source={Images.mapLocation}
                    resizeMode="contain"
                />
            </TouchableOpacity>
            <Text style={{alignSelf: 'center', textAlign: 'center'}}>Tap above to open in Maps app.</Text>
            <View style={globalStyles.textContainer}>
                <CollapsibleGroup header={"Hours of Operation"} headerStyle={globalStyles.title}>
                    <View style={globalStyles.textGroup}>
                        <Text style={globalStyles.text}><Text style={{ fontWeight: 'bold' }}>Mon - Fri:</Text> 9am - 12pm & 5:30pm - 8:30pm</Text>
                        <Text style={globalStyles.text}><Text style={{ fontWeight: 'bold' }}>Sat, Sun & All Public Holidays:</Text> 9am - 8:30pm</Text>
                        <Text style={globalStyles.text}><Text style={{ fontWeight: 'bold' }}>Religious Holidays & Special Occasions:</Text> 9am - 9pm</Text>
                        <Text style={[globalStyles.text, { fontWeight: 'bold' }]}>{'\n'}Last Archana is performed at 8:00 PM.</Text>
                    </View>
                </CollapsibleGroup>
                <CollapsibleGroup header={"Contact Information"} headerStyle={globalStyles.title}>
                    <View style={globalStyles.textGroup}>
                        <Text style={[globalStyles.text, { fontWeight: 'bold' }]}>Sri Venkateswara Temple and Cultural Center{'\n'}</Text>
                        <LabelledText label="Phone:" textStyle={globalStyles.text}>(248) 449-9049</LabelledText>
                        <LabelledText label="Email:" textStyle={globalStyles.text}>eo@www.svtemplemi.org</LabelledText>
                        <LabelledText label="Mailing Address:" textStyle={globalStyles.text}>26233 Taft Rd{'\n'}Novi, MI 48374</LabelledText>
                    </View>
                </CollapsibleGroup>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300,
        alignSelf: 'center',
    },
});

export default ContactPage;
