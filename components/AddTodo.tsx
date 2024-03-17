'use client'

import { DatePicker } from '@/components/DatePicker'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useState } from 'react'

export default function AddTodo({
	setTodos
}: {
	setTodos: React.Dispatch<React.SetStateAction<{ name: string; date: Date | undefined }[]>>
}) {
	const [todoDate, setDate] = useState<Date>()
	const [todoName, setTodo] = useState('')

	return (
		<>
			<div className='flex flex-col w-full'>
				<Label className='pb-1'>Todo Name:</Label>
				<Input
					onChange={(e) => {
						setTodo(e.target.value)
					}}
				/>
			</div>

			<DatePicker date={todoDate} setDate={setDate} />

			<Button
				onClick={() => {
					setTodos((prev) => [...prev, { name: todoName, date: todoDate }])
				}}
			>
				Add
			</Button>
		</>
	)
}
