
var watchID = null;
var PreviousX = 0;
var PreviousY = 0;
var PreviousZ = 0;

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
    var options = { frequency: 500 };
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
    
    var element = document.getElementById('accelerometer');

    if (PreviousX != acceleration.x || PreviousY != acceleration.y || PreviousZ != acceleration.z) 
    {

        // wake-up screen...
        PreviousX = acceleration.x;
        PreviousY = acceleration.y;
        PreviousZ = acceleration.z;

        element.innerHTML = 'Acceleration X: ' + acceleration.x + '<br />' +
                                        'Acceleration Y: ' + acceleration.y + '<br />' +
                                        'Acceleration Z: ' + acceleration.z + '<br />' +
                                        'Timestamp: ' + acceleration.timestamp + '<br />';
    }
}

function onError() 
{
    element.innerHTML = 'ERROR: ' + watchID + '<br />';
}

