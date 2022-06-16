
import Course from './Course'

const App = () => {


  const courses = [
    {
      name: 'Node.js',
      id:1,
      parts: [
        {
          name:'slkjla',
          exercise: 10,
          id: 1
        },
        {
          name: 'sss',
          exercise: 7,
          id: 2
        },
        {
          name: 'ss',
          exercise: 14,
          id: 3
        },
        {
          name: 'ssss',
          exercise: 15,
          id: 4
        }  
      ]
    },
    
    
    {
    name: 'Half Stack application development',
    id:1,
    parts: [
      {
        name:'Fundamentals of React',
        exercise: 1,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercise: 8,
        id: 2
      },
      {
        name: 'State of a component',
        exercise: 12,
        id: 3
      },
      {
        name: 'KK of a component',
        exercise: 19,
        id: 4
      }  
    ]
  }
]
  

  return (
    courses.map(course =>
      <Course course={course}/>
    )

    

  )
}

export default App