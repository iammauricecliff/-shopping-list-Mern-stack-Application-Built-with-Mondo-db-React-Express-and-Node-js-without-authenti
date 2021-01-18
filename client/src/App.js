import React, {Component} from 'react';
import AppNavBar from './components/AppNavBar';
import ShoppingList from './components/ShoppingList'
import ItemModal from './components/ItemModal';
import { Container } from 'reactstrap';
import './App.css';



class App extends Component {
  render() {
    return (
        <div className="App">
            <AppNavBar />
              <Container>
                <ItemModal />
                <ShoppingList />
              </Container>
        </div>
    )
  }
}


export default App;