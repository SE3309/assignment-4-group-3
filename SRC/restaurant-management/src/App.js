import Staff from './pages/Staff';

const App = () => {
    return (
        <Router>
            <div>
                {/* Navigation */}
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Menu</Link>
                        </li>
                        <li>
                            <Link to="/reservations">Reservations</Link>
                        </li>
                        <li>
                            <Link to="/staff">Staff</Link>
                        </li>
                    </ul>
                </nav>

                {/* Routes */}
                <Routes>
                    <Route path="/" element={<Menu />} />
                    <Route path="/reservations" element={<Reservation />} />
                    <Route path="/staff" element={<Staff />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
