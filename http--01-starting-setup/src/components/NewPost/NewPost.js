import React, { Component, useState } from 'react';

import './NewPost.css';

// class NewPost extends Component {
//     state = {
//         title: '',
//         content: '',
//         author: 'Max'
//     }

//     render () {
//         return (
//             <div className="NewPost">
//                 <h1>Add a Post</h1>
//                 <label>Title</label>
//                 <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
//                 <label>Content</label>
//                 <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
//                 <label>Author</label>
//                 <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
//                     <option value="Max">Max</option>
//                     <option value="Manu">Manu</option>
//                 </select>
//                 <button>Add Post</button>
//             </div>
//         );
//     }
// }

function NewPost()
{
    const [title,setTitle]= useState('');
    const [content,setContent]=useState('');
    const [author,setAuthor] = useState('Max');
    return (
                    <div className="NewPost">
                        <h1>Add a Post</h1>
                        <label>Title</label>
                        <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
                        <label>Content</label>
                        <textarea rows="4" value={content} onChange={(event) => setContent(event.target.value)} />
                        <label>Author</label>
                        <select value={author} onChange={(event) => setAuthor(event.target.value)}>
                            <option value="Max">Max</option>
                            <option value="Manu">Manu</option>
                        </select>
                        <button>Add Post</button>
                    </div>
                );

}
export default NewPost;