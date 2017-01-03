import React, {
    Component
} from 'react'

import {
    Navigator,
    Platform,
    View
} from 'react-native'

import EditView from '../../View/Edit'

export default class NavigatorComp extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Navigator
                    initialRoute={{name: 'editView', index: 0, id: 'edit'}}
                    configureScene={this._configureScene}
                    renderScene={this._renderScene}
                />
            </View>
        )
    }

    _renderScene(route, navigator) {
        switch (route.id) {
        case 'edit':
            return (
                <EditView navigator={navigator} route={route}/>
            )
        default:
            break
        }
    }

    _configureScene(route, routeStack) {
        switch (route.id) {
        case 'tweet':
        case 'webview':
        case 'photoBrowser':
            return Navigator.SceneConfigs.FloatFromBottom
        default:
            return Navigator.SceneConfigs.FloatFromRight
        }
    }
}

const styles = {
    container: {
        flexGrow: 1
    }
}
