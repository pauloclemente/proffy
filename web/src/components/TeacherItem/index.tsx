import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';
import api from '../../services/api';
export interface ITeacherDTO {
	id: number;
	avatar: string;
	bio: string;
	cost: number;
	name: string;
	subject: string;
	whatsapp: string;
}
interface ITeacherItemProps {
	teacher: ITeacherDTO;
}

const TeacherItem: React.FC<ITeacherItemProps> = ({ teacher }) => {
	function handleCreateConnection() {
		api.post('connections', { user_id: teacher.id });
	}
	return (
		<article className="teacher-item">
			<header>
				<img src={teacher.avatar} alt={teacher.name} />
				<div>
					<strong>{teacher.name}</strong>
					<span>{teacher.subject}</span>
				</div>
			</header>
			<p>{teacher.bio}</p>
			<footer>
				<p>
					Preço/hora
					<strong>{teacher.cost}</strong>
				</p>
				<a
					target="_blank"
					onClick={handleCreateConnection}
					href={`https://wa.me/${teacher.whatsapp}`}
					type="button"
				>
					<img src={whatsappIcon} alt="Whatsapp" />
					Entrar em contato
				</a>
			</footer>
		</article>
	);
};
export default TeacherItem;
