import styled from "styled-components";
import { useState } from "react";
import ToDoForm from "./ToDoForm";
import ToDoAction from "./ToDoAction";
import ToDoButton from "./ToDoButton";
import ToDoList from "./ToDoList";

const Wrapper = styled.div`
	width: 600px;
	margin: 0 auto;
`;

const Container = styled.div`
	display: inline-flex;
	align-items: center;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
	padding-bottom: 30px;
`;

const ToDo = () => {
	const [text, setText] = useState("");
	const [index, setIndex] = useState(0);
	const [toDoList, setList] = useState([]);

	const btnHandler = (type) => {
		setIndex(type);
	};

	const addHandler = () => {
		if (text.trim() !== "") {
			let list = {
				text,
				isCompleted: false,
			};
			list = [...toDoList, list];
			setList(list);
			setText("");
		}
	};

	const archieveHandler = (idx, args) => {
		let list = [...toDoList];
		list[idx].isCompleted = args.target.checked;
		setList(list);
	};

	const deleteHandler = (idx) => {
		let list = [...toDoList];
		list.splice(idx, 1);
		setList(list);
	};

	const changeHandler = (args) => {
		setText(args?.target?.value);
	};

	return (
		<Wrapper>
			<Container>
				<ToDoForm changeHandler={changeHandler} text={text} />
				<ToDoButton add={"Add ToDo"} addHandler={addHandler} />
			</Container>
			<ToDoList
				deleteHandler={deleteHandler}
				archieveHandler={archieveHandler}
				options={toDoList}
				idx={index}
			/>
			<ToDoAction
				all="All"
				pending="Active"
				complete={"Completed"}
				index={index}
				btnHandler={btnHandler}
			/>
		</Wrapper>
	);
};

export default ToDo;
