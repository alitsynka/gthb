import React, {FC} from 'react';
import s from './EmptyList.module.css'

interface IProps {
    Icon: any;
    title: string;
}

export const EmptyList: FC<IProps> = ({title, Icon}) => (
    <div className={s.emptyListContainer}>
        <div className={s.icon}>
            <Icon style={{fontSize: "65px"}}/>
        </div>
        <div className={s.titleWrapper}>
            <h4 className={s.title}>{title}</h4>
        </div>
    </div>
);
