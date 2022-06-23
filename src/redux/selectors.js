import { createSelector } from "@reduxjs/toolkit";
import { STATUS } from "../constants/constans";
export const searchTextSelector = (state) => state.filters.search;
export const statusFilterChange = (state) => state.filters.status;
export const todoListSelector = (state) => state.todoList;
export const prioritiesFilterChange = (state) => state.filters.priorities;

export const todosRomainingSelector = createSelector(
    todoListSelector,
    statusFilterChange,
    searchTextSelector,
    prioritiesFilterChange,
    (todoList, status, searchText, priorities) => {
        if (!status) {
            return todoList;
        }
        return todoList.filter((todo) => {
            if (status === STATUS.ALL) {
                return priorities.length
                    ? todo.name.includes(searchText) &&
                          priorities.includes(todo.priority)
                    : todo.name.includes(searchText);
            }
            return (
                todo.name.includes(searchText) &&
                (status === STATUS.COMPLETED
                    ? todo.completed
                    : !todo.completed) &&
                (priorities.length ? priorities.includes(todo.priority) : true)
            );
        });
    }
);
