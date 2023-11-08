import { FaCss3, FaHtml5, FaJs, FaReact } from 'react-icons/fa6'

export default function MyTools() {
	return (
		<section
			id="my-tools"
			className=""
			aria-label="a list tools I've worked with"
		>
			<article>
				<small>
					<FaHtml5 />
					<span>html</span>
				</small>
				<small>
					<FaCss3 />
					<span>css</span>
				</small>
				<small>
					<FaJs />
					<span>JavaScript</span>
				</small>
				<small>
					<FaReact />
					<span>react</span>
				</small>
			</article>
		</section>
	)
}
