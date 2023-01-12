import * as React from 'react';
import { IconType } from 'react-icons/lib';

interface IconProps {
    icon: IconType;
    children: React.ReactNode;
};

const Icon: React.FC<IconProps> = ({ icon: Icon, children }) => {

    const [hover, setHover] = React.useState(false);

	const onHover = () => {
		setHover(true);
	}
	const onLeave = () => {
		setHover(!hover);
	}

    return (
            <div className="flex-shrink-0" onMouseEnter={onHover} onMouseLeave={onLeave} role="button" tabIndex={-3}>
                { hover ? <>{children}</> : <Icon /> }
            </div>
        );
}

export default Icon;