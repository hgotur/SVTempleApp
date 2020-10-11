import React, { useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import dayjs from 'dayjs';

import { getEventsPage } from '~/src/redux/PageSlice';
import globalStyles from '~/src/styles/globalStyle';
import Loading from '~/src/components/UI/Loading';

const EventsPage = (props) => {
    useEffect(() => {
        props.getEventsPage();
    }, []);

    const { events, eventsInitialized } = props;

    if (!eventsInitialized) {
        return <Loading />;
    }

    return (
        <ScrollView>
            {Object.keys(events).map((day) => (
                <View key={day}>
                    <Text style={globalStyles.title}>
                        {dayjs(day).format('ddd MMM D')}
                    </Text>
                    {events[day].map((event) => (
                        <Text key={`${day} ${event}`} style={globalStyles.text}>
                            {event}
                        </Text>
                    ))}
                </View>
            ))}
        </ScrollView>
    );
};

const mapStateToProps = (state) => state.pages;

const mapDispatchToProps = {
    getEventsPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(EventsPage);
