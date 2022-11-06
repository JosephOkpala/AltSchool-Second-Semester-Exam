import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"

export const RepoDetails = () => {
    // const [details, setDetails] = useState([])

    // useEffect(() => {
    //     const fetchRepos = async () => {
    //         try {
    //           const response = await fetch(
    //             "https://api.github.com/users/JosephOkpala/repos"
    //           );
    //           const data = await response.json();
    //           setDetails(data);
    //         } catch (error) {
    //           console.log("error");
    //         }
    //       };
    //       fetchRepos();
    // },[])

    const { repoId } = useParams()
    console.log({repoId})
    return(
        <div style={{color:'white'}}>
            <h1>Repo Details</h1>
            <h1>{repoId}</h1>
            {/* <p>{name}</p> */}
            {/* <h1>Repo Details {repoId}</h1>
            <div>{details.map((detail) =>(
                <div key={repoId}>
                    <h1>{detail.owner.login}</h1>
                </div>
            ))}</div> */}
        </div>
    )
}