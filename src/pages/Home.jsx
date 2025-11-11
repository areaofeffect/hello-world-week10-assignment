import { Link } from 'react-router-dom'

function Home() {
  return (
    <div style={{ 
      padding: '40px',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <h1>P5.js + React Demo</h1>
      <p>This app demonstrates how to use multiple p5 sketches in a React app with routing.</p>
      
      <div style={{ marginTop: '30px' }}>
        <h2>Examples:</h2>
        <ul style={{ fontSize: '18px', lineHeight: '2' }}>
          <li>
            <Link to="/basic" style={{ color: '#0066cc' }}>
              Basic Sketch
            </Link>
            {' '}- A simple animated p5 sketch
          </li>
          <li>
            <Link to="/data" style={{ color: '#0066cc' }}>
              NYC Data Visualization
            </Link>
            {' '}- Fetches and displays Popular Baby Names data
          </li>
        </ul>
      </div>

      <div style={{
        marginTop: '30px',
        padding: '20px',
        backgroundColor: '#f0f8ff',
        borderRadius: '8px'
      }}>
        <h2>Filter by Gender:</h2>
        <p>View the most popular baby names filtered by gender:</p>
        <div style={{
          display: 'flex',
          gap: '15px',
          marginTop: '15px',
          flexWrap: 'wrap'
        }}>
          <Link
            to="/data?gender=male"
            style={{
              padding: '12px 24px',
              backgroundColor: '#2196F3',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '6px',
              fontWeight: '500',
              transition: 'background-color 0.3s'
            }}
          >
            Male Names
          </Link>
          <Link
            to="/data?gender=female"
            style={{
              padding: '12px 24px',
              backgroundColor: '#E91E63',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '6px',
              fontWeight: '500',
              transition: 'background-color 0.3s'
            }}
          >
            Female Names
          </Link>
          <Link
            to="/data"
            style={{
              padding: '12px 24px',
              backgroundColor: '#757575',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '6px',
              fontWeight: '500',
              transition: 'background-color 0.3s'
            }}
          >
            All Names
          </Link>
        </div>
      </div>

      <div style={{ 
        marginTop: '40px', 
        padding: '20px', 
        backgroundColor: '#f5f5f5', 
        borderRadius: '8px' 
      }}>
        <h3>For Students:</h3>
        <p>
          You can add as many pages/sketches as you want! Just:
        </p>
        <ol>
          <li>Create a new file in <code>src/pages/</code></li>
          <li>Import it in <code>App.jsx</code></li>
          <li>Add a new <code>&lt;Route&gt;</code> in <code>App.jsx</code></li>
          <li>Link to it from any page</li>
        </ol>
      </div>
    </div>
  )
}

export default Home
