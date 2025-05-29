import axios from "axios"
import phoneService from '../services/phonebook'


const PersonForm = ({ persons, setPersons, newName, setNewName, newNumber, setNewNumber }) => {

    const addPerson = (event) => {
        event.preventDefault()

        if (persons.some(person => person.name === newName)) {
            alert(`${newName} already exists in the phonebook`)
            return
        }

        if (newName === '' || newNumber === '') {
            alert('Name and number must not be empty')
            return
        }

        phoneService.create({ name: newName, number: newNumber })
            .then(response => {
                console.log('response:', response)
                setPersons(persons.concat(response))
            })
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