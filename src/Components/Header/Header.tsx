import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import s from './Header2.module.css'
import SearchIcon from '@mui/icons-material/Search';
import GitHubIcon from '@mui/icons-material/GitHub';

export const Header = ({setUsername}: any) => {
    const [value, setValue] = useState('');

    const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.charCode === 13){
            setUsername(value)
            setValue('')
        }
    };

    return (
        <div className={s.header}>
                <GitHubIcon className={s.githubIcon} style={{"fontSize": "40px"}}/>
                <div className={s.wrapperInput}>
                    <SearchIcon className={s.searchIcon}/>
                    <input className={s.input} value={value} onChange={onSearchChange} onKeyPress={onKeyPressHandler}/>
                </div>
        </div>
    )
}