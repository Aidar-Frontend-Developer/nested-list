import React, { useState } from 'react';
import { Trash, Plus } from 'lucide-react';
import {
	ActionButton,
	NodeActions,
	NodeContainer,
	NodeContent,
	NodeLabel,
} from './styles';

interface Props {
	id: number;
	onDelete: (id: number) => void;
	canDelete: boolean;
}

const NestedTreeNode: React.FC<Props> = ({ id, onDelete, canDelete }) => {
	const [children, setChildren] = useState<number[]>([]);
	const [nodeIdCounter, setNodeIdCounter] = useState(1);

	const addChild = () => {
		setChildren([...children, nodeIdCounter]);
		setNodeIdCounter(nodeIdCounter + 1);
	};

	const deleteChild = (childrenId: number) => {
		setChildren(children.filter((id) => id !== childrenId));
	};

	return (
		<NodeContainer>
			<NodeActions>
				<NodeContent>
					<NodeLabel>Элемент {id}</NodeLabel>
					<ActionButton onClick={addChild} title="Добавить наследника">
						<Plus size={16} />
					</ActionButton>
					{canDelete && (
						<ActionButton onClick={() => onDelete(id)} title="Удалить элемент">
							<Trash size={16} />
						</ActionButton>
					)}
				</NodeContent>
			</NodeActions>
			{children.map((childrenId) => (
				<NestedTreeNode
					key={childrenId}
					id={childrenId}
					onDelete={deleteChild}
					canDelete={true}
				/>
			))}
		</NodeContainer>
	);
};

export default NestedTreeNode;
