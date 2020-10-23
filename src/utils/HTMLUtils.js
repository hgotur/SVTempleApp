import { parse } from 'node-html-parser';
import { AllHtmlEntities } from 'html-entities';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);

const entities = new AllHtmlEntities();

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

const getHeadline = (node) => {
    const textNode = node.querySelector('strong');
    if (!textNode || !textNode.firstChild || !textNode.firstChild.innerText) {
        return null;
    }

    return entities.decode(
        textNode.firstChild.innerText.replace('&#8230;', ''),
    );
};

const getImage = (root, index) => {
    if (index >= root.childNodes.length) {
        return null;
    }

    const imgNode = root.childNodes[index].querySelector("img");
    if (!imgNode) {
        return null;
    }

    const regex = /src="([^\"]+)\"/;
    return regex.exec(imgNode.rawAttrs)[1];
};

export const getHomePageHeadlinesFromHTML = (html) => {
    const root = parse(html).removeWhitespace();
    const headlineIndices = [];

    // stop collecting headlines at "PAST EVENTS:"
    const stopIndex = root.childNodes.findIndex(
        (node, index) =>
            node.tagName == 'P' &&
            node.firstChild &&
            node.firstChild.tagName == 'SPAN' &&
            node.firstChild.firstChild.tagName == 'STRONG' &&
            node.firstChild.firstChild.innerText.includes('PAST EVENTS'),
    );

    // collect headline indices
    root.childNodes.forEach((node, index) => {
        if (
            index < stopIndex &&
            node.tagName == 'P' &&
            node.firstChild &&
            node.firstChild.tagName == 'STRONG'
        ) {
            headlineIndices.push(index);
        }
    });

    // collect headlines and associated images
    return headlineIndices.map((index) => {
        const node = root.childNodes[index];
        return [getHeadline(node), getImage(root, index + 1)];
    });
};
