import { Platform, Linking } from 'react-native';

const TEMPLE_LAT = 42.4826402;
const TEMPLE_LONG = -83.5013324;

class MapClient {
    async openMap() {
        const scheme = Platform.select({
            ios: 'maps:0,0?q=',
            android: 'geo:0,0?q=',
        });
        const latLng = `${TEMPLE_LAT},${TEMPLE_LONG}`;
        const label = 'Sri Venkateswara Temple & Cultural Center';
        const url = Platform.select({
            ios: `${scheme}${label}@${latLng}`,
            android: `${scheme}${latLng}(${label})`,
        });

        Linking.openURL(url);
    }
}

const mapClient = new MapClient();

export default mapClient;
