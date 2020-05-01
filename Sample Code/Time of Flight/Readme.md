# Time of Flight Sample

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