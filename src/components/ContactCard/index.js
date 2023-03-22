import React from 'react'
import StyledContactCard, { Intro, Name } from './style'
import Avatar from 'components/Avatar'

import face from 'assets/images/face-male-1.jpg'

function ContactCard ({children,...rest}) {
    return (
        <StyledContactCard {...rest}>
            <Avatar src={face} status='online' />
            <Name>李浩</Name>
            <Intro>这个人很懒什么都没有留下...</Intro>
        </StyledContactCard>
    )
}

ContactCard.propTypes = {}

export default ContactCard