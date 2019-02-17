import React, { Component } from 'react'



interface Props {
    width?: number,
    height?: number
}



export default class Logo extends Component<Props> {
    render() {
        const { width = 'max-width', height = 48 } = this.props;
        return (
            <div style={{
                width,
                height,
                backgroundColor: 'red'
            }}>

            </div>
        )
    }
}
