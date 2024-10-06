import React from 'react';
import NestedTreeNode from './components/NestedTreeNode';
import GlobalStyles from './globalStyles';
import { Container, Title } from './styles';

const App: React.FC = () => {
	return (
		<>
			<GlobalStyles />
			<Container>
				<Title>Вложенный список</Title>
				<NestedTreeNode id={1} onDelete={() => {}} canDelete={false} />
			</Container>
		</>
	);
};

export default App;
