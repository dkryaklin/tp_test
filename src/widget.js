import './css/widget_main.css';
import './css/widget_media.css';

import calendarIcon from './images/calendar.svg';

import * as utils from './utils';

const queryParams = utils.getQueryParams(document.location.search);

const bodyElem = document.querySelector('body');

if (queryParams.buttonColor && utils.validateColor(`#${queryParams.buttonColor}`)) {
    const buttonColor = `#${queryParams.buttonColor}`;
    const buttonSearch = document.querySelector('.button_search');

    buttonSearch.style.backgroundColor = buttonColor;
    buttonSearch.style.borderBottomColor = utils.shadeColor(buttonColor, -0.2);
}

if (queryParams.backColor && utils.validateColor(`#${queryParams.backColor}`)) {
    const backColor = `#${queryParams.backColor}`;
    bodyElem.style.backgroundColor = backColor;
    
    const encodedIcon = window.btoa(calendarIcon.replace('fill="#4990E2"', `fill="${backColor}"`));
    const calendarButtons = document.querySelectorAll('.icon_wrapper');

    for (let i = 0; i < calendarButtons.length; i++) {
        calendarButtons[i].style.backgroundImage = `url(data:image/svg+xml;base64,${encodedIcon})`;
    }
}

if (queryParams.textColor && utils.validateColor(`#${queryParams.textColor}`)) {
    const textColor = `#${queryParams.textColor}`;
    bodyElem.style.color = textColor;
}

bodyElem.style.display = 'block';