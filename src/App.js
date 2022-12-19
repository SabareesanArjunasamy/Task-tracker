import Header from "./components/Header";
import Tasks from "./components/Tasks.js";
import { useState } from "react"


function App() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Score a Goal',
            day: 'Jan 1st at 3:00pm',
            reminder: true,
        },
        {
            id: 2,
            text: 'Do a flick',
            day: 'Jan 2nd at 3:00pm',
            reminder: true,
        },
        {
            id: 3,
            text: 'Code...',
            day: 'Jan 3rd at 3:00pm',
            reminder: true,
        }
    ])

    const deleteTask = (id) => {
        console.log('delete',id);
    }


    return (
        <div className = "container" >
            <Header title='Task Tracker'/>
            <Tasks tasks={tasks} />            
        </div>
    );
}

export default App;