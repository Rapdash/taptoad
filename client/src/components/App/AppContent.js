// AppHeader.js

// Package Imports
import React from 'react';
import { IonContent, IonSplitPane, IonPage } from '@ionic/react';
import { Switch } from 'react-router-dom';
// Relative Imports
import { Menu } from '../Menu';

export const AppContent = () => (
  <IonContent>
    <IonSplitPane contentId="main">
      <Menu />
      <IonPage id="main">
        <Switch></Switch>
      </IonPage>
    </IonSplitPane>
  </IonContent>
);
