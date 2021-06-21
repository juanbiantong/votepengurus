import styled from 'styled-components';


export const BoxContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 10px;
    
`;

export const FormContainer = styled.form`
	/* width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
  border-radius: 10px; */
`;

export const MutedLink = styled.span`
	font-size: 11px;
	color: rgba(9, 9, 121, 0.8);
	font-weight: 500;
	font-style: italic;
	margin: 0;
`;

export const BoldLink = styled.a`
	font-size: 20px;
	color: rgba(9, 9, 121, 0.8);
	font-weight: 500;
	text-decoration: none;
	line-height: 100%;
	position: relative;
	top: 10%;
`;

export const Input = styled.input`
	width: 100%;
	height: 42px;
	outline: none;
	border: 1px solid rgba(200, 200, 200, 0.3);
	padding: 0px 10px;
	border-radius: 5px;
	border-bottom: 1.4px solid transparent;
	transition: all 200ms ease-in-out;
	font-size: 14px;
	margin-bottom: 2%;
	margin: 0 auto 1%;

	&::placeholder {
		color: rgba(200, 200, 200, 1);
	}

	&:not(:last-of-type) {
		border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
	}

	&:focus {
		outline: none;
		border-bottom: 2px solid rgba(9, 9, 121, 0.6);
	}
`;

export const Search = styled.input`
	width: 100%;
	height: 30px;
	outline: none;
	border: 1px solid rgba(200, 200, 200, 0.3);
	padding: 0px 10px;
	border-radius: 5px;
	border-bottom: 1.4px solid transparent;
	transition: all 200ms ease-in-out;
	font-size: 14px;
	margin-bottom: 2%;
	margin: 0 auto 1%;

	&::placeholder {
		color: rgba(200, 200, 200, 1);
	}

	&:not(:last-of-type) {
		border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
	}

	&:focus {
		outline: none;
		border-bottom: 2px solid rgba(9, 9, 121, 0.6);
	}
`;

export const SubmitButton = styled.button`
	width: 100%;
	padding: 11px;
	color: #fff;
	font-size: 15px;
	font-weight: 600;
	border: none;
	border-radius: 100px 100px 100px 100px;
	cursor: pointer;
	transition: all, 240ms ease-in-out;
	background: rgb(2, 0, 36);
	background: linear-gradient(90deg, rgba(9, 9, 121, 1) 50%, rgba(0, 212, 255, 1) 100%);

	&:hover {
		filter: brightness(1.03);
		border: none;
		cursor: pointer;
	}
	&:active {
		font-size: 1rem;
		transform: scale(0.6);
		box-shadow: 0 3px 15px -2px;
	}
	&:focus {
		outline: none;
	}
`;

export const HeaderText = styled.h5`
	font-weight: bolder;
	line-height: 1.24;
	color: #fff;
	margin: 0.5rem auto 0;
`;

export const BoxSektor = styled.div`
	background: #f1f1f1;
	padding: 4px;
	border-radius: 5px;
	margin: 0 auto;
`;

export const Image = styled.img`
	box-sizing: border-box;
	width: 55px;
	margin-right: 1rem;
	padding: 0;
`;

export const Footer = styled.div`
	width: 100%;
	height: 55px;
	margin: 5rem auto 0;
	text-align: center;
	position: relative;
	bottom: 0;
  font-size: 10px;
`;
