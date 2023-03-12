import { faCommentDots, faCab } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from "react"
import Badge from "."

export default {
    title: 'UI组件/Badge',
    component: Badge
}

export const Default = () => <Badge count={5} />

export const DotVariant = () => {
    return (
        <div className='row-element'>
            <Badge show variant="dot">
                <FontAwesomeIcon icon={faCommentDots} fontSize={24} />
            </Badge>
            <Badge show variant="dot">
                <FontAwesomeIcon icon={faCab} fontSize={24} />
            </Badge>
        </div>
    )
}