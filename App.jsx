import Header from "./components/Header"
import Entry from "./components/Entry"
import data from "./data"

const entryElements = data.map((entry) => {
    return (
        <Entry 
            key={entry.id}
            {...entry}
        />
    )
})

function App() {
    return (
        <>
            <Header />
            <main className="container">
                {entryElements}
            </main>
        </>
    )
}

export default App
