import PropTypes from "prop-types";
import { Component } from "react";
import { nanoid } from "nanoid";
import { Form, Label, Input, Button } from "./ContactForm.styled";

class ContactForm extends Component {
	state = {
		name: "",
		number: "",
	};
	nameInputId = nanoid();
	numberInputId = nanoid();
	handleInputChange = (e) => {
		const { name, value } = e.target;
		this.setState({
			[name]: value,
		});
	};
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.onSubmit(this.state);
		this.resetInput();
	};
	resetInput = () => {
		this.setState({ name: "", number: "" });
	};
	render() {
		const { name, number } = this.state;
		return (
			<Form onSubmit={this.handleSubmit}>
				<Label htmlFor={this.nameInputId}>
					Name
					<Input
						type="text"
						name="name"
						id={this.nameInputId}
						value={name}
						onChange={this.handleInputChange}
						placeholder="Andrei Potapov"
					/>
				</Label>
				<Label htmlFor={this.numberInputId}>
					Number
					<Input
						type="tel"
						name="number"
						id={this.numberInputId}
						value={number}
						onChange={this.handleInputChange}
						placeholder="111-11-11"
					/>
				</Label>
				<Button type="submit">Add contact</Button>
			</Form>
		);
	}
}
ContactForm.propTypes = {
	onSubmit: PropTypes.func.isRequired,
};
export default ContactForm;
