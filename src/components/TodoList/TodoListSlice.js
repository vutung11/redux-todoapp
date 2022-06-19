const initState = [
    { id: 1, name: " TungVu", completed: false, priority: "Medium" },
    { id: 2, name: " PhuongNhi", completed: false, priority: "High" },
    { id: 3, name: " TranVu", completed: true, priority: "Low" },
];
const todoListReducer = (state = initState, action) => {
    switch (action.type) {
        case "todoList/addTodo":
            return [...state, action.payload];
        default:
            return state;
    }
};
export default todoListReducer;
