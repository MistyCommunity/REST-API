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

var ip = "<robot-ip-address>";
var subscribeMsg = {
  "Operation": "subscribe",
  "Type": "TimeOfFlight",
  "DebounceMs": 1000,
  "EventName": "FrontCenterTimeOfFlight",
  "ReturnProperty": null,
  "EventConditions": [
    {
      "Property": "SensorId",
      "Inequality": "=",
      "Value": "toffc"
    },
  ]
};

var unsubscribeMsg = {
  "Operation": "unsubscribe",
  "EventName": "FrontCenterTimeOfFlight",
};

var subMsg = JSON.stringify(subscribeMsg);
var unsubMsg = JSON.stringify(unsubscribeMsg);
var messageCount = 0;
var socket;

function startTimeOfFlight() {
    // Create a new websocket
    socket = new WebSocket("ws://" + ip + "/pubsub");
    // When the socket is open, subscribe to the event
    socket.onopen = function(event) {
      console.log("WebSocket opened.");
      socket.send(subMsg);
    };
    // Handle messages received from the server
    socket.onmessage = function(event) {
      var message = JSON.parse(event.data).message;
      messageCount += 1;
      console.log(message);
      if (messageCount == 10) {
        socket.send(unsubMsg);
        socket.close();
        console.log("Received 10 messages. Unsubscribing.")
      }
    };
    // Handle any errors that occur.
    socket.onerror = function(error) {
      console.log("WebSocket Error: " + error);
    };
    // Do something when the WebSocket is closed.
    socket.onclose = function(event) {
      console.log("WebSocket closed.");
    };
};

startTimeOfFlight();