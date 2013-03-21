
function InitializeAccelerometer() 
{

}

function getCurrentAcceleration() 
{
    navigator.accelerometer.getCurrentAcceleration(onAccelerationSuccess, onAccelerationFail);
}

function onAccelerationSuccess(acceleration) 
{
    alert('Acceleration X: ' + acceleration.x + '<BR>' + 'Acceleration Y: ' + acceleration.y + '<BR>' + 'Acceleration Z: ' + acceleration.z + '<BR>');
}

function onAccelerationFail(message) 
{
    alert('Failed because: ' + message);
}
