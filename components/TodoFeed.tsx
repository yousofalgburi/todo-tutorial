'use client'

import { useState } from 'react'
import AddTodo from './AddTodo'
import { Button } from './ui/button'

export default function TodoFeed() {
	const [todos, setTodos] = useState<{ name: string; date: Date | undefined }[]>([])

	return (
		<>
			<div className='flex w-full items-end justify-between gap-4'>
				<AddTodo setTodos={setTodos} />
			</div>

			<div className='flex flex-col w-full gap-4'>
				<h2 className='text-2xl font-bold'>Todos</h2>
				<div className='flex flex-col gap-2'>
					{todos.map((todo, index) => (
						<div key={index} className='flex justify-between items-center gap-4'>
							<div className='flex flex-col gap-1'>
								<span>{todo.name}</span>
								<span className='text-sm text-muted-foreground'>{todo.date && todo?.date.toDateString()}</span>
							</div>
							<Button
								onClick={() => {
									setTodos((prev) => prev.filter((_, i) => i !== index))
								}}
								variant='destructive'
							>
								Delete
							</Button>
						</div>
					))}
				</div>
			</div>
		</>
	)
}
