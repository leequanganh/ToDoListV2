import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { Container } from "../StyledComponents/Container";
import { Dropdown } from "../StyledComponents/DropDown";
import { Heading1, Heading2, Heading3 } from "../StyledComponents/Heading";
import { Input, Lable, TextFiled } from "../StyledComponents/TextField";
import { darkTheme } from "../theme/darkTheme";
import { Button } from "../StyledComponents/Button";
import { Table, Thead, Tbody, Tr, Td, Th } from "../StyledComponents/Table";
import { useDispatch, useSelector } from "react-redux";
import {
  ADD_TASK,
  CHANGE_THEME,
  DONE_TASK,
  REMOVE_TASK,
  UNDO_TASK,
  UPDATE_TASK,
} from "../redux/type/type";
import managerTheme from "../theme/managerTheme";

export default function ToDoList() {
  const dispatch = useDispatch();
  const { taskList } = useSelector((state) => state.toDoListReducer);
  const { theme } = useSelector((state) => state.toDoListReducer);
  const [valueInput, setValue] = useState("");
  const [indexUpdate, setIndex] = useState();
  const [status, setStatus] = useState(false);
  const renderTaskToDo = () => {
    return taskList
      .filter((task) => {
        return task.status === true;
      })
      .map((task, index) => {
        return (
          <Tr key={index}>
            <Th>{task.taskName}</Th>
            <Th className="text-right">
              <Button
                onClick={() => {
                  setValue(task.taskName);
                  setIndex(index);
                  setStatus(true);
                }}
              >
                Edit
              </Button>
              <Button
                onClick={() => {
                  dispatch({ type: REMOVE_TASK, payload: task.taskName });
                  setStatus(false);
                }}
              >
                Delete
              </Button>
              <Button
                onClick={() => {
                  dispatch({ type: DONE_TASK, payload: task.taskName });
                }}
              >
                DONE
              </Button>
            </Th>
          </Tr>
        );
      });
  };
  const renderTaskComplete = () => {
    return taskList
      .filter((task) => task.status === false)
      .map((task, i) => {
        return (
          <Tr key={i}>
            <Th>{task.taskName}</Th>
            <Th className="text-right">
              <Button
                onClick={() => {
                  dispatch({ type: REMOVE_TASK, payload: task.taskName });
                }}
              >
                Delete
              </Button>
              <Button
                onClick={() => {
                  dispatch({ type: UNDO_TASK, payload: task.taskName });
                }}
              >
                Undo
              </Button>
            </Th>
          </Tr>
        );
      });
  };
  const renderSelecTheme = () => {
    return managerTheme.map((theme, i) => {
      return (
        <option key={i} value={theme.id}>
          {theme.name}
        </option>
      );
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container className="w-50">
        <Dropdown
          onChange={(e) => {
            console.log(e.target.value);
            dispatch({ type: CHANGE_THEME, payload: e.target.value });
          }}
        >
          {renderSelecTheme()}
        </Dropdown>
        <Heading2>To Do List</Heading2>
        <div className=" d-flex">
          <div>
            <Lable>Task name</Lable>
            <Input
              value={valueInput}
              onChange={(e) => {
                console.log(e.target.value);
                setValue(e.target.value);
              }}
            />
          </div>
          <Button
            disabled={status}
            // {status ? disabled : ""}
            onClick={() => {
              dispatch({
                type: ADD_TASK,
                payload: { taskName: valueInput, status: true },
              });
              setValue("");
            }}
          >
            +Add Task
          </Button>
          <Button
            disabled={!status}
            onClick={() => {
              dispatch({
                type: UPDATE_TASK,
                payload: { index: indexUpdate, data: valueInput },
              });
              setValue("");
              setStatus(false);
            }}
          >
            ^ Update
          </Button>
        </div>
        <hr />
        <Heading3>Task To Do</Heading3>
        <Table>
          <Thead>{renderTaskToDo()}</Thead>
        </Table>
        <Heading3>Task Complete</Heading3>
        <Table>
          <Thead>{renderTaskComplete()}</Thead>
        </Table>
      </Container>
    </ThemeProvider>
  );
}
// case DONE_TASK:
//   let id = action.payload;
//   let cloneState = [...state];
//   cloneState.taskList[id].status = false;
//   //   console.log({ ...state });\
//   // state.taskList = taskListClone;
//   state = cloneState;
//   return { ...state };
