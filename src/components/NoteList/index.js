import FilterList from 'components/FilterList'
import NoteCard from 'components/NoteCard'
import React from 'react'
import StyledNoteList, { Notes } from './style'

function NoteList ({...rest}) {
    return (
        <StyledNoteList {...rest}>
            <FilterList options={['最新笔记优先', '有改动的优先']} actionLabel='添加笔记'>
                <Notes>
                    {new Array(10).fill(0).map((_, i) => <NoteCard key={i} />)}
                </Notes>
            </FilterList>
        </StyledNoteList>
    )
}

NoteList.propTypes = {}

export default NoteList