
const Filter = ({setFilter}) => {
    
    const handleFilter = (event) => {
        setFilter(event.target.value)
    }

    return (
        <div>
            filter with <input onChange={handleFilter} />
        </div>
    )
}

export default Filter