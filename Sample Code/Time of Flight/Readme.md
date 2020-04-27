# Time of Flight Sample

This is a sample of JavaScript code used to retrieve information from the time of flight sensors via WebSockets. There are four time of flight sensors on Misty I: left, center, right, and back. The left, center, and right sensors are all located in the front. This sample code subscribes to the center time of flight sensor only.

To run this sample:

1. Replace the `ip` variable in the `tofApp.js` file with your own robot's IP address.
2. Open the `index.html` file in your web browser.

You can view messages from this app by opening the developer console in your web browser window.

For more information about streaming event data from Misty's WebSocket server, see the [Misty Robotics developer documentation](http://docs.mistyrobotics.com/misty-ii/rest-api/overview/#getting-live-data-from-misty).