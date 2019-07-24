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
*/

misty.Debug("Starting skill HelloWorld_ExternalRequest");

// Send a request to the APIXU API, using parameters from the skill's
// JSON meta file to fill out the key and city in the resource URL.
misty.SendExternalRequest(
    "GET",
    "http://api.apixu.com/v1/current.json?key="+_params.key+"&q="+_params.city
    )

// Parse the response data to get the current condition in _params.city
// and print this in a string to the dev console in the Skill Runner
// web page.
function _SendExternalRequest(data) {
    _data = JSON.parse(data.Result.ResponseObject.Data)
    _condition = _data.current.condition.text
    misty.Debug("Misty here! Just letting you know it's " + _condition + " in " + _params.city);
}