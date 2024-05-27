import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Formulario.scss';
import { useDispatch } from 'react-redux';
import {
  addGoal
} from '../../reducers/goalsSlice';
import {
  addTask
} from '../../reducers/taskSlice';
import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';


function Formulario() {
  const [error, setError] = useState('');
  const options = useSelector(state => state.options.value);
  const inputRefName = useRef();
  const inputRefDescription = useRef();
  const inputRefDueDate = useRef();
  const dispatch = useDispatch();

  // agrega un item a goals

  const addItemGoal = (e) => {
    e.preventDefault();
    const name = inputRefName.current.value.trim();
    const description = inputRefDescription.current.value.trim();
    const dueDate = inputRefDueDate.current.value;
    if (!name || !description || !dueDate) {
      setError('Porfavor llene todos los campos');
      return;
    }
    dispatch(addGoal({ name, description, dueDate }));
    setError('');
    // limpia los campos despues de enviar los datos
    inputRefName.current.value = '';
    inputRefDescription.current.value = '';
    inputRefDueDate.current.value = '';
  };

    // agrega un item a tasks

    const addItemTask = (e) => {
      e.preventDefault();
      const name = inputRefName.current.value.trim();
      const description = inputRefDescription.current.value.trim();
      const dueDate = inputRefDueDate.current.value;
      if (!name || !description || !dueDate) {
        setError('Porfavor llene todos los campos');
        return;
      }
      dispatch(addTask({ name, description, dueDate }));
      setError('');
      // limpia los campos despues de enviar los datos
      inputRefName.current.value = '';
      inputRefDescription.current.value = '';
      inputRefDueDate.current.value = '';
    };


  return (

    <Form className='form-row align-items-center'>

      <Form.Group  controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="" ref={inputRefName} required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" placeholder="" ref={inputRefDescription} required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicDate">
        <Form.Label>Due Date</Form.Label>
        <Form.Control type="date" placeholder="" ref={inputRefDueDate} required/>
      </Form.Group>

      {error && <p className="text-danger">{error}</p>}
      <br></br>
      <div className="d-grid gap-2 col-6 mx-auto">

        { options === 'goals' && (
          <Button variant="primary" type="submit" className='rounded-pill btn-info btn-formulario ' onClick={addItemGoal}>ADD GOAL</Button>
        )}
        { options === 'tasks' && (
          <Button variant="primary" type="submit" className='rounded-pill btn-info btn-formulario ' onClick={addItemTask}>ADD TASK</Button>
        )}

      </div>
    </Form>
    
  );
}

export default Formulario;