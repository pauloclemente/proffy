import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

export default function TeacherItem() {
	return (
		<article className="teacher-item">
			<header>
				<img
					src="https://avatars3.githubusercontent.com/u/49348720?s=460&u=f4be4514186442a7dbba98beeb93b50f6bc1e435&v=4"
					alt="Paulo Clemente"
				/>
				<div>
					<strong>Paulo Clemente</strong>
					<span>Calculo numerico</span>
				</div>
			</header>
			<p>
				Instrutor de Educação Física para iniantes, minha missão de vida é levar
				saúde e contribuir pra o crescimento de quem se interessar.
				<br />
				<br />
				Comecei a minha jornada profissional em 2001, quando meu pai me deu dois
				alteres de 32kg com a seguinte condição: Aprenda a fazer dinheiro com
				isso!
			</p>
			<footer>
				<p>
					Preço/hora
					<strong>R$ 80,00</strong>
				</p>
				<button type="button">
					<img src={whatsappIcon} alt="Whatsapp" />
					Entrar em contato
				</button>
			</footer>
		</article>
	);
}
