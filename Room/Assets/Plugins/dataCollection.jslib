mergeInto(LibraryManager.library, {

  GetJSON: function ( path,  objectName,  callback, fallback) {
    var parsedPath = UTF8ToString(path);
    var parsedObjectName= UTF8ToString(objectName);
    var parsedCallback = UTF8ToString(callback);
    var parsedFallback = UTF8ToString(fallback);

    try {
      //firebase.database().ref(parsedPath).once('value').then(function(snapshot) {
          window.mainUnityInstance.SendMessage(parsedObjectName, parsedCallback, JSON.stringify(data));
      //});
      } catch (error) {
        window.mainUnityInstance.SendMessage(parsedObjectName, parsedFallback, JSON.stringify(error, Object.getOwnPropertyNames(error)));
      }
}

,

  GetDevice: function ( path,  objectName,  callback, fallback) {
    var parsedPath = UTF8ToString(path);
    var parsedObjectName= UTF8ToString(objectName);
    var parsedCallback = UTF8ToString(callback);
    var parsedFallback = UTF8ToString(fallback);
    try {
          window.mainUnityInstance.SendMessage(parsedObjectName, parsedCallback, JSON.stringify(joystick));
    } catch (error) {
            window.mainUnityInstance.SendMessage(parsedObjectName, parsedFallback, JSON.stringify(error, Object.getOwnPropertyNames(error)));
   }
},

  GetQuit: function ( path,  objectName,  callback, fallback) {
    var parsedPath = UTF8ToString(path);
    var parsedObjectName= UTF8ToString(objectName);
    var parsedCallback = UTF8ToString(callback);
    var parsedFallback = UTF8ToString(fallback);
    try {
          window.mainUnityInstance.SendMessage(parsedObjectName, parsedCallback, JSON.stringify(closeUnity));
    } catch (error) {
            window.mainUnityInstance.SendMessage(parsedObjectName, parsedFallback, JSON.stringify(error, Object.getOwnPropertyNames(error)));
   }
}
});