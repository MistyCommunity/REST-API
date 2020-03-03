# Misty II REST API

This repository provides runnable sample code, tutorials, tools, and sandbox projects to help you develop robot applications with Misty's REST API.

For different examples of how to use Misty's JavaScript and .NET SDKs, see the JavaScript-SDK and .NET-SDK repositories.

## Using this repository

Use the green __Clone or download__ button to create a local version of this repository on your desktop. This ensures you have the **Tools** directory in the appropriate folder relative to the rest of the code in the repository.

This repository includes four directories:

* **Sample Code** - Runnable examples that demonstrate how to perform different tasks with Misty's REST API and WebSocket data streams.
* **Tutorials** - Complete, runnable robot applications from the written tutorials published in the Misty Robotics developer documentation.
* **Sandbox** - A collection of robot applications that are not actively maintained by the Misty team. Sandbox code may not be up-to-date with Misty's current software.
* **Tools** - JavaScript helper libraries that makes it easier to send commands and receive event messages with sensor data and other information from Misty's WebSocket connections. (Most of the examples in this repository include a reference to the library at `Tools/javascript/lightSocket.js`. You must have the **Tools** folder saved at the appropriate relative path in order for these applications to work.)

Most of the robot applications in this repository run in an `.html` page to send commands and receive data from Misty from your web browser. The JavaScript application code is placed in `<script>` tags, and when the web page loads, the application communicates with Misty over your local area network connection. Most of these samples require you to update the `.html` file with your robot's IP address before they can run. Then you can start the application by opening the `.html` file in your web browser. To see debug messages and other information from the robot and the application, open the development console in your browser window. 

---

*Find something that doesn't work? Help us fix it by creating an issue right here in the REST-API repository! Along with a brief description of the issue, let us know what operating system you're using and what version of Misty's software you're working with. If you can, write down the steps to reproduce the issue, and be sure to include any relevant screenshots or error messages. Sharing this information helps us discover the root cause more quickly.* 
