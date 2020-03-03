# REST API

This folder includes the full code samples for the REST API tutorials hosted in the Misty Robotics [developer documentation](https://docs.mistyrobotics.com).

These examples are up-to-date with the current version of Misty's software. To check if your robot is up-to-date, see the [latest release notes](https://community.mistyrobotics.com/c/announcements/releases) in the Misty Community forums.

* __Changing Misty's LED__ - The full code sample from the tutorial on [Changing Misty's LED](https://docs.mistyrobotics.com/misty-ii/rest-api/tutorials/#changing-misty-s-led).
* __Exploring Computer Vision__ - The full code sample from the tutorial on [Exploring Computer Vision](https://docs.mistyrobotics.com/misty-ii/rest-api/tutorials/#exploring-computer-vision). 
* __Taking Pictures__ - The full code sample from the [Taking Pictures](https://docs.mistyrobotics.com/misty-ii/rest-api/tutorials/#taking-pictures) tutorial.
* __Using Sensors, WebSockets, and Locomotion__ - The full code sample from the tutorial on [Using Sensors, WebSockets, and Locomotion](https://docs.mistyrobotics.com/misty-ii/rest-api/tutorials/#using-sensors-websockets-and-locomotion).

To run this code, you must first use the green __Clone or download__ button to copy the files onto your desktop. This ensures you have the **Tools** directory in the appropriate folder relative to the rest of the code in the repository.

Most of the robot applications in this repository run in an `.html` page to send commands and receive data from Misty from your web browser. The application code is placed in JavaScript `<script>` tags, and when the web page loads, the application communicates with Misty over your local area network connection. Most of these samples require you to update the `.html` file with your robot's IP address before they can run. Then you can start the application by opening the `.html` file in your web browser. To see debug messages and other information from the robot and the application, open the development console in your browser window. 