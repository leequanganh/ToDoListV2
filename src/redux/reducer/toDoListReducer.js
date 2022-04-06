import { dataJson, getLocal, saveLocal } from "../../localStorage";
import { darkTheme } from "../../theme/darkTheme";
import { lightTheme } from "../../theme/lightTheme";
import managerTheme from "../../theme/managerTheme";
import {
  ADD_TASK,
  CHANGE_THEME,
  DONE_TASK,
  REMOVE_TASK,
  UNDO_TASK,
  UPDATE_TASK,
} from "../type/type";
// dataJson
const initialState = {
  theme: managerTheme[0].value,
  taskList: [
    {
      taskName: "task1",
      status: true,
    },
    {
      taskName: "task2",
      status: true,
    },
    {
      taskName: "task3",
      status: true,
    },
    {
      taskName: "task4",
      status: false,
    },
    {
      taskName: "task5",
      status: false,
    },
  ],
};

export const toDoListReducer = (state = getLocal() || initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      if (action.payload.taskName === "") {
        alert("Please enter task name");
        return { ...state };
      } else if (
        state.taskList.find((task) => task.taskName === action.payload.taskName)
      ) {
        alert("task name already exist");
      } else {
        state.taskList = [...state.taskList, action.payload];
      }
      // dataJson({ ...state })
      saveLocal(dataJson({ ...state }));
      return { ...state };
    case CHANGE_THEME:
      let newTheme = managerTheme.find((theme) => {
        return theme.id == action.payload;
      });
      state.theme = newTheme.value;
      saveLocal(dataJson({ ...state }));
      return { ...state };
    case DONE_TASK:
      let cloneTaskList = [...state.taskList];
      let id = cloneTaskList.findIndex(
        (item) => item.taskName === action.payload
      );
      cloneTaskList[id].status = false;
      saveLocal(dataJson({ ...state, taskList: cloneTaskList }));
      return { ...state, taskList: cloneTaskList };
    case REMOVE_TASK:
      let newTaskList = [...state.taskList].filter(
        (task) => task.taskName !== action.payload
      );
      console.log(newTaskList);
      saveLocal(dataJson({ ...state, taskList: newTaskList }));

      return { ...state, taskList: newTaskList };
    case UNDO_TASK:
      let newTaskList2 = [...state.taskList];
      let index = newTaskList2.findIndex(
        (task) => task.taskName == action.payload
      );
      console.log(index);
      newTaskList2[index].status = true;
      saveLocal(dataJson({ ...state, taskList: newTaskList2 }));

      return { ...state, taskList: newTaskList2 };
    case UPDATE_TASK:
      let newTaskList3 = [...state.taskList];
      newTaskList3[action.payload.index].taskName = action.payload.data;
      saveLocal(dataJson({ ...state, taskList: newTaskList3 }));

      return { ...state, taskList: newTaskList3 };
    default:
      return state;
  }
};
