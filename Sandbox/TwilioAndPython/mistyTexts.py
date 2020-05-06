# /**********************************************************************
#     Copyright 2020 Misty Robotics
#     Licensed under the Apache License, Version 2.0 (the "License");
#     you may not use this file except in compliance with the License.
#     You may obtain a copy of the License at
#         http://www.apache.org/licenses/LICENSE-2.0
#     Unless required by applicable law or agreed to in writing, software
#     distributed under the License is distributed on an "AS IS" BASIS,
#     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#     See the License for the specific language governing permissions and
#     limitations under the License.

#     **WARRANTY DISCLAIMER.**

#     * General. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, MISTY
#     ROBOTICS PROVIDES THIS SAMPLE SOFTWARE "AS-IS" AND DISCLAIMS ALL
#     WARRANTIES AND CONDITIONS, WHETHER EXPRESS, IMPLIED, OR STATUTORY,
#     INCLUDING THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
#     PURPOSE, TITLE, QUIET ENJOYMENT, ACCURACY, AND NON-INFRINGEMENT OF
#     THIRD-PARTY RIGHTS. MISTY ROBOTICS DOES NOT GUARANTEE ANY SPECIFIC
#     RESULTS FROM THE USE OF THIS SAMPLE SOFTWARE. MISTY ROBOTICS MAKES NO
#     WARRANTY THAT THIS SAMPLE SOFTWARE WILL BE UNINTERRUPTED, FREE OF VIRUSES
#     OR OTHER HARMFUL CODE, TIMELY, SECURE, OR ERROR-FREE.
#     * Use at Your Own Risk. YOU USE THIS SAMPLE SOFTWARE AND THE PRODUCT AT
#     YOUR OWN DISCRETION AND RISK. YOU WILL BE SOLELY RESPONSIBLE FOR (AND MISTY
#     ROBOTICS DISCLAIMS) ANY AND ALL LOSS, LIABILITY, OR DAMAGES, INCLUDING TO
#     ANY HOME, PERSONAL ITEMS, PRODUCT, OTHER PERIPHERALS CONNECTED TO THE PRODUCT,
#     COMPUTER, AND MOBILE DEVICE, RESULTING FROM YOUR USE OF THIS SAMPLE SOFTWARE
#     OR PRODUCT.

#     Please refer to the Misty Robotics End User License Agreement for further
#     information and full details:
#         https://www.mistyrobotics.com/legal/end-user-license-agreement/
# **********************************************************************/

#Make sure you have mistyPy installed --> pip install mistyPy (https://github.com/MistyCommunity/Wrapper-Python)
#Make sure you have twilio installed --> pip install twilio (https://github.com/twilio/twilio-python)

import mistyPy
from twilio.rest import Client 
import time

#Twilio credentials
account_sid = '' 
auth_token = '' 
twilio_activePhoneNumber = ''
twilio_DestinationPhoneNumber = ''

def sendTextMessage(message, receipient_Number):
    '''
    input: message, a string with the message you want to send via Text Message
    output: If the message was successfully sent or not. 

    NOTE: You must input your Twilio account_sid, auth_token, and twilio_activePhoneNumber 
    for this function to work correctly. 
    To get a phone number, follow these instructions: https://support.twilio.com/hc/en-us/articles/223135247-How-to-Search-for-and-Buy-a-Twilio-Phone-Number-from-Console
    '''
    

    #Set up connection
    client = Client(account_sid, auth_token) 
    
    #send request
    message = client.messages.create(from_=twilio_activePhoneNumber, body=message, to=receipient_Number) 
    
    #Unncomment for debugging
    #print(message.sid)

    return True

def unknownPerson(robot):
    '''
    We'll call this function when we encounter an uknown person
    
    NOTE: The assets on your robot will probably be different.
    Be sure to check what assets are on your robot with
    /api/images GET call (Populate Image list on API Explorer)
    '''
    robot.changeImage("Confused.jpg")
    robot.playAudio("045-Wah.wav")
    time.sleep(5)
    robot.changeImage("Content.jpg")

def knownPerson(robot):
    '''
    We'll call this function when we encounter an uknown person
    
    NOTE: The assets on your robot will probably be different.
    Be sure to check what assets are on your robot with
    /api/images GET call (Populate Image list on API Explorer)
    '''
    robot.changeImage("Love.jpg")
    robot.playAudio("french.wav")
    time.sleep(5)

#Connect to Misty, be sure to place your robots IP Address here
robot = mistyPy.Robot("<PUT ROBOT IP ADDRESS HERE>")

#Reset Misty's base pose and expression
robot.moveHead(0,-5,0)
robot.changeImage("Content.jpg") #Make sure your robot has this asset!

#Subscribe to Facial Recognition
robot.subscribe("FaceRecognition")

#Watch for Data coming trhough Web Sockets
prevData = None
lastSentMessage = None

#This loop will run and watch for facial recognition events until 
print("\n Ctrl+C to exit loop \n")
while True:
    #retrieve the most recent data from the web socket
    data = robot.faceRec()
    
    #The web socket will repeat the last response until there is new Data
    if prevData and prevData == data:
        continue

    #Misty willl return the personName, Distance in mm, and elevation in radians
    #Here we will check if there is data we care about
    if len(data) > 1 and "personName" in data.keys():
        name = data["personName"]  

        #useful for debugging
        #print(data)

        if name != 'unknown person':
            #If the person is known, the response will include the person's name!
            knownPerson(robot)
            #Let's send ourselve a text message that our robot saw one of our friends (But let's be careful not to spam.)
            if not lastSentMessage or time.time() - lastSentMessage > 60:
                sendTextMessage("Hey! I just saw " + name + " at the office!", twilio_DestinationPhoneNumber)
                lastSentMessage = time.time()
        else:
            #If the person is not known, the response will be 'unknown person'
            unknownPerson(robot)
    
    #The web socket will return the last data available, let's check that so we don't needlessly do things. 
    prevData = data

#####################

