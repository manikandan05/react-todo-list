import styled, { css } from "styled-components";

const Wrapper = styled.div`
width: 600px;
max-height: 300px;
min-height:0;
overflow: auto;
${({ isContent }) => isContent && css`margin-bottom: 30px`}
`;

const UL = styled.ul`
list-style: none;
margin: 0;
padding: 0;
`;
const LI = styled.li`
height: 50px;
display: flex;
align-items: center;
flex-direction: row;
font-size: 1.5rem;
&:hover {
    color: #999;
    background: #cccccc47;
}
`;

const Text = styled.span`
font-size: 1.5rem;
${({ cross }) => cross && css`text-decoration: line-through`};
`;

const ChkWrap = styled.div`
display: flex;
justify-content: flex-start;
flex-grow: 1;
align-items: center;
`;

const DeleteBtn = styled.div`
width: 50px;
height: 50px;
line-height: 50px;
font-szie: 1rem;
cursor: pointer;
display: flex;
justify-content: center;
`;

const Chk = styled.input`
height: 30px;
width: 30px;
margin: 0 20px;
cursor: pointer;
`;

const ToDoList = ({ archieveHandler, deleteHandler, options, idx }) => {
  let collection = options;
  if (idx === 1) collection = options.filter((item) => !item.isCompleted);
  if (idx === 2) collection = options.filter((item) => item.isCompleted);
  return (
    <Wrapper isContent={collection.length > 0}>
      {collection.length > 0 ? (
        <UL role="list" id="todo_list">
          {collection.map((item, index) => {
            return (
              <LI role="listitem">
                <ChkWrap>
                  <Chk type="checkbox" checked={item?.isCompleted} onChange={(e) => archieveHandler(index, e)}></Chk>
                  <Text cross={item.isCompleted} >{item.text}</Text>
                </ChkWrap>
                <DeleteBtn onClick={(e) => deleteHandler(index)}>X</DeleteBtn>
              </LI>
            )
          })}
        </UL>) : null
      }
    </Wrapper>
  )
}

export default ToDoList;
