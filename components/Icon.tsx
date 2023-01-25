import * as React from 'react';
import {IconType} from 'react-icons/lib';


interface IconProps {
    icon: IconType;
    children: React.ReactNode;
};

export const Icon: React.FC<IconProps> = ({ icon: Icon, children}) => {
    return (
        <div className="flex-shrink-0" role="button">
            { 
                <div className="flex-shrink-0"> 
                    <Icon  /> 
                </div>
            }
        </div>
    );
}


