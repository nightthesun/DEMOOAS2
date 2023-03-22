window._ = require('lodash');

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
    //window.Popper = require('popper.js').default;
    window.$ = window.jQuery = require('jquery');
    window.bootstrap = require('bootstrap');
    window.Sortable = require('sortablejs').Sortable;
    require('jquery-sortablejs');
    require( 'pdfmake' );
    window.awn = require( 'awesome-notifications' );
    window.dt = require('datatables.net');
    //require('datatables.net-fixedcolumns');  
    window.JSZip = require( 'jszip' );   
    window.pdfMake = require('pdfmake/build/pdfmake.min.js'); 
    window.pdfFuentes = require('pdfmake/build/vfs_fonts.js');
    require('datatables.net-buttons/js/buttons.colVis.js' )();
    require('datatables.net-buttons/js/dataTables.buttons.js')();
    //require('datatables.net-buttons-bs5/js/buttons.bootstrap5.js')();
    require('datatables.net-buttons/js/buttons.flash.js' )();
    require('datatables.net-buttons/js/buttons.html5.js' )();
    require('datatables.net-buttons/js/buttons.print.js' )();
    //require( 'datatables.net-scroller' )();
    //require('./myJS/typeahead.js');

} catch (e) {}

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo';

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     forceTLS: true
// });

//import Echo from 'laravel-echo';

//window.io = require('socket.io-client');

/*window.Echo = new Echo({
    broadcaster: 'socket.io',
    //host: 'http://192.168.86.106:6001',
    host: `${window.location.hostname}:${window.laravelEchoPort}`,
    transports: ['websocket'],
});*/