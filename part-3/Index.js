const App = () => (
    <div className = "container">
        <Person name ="Billy" age={20} hobbies={['Hiking', 'Skiing', 'Crafts']}/>
        <Person name ="Anthony" age={15} hobbies={['Skating', 'Fishing', 'Arts']}/>
        <Person name ="Thomas" age={35} hobbies={['Golf', 'Fishing', 'Baseball']}/>
    </div>
  )
  
  
  
  ReactDOM.render(<App />, document.getElementById("root"))
  