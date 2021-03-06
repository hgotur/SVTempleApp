import React, { useEffect } from 'react';
import { View, Text, ScrollView, RefreshControl } from 'react-native';
import { connect } from 'react-redux';
import dayjs from 'dayjs';

import { getEventsPage } from '../redux/PageSlice';
import globalStyles from '../styles/globalStyle';
import Loading from '../components/UI/Loading';
import BulletItem from '../components/UI/BulletItem';
import Colors from '../styles/colors';
import CollapsibleGroup from '../components/UI/CollapsibleGroup';

const EventsPage = (props) => {
    const refreshEvents = () => {
        props.getEventsPage();
    };

    useEffect(() => {
        refreshEvents();
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
        <ScrollView
        style={globalStyles.body}
        refreshControl={
                <RefreshControl refreshing={false} onRefresh={refreshEvents} />
            }>
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
                                        { color: Colors.DarkGray },
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
                                        { color: Colors.DarkGray },
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
