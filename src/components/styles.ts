import styled from 'styled-components';

export const NodeContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 20px;
	border-left: 1px solid var(--border-color);
	padding-left: 15px;
	background-color: var(--background-color);
	transition: background-color 0.2s;
	box-shadow: var(--box-shadow);

	&:hover {
		background-color: #f0f0f0;
	}
`;

export const NodeActions = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 8px;
	font-size: 15px;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

export const NodeContent = styled.div`
	display: flex;
	align-items: center;
	color: #333;
`;

export const NodeLabel = styled.span`
	font-weight: 600;
	margin-right: 10px;
	font-size: 15px;
`;

export const ActionButton = styled.button`
	background-color: transparent;
	border: none;
	color: var(--action-button-color);
	cursor: pointer;
	margin-right: 5px;
	padding: 4px 8px;
	border-radius: 3px;
	transition:
		color 0.2s,
		background-color 0.2s;

	&:hover {
		background-color: var(--action-button-hover-color);
	}

	&:disabled {
		color: var(--action-button-disabled-color);
		cursor: not-allowed;
	}
`;
