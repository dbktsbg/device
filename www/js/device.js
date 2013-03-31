
function GetDeviceConfiguration() 
{

    var ARCloudWebAPIAddress = "http://localhost:61365/api/devicecors";

    $.ajax(
                {
                    url: ARCloudWebAPIAddress,
                    type: "GET",
                    success:
                                function (result) {
                                    alert("result.length=" + result.length);
                                    var text = "";
                                    for (var i = 0; i < result.length; i++) {
                                        if (i > 0) text = text + ", ";
                                        text = text + result[i];
                                    }
                                    $("#DeviceConfigurationContainer").text(text);
                                },
                    error:
                                function (jqXHR, textStatus, errorThrown) {
                                    alert("textStatus=" + textStatus);
                                    $("#DeviceConfigurationContainer").text(textStatus);
                                }
                }
            );

    //var MyURL = "http://127.0.0.1:81/api/device";
    //var DataType = "json";
    //var DeviceSN = 123456;

    //alert("GetDeviceConfiguration() - START");

    //$.getJSON("http://127.0.0.1:81/api/device", function (data) { alert("Title: " + data.Title); });

    //$.getJSON("http://127.0.0.1:81/api/device/?callback=?", function (data) { alert("Title: " + data.Title); });  

    
    //childBrowser.showWebPage("www.google.com")
    
    //alert("$.get(" + MyURL + ", " + DeviceSN + ", function (data, textStatus) { GetDeviceConfigurationComplete(data); }, 'json');");
        //$.get(MyURL, DeviceSN, function (data, textStatus) { GetDeviceConfigurationComplete(data); }, 'json');

    //$.getJSON(MyURL, function (data) { alert("getJSON() WORKS !!!"); });

//    $.ajax({
//        type: 'GET',
//        url: MyURL,
//        async: false,
//        jsonpCallback: 'jsonCallback',
//        contentType: "application/json",
//        dataType: 'jsonp',
//        success: function (json) { GetDeviceConfigurationComplete(data); },
//        error: function (e) { console.log(e.message); }
//    });

//    $.ajax(
//                {
//                    url: MyURL,
//                    data: DeviceSN,
//                    success: GetDeviceConfigurationComplete,
//                    dataType: DataType
//                }
//            );

//    alert("$.post(" + MyURL + ", " + DeviceSN + ", function (data, textStatus) { GetDeviceConfigurationComplete(data); }, 'json');");
//    $.post(MyURL, DeviceSN, function (data, textStatus) { GetDeviceConfigurationComplete(data); }, "json");

    
//    $.post
//            (
//            MyURL,
//            DeviceSN,
//            function () { alert("ABC!"); },
//            "json"
//            );

//    $.ajax(
//                {
//                    type: "POST",
//                    url: MyURL,
//                    data: DeviceSN,
//                    success: GetDeviceConfigurationComplete,
//                    dataType: DataType
//                }
//            );

//    $.ajax(
//            {
//                type: "POST",
//                url: "http://127.0.0.1:81/DeviceAdmin/GetDeviceAsJSON",
//                data: "12345",
//                datatype: "JSON",
//                contentType: "application/json; charset=utf-8",
//                success: function (returndata) { alert("SUCCESS!"); }
//            }
//        );

//    $.post("http://127.0.0.1:81/DeviceAdmin/GetDeviceAsJSON", "12345", function (response) { alert("Hi!"); } );

    //$.getJSON("http://127.0.0.1:81/DeviceAdmin/GetDeviceAsJSON?jsoncallback=?", function (data) { alert("Hi!"); });

//    $.ajax(
//                { 
//                     url: http://url.com 
//                     type: "GET", 
//                     data: 'method=doMobileSearch', 
//                     dataType: 'jsonp', 
//                     jsonp: 'callback', 
//                     jsonpCallback: 'callbackFunction', 
//                     success: function(){ } 
//                }


//    $.ajax(
//                {
//                 type: 'GET',
//                 url: "http://127.0.0.1:81/DeviceAdmin/GetDeviceAsJSON",
//                 crossDomain: true,
//                 contentType: "application/json; charset=utf-8",
//                 data: { TargetDeviceID: 1234 },
//                 dataType: "jsonp",
//                 success: function(msg) { alert("SUCCESS!"); },
//                 error: function(xhr, status, error) { alert("ERROR!"); },
//                 async: false,
//                 cache: false
//             });
    
//$.jsonp(
//                { 
//                url: "http://127.0.0.1:81/DeviceAdmin/GetDeviceAsJSON", 
//                callbackParameter: 'callback', 
//                timeout: 25000, 
//                success: function(data) { alert("SUCCESS!"); }, 
//                error: function(){ alert("ERROR!"); } 
//                }
//            ); 


    //alert("GetDeviceConfiguration() - COMPLETE");
}

function GetDeviceConfigurationComplete(result) 
{
    alert("AAA");
    if (result.ReturnStatus == "SUCCEEDED") 
    {
        $("#DeviceConfigurationContainer").append('<p>' + result.DeviceViewModel.DeviceSN + '</p>');
        $("#DeviceConfigurationContainer").append('<p>' + result.DeviceViewModel.DeviceModel + '</p>');
    }
    else 
    {
        $("#DeviceConfigurationContainer").append('<p>' + result.ErrorViewModel.UserErrorDetails + '</p>');
        alert("GetDeviceConfiguration() failed.");
    }
}
