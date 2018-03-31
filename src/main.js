import Vue from 'vue';
import './style.scss';

import VueRouter from 'vue-router';
import routes from './util/routes';

import VueResource from 'vue-resource';
import moment from 'moment-timezone';
moment.tz.setDefault("UTC");
// '$.....' is a developer convention to designate public api method. Same way with $http.
Object.defineProperty(Vue.prototype, '$moment', { get() { return this.$root.moment } });  

Vue.use(VueRouter);
Vue.use(VueResource);

import { checkFilter, setDay } from './util/bus';
const bus = new Vue();
Object.defineProperty(Vue.prototype, '$bus', { get() { return this.$root.bus } });

const router = new VueRouter({ routes });

new Vue({
    el: '#app',
    data: {
        genre: [],
        time: [],
        movies: [],
        moment,
        day: moment(),
        bus
    },
    created() {
        this.$http.get('/api').then(
            response => {
                this.movies = response.data;
            }
        );
        this.$bus.$on('check-filter', checkFilter.bind(this));
        this.$bus.$on('set-day', setDay.bind(this));
    },
    router

});

import { addClass, removeClass } from './util/helpers';

let mouseOverHandler = function(event) {
    let span = event.target.parentNode.getElementsByTagName('SPAN')[0];
    addClass(span, 'tooltip-show');
};

let mouseOutHandler = function(event) {
    let span = event.target.parentNode.getElementsByTagName('SPAN')[0];
    removeClass(span, 'tooltip-show');
};

Vue.directive('tooltip', {
    bind(el, bindings) {
        //console.log(el);
        let span = document.createElement('SPAN');
        let text = document.createTextNode('Seats available: 200');
        // adding classes to this can have cross-browser issues
        span.appendChild(text);
        addClass(span, 'tooltip');
        el.appendChild(span);
        let div = el.getElementsByTagName('DIV')[0];
        div.addEventListener('mouseover', mouseOverHandler);
        div.addEventListener('mouseout', mouseOutHandler);
        // 'touch...' is for mobile people
        div.addEventListener('touchstart', mouseOverHandler);
        div.addEventListener('touchend', mouseOutHandler);
    },
    unbind(el) {
        let div = el.getElementsByTagName('DIV')[0];
        div.removeEventListener('mouseover', mouseOverHandler);
        div.removeEventListener('mouseout', mouseOutHandler);
        div.removeEventListener('touchstart', mouseOverHandler);
        div.removeEventListener('touchend', mouseOutHandler);
    }
});