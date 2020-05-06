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

Most of the examples in this repository run from an `.html` page that you load in your web browser to send Misty commands and receive event data over your local Wi-Fi network. These samples require you to update the `.html` file with your robot's IP address before they can run. You can then launch the application by opening the `.html` page in your web browser. To view debug messages and other information from the robot and the application, open the development console in your browser window.

---

*Find something that doesn't work? Help us fix it by creating an issue right here in the REST-API repository! Along with a brief description of the issue, let us know what operating system you're using and what version of Misty's software you're working with. If you can, write down the steps to reproduce the issue, and be sure to include any relevant screenshots or error messages. Sharing this information helps us discover the root cause more quickly.* 

---

**WARRANTY DISCLAIMER.**

* General. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, MISTY ROBOTICS PROVIDES THIS SAMPLE SOFTWARE “AS-IS” AND DISCLAIMS ALL WARRANTIES AND CONDITIONS, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, QUIET ENJOYMENT, ACCURACY, AND NON-INFRINGEMENT OF THIRD-PARTY RIGHTS. MISTY ROBOTICS DOES NOT GUARANTEE ANY SPECIFIC RESULTS FROM THE USE OF THIS SAMPLE SOFTWARE. MISTY ROBOTICS MAKES NO WARRANTY THAT THIS SAMPLE SOFTWARE WILL BE UNINTERRUPTED, FREE OF VIRUSES OR OTHER HARMFUL CODE, TIMELY, SECURE, OR ERROR-FREE.
* Use at Your Own Risk. YOU USE THIS SAMPLE SOFTWARE AND THE PRODUCT AT YOUR OWN DISCRETION AND RISK. YOU WILL BE SOLELY RESPONSIBLE FOR (AND MISTY ROBOTICS DISCLAIMS) ANY AND ALL LOSS, LIABILITY, OR DAMAGES, INCLUDING TO ANY HOME, PERSONAL ITEMS, PRODUCT, OTHER PERIPHERALS CONNECTED TO THE PRODUCT, COMPUTER, AND MOBILE DEVICE, RESULTING FROM YOUR USE OF THIS SAMPLE SOFTWARE OR PRODUCT.

Please refer to the Misty Robotics End User License Agreement for further information and full details: https://www.mistyrobotics.com/legal/end-user-license-agreement/

--- 

*Copyright 2020 Misty Robotics*<br>
*Licensed under the Apache License, Version 2.0*<br>
*http://www.apache.org/licenses/LICENSE-2.0*
