import React from "react";
import { ContactCard } from "../component/ContactCard";
import "../../styles/home.css";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>Hello Rigo!</h1>
		<div className="list-group">
			<ContactCard/>
			<ContactCard/>			
			<ContactCard/>						
		</div>
		<a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a>
	</div>
);
