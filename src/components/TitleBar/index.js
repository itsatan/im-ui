import React from 'react'
import PropTypes from 'prop-types'
import StyledTitleBar, { Actions, Title } from './style'
import Avatar from 'components/Avatar'
import Paragraph from 'components/Paragraph'
import Text from 'components/Text'
import Icon from 'components/Icon'

import { ReactComponent as Call } from 'assets/icons/call.svg'
import { ReactComponent as Camera } from 'assets/icons/camera.svg'
import { ReactComponent as Options } from 'assets/icons/options.svg'
import Dropdown from 'components/Dropdown'
import { DropdownItem } from 'components/Dropdown/style'
import Seperator from 'components/Seperator'


function TitleBar ({
    avatarSrc,
    avatarStatus,
    userName,
    userStatus,
    time,
    ...rest
}) {
    return (
        <StyledTitleBar {...rest}>
            <Avatar src={avatarSrc} status={avatarStatus} />
            <Title>
                <Paragraph size='large'>{userName}</Paragraph>
                <Paragraph type='secondary'>
                    <Text>{userStatus}</Text>
                    <Text>{time}</Text>
                </Paragraph>
            </Title>
            <Actions>
                <Icon opacity={0.3} icon={Call} />
                <Icon opacity={0.3} icon={Camera} />
                <Dropdown content={
                    <>
                        <DropdownItem>
                            <Paragraph>个人资料</Paragraph>
                        </DropdownItem>
                        <DropdownItem>
                            <Paragraph>关闭会话</Paragraph>
                        </DropdownItem>
                        <Seperator />
                        <DropdownItem>
                            <Paragraph type='danger'>屏蔽此人</Paragraph>
                        </DropdownItem>
                    </>
                }>
                    <Icon opacity={0.3} icon={Options} />
                </Dropdown>
            </Actions>
        </StyledTitleBar>
    )
}

TitleBar.propTypes = {
    avatarSrc: PropTypes.any,
    avatarStatus: PropTypes.oneOf(['online', 'offline']),
    userName: PropTypes.string,
    userStatus: PropTypes.oneOf(['在线', '离线', '忙碌', '隐身']),
    time: PropTypes.string,
}

export default TitleBar