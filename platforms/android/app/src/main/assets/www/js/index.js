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

        document.getElementById('btnScan').addEventListener('click', () => {

            cordova.plugins.barcodeScanner.scan(

                function (result) {
                    alert("Barcode\n" +
                        "Resultado: " + result.text + "\n" +
                        "Formato: " + result.format + "\n" +
                        "Cancelado: " + result.cancelled);
                },

                function (error) {
                    alert("Escaneo fallido: " + error);
                }
            );
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
