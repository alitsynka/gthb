import React, {useEffect, useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import {Header} from "./Components/Header/Header";
import {Main} from "./Components/Main/Main";
import {EmptyList} from "./Components/EmptyList/EmptyList";
import './App.css';

export interface IRepo {
    id: number;
    name: string;
    description: string;
    html_url: string;
}

function App() {
    const [repos, setRepos] = useState([] as IRepo[]);
    const [userName, setUsername] = useState('');
    const [error, setError] = useState('');
    const [reposCount, setReposCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [perPage] = useState(4);
    const [pageCount, setPageCount] = useState(0);

    useEffect(() => {
        if (!userName) {
            return;
        }

        fetch(`https://api.github.com/users/${userName}/repos`)
            .then(response => response.json())
            .then(data => {
                if(data.message){
                    setError(data.message)
                }
                setReposCount(data.length ?? 0)
                setRepos(data.slice(currentPage, currentPage + perPage))
                setPageCount(Math.ceil(data.length / perPage))
            })
    }, [userName, currentPage])

    return (
        <div className="App">
            <Header setUsername={setUsername}/>
            {userName && repos
                ? <Main
                    error={error}
                    repos={repos}
                    reposCount={reposCount}
                    userName={userName}
                    pageCount={pageCount}
                    setCurrentPage={setCurrentPage}/>
                : <EmptyList title="Start with searching a GitHub user" Icon={SearchIcon}/>
            }
        </div>
    );
}

export default App;
