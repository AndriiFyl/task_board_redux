// хук  useSelector - служить для отримання інформації із нашого state
import { useSelector } from 'react-redux';
import { Task } from 'components/Task/Task';
// селектори getTasks та getStatusFilter - потрібні для зручності і лаконічності коду
// щоб постійно не писати один і той код, типу useSelector(getTasks) замість useSelector(state => state.tasks)
import { getTasks, getStatusFilter } from '../../redux/selectors';
import css from './TaskList.module.css';
import { statusFilters } from '../../redux/constants';

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter(task => !task.completed);
    case statusFilters.completed:
      return tasks.filter(task => task.completed);
    default:
      return tasks;
  }
};

export const TaskList = () => {
  // const tasks = useSelector(state => state.tasks);
  const tasks = useSelector(getTasks);
  const statusFilter = useSelector(getStatusFilter);
  const visibleTasks = getVisibleTasks(tasks, statusFilter);

  return (
    <ul className={css.list}>
      {visibleTasks.map(task => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
