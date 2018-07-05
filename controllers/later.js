

const express = require('express');
let Promise = require('bluebird');
let fs = require('fs');
// const db = require('../models/sqlSchema');
// const db1 = require('../models/mongoSchema');
let googleMapsClient = require('@google/maps').createClient({
    key: process.env.GOOGLE_MAP_API_KEY,
    Promise: Promise
    });

let riders = ['rider1', 'rider2', 'rider3', 'rider4', 'rider5'];

/* GET home page. */
exports.initializeMap = function() {
    console.log("hello2")
    return new Promise((resolve, reject) => {

        pinData()
        .then(response => {
            console.log("12", response)
            resolve(response)
        })
        .catch(err => {
            reject(err)
        })


    // googleMapsClient.geocode({
    //     address: '1600 Amphitheatre Parkway, Mountain View, CA'
    // }).asPromise()
    // .then((response) => {
    //     resolve(response.json.results);
    //     // console.log(response.json.results);
    // })
    // .catch(err => {
    //     reject(err)
    //     // console.log(err);
    // });
        
})
};

function pinData() {
    // return new Promise((resolve, reject) => {
    var icons = {
      man: {
        icon: fs.readFileSync('../images/man.png')
      },
      drop: {
        icon: fs.readFileSync('../images/drop.png')
      },
      cab: {
        icon: fs.readFileSync('../images/cab.png')
      }
    };


    console.log("icons", icons)


    var features = [
      {
        position: new google.maps.LatLng(55.770637, 37.576657),
        type: 'man'
      }, {
        position: new google.maps.LatLng(55.776490, 37.611891),
        type: 'man'
      }, {
        position: new google.maps.LatLng(55.765628, 37.617041),
        type: 'man'
      }, {
        position: new google.maps.LatLng(55.767125, 37.511923),
        type: 'man'
      }, {
        position: new google.maps.LatLng(55.795217, 37.498533),
        type: 'man'
      }, {
        position: new google.maps.LatLng(55.772436, 37.481538),
        type: 'drop'
      }, {
        position: new google.maps.LatLng(55.789909, 37.660410),
        type: 'drop'
      }, {
        position: new google.maps.LatLng(55.751233, 37.616123),
        type: 'drop'
      }, {
        position: new google.maps.LatLng(55.776490, 37.611891),
        type: 'drop'
      }, {
        position: new google.maps.LatLng(55.725526, 37.728389),
        type: 'drop'
      }, {
        position: new google.maps.LatLng(55.751233, 37.616123),
        type: 'cab'
      }, {
        position: new google.maps.LatLng(55.772436, 37.481538),
        type: 'cab'
      }, {
        position: new google.maps.LatLng(55.789909, 37.660410),
        type: 'cab'
      }, {
        position: new google.maps.LatLng(55.751233, 37.616123),
        type: 'cab'
      }, {
        position: new google.maps.LatLng(55.765628, 37.617041),
        type: 'cab'
      }, {
        position: new google.maps.LatLng(55.770637, 37.576657),
        type: 'cab'
      }
    ];

    return features;
    
    // })
}