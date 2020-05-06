/*
*    Copyright 2018 Misty Robotics, Inc.
*    Licensed under the Apache License, Version 2.0 (the "License");
*    you may not use this file except in compliance with the License.
*    You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
*    Unless required by applicable law or agreed to in writing, software
*    distributed under the License is distributed on an "AS IS" BASIS,
*    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or 
implied.
*    See the License for the specific language governing permissions and
*    limitations under the License.
*
* 	 **WARRANTY DISCLAIMER.**
* 
* 	 * General. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, MISTY
* 	 ROBOTICS PROVIDES THIS SAMPLE SOFTWARE "AS-IS" AND DISCLAIMS ALL
* 	 WARRANTIES AND CONDITIONS, WHETHER EXPRESS, IMPLIED, OR STATUTORY,
* 	 INCLUDING THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
* 	 PURPOSE, TITLE, QUIET ENJOYMENT, ACCURACY, AND NON-INFRINGEMENT OF
* 	 THIRD-PARTY RIGHTS. MISTY ROBOTICS DOES NOT GUARANTEE ANY SPECIFIC
* 	 RESULTS FROM THE USE OF THIS SAMPLE SOFTWARE. MISTY ROBOTICS MAKES NO
* 	 WARRANTY THAT THIS SAMPLE SOFTWARE WILL BE UNINTERRUPTED, FREE OF VIRUSES
* 	 OR OTHER HARMFUL CODE, TIMELY, SECURE, OR ERROR-FREE.
* 	 * Use at Your Own Risk. YOU USE THIS SAMPLE SOFTWARE AND THE PRODUCT AT
* 	 YOUR OWN DISCRETION AND RISK. YOU WILL BE SOLELY RESPONSIBLE FOR (AND MISTY
* 	 ROBOTICS DISCLAIMS) ANY AND ALL LOSS, LIABILITY, OR DAMAGES, INCLUDING TO
* 	 ANY HOME, PERSONAL ITEMS, PRODUCT, OTHER PERIPHERALS CONNECTED TO THE PRODUCT,
* 	 COMPUTER, AND MOBILE DEVICE, RESULTING FROM YOUR USE OF THIS SAMPLE SOFTWARE
* 	 OR PRODUCT.
* 
* 	 Please refer to the Misty Robotics End User License Agreement for further
* 	 information and full details:
* 	 	https://www.mistyrobotics.com/legal/end-user-license-agreement/
*/


var ipAddress  = document.getElementById("ip-address");
var connect = document.getElementById("connect");
var start = document.getElementById("start");
var stop = document.getElementById("stop");
var resultsBox = document.getElementById("results");

var playAudioArg = {
  "AssetId": "s_Joy.wav",
};
var client;
var ip;
var msg = {
  "$id": "1",
  "Operation": "subscribe",
  "Type": "FaceRecognition",
  "DebounceMs": 100,
	"EventName": "FaceRecognition",
  "Message": ""
};
var message = JSON.stringify(msg);
var messageCount = 0;
var socket;

connect.onclick = function() {
  ip = validateIPAddress(ipAddress.value);
  if (!ip) {
    printToScreen("IP address needed.");
    return;
  }
  client = new LightClient(ip, 10000);
  client.GetCommand("device", function(data) {
    printToScreen("Connected to robot.");
    console.log(data);
  });
};

start.onclick = function() {
  if (!ip) {
    printToScreen("You must connect to a robot first.");
    return;
  }
  startFaceDetection();
};

stop.onclick = function() {
  stopFaceDetection();
};

function startFaceDetection() {
    //Create a new websocket, if one is not already open
    socket = socket ? socket : new WebSocket("ws://" + ip + "/pubsub");
    //When the socket is open, send the message
    socket.onopen = function(event) {
      printToScreen("WebSocket opened.");
      socket.send(message);
      client.PostCommand("faces/detection/start");
      printToScreen("Face detection started.");
    };
    // Handle messages received from the server
    socket.onmessage = function(event) {
      messageCount +=1;
      var msg = JSON.parse(event.data).message;
      console.log(msg);
      // Adjust the timing of the desired reaction based on
      // how frequently the face detection messages come through
      if (messageCount % 5 === 0) {
        printToScreen("Face detected.");
        var payload = JSON.stringify(playAudioArg);
        client.PostCommand("audio/play", payload);
      }
    };
    // Handle any errors that occur.
    socket.onerror = function(error) {
      console.log("WebSocket Error: " + error);
    };
    // Do something when the WebSocket is closed.
    socket.onclose = function(event) {
      printToScreen("WebSocket closed.");
    };
}

function validateIPAddress(ip) {
	var ipNumbers = ip.split(".");
	var ipNums = new Array(4);
	if (ipNumbers.length !== 4) {
		return "";
	}
	for (let i = 0; i < 4; i++) {
		ipNums[i] = parseInt(ipNumbers[i]);
		if (ipNums[i] < 0 || ipNums[i] > 255) {
			return "";
		}
	}
	return ip;
}

function stopFaceDetection() {
  client.PostCommand("faces/detection/stop");
  printToScreen("Face detection stopped.");
  socket.close();
  messageCount = 0;
}

function printToScreen(msg) {
  resultsBox.innerHTML += (msg + "\n");
}
