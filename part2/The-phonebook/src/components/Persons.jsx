const Persons = ({ filtered }) => {
    return (
        <div>
            {
                filtered.map(person => (
                    <div key={person.name}>
                        {person.name}  {person.number}
                    </div>
                ))
            }
        </div>

    )
}
export default Persons