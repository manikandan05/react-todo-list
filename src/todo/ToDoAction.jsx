import styled from 'styled-components';

const Wrapper = styled.div`
    display: inline-flex;
    align-items: center;
    flex-direction: row;
    justify-content:space-between;
    width: 600px;
    margin: 0 auto;
`;

const Button = styled.button`
    width: 180px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    font-size: 1rem;
    cursor: pointer;
    &:hover {
        box-shadow: 2px 2px 2px 2px #000;
        transform: scaleX(1);
    }
    &:disabled {
        pointer-events: none;

    }
`;

const ToDoAction = ({ all, complete, pending, btnHandler, index }) => {
	return (
		<Wrapper>
			<Button aria-disabled={index === 0} disabled={index === 0} onClick={(e) => btnHandler(0)}>{all}</Button>
			<Button aria-disabled={index === 1} disabled={index === 1} onClick={(e) => btnHandler(1)}>{pending}</Button>
			<Button aria-disabled={index === 2} disabled={index === 2} onClick={(e) => btnHandler(2)}>{complete}</Button>
		</Wrapper>
	)
}

export default ToDoAction;