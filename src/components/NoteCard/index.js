import React from 'react'
import StyledNoteCard, { NoteExcerpt, NoteTitle, NoteImage, NotePublishTime } from './style'

function NoteCard ({ note, ...rest }) {
    return (
        <StyledNoteCard {...rest}>
            <NoteImage src={note.image} alt='' />
            <NoteTitle>{note.title}</NoteTitle>
            <NoteExcerpt>{note.excerpt}</NoteExcerpt>
            <NotePublishTime>{note.publishedAt}</NotePublishTime>
        </StyledNoteCard>
    )
}

NoteCard.propTypes = {}

export default NoteCard