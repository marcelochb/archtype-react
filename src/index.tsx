import React from 'react';
import ReactDOM from 'react-dom/client';
// import reportWebVitals from './reportWebVitals';
import { App } from './App';
import { TodoListPage } from './features/todo/infra/presenter/list/pages/todo.list.page';

// const App: React.FC = () => {
//     return <div>Hello, world!</div>;
//   };
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<TodoListPage />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
