//
//  AudioEncode.js
//
//  Created by Lyle Pratt, September 2011.
//  Updated Opt 2012 by Keenan Wyrobek for Cordova 2.1.0
//  Updated by Tomas Krones, January 2014 for Cordova 3.3.0
//  MIT licensed
//

// This class converts audio at a file path to M4A format

var exec = require("cordova/exec");

function AudioEncode() {}

AudioEncode.prototype.encodeAudio = function(originalSrc, successCallback, failCallback) {
    return exec(successCallback, failCallback, "AudioEncode", "encodeAudio", [originalSrc]);
};

module.exports = new AudioEncode();