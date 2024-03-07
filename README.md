# Mini Udemy

Showcasing proficiency in cutting-edge technologies including Firebase, Firestore, Filestack, and leveraging the latest features introduced in Angular 17

## Getting started

### Requirements
```
Node: v20.9.0
NPM: 10.5.0
Angular CLI: 17.2.3
```

### Installation
Clone the repository

```
git clone git@github.com:roc41d/mini-udemy.git
```

Switch to project folder

```
cd mini-udemy
```

Install dependencies

```
npm i
```

Set up Firebase project and Firestore database

Visit [Firebase Console](https://console.firebase.google.com) and create a new project and firestore database. Copy the configuration object from the project settings and fill in properties in `.env`.

Set up Filestack API key

Create a new account on [Filestack](https://dev.filestack.com) and copy the API key. Fill in the `FILESTACK_API_KEY` property in `.env`.


Start local development server

```
npm start
```

You can now access the app via [http://localhost:4200](http://localhost:4200)