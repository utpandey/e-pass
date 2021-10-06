import React from 'react';

export interface IThemeHomeProps {
	rootClassName?: string,
	children?: React.ReactNode
}

export const ThemeHome: React.FC<IThemeHomeProps> = ({rootClassName, children, ...props}) => {

	return (
		<div
			className={rootClassName}
			{...props}
		>
			{children}
		</div>
	);
};
