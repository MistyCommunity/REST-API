# Time of Flight Sample

*This example was last tested on `robotVersion 1.16.1.10505`*

This JavaScript sample demonstrates how to stream [`TimeOfFlight`](https://docs.mistyrobotics.com/misty-ii/robot/sensor-data/#timeofflight) event data to your web browser via Misty's WebSocket server.

Misty has eight time-of-flight (ToF) sensors:

* four outward-facing `Range` sensors (three in front, one in back) for obstacle detection
* four downward-facing `Edge` sensors (two in front, two in back) for cliff detection

This sample creates a subscription that streams data from Misty's front center `Range` ToF sensor. The subscription message uses *event conditions* to filter out data from the other ToF sensors.

## Running this code

To run this sample:

1. boot up Misty
2. replace the `ip` variable in the `tofApp.js` file with your own robot's IP address
3. open the `index.html` file in your web browser

The `index.html` web page runs the `tofApp.js` script to connect to Misty's WebSocket server and subscribe to ToF event messages. It then prints 10 ToF event messages to the developer console before ending the subscription and closing the connection.

For more information about streaming event data from Misty's WebSocket server, see the [Misty Robotics developer documentation](http://docs.mistyrobotics.com/misty-ii/rest-api/overview/#getting-live-data-from-misty).

---

**WARRANTY DISCLAIMER.**

* General. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, MISTY ROBOTICS PROVIDES THIS SAMPLE SOFTWARE “AS-IS” AND DISCLAIMS ALL WARRANTIES AND CONDITIONS, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, QUIET ENJOYMENT, ACCURACY, AND NON-INFRINGEMENT OF THIRD-PARTY RIGHTS. MISTY ROBOTICS DOES NOT GUARANTEE ANY SPECIFIC RESULTS FROM THE USE OF THIS SAMPLE SOFTWARE. MISTY ROBOTICS MAKES NO WARRANTY THAT THIS SAMPLE SOFTWARE WILL BE UNINTERRUPTED, FREE OF VIRUSES OR OTHER HARMFUL CODE, TIMELY, SECURE, OR ERROR-FREE.
* Use at Your Own Risk. YOU USE THIS SAMPLE SOFTWARE AND THE PRODUCT AT YOUR OWN DISCRETION AND RISK. YOU WILL BE SOLELY RESPONSIBLE FOR (AND MISTY ROBOTICS DISCLAIMS) ANY AND ALL LOSS, LIABILITY, OR DAMAGES, INCLUDING TO ANY HOME, PERSONAL ITEMS, PRODUCT, OTHER PERIPHERALS CONNECTED TO THE PRODUCT, COMPUTER, AND MOBILE DEVICE, RESULTING FROM YOUR USE OF THIS SAMPLE SOFTWARE OR PRODUCT.

Please refer to the Misty Robotics End User License Agreement for further information and full details: https://www.mistyrobotics.com/legal/end-user-license-agreement/

--- 

*Copyright 2020 Misty Robotics*<br>
*Licensed under the Apache License, Version 2.0*<br>
*http://www.apache.org/licenses/LICENSE-2.0*