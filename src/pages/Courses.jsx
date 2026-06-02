import Navbar from '../components/Navbar'

function Courses() {
  return (
    <div className="page-shell">
      <Navbar />
      <main className="page-main">
        <section className="page-content page-panel">
          <h1>Our Courses</h1>
          <p className="page-text">
            Discover curated learning paths with interactive lessons, hands-on projects, and expert guidance.
          </p>
        </section>
      </main>
    </div>
  )
}

export default Courses;