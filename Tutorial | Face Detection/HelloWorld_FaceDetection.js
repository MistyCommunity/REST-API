misty.Debug("starting skill helloworld_facedetection");

// Register for face detection event
misty.RegisterEvent("FaceDetection", "ComputerVision", 250);
// Timer event cancels the skill
// if no face is detected after 15 seconds
misty.RegisterTimerEvent("FaceDetectionTimeout", 15000);

misty.StartFaceDetection();

// FaceDetection event callback
function _FaceDetection() {
    misty.Debug("Face detected!");
    // Play an audio clip
    misty.PlayAudioClip("005-OoAhhh.wav");
    // Change LED to white
    misty.ChangeLED(255, 255, 255);
    // Stop face detection
    misty.StopFaceDetection();
};

// FaceDetectionTimeout callback
function _FaceDetectionTimeout() {
    misty.Debug("face detection timeout called, it's taking too long...");

    // Change LED to black
    misty.ChangeLED(0, 0, 0);
    misty.StopFaceDetection();
};