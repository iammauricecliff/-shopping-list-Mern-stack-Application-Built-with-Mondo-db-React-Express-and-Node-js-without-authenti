import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from 'reactstrap';

class AppNavBar extends Component {
    state = {
        isOpen: false,
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen,
        })
    }

    render(){
        return(
            <div className="AppNavBar">
                <Navbar color="dark" dark expand="sm" className="mb-2">
                  <Container>
                      <NavbarBrand href="/">ShoppingList</NavbarBrand>
                        <NavbarToggler  onClick={this.toggle} />             
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                               <NavItem>
                                   <NavLink href="http://github.com/bradtraversy">
                                       Github
                                   </NavLink>                                                                                                                                       
                               </NavItem>
                            </Nav>
                        </Collapse>                         
                  </Container>
                </Navbar>
            </div>
        )
    }
    
}


export default AppNavBar;