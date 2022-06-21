import React from 'react'
import { SvgXml } from 'react-native-svg'

const SvgLoader = ({xml, width, height}) => {

    return (
        <SvgXml xml={xml} width={width} height={height} />
    )
}

export default SvgLoader;