import React from 'react'
import PropTypes from 'prop-types'
import StyledSettings, { SettingsItemControl, StyledSettingsItem } from './style'
import Paragraph from 'components/Paragraph'
import Switch from 'components/Switch'
import Icon from 'components/Icon'
import Seperator from 'components/Seperator'

import { ReactComponent as ArrowMenuRight } from "assets/icons/arrowMenuRight.svg";

function Settings ({ children, ...rest }) {
    return (
        <StyledSettings {...rest}>
            {children}
        </StyledSettings>
    )
}

export function SettingsItem ({
    type = 'switch',
    label,
    description,
    children,
    ...rest
}) {
    return (
        <StyledSettingsItem {...rest}>
            <SettingsItemControl>
                <Paragraph size='large'>{label}</Paragraph>
                {type === 'switch' && <Switch />}
                {type === 'menu' && <Icon icon={ArrowMenuRight} />}
            </SettingsItemControl>
            {description && (
                <Paragraph type='secondary' style={{ margin: '4px 0' }}>
                    {description}
                </Paragraph>
            )}
            <Seperator style={{ marginTop: '8px', marginBottom: '20px' }} />
        </StyledSettingsItem>
    )
}

Settings.propTypes = {
    type: PropTypes.string,
    label: PropTypes.string,
    description: PropTypes.string,
    children: PropTypes.any,
}

export default Settings