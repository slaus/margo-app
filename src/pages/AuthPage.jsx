import React from 'react';

import {EditorContent, useEditor} from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Highlight from '@tiptap/extension-highlight';
import TextAlign from '@tiptap/extension-text-align';

import '../css/editor.css';
import axios from "axios";

const MenuBar = ({editor}) => {
    if (!editor) {
        return null
    }

    const addImage = () => {
        const url = window.prompt('URL')

        if (url) {
            editor.chain().focus().setImage({src: url}).run()
        }
    }

    return (
        <div className="float-edit-menu">
            <div className="container text-center">
                <button
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    disabled={
                        !editor.can()
                            .chain()
                            .focus()
                            .toggleBold()
                            .run()
                    }
                    className={editor.isActive('bold') ? 'is-active' : ''}
                >
                    <i className="fa fa-bold" title="bold"></i>
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    disabled={
                        !editor.can()
                            .chain()
                            .focus()
                            .toggleItalic()
                            .run()
                    }
                    className={editor.isActive('italic') ? 'is-active' : ''}
                >
                    <i className="fa fa-italic" title="italic"></i>
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    disabled={
                        !editor.can()
                            .chain()
                            .focus()
                            .toggleStrike()
                            .run()
                    }
                    className={editor.isActive('strike') ? 'is-active' : ''}
                >
                    <i className="fa fa-strikethrough" title="strike"></i>
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleCode().run()}
                    disabled={
                        !editor.can()
                            .chain()
                            .focus()
                            .toggleCode()
                            .run()
                    }
                    className={editor.isActive('code') ? 'is-active' : ''}
                >
                    <i className="code" title="code"></i>
                </button>
                {/*<button onClick={() => editor.chain().focus().unsetAllMarks().run()}>*/}
                {/*    clear marks*/}
                {/*</button>*/}
                <button onClick={() => editor.chain().focus().clearNodes().run()}>
                    <i className="fa fa-eraser" title="clear nodes"></i>
                </button>
                <button
                    onClick={addImage}
                >
                    <i className="fa fa-picture-o" title="add image from URL"></i>
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({level: 1}).run()}
                    className={editor.isActive('heading', {level: 1}) ? 'is-active' : ''}
                >
                    <i className="h1-tag" title="h1"></i>
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({level: 2}).run()}
                    className={editor.isActive('heading', {level: 2}) ? 'is-active' : ''}
                >
                    <i className="h2-tag" title="h2"></i>
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({level: 3}).run()}
                    className={editor.isActive('heading', {level: 3}) ? 'is-active' : ''}
                >
                    <i className="h3-tag" title="h3"></i>
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({level: 4}).run()}
                    className={editor.isActive('heading', {level: 4}) ? 'is-active' : ''}
                >
                    <i className="h4-tag" title="h4"></i>
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({level: 5}).run()}
                    className={editor.isActive('heading', {level: 5}) ? 'is-active' : ''}
                >
                    <i className="h5-tag" title="h5"></i>
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({level: 6}).run()}
                    className={editor.isActive('heading', {level: 6}) ? 'is-active' : ''}
                >
                    <i className="h6-tag" title="h6"></i>
                </button>
                <button
                    onClick={() => editor.chain().focus().setParagraph().run()}
                    className={editor.isActive('paragraph') ? 'is-active' : ''}
                >
                    <i className="p-tag" title="paragraph"></i>
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    className={editor.isActive('bulletList') ? 'is-active' : ''}
                >
                    <i className="fa fa-list-ul" title="bullet list"></i>
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                    className={editor.isActive('orderedList') ? 'is-active' : ''}
                >
                    <i className="fa fa-list-ol" title="ordered list"></i>
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                    className={editor.isActive('codeBlock') ? 'is-active' : ''}
                >
                    <i className="code-block" title="code block"></i>
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleBlockquote().run()}
                    className={editor.isActive('blockquote') ? 'is-active' : ''}
                >
                    <i className="fa fa-quote-right" title="blockquote"></i>
                </button>
                <button
                    onClick={() => editor.chain().focus().setHorizontalRule().run()}
                >
                    <i className="hr-tag" title="horizontal rule"></i>
                </button>
                <button
                    onClick={() => editor.chain().focus().setHardBreak().run()}
                >
                    <i className="br-tag" title="hard break"></i>
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHighlight().run()}
                    className={editor.isActive('highlight') ? 'is-active' : ''}
                >
                    <i className="fa fa-lightbulb-o" title="highlight"></i>
                </button>
                <button
                    onClick={() => editor.chain().focus().setTextAlign('left').run()}
                    className={editor.isActive({textAlign: 'left'}) ? 'is-active' : ''}
                >
                    <i className="fa fa-align-left" title="align left"></i>
                </button>
                <button
                    onClick={() => editor.chain().focus().setTextAlign('center').run()}
                    className={editor.isActive({textAlign: 'center'}) ? 'is-active' : ''}
                >
                    <i className="fa fa-align-center" title="align center"></i>
                </button>
                <button
                    onClick={() => editor.chain().focus().setTextAlign('right').run()}
                    className={editor.isActive({textAlign: 'right'}) ? 'is-active' : ''}
                >
                    <i className="fa fa-align-right" title="align right"></i>
                </button>
                <button
                    onClick={() => editor.chain().focus().setTextAlign('justify').run()}
                    className={editor.isActive({textAlign: 'justify'}) ? 'is-active' : ''}
                >
                    <i className="fa fa-align-justify" title="align justify"></i>
                </button>
                <button
                    onClick={() => editor.chain().focus().undo().run()}
                    disabled={
                        !editor.can()
                            .chain()
                            .focus()
                            .undo()
                            .run()
                    }
                >
                    <i className="fa fa-undo" title="undo"></i>
                </button>
                <button
                    onClick={() => editor.chain().focus().redo().run()}
                    disabled={
                        !editor.can()
                            .chain()
                            .focus()
                            .redo()
                            .run()
                    }
                >
                    <i className="fa fa-repeat" title="redo"></i>
                </button>
            </div>
        </div>
    )
}



export default () => {
    const [editorContent, setEditorContent] = React.useState([]);
    const myEditorContent = '<p>Your content</p>'

    React.useEffect(() => {
        const getArticles = async () => {
            await axios.get(`https://63e6062b7eef5b22337d5372.mockapi.io/articles`)
                .then((res) => {
                    setEditorContent(res.data);
                });
        }

        getArticles();
    }, []);

    const editor = useEditor({
        extensions: [
            StarterKit,
            Image,
            TextAlign.configure({
                types: ['heading', 'paragraph'],
            }),
            Highlight,
        ],
        content: myEditorContent
    })

    console.log(editor);

    return (
        <div className="edit-text-area container">
            {editorContent.map((item, index) => (
                <div key={index}>
                    <MenuBar editor={editor}/>
                    <EditorContent editor={editor} />
                </div>
            ))}
        </div>
    )
}