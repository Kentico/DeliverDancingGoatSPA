import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Components/Header.js';
import HomePage from './Pages/Home';
import ArticlesPage from './Pages/Articles';
import ArticlePage from './Pages/Article';
import AboutPage from './Pages/About';
import CafesPage from './Pages/Cafes';
import StorePage from './Pages/Store';
import CoffeePage from './Pages/Coffee';
import BrewerPage from './Pages/Brewer';
import ContactsPage from "./Pages/Contacts"

const App = (props) => {
  return (
    <div>
      <Header language={props.language} changeLanguage={props.changeLanguage}/>
      <Switch>
        <Route path="/:lang?/store" render={(matchProps) => <StorePage {...matchProps} language={props.language} />} />
        <Route path="/:lang?/coffees/:coffeeSlug" render={(matchProps) => <CoffeePage {...matchProps}/>} />
        <Route path="/:lang?/brewers/:brewerSlug" render={(matchProps) => <BrewerPage {...matchProps}/>} />
        <Route exact path="/:lang?/articles" render={() => <ArticlesPage />} />
        <Route path="/:lang?/articles/:articleSlug" render={(matchProps) => <ArticlePage {...matchProps}/>} />
        <Route path="/:lang?/about" render={() => <AboutPage />} />
        <Route path="/:lang?/cafes" render={() => <CafesPage />} />
        <Route path="/:lang?/contacts" render={() => <ContactsPage />} />
        <Route path="/:lang?" render={() => <HomePage />} />
      </Switch>
    </div>
  );
}

export default App;