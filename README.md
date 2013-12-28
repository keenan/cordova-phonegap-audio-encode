## PhoneGap AudioEncode Plugin ##
 * by Lyle Pratt
 * Updated Oct 2012 by Keenan Wyrobek for Cordova 2.1.0
 * Updated November 2013 by John Croucher for Cordova 3.0
 * Updated January 2014 by Tomas Krones for Cordova 3.3

## About this Plugin ##

This plugin lets you easily convert WAV audio into M4A audio. It is useful when using Phonegap's audio capture or media recording functionality. Uploading WAV files on via cellular connections is not advised. M4A encoded files are 1/4 to 1/10 the size.

## Using the Plugin ##

The plugin creates a function at window.encodeAudio(originalSrc, success, fail) method.
 * originalSrc: (required) This is a string path to the local file to encode. This is typically the fullPath property of the entry passed to the success of a fileSystem.root.getFile call
 * success: (required) This function is called when the encoding has completed successfully. It will be called with the new m4ASource 
 * fail: (required) This function is called on encode failure and will be passed a statusCode.

Example:

		window.encodeAudio(pathToWavFile, success, fail);

		var success = function(newM4APath) {
			//Do something with your new encoded audio (upload it?  - see notes in Xcode example)
			console.log(newM4APath);
		}

		var fail = function(statusCode) {
			//Why did it fail? - look in the plug in for source of error codes.
			console.log(statusCode);
		}

See demo code for more details

## Adding the Plugin to your project ##

This plug in has been tested with Cordova/PhoneGap 3.3.0 and currently only supports iOS - has been tested on 5.1, 6.0, 6.1 & 7.0

1. Using Phonegap CLI, in terminal navigate to your projects root directory.
2. run `phonegap local plugin add https://github.com/wootwoot1234/cordova-phonegap-audio-encode.git`




## LICENSE ##

The MIT License

Copyright (c) 2011 Lyle Pratt

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

