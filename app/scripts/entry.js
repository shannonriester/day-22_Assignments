import $ from 'jquery';
import session from './session';
import $login from './views/login';

import renderMessages from './displayMessages.js';
import clearAPI from './delete.js';

$('#message-page').css('display', 'none');
console.log('!READY!');
// clearAPI();

$(window).on('hashchange', router);

router();
