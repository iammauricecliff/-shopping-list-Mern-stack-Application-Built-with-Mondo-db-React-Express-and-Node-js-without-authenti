import React, { Component } from 'react';
import { 
    Modal,
    ModalBody,
    ModalHeader,
    Label,
    Input,
    Form,
    FormGroup,
    Button
} from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/ActionItems';

class ItemModal extends Component {
    state = {
        modal: false,
        name: '',
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }
    
    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            // id : Math.random(), -this was deleted because mongo db assigns an authomatic generated number from db
            name: this.state.name
        }

        //add item via add item action
        this.props.addItem(newItem);

        //close the modal
        this.toggle();

    }

    render() {
        return(
            <div className="ItemModal">
               <Button className="ml-3" color="dark" size="md" style={{marginTop: "2rem"}} onClick={this.toggle}>Add Item</Button>
               <Modal isOpen={this.state.modal} toggle={this.toggle}>
                   <ModalHeader toggle={this.toggle}>Add To ShoppingList</ModalHeader>
                   <ModalBody>
                       <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label for="item">Item</Label>
                                <Input type="name" placeholder="Add an Item" id="item" name="name" onChange={this.handleChange}/>
                                <Button style={{marginTop: "2rem"}} color="success" block>Add Item</Button>
                            </FormGroup>
                       </Form>
                   </ModalBody>
               </Modal>
            </div>
        );

    }
}

const mapStateToProps = (state) => ({
    item: state.item 
})



export default connect(mapStateToProps, { addItem })(ItemModal);