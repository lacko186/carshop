import react, {useState, useEffect} from 'react';
import Card from './Card';
import 'react-bootstrap/dist/react-bootstrap.min.js';

const Home = () => {
    const [properties, setProperties] = useState([]);
    const [filteredProperties, setFilteredProperties] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filters, setFilters] = useState({
        minyear: '',
        maxyear: '',
        minprice: '',
        maxprice: '',
    });

    useEffect(() => {
        fetch('http://localhost:5000/api/cars')
        .then(response => response.json())
        .then(data => {
            setProperties(data);
            setFilteredProperties(data);
            setLoading(false);
        })
        .catch(error => {
            console.error('Hiba történt az adatok betöltésekor:', error);
            setLoading(false); 
        }
    );
}, []);

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters(prev => ({
            ...prev,[name]: value
        }));
        setFilteredProperties(properties);
    };

    const Search = () => {
        const { minyear, maxyear, minprice, maxprice } = filters;
        let filtered = properties;

        if (minyear) {
            filtered = filtered.filter(car => car.year >= parseInt(minyear));
        }
        if (maxyear) {
            filtered = filtered.filter(car => car.year <= parseInt(maxyear));
        }
        if (minprice) {
            filtered = filtered.filter(car => car.price >= parseInt(minprice));
        }
        if (maxprice) {
            filtered = filtered.filter(car => car.price <= parseInt(maxprice));
        }

        setFilteredProperties(filtered);
    }

    return (
        <div className="container">
            
            <div className="row mb-3">
                <div className="col-md-3">
                    <input
                        type="number"
                        name="minyear"
                        placeholder="Min évjárat"
                        value={filters.minyear}
                        onChange={handleFilterChange}
                        className="form-control"
                    />
                </div>
                <div className="col-md-3">
                    <input
                        type="number"
                        name="maxyear"
                        placeholder="Max évjárat"
                        value={filters.maxyear}
                        onChange={handleFilterChange}
                        className="form-control"
                    />
                </div>
                <div className="col-md-3">
                    <input
                        type="number"
                        name="minprice"
                        placeholder="Min ár"
                        value={filters.minprice}
                        onChange={handleFilterChange}
                        className="form-control"
                    />
                </div>
                <div className="col-md-3">
                    <input
                        type="number"
                        name="maxprice"
                        placeholder="Max ár"
                        value={filters.maxprice}
                        onChange={handleFilterChange}
                        className="form-control"
                    />
                </div>
            </div>
            <button onClick={Search} className="btn btn-primary mb-3">Keresés</button>
            {loading ? (
                <p>Betöltés...</p>
            ) : (
                <div className="row">
                    {filteredProperties.map(car => (
                        <div key={car.id} className="col-md-4 mb-4">
                            <Card car={car} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Home;