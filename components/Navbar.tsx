import { ModeToggle } from './ModeToggle'

export default function Navbar() {
	return (
		<nav className='flex justify-between items-center py-4 px-8'>
			<h1 className='text-2xl font-bold'>My App</h1>

			<ModeToggle />
		</nav>
	)
}
