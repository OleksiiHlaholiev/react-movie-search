import { FC } from "react";
import logo from '../../assets/images/logo.svg';
import './ProgressBar.scss';

export interface ProgressBarProps {
    classesToAdd?: string[];
}

const ProgressBar: FC<ProgressBarProps> = (props) => {
    return (
        <div className={'progress-cont'}>
            <img src={logo} className="progress" alt="logo" />
        </div>
    )
}

export default ProgressBar;