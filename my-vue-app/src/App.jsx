import './App.css'
import Todo from './Todo';
import Actor from './Actor';
import Singer from './Singer';
import Bookstore from './Bookstor';

function App() {
    const actors =['Tom Cruise', 'John Dev','xxx', 'fastX', 'Hardy Deep', 'Carl l' ];

    const singers = [
      {name:'karnival', age: 68},
      {name:'Aftermath', age: 33},
      {name: 'Highway', age: 22},
      {name: 'Warfaze', age: 44}
    ];

    const books = [
      {id: 1, name: 'Physics', price: 230},
      {id: 2, name: 'Chemistry', price: 230},
      {id: 3, name: 'Math', price: 230},
      {id: 4, name: 'Biology', price: 230},
      {id: 5, name: 'ICT', price: 230},
    ]
  return (
    <>
      <h2>React Main Concepts Part -1!!</h2>

     <Bookstore books={books}></Bookstore>

      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }

      <Actor name={"Azizul"}></Actor>
      {
        actors.map(actor => <Actor name={actor}></Actor>)
      }



      {/* <Todo 
        task="Learn React"
        isDone={true}>
      </Todo>
      <Todo
        task="Explore react core concept"
        isDone={false}>
       </Todo>
      <Todo 
        task="Explore react JSX"
        isDone={true}>
      </Todo> */}
      {/* <Students grade="7" score="99"></Students>
      <Students grade={12} score={8}></Students>
      <Students></Students>
      <Students></Students>
      <Electronics></Electronics>
      <Developer></Developer>
      <Person></Person>
      <Device></Device>
      <Device name="laptop" price="44000"></Device>
      <Device name="mobile" price="33333"></Device>
      <Device name="watch" price="22222"></Device> */}


    </>
  )
}

function Device (props) {
  console.log(props);
  return <h2>This Device: {props.name} price: {props.price}</h2>
}

function Person() {
  const age = 24;
  const money = 33333;
  const person = {name:'sakib', age: 12}
  return <h3>I am {person.name} with {age + money} </h3>
}
const {grade, score} = {grade:'7', score: '9'};
function Students ({grade = 1, score = 0}) {
  // console.log(grade, score); 
  return (
    <div className='student'>
    <h3>Name: </h3>
    <p>Age: </p>
    <p>Grade: {grade} </p>
    <p>Score: {score}</p>
  </div>
  )

}

function Electronics () {
  return (
    <div className='student'>
      <h3>Uses of Electronics device as-</h3>
      <li>Apple Iphone</li>
      <li>Apple Iphone</li>
      <li>Apple Iphone</li>
      <li>Apple Iphone</li>
    </div>
  )
}

function Developer() {
  const developerStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '20px'
  }
  return (
    <div style={developerStyle}>
      <h5>Front End developer</h5>
      <p>Coding: </p>
    </div>
  )
}

export default App
