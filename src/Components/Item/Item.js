import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Item.scss';
import { useDispatch } from 'react-redux';
import {
  removeGoal
} from '../../reducers/goalsSlice';
import { removeTask } from '../../reducers/taskSlice';
import { useSelector } from 'react-redux';


function Item(props) {


  const options = useSelector(state => state.options.value);
  const dispatch = useDispatch();

  const deleteGoal = (e) =>{
    e.preventDefault();
    dispatch(removeGoal({"name":props.name, "description": props.description, "dueDate": props.dueDate, "id": props.id}));
  }

  const deleteTask = (e) =>{
    e.preventDefault();
    dispatch(removeTask({"name":props.name, "description": props.description, "dueDate": props.dueDate, "id": props.id}));
  }


  return (
    <Card style={{ width: '35rem' }} className='text-center card-rounded'>
      <Card.Body>
        <Card.Title className='fw-bold' >{props.name}</Card.Title>
        <Card.Text className='fw-bold'>Description</Card.Text>
        <Card.Text >
          {props.description}
        </Card.Text>
        <Card.Text className="fw-bold">
          Due Date
        </Card.Text>
        <Card.Text >
        {props.dueDate}
        </Card.Text>
        <Card.Text className='d-none'>
        {props.id}
        </Card.Text>
        <div className="d-grid gap-2">

          {options === "goals" && (
            <Button variant="info" className="size-lg rounded-pill" onClick={deleteGoal}>Remove</Button>
          )}
          {options === "tasks" && (
            <Button variant="info" className="size-lg rounded-pill" onClick={deleteTask}>Remove</Button>
          )}

        </div>
      </Card.Body>
    </Card>
  );
}

export default Item;