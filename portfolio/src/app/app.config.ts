import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"portfolio-e7520","appId":"1:824119695290:web:8224ba880c98b7bb39af83","storageBucket":"portfolio-e7520.firebasestorage.app","apiKey":"AIzaSyBOANAwpxZnLQu53ncuN3QfxDfPZD2Hx6U","authDomain":"portfolio-e7520.firebaseapp.com","messagingSenderId":"824119695290"})), provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase())]
};
