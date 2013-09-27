//
//  AudioEncode.js
//
//  Created by Lyle Pratt, September 2011.
//    Updated Opt 2012 by Keenan Wyrobek for Cordova 2.1.0
//  MIT licensed
//


 // This class converts audio at a file path to M4A format

 window.encodeAudio = function(originalSrc, successCallback, failCallback) {

     cordova.exec(successCallback, 
                  failCallback, 
                  "AudioEncode",
                  "encodeAudio", 
                  [originalSrc]);
 };