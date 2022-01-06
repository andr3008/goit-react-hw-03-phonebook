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
						pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
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
						pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
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
