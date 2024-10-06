import { styled } from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: var(--padding-large);
	max-width: 90%;
	margin: 0 auto;
	background-color: var(--background-color);
	box-shadow: var(--box-shadow);
	border-radius: var(--border-radius);
	overflow: auto;

	@media (max-width: 768px) {
		padding: var(--padding-medium);
	}
`;

export const Title = styled.h1`
	color: var(--primary-color);
	margin-bottom: 1rem;
	font-size: var(--font-size-large);
	font-weight: 600;
	text-align: left;

	@media (max-width: 768px) {
		font-size: var(--font-size-medium);
	}
`;
