import React, { useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import dayjs from 'dayjs';

import { getEventsPage } from '~/src/redux/PageSlice';
import globalStyles from '~/src/styles/globalStyle';
import Loading from '~/src/components/UI/Loading';
import BulletItem from '~/src/components/UI/BulletItem';
import CollapsibleGroup from '../components/UI/CollapsibleGroup';

const EventsPage = (props) => {
    useEffect(() => {
        props.getEventsPage();
    }, []);

    const { events, eventsInitialized } = props;

    if (!eventsInitialized) {
        return <Loading />;
    }

    const upcomingEvents = Object.keys(events).filter(
        (day) => !dayjs(day).isBefore(dayjs().startOf('day')),
    );

    const pastEvents = Object.keys(events)
        .filter((day) => dayjs(day).isBefore(dayjs().startOf('day')))
        .sort((day1, day2) => (dayjs(day1).isBefore(dayjs(day2)) ? 1 : -1));

    return (
        <ScrollView style={globalStyles.body}>
            <View style={globalStyles.textContainer}>
                <CollapsibleGroup
                    header="Upcoming Events"
                    headerStyle={globalStyles.title}
                    collapsed={false}>
                    {upcomingEvents.map((day) => (
                        <View style={globalStyles.textGroup} key={day}>
                            <Text style={globalStyles.boldText}>
                                {dayjs(day).format('ddd, MMM D')}
                            </Text>
                            {events[day].map((event) => (
                                <BulletItem
                                    key={`${day} ${event}`}
                                    textStyle={[
                                        globalStyles.text,
                                        { color: '#333' },
                                    ]}>
                                    {event}
                                </BulletItem>
                            ))}
                        </View>
                    ))}
                </CollapsibleGroup>
                <CollapsibleGroup
                    header="Past Events"
                    headerStyle={globalStyles.title}
                    collapsed={false}>
                    {pastEvents.map((day) => (
                        <View style={globalStyles.textGroup} key={day}>
                            <Text style={globalStyles.boldText}>
                                {dayjs(day).format('ddd, MMM D')}
                            </Text>
                            {events[day].map((event) => (
                                <BulletItem
                                    key={`${day} ${event}`}
                                    textStyle={[
                                        globalStyles.text,
                                        { color: '#333' },
                                    ]}>
                                    {event}
                                </BulletItem>
                            ))}
                        </View>
                    ))}
                </CollapsibleGroup>
            </View>
        </ScrollView>
    );
};

const mapStateToProps = (state) => state.pages;

const mapDispatchToProps = {
    getEventsPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(EventsPage);
