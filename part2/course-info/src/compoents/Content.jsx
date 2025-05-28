import Part from "./Part.jsx"
import Total from './Total'


const Content = ({ parts }) => {

    const total = parts.reduce((sum, part) => sum + part.exercises, 0);


    return (
        <div>
            {parts.map(part => (
                <Part key={part.id} name={part.name} exercises={part.exercises} />
            ))}
            <Total exe={total} />

        </div>
    )
}

export default Content