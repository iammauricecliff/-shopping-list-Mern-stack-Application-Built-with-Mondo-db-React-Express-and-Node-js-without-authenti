import React, { Component } from 'react';
import { Container, Button, ListGroup, ListGroupItem } from 'reactstrap';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/ActionItems';
import PropTypes from 'prop-types'

class ShoppingList extends Component {
    componentDidMount() {
        this.props.getItems(); 
    }

    deleteItem = (id) => {
        this.props.deleteItem(id);
    }
    render() {
        const { items } = this.props.item;
        return(
           <div className="Shoppinglist">
              <Container>
                  <ListGroup className="mt-5">
                    {items.map(({_id, name}) => (
                        <TransitionGroup>
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                <ListGroupItem className="text-capitalize"> 
                                    <Button className="float-right" color="danger" size="sm" onClick={this.deleteItem.bind(this, _id)}>x</Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        </TransitionGroup>
                    ))}
                  </ListGroup>
              </Container>
           </div>
        );
    }
}

ShoppingList.propTypes = {
    getItems: PropTypes.func.isRequired,
    Item : PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item: state.item 
});


export default connect(mapStateToProps, { getItems, deleteItem })(ShoppingList);