import React from 'react';
import { CircleAlert, CircleCheck, CircleX, Info } from 'lucide-react';

interface MessageProps {
	messageType: string;
	messageText: string;
	className?: string;
	messageUrl?: string;
	marginBottom?: number;
	marginTop?: number;
	icon?: boolean;
}

export const Message: React.FC<MessageProps> = ({
	messageType,
	messageText,
	messageUrl,
	className = '',
	marginBottom,
	marginTop,
	icon = true,
}) => {
	return (
		<div
			className={`message message--${messageType} ${className}`}
			onClick={() => messageUrl && window.open(messageUrl)}
			style={{
				cursor: messageUrl ? 'pointer' : 'default',
				marginBottom: marginBottom,
				marginTop: marginTop,
			}}
		>
			{icon && (
				<>
					<span className="message--icon">
						{messageType === 'error' && <CircleX />}
						{messageType === 'info' && <Info />}
						{messageType === 'warning' && <CircleAlert />}
						{messageType === 'success' && <CircleCheck />}
					</span>
				</>
			)}
			{messageText}
		</div>
	);
};
