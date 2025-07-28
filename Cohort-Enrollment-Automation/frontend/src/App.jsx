import React from 'react';
import Form from './components/Forms';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
    const [showDashboard, setShowDashboard] = React.useState(false);

    return (
        <div className="App">
            <header className="App-header">
                <h1>GradNext Cohort Enrollment</h1>
                <button
                    onClick={() => setShowDashboard(!showDashboard)}
                    className="dashboard-toggle"
                >
                    {showDashboard ? 'Show Form' : 'Show Dashboard'}
                </button>
            </header>

            <main>
                {showDashboard ? <Dashboard /> : <Form />}
            </main>
        </div>
    );
}

export default App;