import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Homepage from './components/Homepage/Homepage'

const App = () : JSX.Element => (
  <Layout >
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </Router>
  </Layout>
)

export default App