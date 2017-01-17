; 'use strict';
import styles from '../styles/app.scss'; // Apply styling
import mockData from './mock-data.js';

const log = console.log.bind(console);
const error = console.error.bind(console);

log('App running');

const REST_API = 'https://codepen.io/jobs.json';
const Markdown = new showdown.Converter();
const CACHE_DURATION = 60 * 60 * 1000; /* msec, cache time one hour  */

class AppService {
  constructor($q, $http) {
    this._$http = $http;
    this._$q = $q;
  }
  getJobs() {
    return this._$q(function (resolve, reject) {
      // mock data
      resolve({ data: { jobs: mockData } });
    });
    //return this._$http.get(REST_API);
  }

  getJobsReadThroughCache() {
    if (window.localStorage) {
      const cachedData = localStorage.getItem('jobs');
      const cachedTime = localStorage.getItem('cache-time');
      if (cachedTime) {
        const time = JSON.parse(cachedTime).time;
        const cachedDate = new Date(time);
        if (((new Date) - cachedDate) < CACHE_DURATION) {
          log('cached data');
          return JSON.parse(cachedData);
        }
      }
    }

    this.getJobs()
      .then(response => {
        if (response && response.data && response.data.jobs) {
          if (window.localStorage) {
            localStorage.setItem('cache-time', JSON.stringify({
              time: new Date().getTime()
            }));
            localStorage.setItem('jobs', JSON.stringify(response.data.jobs));
          }
          log('live data');
          return response.data.jobs;
        }
        return mockData;
      })
      .catch(err => {
        return mockData;
      });
  }
}
AppService.$inject = ['$q', '$http'];

class AppController {
  constructor($scope, AppService) {
    this._AppService = AppService;
    this.HUD = 'Jobs';
    this.isDetailsActive = false;
    this.isContentActive = false;
    this.jobs = [];
    this.loadJobs();
    this.selectJob = function selectJob(index) {

      if(window.innerWidth < 600){
        this.isDetailsActive = true;
      }
      else{
        this.isContentActive = true;
      }
      
      this.details = 'no data';
      if (this.jobs.length) {
        let job = this.jobs[index];
        this.companyName = job.company_name;
        this.details = Markdown.makeHtml(job.description || '');
      }
    }
  }
  loadJobs() {
    this.jobs = this._AppService.getJobsReadThroughCache();
  }
}
AppController.$inject = ['$scope', 'AppService'];

angular.module('app', ['ngSanitize'])
  .service('AppService', AppService)
  .controller('AppController', AppController);

export class App {

}

