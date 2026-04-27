import React from "react";
import SideNav from "../../components/SideNav";
import { Link } from "react-router-dom";

interface StatusProps {
    status?: string;
    assignee?: string;
    reporter?: string;
    priority?: string;
}


const Issue = () => {
    const [description, setDescription] = React.useState('');
    const [commentText, setCommentText] = React.useState('');
    const [showSaveConfirmation, setShowSaveConfirmation] = React.useState(false);
    const [comments, setComments] = React.useState([
        { id: 1, author: 'Jane Doe', text: 'This is a comment on the issue.' },
        { id: 2, author: 'John Smith', text: 'Another comment on the issue.' },
        { id: 3, author: 'Alice Johnson', text: 'Yet another comment on the issue.' },
        { id: 4, author: 'Bob Brown', text: 'This issue needs to be addressed ASAP.' },
        { id: 5, author: 'Charlie Davis', text: 'I have a suggestion for fixing this issue.' },
        { id: 6, author: 'Eve Wilson', text: 'Can we prioritize this issue?' },
        { id: 7, author: 'Frank Miller', text: 'I am working on a fix for this issue.' },
        { id: 8, author: 'Grace Lee', text: 'This issue is affecting our users.' },
        { id: 9, author: 'Hank Green', text: 'We should have a meeting to discuss this issue.' },
        { id: 10, author: 'Ivy Taylor', text: 'This issue has been resolved in the latest update.' },
    ]);

    const handleAddComment = (commentText: string) => {
        if (commentText.trim() === '') return;
        const newComment = {
            id: comments.length + 1,
            author: 'Current User', // Replace with actual user name if available
            text: commentText
        };
        setComments([...comments, newComment]);
        setCommentText('');
    };

  return (
    <main className="flex flex-col lg:flex-row lg:min-h-[calc(100vh-88px)]  gap-6 px-1 py-0 sm:px-6 lg:px-10">
        <article className="flex-1 flex-col w-full lg:w-[450px] bg-white rounded-[32px] border border-slate-200 p-6 shadow-sm">
            <div className="flex-1 flex-col w-full">
                <Link to="/dashboard" className="text-blue-600">Project Alpha</Link> {'>'} <Link to="/issues" className="text-blue-600">Issues</Link> {'>'} Issue #123
                <h1 className="text-2xl font-bold text-slate-900 mt-4 overflow-hidden break-words">
                    Issue Titles
                </h1>
                <h2 className="text-lg font-semibold text-slate-700 mt-10">Description</h2>
                <textarea 
                    className="w-full h-[400px] max-h-[400px] min-h-[400px] mt-2 p-4 border rounded-lg bg-slate-50 resize-none" 
                    placeholder="Describe the issue..." 
                    value={description}
                    onChange={(e) => {setDescription(e.target.value); setShowSaveConfirmation(true);}}
                    onBlur={() => description.trim() === '' && setShowSaveConfirmation(false)}
                />
                {showSaveConfirmation && (
                    <div className="flex justify-end mb-4">
                        <button 
                            disabled={description.trim() === ''}
                            onClick={() => {
                                // Handle save logic here, e.g., make API call to save the issue description
                                console.log('Issue description saved:', description);
                                setShowSaveConfirmation(false);
                            }}
                            className="mt-4 px-4 py-2 bg-blue-600 disabled:opacity-50 text-white rounded-lg hover:bg-blue-700 transition">
                            Save
                        </button>
                </div>)}
                <section className="mt-10">
                    <h2 className="text-lg font-semibold text-slate-700 mb-4">Comments</h2>
                    <textarea className="w-full h-[100px] max-h-[100px] min-h-[100px] mt-4 p-4 border rounded-lg bg-slate-50 resize-none" placeholder="Add a comment..." 
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                    />
                    <div className="flex justify-end mb-4">
                        <button 
                            disabled={commentText.trim() === ''}
                            onClick={() => handleAddComment(commentText)}
                            className="mt-4 px-4 py-2 bg-blue-600 disabled:opacity-50 text-white rounded-lg hover:bg-blue-700 transition">
                            Add Comment
                        </button>
                    </div>
                    {/* Add loop here to display comments from the issue */}
                    <div className="space-y-4">
                        {comments.map(comment => (
                            <div key={comment.id} className="bg-slate-50 p-4 rounded-lg">
                                <p className="text-sm font-semibold text-slate-900">{comment.author}</p>
                                <p className="text-sm text-slate-700 mt-1">{comment.text}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </article>
        <aside className="flex lg:min-h-[calc(100vh-72px)] lg:w-[300px] lg:h-[100px] flex-col p-1">
            <section className="p-6 rounded-[12px] border border-slate-200 shadow-sm">
                <h2 className="text-lg font-semibold text-slate-700 mb-4">Status</h2>
                <p className="text-sm text-slate-600">{"Open"}</p>
            </section>
            <section className="mt-10 p-6 rounded-[12px] border border-slate-200 bg-white shadow-sm">
                <h2 className="text-lg font-semibold text-slate-700 mb-4">Assignee</h2>
                <div className="flex -space-x-2">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-slate-900 text-xs font-semibold text-white shadow-sm">
                        {"JD"}
                    </span>
                </div>
                <h2 className="text-lg font-semibold text-slate-700 mb-4 mt-8">Reporter</h2>
                <div className="flex -space-x-2">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-slate-900 text-xs font-semibold text-white shadow-sm">
                        {"JS"}
                    </span>
                </div>
                <h2 className="text-lg font-semibold text-slate-700 mb-4 mt-8">Priority</h2>
                <div className="flex -space-x-2">
                    <span className="inline-flex rounded-full px-3 py-1 text-xs font-semibold bg-red-100 text-red-700">
                        {"High"}
                    </span>
                </div>
                <h2 className="text-lg font-semibold text-slate-700 mb-4 mt-8">Story Points</h2>
                <div className="flex -space-x-2">
                    <span className="inline-flex rounded-full px-3 py-1 text-xs font-semibold bg-blue-100 text-blue-700">
                        {"5"}
                    </span>
                </div>
            </section>
            <section className="mt-10">
                <div className="flex flex-row justify-between">
                    <h3 className="text-lg font-semibold text-slate-700">Created</h3>
                    <p className="text-sm text-slate-600">{"2024-06-01"}</p>
                </div>
                <div className="flex flex-row justify-between mt-4">
                    <h3 className="text-lg font-semibold text-slate-700">Last Updated</h3>
                    <p className="text-sm text-slate-600">{"2024-06-10"}</p>
                </div>
            </section>
        </aside>
    </main>
  )
}

export default Issue;