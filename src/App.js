import { v4 as uuidv4 } from 'uuid';

function App() {

    const names = [
        {
            id: uuidv4(),
            title: 'Alice',
            phone: '111 222 34 56'
        },
        {
            id: uuidv4(),
            title: 'Alex',
            phone: '111 222 34 56'
        },
        {
            id: uuidv4(),
            title: 'Jim',
            phone: '111 222 34 56'
        },

    ];

    return (
        <div>
            <ul>
                {names.map(el => <li key={el.id}>{el.title} {el.phone}</li>)}
            </ul>
        </div>
    );
}

export default App;
