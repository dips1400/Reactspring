import React, { useState, useEffect } from 'react';
import { Editor, EditorState, RichUtils, convertFromRaw, convertToRaw } from 'draft-js';
import 'draft-js/dist/Draft.css';
import { Box, Button, IconButton, Toolbar } from '@mui/material';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';

const RichTextEditor: React.FC = () => {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

  useEffect(() => {
    const savedContent = localStorage.getItem('richTextContent');
    console.log('Saved Content:', savedContent); // Add this line
    if (savedContent) {
      try {
        const contentState = convertFromRaw(JSON.parse(savedContent));
        setEditorState(EditorState.createWithContent(contentState));
      } catch (error) {
        console.error('Error parsing saved content:', error);
      }
    }
  }, []);

  useEffect(() => {
    const contentState = editorState.getCurrentContent();
    localStorage.setItem('richTextContent', JSON.stringify(convertToRaw(contentState)));
  }, [editorState]);

  const handleKeyCommand = (command: string, editorState: EditorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return 'handled';
    }
    return 'not-handled';
  };

  const onToggleInlineStyle = (inlineStyle: string) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, inlineStyle));
  };

  return (
    <Box 
    sx={{ border: 1,
      height:"302px",
      padding:"1rem",
      borderRadius:"12px"
     }}>
      <Toolbar>
        <IconButton onClick={() => onToggleInlineStyle('BOLD')}>
          <FormatBoldIcon />
        </IconButton>
        <IconButton onClick={() => onToggleInlineStyle('ITALIC')}>
          <FormatItalicIcon />
        </IconButton>
        <IconButton onClick={() => onToggleInlineStyle('UNDERLINE')}>
          <FormatUnderlinedIcon />
        </IconButton>
      </Toolbar>
      <div style={{
  border: '1px solid #ccc',
  borderRadius: '5px',
  minHeight: '200px',
  padding: '10px',
}}>
  <Editor 
    editorState={editorState}
    handleKeyCommand={handleKeyCommand}
    onChange={setEditorState}
    placeholder="Start typing here..."
  />
</div>
    </Box>
  );
};

export default RichTextEditor;
