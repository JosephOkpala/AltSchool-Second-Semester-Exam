import { useParams } from "react-router-dom"

const RepoDetails = () => {
    const { repoId } = useParams()
    console.log({repoId})
    return(
        <div style={{color:'white'}}>
            <h1>Repo Details</h1>
            <h1>{repoId}</h1>
        </div>
    )
}
