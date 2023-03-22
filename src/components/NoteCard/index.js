import React from 'react'
import StyledNoteCard, { NoteExcerpt, NoteTitle, NoteImage, NotePublishTime } from './style'

import note1 from 'assets/images/note-1.jpg'

function NoteCard ({...rest}) {
    return (
        <StyledNoteCard {...rest}>
            <NoteImage src={note1} alt='' />
            <NoteTitle>学习英语笔记</NoteTitle>
            <NoteExcerpt>Hello everyone! This is my first note!</NoteExcerpt>
            <NotePublishTime>3小时之前</NotePublishTime>
        </StyledNoteCard>
    )
}

NoteCard.propTypes = {}

export default NoteCard