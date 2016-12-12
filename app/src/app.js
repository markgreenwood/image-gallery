import angular from 'angular';
import './css/main.css';
import components from './components';
import services from './services';

const app = angular.module('myApp', [ components, services ]);

const dev = 'http://localhost:3000/api';
app.value('apiUrl', dev);
app.factory(function() { return dev; });