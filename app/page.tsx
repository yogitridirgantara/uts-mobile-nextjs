import Navbar from "@/components/navbar";
import Home from "@/pages/home";
import About from "@/pages/about";
import Skills from "@/pages/skills";
import Project from "@/pages/project";
import Experience from "@/pages/experience";
import Feedback from "@/pages/feedback";
import FiturBot from "@/components/fiturBot";

export default function Page() {
	return (
		<>
			<Navbar></Navbar>
			<main>
				<Home></Home>
				<About></About>
				<Skills></Skills>
				<Project></Project>
				<Experience></Experience>
				<Feedback></Feedback>
				<FiturBot></FiturBot>
			</main>
		</>
	);
}
