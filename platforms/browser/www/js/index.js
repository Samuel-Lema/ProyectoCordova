var app = {

    initialize: function() {
        
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {        

        document.getElementById('btnCam').addEventListener('click', () => {

            navigator.camera.getPicture(this.onSuccess, this.onFail, {
                quality: 50,
                destinationType: Camera.DestinationType.DATA_URL
            });
        });

        encendido = false;

        document.getElementById('btnFlash').addEventListener('click', () => {
            if (encendido == false) {
                document.getElementById('btnFlash').innerText = `Apagar flash`;
                window.plugins.flashlight.switchOn(
                    encendido = true, // optional success callback
                    encendido = false, // optional error callback
                    { intensity: 0.3 } // optional as well
                );
                encendido = true;
            } else {
                document.getElementById('btnFlash').innerText = `Encender flash`;
                window.plugins.flashlight.switchOff(() => encendido = false, () => encendido = false);
                encendido = false;
            }
        });

    },

    onSuccess: function(imageData) {

        document.getElementById('imagen').innerHTML = `<img id='myImage' src="" width="200" height="200"/>`
        var image = document.getElementById('myImage');
        image.src = "data:image/jpeg;base64," + imageData;
    },

    onFail: function(message) {
        alert('Failed because: ' + message);
    }

};

app.initialize();
