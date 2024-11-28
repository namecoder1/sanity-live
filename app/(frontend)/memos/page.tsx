import { sanityFetch } from '@/sanity/lib/live'
import { MEMOS_QUERY } from '@/sanity/lib/queries'

import {
	Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Form from '@/components/form'

const MemosPage = async () => {
	const {data: memos} = await sanityFetch({query: MEMOS_QUERY})
	return (
		<section className='mx-auto max-w-5xl my-20'>
			<Form />
			<div className='my-10'>
				<h1 className='font-semibold text-3xl mb-2'>Memos</h1>
				<div className='grid grid-rows-4 items-center gap-y-4'>
					{memos.map((memo) => (
						<Card key={memo.id}>
							<CardHeader>
								<h1 className='font-semibold text-xl'>{memo.title}</h1>
							</CardHeader>
							<CardContent>
								<p>{memo.description}</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	)
}

export default MemosPage