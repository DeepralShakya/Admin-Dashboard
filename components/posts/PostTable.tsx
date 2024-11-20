import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import posts from '@/data/posts';
import Link from 'next/link';

interface PostsTableProps {
    limit?: number;
    title?: string
}

const PostTable = ({ limit, title }: PostsTableProps) => {
  return (
    <div className='mt-10'>
        <h3 className='text-2xl mb-4 font-semibold'>{title ? title: 'Posts'}</h3>
        <Table>
            <TableCaption>Recent Posts</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead className='hidden md:table-cell'>Author</TableHead>
                    <TableHead className='hidden md:table-cell'>Date</TableHead>
                    <TableHead>View</TableHead>
                </TableRow>
            </TableHeader>

            <TableBody>
                {
                    posts.map((post) => (
                        <TableRow key={post.id}>
                            <TableCell>{ post.title }</TableCell>
                            <TableCell className='hidden md:table-cell'>{ post.author }</TableCell>
                            <TableCell className='text-right hidden md:table-cell'>{ post.date }</TableCell>
                            <TableCell>
                                <Link href={`/posts/edit/${post.id}`}>
                                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs'>Edit</button>
                                </Link>
                                </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    </div>
  )
}

export default PostTable
