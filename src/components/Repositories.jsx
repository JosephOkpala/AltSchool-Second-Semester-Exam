import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Aos from "aos";
import "aos/dist/aos.css";
import "../styles/repos.css";
// import { Link } from "react-router-dom";

const Repositories = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchRepos = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://api.github.com/users/JosephOkpala/repos"
        );
        const data = await response.json();
        setRepos(data);
        console.log(data)
        setLoading(false);
      } catch (error) {
        console.log("error");
      }
    };
    fetchRepos();
  }, []);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const reposPerPage = 3;
  const totalRepos = repos.length;
  const pages = Math.ceil(totalRepos / reposPerPage);
  const skip = page * reposPerPage - reposPerPage;

  if (loading) {
    return <h1 className="loading">Loading...</h1>;
  }

  return (
    <div className="repositories">
      <Helmet>
        <title>Repositories</title>
        <meta
          name="description"
          content="Api fetch of my Github Portfolio. With pagination and nested routes"
        />
        <link rel="canonical" href="/repos" />
      </Helmet>
      <h1 className="repo-header">Repositories</h1>
      <div className="cont">
        {repos.slice(skip, skip + reposPerPage).map((repo) => (
          <div
            key={repo.id}
            className="repo-container"
            data-aos="fade-up"
            data-aos-once="true"
          >
            <div>
              <img src={repo.owner.avatar_url} alt="profile" className="mg-b" />
              <h1 className="mg-b">Project: {repo.name}</h1>
              <h2 className="mg-b">Owner: {repo.owner.login}</h2>
              <h4 className="mg-b">Language used: {repo.language}</h4>
              <p className="mg-b">Fork count: {repo.forks}</p>
              <p className="mg-b">Visibility: {repo.visibility}</p>
              <p className="mg-b">Push: {repo.pushed_at}</p>
              <p className="mg-b">Branch: {repo.default_branch}</p>
              <p className="mg-b">Created at: {repo.created_at}</p>
              <p>Issues: {repo.open_issues}</p>
//               <Link to={`${repo.id}`} name={`${repo.owner.login}`}><button className="btn-more">Click</button></Link>
            </div>
          </div>
        ))}
        <div className="paginate-btn">
          {
            <button
              onClick={() => setPage((prev) => prev - 1)}
              className="prev"
              disabled={page <= 1}
              aria-disabled={page <= 1}
            >
              Prev
            </button>
          }
          {Array.from({ length: pages }, (value, index) => index + 1).map(
            (each) => (
              <button
                className="paginate-numbers"
                onClick={() => setPage(each)}
              >
                {each}
              </button>
            )
          )}
          {
            <button
              onClick={() => setPage((prev) => prev + 1)}
              className="next"
              disabled={page >= pages}
              aria-disabled={page >= pages}
            >
              Next
            </button>
          }
        </div>
      </div>
    </div>
  );
};

export default Repositories;
