var app = {

    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {

        this.receivedEvent('deviceready');

        navigator.camera.getPicture(this.onSuccess, this.onFail, {
        	quality: 50,
    		destinationType: Camera.DestinationType.DATA_URL
    		//sourceType: Camera.PictureSourceType.PHOTOLIBRARY
		});
    },

	onSuccess: function(imageData) {
	    var image = document.getElementById('myImage');
    	image.src = imageData;
	},

	onFail: function(message) {
    	alert('Failed because: ' + message);
	},

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);

    },

};

app.initialize();