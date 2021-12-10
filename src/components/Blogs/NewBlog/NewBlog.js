import React from 'react';
import BlogPath from '../BlogPath';
import './NewBlog.css';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
// import style manually
import 'react-markdown-editor-lite/lib/index.css';

function NewBlog() {
    // Initialize a markdown parser
    const mdParser = new MarkdownIt(/* Markdown-it options */);

    // Finish!
    function handleEditorChange({ html, text }) {
        console.log('handleEditorChange', html, text);
    };

    return (
        <div className='add-blog-container'>
            <BlogPath />
            <div className='add-blog-main'>
                <div className='add-blog-sidebar'>

                </div>
                <div className='add-blog'>
                    <h1>Tạo bài blog mới</h1>
                    <div className='add-blog-title'>
                        <input type='text' name='name' id='add-blog-title' placeholder='Nhập tiêu đề bài viết'/>
                    </div>
                    <div className='add-blog-cover'></div>
                    <div className='add-blog-content'>
                        <MdEditor style={{ height: '500px' }} renderHTML={text => mdParser.render(text)} onChange={handleEditorChange} />
                    </div>
                    <div className='add-blog-button'>
                        <button type='button' className='add-blog-btn'>Tạo bài blog</button> 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewBlog;