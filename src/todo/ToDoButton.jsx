import styled from "styled-components"

const Button = styled.button`
    width: 25%;
    height: 46px;
    line-height: 40px;
    font-size: 1rem;
    cursor: pointer;
`;

const ToDoButton = ({ add, addHandler }) => {
	return (
		<Button onClick={(e) => addHandler(e)}>{add}</Button>
	)
}

export default ToDoButton;