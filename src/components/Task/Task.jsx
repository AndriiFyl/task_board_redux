// useDispatch - хук, щоб оповістит store, що в інтерфейсі відбулися зміни
import { useDispatch } from 'react-redux';
import { MdClose } from 'react-icons/md';
// deleteTask та toggleCompleted - це actions - об'єкти з даними (які змінилися), що передаються до
// store (за допомогою useDispatch)
import { deleteTask, toggleCompleted } from '../../redux/actions';
import css from './Task.module.css';

export const Task = ({ task }) => {
  // в змінну dispatch записуємо хук відправки якогось action до store
  const dispatch = useDispatch();

  // метод handleDelete - при натисканні на кнопку (cross в інтерфейсі застосунку)
  // передаємо через dispatch наш action deleteTask(за айдішніком відповідної таски) до store
  const handleDelete = () => dispatch(deleteTask(task.id));

  // метод handleToggle - при натисканні не чекбокс передаємо через dispatch наш action  toggleCompleted
  // (за айдішніком відповідної таски) до store
  const handleToggle = () => dispatch(toggleCompleted(task.id));

  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={task.completed}
        onChange={handleToggle}
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn} onClick={handleDelete}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
