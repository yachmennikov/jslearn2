'use strict';

import 'nodelist-foreach-polyfill';
import 'babel-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);
import 'formdata-polyfill';
import 'es6-promise';
import 'fetch-polyfill';


import countTimer from './modules/timer';
import toggleMenu from './modules/menu';
import togglePopUp from './modules/popup';
import tabs from './modules/tabs';
import slider from './modules/slider';
import changeImg from './modules/changeImg';
import calc from './modules/calculator';
import sendForm from './modules/sendForm';

// timer
countTimer('03 october 2019');

// burger menu
toggleMenu();

// popUp
togglePopUp();

// Tabs
tabs();

// Slider
slider();

// change image
changeImg();

// calculator
calc();

// send form
sendForm();