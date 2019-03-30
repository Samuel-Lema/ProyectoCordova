var app = {

    initialize: function() {
        
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {        

        // Evento que se ejecuta cuando pulsas en el Boton de la Camara, permite sacar fotos y mostral la última en pantalla

        document.getElementById('btnCam').addEventListener('click', () => {

            navigator.camera.getPicture(this.onSuccess, this.onFail, {
                quality: 50,
                destinationType: Camera.DestinationType.DATA_URL
            });
        });

        // Evento que se ejecuta cuando pulsas en el Boton del Escaner, permite escanear codigos de barras y QR
        // Para que funcione he tenido que cambiar la versdion de android a 6.3.0 debido a que solo es compatible con la 6.3.0 o menor
        // Y he añadido unas lineas en el config.xml (en la carpeta raiz):
        //
        // <config-file target="AndroidManifest.xml" parent="/*" mode="merge">
        //      <uses-permission android:name="android.permission.CAMERA" />
        //      <uses-feature android:name="android.hardware.camera" />
        //      <uses-feature android:name="android.hardware.camera.autofocus" />
        // </config-file>

        document.getElementById('btnScan').addEventListener('click', () => {

            cordova.plugins.barcodeScanner.scan(

                function (result) {
                    alert("Barcode Scanner \n" + "Resultado: " + result.text + "\n" + "Formato: " + result.format + "\n" + "Cancelado: " + result.cancelled);
                },

                function (error) {
                    alert("Escaneo fallado: " + error);
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
