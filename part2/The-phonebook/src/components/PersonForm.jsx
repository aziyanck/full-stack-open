const PersonForm = ({ persons, setPersons, newName, setNewName, newNumber, setNewNumber }) => {

    const addPerson = (event) => {
        event.preventDefault()

        if (persons.some(person => person.name === newName)) {
            alert(`${newName} already exists in the phonebook`)
            return
        }

        setPersons(persons.concat({ name: newName, number: newNumber }))
        setNewName('')
        setNewNumber('')
    }

    const handleNameChange = (event) => {
        setNewName(event.target.value)

    }

    const handleNumChange = (event) => {
        setNewNumber(event.target.value)
    }

    return (
        <form onSubmit={addPerson}>
            <div>
                name: <input value={newName} onChange={handleNameChange} />
            </div>
            <div>
                number: <input value={newNumber} onChange={handleNumChange} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )


}

export default PersonForm