import React from 'react'
import StyledProfile, { Album, AlbumSection, AlbumTitle, CloseIcon, ContactSection, Photo, SocialLinks } from './style'
import "styled-components/macro"
import Avatar from 'components/Avatar'
import Paragraph from 'components/Paragraph'
import Emoji from 'components/Emoji'
import Icon from 'components/Icon'
import Seperator from 'components/Seperator'
import Text from 'components/Text'

import face from 'assets/images/face-male-3.jpg'
import photo1 from 'assets/images/photo1.jpg'
import photo2 from 'assets/images/photo2.jpg'
import photo3 from 'assets/images/photo3.jpg'
import { faGithub, faLinkedin, faWeibo } from '@fortawesome/free-brands-svg-icons'

import { ReactComponent as Cross } from 'assets/icons/cross.svg'

function Profile ({ children, ...rest }) {
    return (
        <StyledProfile {...rest}>
            <CloseIcon icon={Cross} />
            <Avatar
                css="margin:26px 0"
                src={face}
                size="160px"
                status='online'
                statusIconSize='25px'
            />
            <Paragraph size='xlarge' css="margin-bottom:12px">
                慕容天宇
            </Paragraph>
            <Paragraph size='medium' type='secondary' css="margin-bottom:18px">
                北京市 朝阳区
            </Paragraph>
            <Paragraph css="margin-bottom:26px">
                帮助客户构建网站，并协助在社交网站上推广&nbsp;
                <Emoji label='fire'>🔥</Emoji>
            </Paragraph>
            <SocialLinks>
                <Icon.Social icon={faWeibo} bgColor="#F06767" href="http://www.weibo.com" />
                <Icon.Social icon={faGithub} bgColor='black' />
                <Icon.Social icon={faLinkedin} bgColor='#2483C0' />
            </SocialLinks>
            <Seperator css="margin:30px 0" />
            <ContactSection>
                <Description label='联系电话'>+86 18688888888</Description>
                <Description label='电子邮箱'>itsatan@163.com</Description>
                <Description label='个人网站'>https://www.itsatan.com</Description>
            </ContactSection>
            <Seperator css="margin:30px 0" />
            <AlbumSection>
                <AlbumTitle>
                    <Text type='secondary'>相册 (31)</Text>
                    <a href="http://www.baidu.com">查看全部</a>
                </AlbumTitle>
                <Album>
                    <Photo src={photo1} alt="" />
                    <Photo src={photo2} alt="" />
                    <Photo src={photo3} alt="" />
                </Album>
            </AlbumSection>
        </StyledProfile>
    )
}

function Description ({ label, children }) {
    return (
        <Paragraph>
            <Text type='secondary'>{label}：</Text>
            <Text>{children}</Text>
        </Paragraph>
    )
}

Profile.propTypes = {}

export default Profile