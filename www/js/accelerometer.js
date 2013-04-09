
var AccelerationSensitivity = 1.0;
var FrequencyInMiliseconds = 1000;
var PreviousAccelerationX = 0;
var PreviousAccelerationY = 0;
var PreviousAccelerationZ = 0;

//var AccelerationXMax = 0;
//var AccelerationXMin = 0;
//var AccelerationYMax = 0;
//var AccelerationYMin = 0;
//var AccelerationZMax = 0;
//var AccelerationZMin = 0;

var watchID = null;

function InitializeAccelerometer() 
{
    startWatch();
}

//function getCurrentAcceleration() 
//{
//    navigator.accelerometer.getCurrentAcceleration(onAccelerationSuccess, onAccelerationFail);
//}

//function onAccelerationSuccess(acceleration) 
//{
//    alert('Acceleration X: ' + acceleration.x + '<BR>' + 'Acceleration Y: ' + acceleration.y + '<BR>' + 'Acceleration Z: ' + acceleration.z + '<BR>');
//}

//function onAccelerationFail(message) 
//{
//    alert('Failed because: ' + message);
//}

function startWatch() 
{
    var options = { frequency: FrequencyInMiliseconds };
    watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
}

function stopWatch() 
{
    if (watchID) 
    {
        navigator.accelerometer.clearWatch(watchID);
        watchID = null;
    }
}

function onSuccess(acceleration) 
{
    var IsDeviceQuickTilted = false;
    if ( Math.abs(PreviousAccelerationX - acceleration.x) > AccelerationSensitivity) { IsDeviceQuickTilted = true; }
    if ( Math.abs(PreviousAccelerationY - acceleration.y) > AccelerationSensitivity) { IsDeviceQuickTilted = true; }
    if ( Math.abs(PreviousAccelerationZ - acceleration.z) > AccelerationSensitivity) { IsDeviceQuickTilted = true; }

//    if (acceleration.x > AccelerationXMax) { IsDeviceQuickTilted = true; }
//    if (acceleration.x < AccelerationXMin) { IsDeviceQuickTilted = true; }
//    if (acceleration.y > AccelerationYMax) { IsDeviceQuickTilted = true; }
//    if (acceleration.y < AccelerationYMin) { IsDeviceQuickTilted = true; }
//    if (acceleration.z > AccelerationZMax) { IsDeviceQuickTilted = true; }
//    if (acceleration.z < AccelerationZMin) { IsDeviceQuickTilted = true; }

    if (IsDeviceQuickTilted == true) 
    {

        // wake-up screen...
        IsDeviceQuickTilted = false;
        PreviousAccelerationX = acceleration.x
        PreviousAccelerationY = acceleration.y
        PreviousAccelerationZ = acceleration.z
//        AccelerationXMax = acceleration.x + (AccelerationSensitivity / 2);
//        AccelerationXMin = acceleration.x - (AccelerationSensitivity / 2);
//        AccelerationYMax = acceleration.y + (AccelerationSensitivity / 2);
//        AccelerationYMin = acceleration.y - (AccelerationSensitivity / 2);
//        AccelerationZMax = acceleration.z + (AccelerationSensitivity / 2);
//        AccelerationZMin = acceleration.z - (AccelerationSensitivity / 2);

        var element = document.getElementById('accelerometer');

        element.innerHTML = 'Acceleration X: ' + acceleration.x + '<br />' +
                                        'Acceleration Y: ' + acceleration.y + '<br />' +
                                        'Acceleration Z: ' + acceleration.z + '<br />' +
                                        'Timestamp: ' + acceleration.timestamp + '<br />';

        //navigator.notification.vibrate(1000);
        navigator.notification.beep();

    }
}

function onError() 
{
    element.innerHTML = 'ERROR: ' + watchID + '<br />';
}

