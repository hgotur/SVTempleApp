import { parse } from 'node-html-parser';
import dayjs from 'dayjs';

export const getEventsFromHTML = (html) => {
    const root = parse(html);
    const calendarNode = root.querySelector('.fullcalendar');
    if (!calendarNode) {
        return {};
    }

    const dateNode = calendarNode.querySelector('.month_name');
    const curMonth = dayjs(dateNode.innerText, 'MMM YYYY');

    // eventful indicates that there is an event on the day
    // pre/post indicate that the cell refers to the previous/next month
    const dayNodes = calendarNode.querySelectorAll(
        '.eventful-pre, .eventful, .eventful-post',
    );
    const events = {};
    for (const dayNode of dayNodes) {
        let eventMonth = curMonth;
        if (dayNode.classNames.includes('eventful-pre')) {
            eventMonth = curMonth.subtract(1, 'month');
        } else if (dayNode.classNames.includes('eventful-post')) {
            eventMonth = curMonth.add(1, 'month');
        }

        const eventDate = eventMonth.add(
            parseInt(dayNode.removeWhitespace().firstChild.innerText, 10) - 1,
            'day',
        );
        events[eventDate] = dayNode
            .querySelector('ul')
            .querySelectorAll('li')
            .map((li) => li.querySelector('a').innerText);
    }

    return events;
};
