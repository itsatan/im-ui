import FileCard from 'components/FileCard'
import FilterList from 'components/FilterList'
import React from 'react'
import StyledFileList, { Files } from './style'

function FileList ({children,...rest}) {
    return (
        <StyledFileList {...rest}>
            <FilterList options={['最新文件优先', '按文件名排序']}>
                <Files>
                    {new Array(10).fill(0).map((_, i) => <FileCard key={i} />)}
                </Files>
            </FilterList>
        </StyledFileList>
    )
}

FileList.propTypes = {}

export default FileList