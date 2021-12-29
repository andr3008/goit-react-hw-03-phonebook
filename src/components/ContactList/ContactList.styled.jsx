import styled from "@emotion/styled";

export const Button = styled.button`
	padding: 5px;
	margin: 10px 0;
	border: none;
	outline: none;
	border-radius: 6px;
	background-color: rgb(57, 133, 168);
	color: #fff;
	cursor: pointer;
	text-transform: capitalize;
	box-shadow: 7px 7px 13px 0px rgba(0, 0, 0, 0.38);
	transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

	&:hover {
		background-color: rgb(129, 214, 164);
		color: white;
	}
`;
export const Ul = styled.ul`
	margin-top: 30px;
	color: var(--secondaryTextColor);
	font-weight: 500;
	font-size: 18px;
`;
export const Li = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
export const P = styled.p`
	color: rgb(57, 133, 168);
`;
