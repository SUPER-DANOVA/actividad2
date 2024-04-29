import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Item from './Components/Item/Item';
import Formulario from './Components/Formulario/Formulario';
import Menu from './Components/Menu/Menu';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MobileButton from './Components/MobileButton/MobileButton';
import { useSelector } from 'react-redux';


function App() {

  const goals = useSelector((state)=>state.goals.value);
  const tasks = useSelector((state)=>state.tasks.value);
  const options = useSelector(state => state.options.value);


  return (
    <div className="App">
      <Menu></Menu>
      <Container>
      <Row>
        <Col xs={0} md={0} className='d-none d-sm-block d-sm-none d-md-block '><Formulario></Formulario></Col>
        <Col xs={0} sm={0}>
          <Row className='d-md-none'>
            <div className='bg-transparent overlapping-div ' >
              <MobileButton className='float-left'/>
            </div>
          </Row>
          <Row>
            <div className='overflow-scroll'>
              
              {options === "goals" ? (
              goals.map((goal, index)=>(
                <Item key={index} name={goal.name} description={goal.description} dueDate={goal.dueDate}></Item>
              ))
              ): (options === "tasks" &&(tasks.map((task, index)=>(
                <Item key={index} name={task.name} description={task.description} dueDate={task.dueDate}></Item>
              ))))
            }



            </div>
          </Row>
        </Col>
      </Row>
    </Container>
      
      
    </div>
  );
}

export default App;
