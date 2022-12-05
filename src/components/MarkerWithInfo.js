import { InfoWindowF, MarkerF } from "@react-google-maps/api"
import React, { Component } from "react"
import binIcon from "../icons/bin-custom.png"

class MarkerWithInfo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false
        }
    }

    handleToggleOpen = () => {
        this.setState({
            isOpen: true
        })
    }

    handleToggleClose = () => {
        this.setState({
            isOpen: false
        })
    }

    render () {
        return (
            <MarkerF key={this.props.key} position={this.props.position} icon={binIcon} onClick={() => this.handleToggleOpen()}>
                {this.state.isOpen && (
                    <InfoWindowF onCloseClick={() => this.handleToggleClose()}>
                        {this.props.label}
                    </InfoWindowF>
                )}
            </MarkerF>
        )
    }
}

export default MarkerWithInfo