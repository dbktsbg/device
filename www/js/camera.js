
function getCurrentAcceleration() 
{
    navigator.accelerometer.getCurrentAcceleration(onAccelerationSuccess, onError);
}

// onSuccess: Get a snapshot of the current acceleration
function onAccelerationSuccess(acceleration) 
{
    alert('Acceleration X: ' + acceleration.x + '<BR>' + 'Acceleration Y: ' + acceleration.y + '<BR>' + 'Acceleration Z: ' + acceleration.z + '<BR>');
}

// onError: Failed to get the acceleration
function onError() 
{
    alert("onError");
}
