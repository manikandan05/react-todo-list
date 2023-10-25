import styled from 'styled-components';

const Input = styled.input`
width: 70%;
height: 40px;
text-indent: 10px;
font-size: 1.5rem;
`;

const ToDoForm = ({ text, changeHandler }) => {
	return (
		<Input aria-owns="todo_list" aria-controls="todo_list" autoComplete='off' type="text" value={text} onChange={(e) => changeHandler(e)} />
	)
}

export default ToDoForm;