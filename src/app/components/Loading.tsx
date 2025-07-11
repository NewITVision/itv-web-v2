import React from 'react';

export const Loading: React.FC<{ absolute?: boolean }> = ({ absolute }) => {
	return (
		<>
			<div className={`loading ${absolute ? 'loading--absolute' : ''}`} />
		</>
	);
};
