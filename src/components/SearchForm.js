export default function SearchForm({ nameSearch, handleNameChange, handleSubmit }) {
    return (
        <div className="searchForm">
            <form>
                <label for='employee search'>Search for employee: </label>
                <input
                    placeholder="Employee name"
                    type="text"
                    value={nameSearch}
                    onChange={handleNameChange}
                />
            </form>
        </div>
    )
}
