import TodoFeed from '@/components/TodoFeed'

export default function Home() {
	return (
		<main className='container min-h-screen flex flex-col gap-10 items-center p-24'>
			<h1 className='text-4xl font-bold'>My Todo App</h1>

			<TodoFeed />
		</main>
	)
}
