import Menu from './components/Menu'
import MapPage from './pages/MapPage'
import HomePage from './pages/HomePage'
import ResultsPage from './pages/ResultsPage'
import InfoPage from './pages/InfoPage'
import React from 'react'
import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import { Redirect, Route } from 'react-router-dom'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'

/* Theme variables */
import './theme/variables.scss'

/* Global css */
import './theme/global.scss'
import ErrorBoundary from './ErrorBoundary'


const App: React.FC = () => {

  return (
    <IonApp>
      <ErrorBoundary>
        <IonReactRouter>
          <IonSplitPane contentId="main">
            <Menu />
            <IonRouterOutlet id="main">
              <Route path="/page/Home" component={HomePage} exact />
              <Route path="/page/Map" component={MapPage} exact />
              <Route path="/page/Results" component={ResultsPage} exact />
              <Route path="/page/Info" component={InfoPage} exact />
              <Redirect from="/" to="/page/Map" exact />
            </IonRouterOutlet>
          </IonSplitPane>
        </IonReactRouter>
      </ErrorBoundary>
    </IonApp>
  );
};

export default App;
