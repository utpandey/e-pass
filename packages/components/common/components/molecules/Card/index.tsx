import React from 'react';

export interface ICardProps {
	rootClassName?: string,
	children?: React.ReactNode
}

export const Card: React.FC<ICardProps> = ({rootClassName, children, ...props}) => {

	return (
		<div
			className={rootClassName}
			{...props}
		>
			{children}
		</div>
	);
};
