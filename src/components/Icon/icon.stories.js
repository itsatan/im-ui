import React from "react"
import Icon from "."
import { ReactComponent as SmileIcon } from 'assets/icons/smile.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCab, faCode, faCommentDots } from '@fortawesome/free-solid-svg-icons'
import 'story.css'

export default {
    title: "UI组件/Icon",
    component: Icon
}

export const Default = () => <Icon icon={SmileIcon} />

export const CustomColor = () => <Icon icon={SmileIcon} color='gray' />

export const CustomSize = () => <Icon icon={SmileIcon} width={48} height={48} />

export const FontAwesome = () => {
    return (
        <div className='row-element'>
            <FontAwesomeIcon icon={faCommentDots} />
            <FontAwesomeIcon icon={faCode} />
            <FontAwesomeIcon icon={faCab} />
        </div>
    )
}

export const FontAwesomeColor = () => {
    return (
        <div className='row-element'>
            <FontAwesomeIcon icon={faCommentDots} color='gray' />
            <FontAwesomeIcon icon={faCode} color='green' />
            <FontAwesomeIcon icon={faCab} color='red' />
        </div>
    )
}

export const FontAwesomeSizes = () => {
    return (
        <div className='row-element'>
            <FontAwesomeIcon icon={faCommentDots} style={{ fontSize: 24 }} />
            <FontAwesomeIcon icon={faCode} style={{ fontSize: 36 }} />
            <FontAwesomeIcon icon={faCab} style={{ fontSize: 48 }} />
        </div>
    )
}