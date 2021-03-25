import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.css';

import ContactForm from './components/ContactForm'
import ContactList from './components/ContactList'
import ContactDetail from './components/ContactDetail'

import { createStore, applyMiddleware } from 'redux'
import rootReducers from './reducers/root-reducers'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)))



const Home = () => {
  return (
    <div>
      <h1>Home Component</h1>
    </div>
  )
}

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="container">
            <div className="row">
              <div className="col col-md-4">
                <ul className="list-group">
                  <li className="list-group-item"><Link to="/">HOME</Link></li>
                  <li className="list-group-item"><Link to="/add-contact">ADD CONTACT</Link></li>
                  <li className="list-group-item"><Link to="/view-contacts">VIEW CONTACTS</Link></li>
                </ul>
              </div>
              <div className="col col-md-8">
                <Route path="/" exact={true} component={Home} />
                <Route path="/add-contact" exact={true} component={ContactForm} />
                <Route path="/view-contacts" exact={true} component={ContactList} />
                <Route path="/contact-detail/:id" exact component={ContactDetail} />
              </div>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;