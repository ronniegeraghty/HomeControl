import firebase from 'firebase';

const config = {
	apiKey: 'AIzaSyBk1w9gw3fjcTUHKdyU-HnfmmIpQyHsChg',
	authDomain: 'homecontrol-d6fac.firebaseapp.com',
	databaseURL: 'https://homecontrol-d6fac.firebaseio.com',
	projectId: 'homecontrol-d6fac',
	storageBucket: 'homecontrol-d6fac.appspot.com',
	messagingSenderId: '538245191403',
	appId: '1:538245191403:web:6ead241d62d1f015'
};
const fire = firebase.initializeApp(config);
export default fire;
