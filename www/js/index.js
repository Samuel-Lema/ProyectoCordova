var app = {

    initialize: function() {
        
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {        

        // Evento que se ejecuta cuando pulsas en el Boton del Escaner, permite escanear codigos de barras y QR

        document.getElementById('btnCam').addEventListener('click', () => {

            navigator.camera.getPicture(this.onSuccess, this.onFail, {
                quality: 50,
                destinationType: Camera.DestinationType.DATA_URL
            });
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
