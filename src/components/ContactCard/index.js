import React from 'react'
import StyledContactCard, { Intro, Name } from './style'
import Avatar from 'components/Avatar'

function ContactCard ({contact,children,...rest}) {
    return (
        <StyledContactCard {...rest}>
            <Avatar src={contact.avatar} status={contact.status} />
            <Name>{contact.name}</Name>
            <Intro>{contact.intro}</Intro>
        </StyledContactCard>
    )
}

ContactCard.propTypes = {}

export default ContactCard