import FilterList from 'components/FilterList'
import NoteCard from 'components/NoteCard'
import React from 'react'
import StyledNoteList, { Notes } from './style'
import useStaggeredList from 'hooks/useStaggeredList'
import { animated } from 'react-spring'

function NoteList ({ ...rest }) {
    const trailAnimes = useStaggeredList(10)
    return (
        <StyledNoteList {...rest}>
            <FilterList options={['最新笔记优先', '有改动的优先']} actionLabel='添加笔记'>
                <Notes>
                    {new Array(10).fill(0).map((_, i) => (
                        <animated.div key={i} style={trailAnimes[i]}>
                            <NoteCard key={i} />
                        </animated.div>
                    ))}
                </Notes>
            </FilterList>
        </StyledNoteList>
    )
}

NoteList.propTypes = {}

export default NoteList