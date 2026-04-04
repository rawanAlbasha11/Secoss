
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs'
import Home from './pages/Home/Home'
import ConditionsOfAffiliation from './pages/ConditionsOfAffiliation/ConditionsOfAffiliation'
import BoardOfDirectors from './pages/BoardOfDirectors/BoardOfDirectors'
import About from './pages/About/About'
import Lectures from './pages/Lectures/Lectures'
import Lecturers from './pages/Lecturers/Lecturers'
import Login from './pages/Login/Login'
import NewsDetails from './pages/NewsDetails/NewsDetails'
import News from './pages/News/news'
import LectureDetail from './pages/LectureDetail/LectureDetail'

function App() {
  return (
    <BrowserRouter>
      <div dir="rtl" className="min-h-screen bg-slate-50 text-slate-900">
        <Navbar />
        <main className="mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <Breadcrumbs />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lectures" element={<Lectures />} />
            <Route path="/lecture-detail/:id" element={<LectureDetail />} />
            <Route path="/conditions" element={<ConditionsOfAffiliation />} />
            <Route path="/board" element={<BoardOfDirectors />} />
            <Route path="/about" element={<About />} />
            <Route path="/lecturers" element={<Lecturers />} />
            <Route path="/login" element={<Login />} />
            <Route path="/news-details/:id" element={<NewsDetails />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
