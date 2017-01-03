import React, {
    Component,
    PropTypes
} from 'react'

import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native'


import conf from '../../Utils/conf'

export default class EditorComp extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <View>
                <TextInput
                    placeholder={this.props.placeholder}
                    multiline={true}
                    style={styles.textInput}
                    value={this.props.text}
                    onChangeText={this.props.onChangeText}
                />
                <View style={styles.toolbar}>
                    {this._renderTool('camera', 'uniE611')}
                    {this._renderTool('album', 'uniE609')}
                    {this._renderTool('emotion', 'uniE607')}
                    {this._renderTool('at', 'uniE61A')}
                    {this._renderTool('location', 'uniE61B')}
                </View>
                <View style={styles.row}>
                <TouchableOpacity style={styles.button} onPress={this._userRegister} underlayColor='#99d9f4'>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
                </View>
            </View>
        )
    }

    _renderTool(tool, icon, handle = () => {}) {
        if(this._enableTool(tool)) {
            return (
                <TouchableOpacity style={styles.tool}>
                    <Text style={styles.toolText}>{conf(icon)}</Text>
                </TouchableOpacity>
            )
        }
    }

    _enableTool(tool) {
        let list = this.props.enableTools
        return ~list.trim().indexOf(tool)
    }
}

EditorComp.propTypes = {
    enableTools: PropTypes.string,
    text: PropTypes.string,
    placeholder: PropTypes.string,
    onChangeText: PropTypes.func
}

EditorComp.defaultProps = {
    enableTools: 'camera, album, emotion, at, location'
}

const styles = StyleSheet.create({
    textInput: {
        height: 160,
        backgroundColor: '#fff',
        padding: 10,
        paddingTop: 5,
        paddingBottom: 5,
        fontSize: 14,
        textAlignVertical: 'top'
    },
    toolbar: {
        flexDirection: 'row',
        height: 40,
        backgroundColor: '#f9f9f9',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderColor: '#dadada',
    },
    tool: {
        width: 50,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 5,
        marginRight: 5
    },
    toolText: {
        fontSize: 22,
        fontFamily: 'iconfont',
        color: '#666'
    },
    buttonText: {
         fontSize: 18,
         color: 'white',
         alignSelf: 'center'
    },
    button: {
         height: 36,
         backgroundColor: '#48BBEC',
         borderRadius: 8,
         alignSelf: 'stretch',
         justifyContent: 'center'
    }
})
