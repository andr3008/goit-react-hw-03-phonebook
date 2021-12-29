import PropTypes from "prop-types";
import { Component } from "react";
import { nanoid } from "nanoid";
import { Label, Input } from "./Filter.styled";

class Filter extends Component {
	filterInputId = nanoid();
	render() {
		const { value, onChange } = this.props;
		return (
			<Label htmlFor={this.filterInputId}>
				Find contacts by name
				<Input
					type="text"
					name="name"
					value={value}
					id={this.filterInputId}
					onChange={onChange}
					placeholder="Andrei Potapov"
				/>
			</Label>
		);
	}
}
Filter.propTypes = {
	value: PropTypes.string,
	onChange: PropTypes.func.isRequired,
};
export default Filter;
