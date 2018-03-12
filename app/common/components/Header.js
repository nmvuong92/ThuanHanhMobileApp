import React,{Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    Platform
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CartBadgeIcon from './cartBadgeIcon';
import{NavigationActions} from 'react-navigation';
import {connect} from 'react-redux';
class Header extends Component {
    goBack(){
        const {dispatch} = this.props;       
        dispatch(NavigationActions.back());
    }


    render() {
        let NavigationBar = [];
        if (this.props.showBack != undefined) {
            NavigationBar.push(
                <TouchableOpacity
                    key={'autoBackIcon'}
                    activeOpacity={0.75}
                    style={styles.leftIcon}
                    onPress={()=>{this.goBack();}}
                >
                    <Icon color="black" size={30} name="angle-left"/>
                </TouchableOpacity>
            )
        }   


        if (this.props.leftIcon != undefined) {
            NavigationBar.push(
                <TouchableOpacity
                    key={'leftIcon'}
                    activeOpacity={0.75}
                    style={styles.leftIcon}
                    onPress={this.props.leftIconAction}
                >
                    <Icon color="black" size={30} name={this.props.leftIcon}/>
                </TouchableOpacity>
            )
        }
     
     
        if (this.props.showCartBadgeIcon != undefined) {
            NavigationBar.push(
                <TouchableOpacity
                    key={'RightCartBadgeIcon'}
                    activeOpacity={0.75}
                    style={styles.rightIcon}
                    onPress={this.props.CartBadgeIconAction}
                >
                    <CartBadgeIcon/>
                </TouchableOpacity>
            )
        }
        if (this.props.title != undefined) {
            NavigationBar.push(
                <View key={'title'} style={styles.titleWrap}>
                    <Text style={styles.title}>{this.props.title}</Text>
                </View>
            )
        }
        if (this.props.titleView != undefined) {
            let Component = this.props.titleView;
            NavigationBar.push(
                <Component key={'titleView'}/>
            )
        }
        if (this.props.rightIcon != undefined) {
            NavigationBar.push(
                <TouchableOpacity
                    key={'rightIcon1'}
                    activeOpacity={0.75}
                    style={styles.rightIcon}
                    onPress={this.props.rightIconAction}
                >
                    <Icon color="gray" size={30} name={this.props.rightIcon}/>
                </TouchableOpacity>
            )
        }
        if (this.props.rightIcon2 != undefined) {
            NavigationBar.push(
                <TouchableOpacity
                    key={'rightIcon2'}
                    disabled={true}
                    activeOpacity={0.75}
                    style={[styles.rightIcon2]}
                    onPress={this.props.rightIconAction2}
                >
                    <Icon color="gray" size={30} name={this.props.rightIcon2}/>
                </TouchableOpacity>
            )
        }
        if (this.props.rightButton != undefined) {
            NavigationBar.push(
                <TouchableOpacity
                    key={'rightButton'}
                    activeOpacity={0.75}
                    style={styles.rightButton}
                    onPress={this.props.rightButtonAction}
                >
                    <Text style={styles.buttonTitleFont}>{this.props.rightButton}</Text>
                </TouchableOpacity>
            )
        }

        if (this.props.rightMenu != undefined) {
            NavigationBar.push(
                <TouchableOpacity
                    key={'rightMenu'}
                    activeOpacity={0.75}
                    style={styles.rightMenu}
                    onPress={this.props.rightMenuAction}
                >
                    <Text style={{color: 'gray', fontSize: 12}}>{this.props.rightMenu}</Text>
                    <Image source={{uri: 'ic_food_ordering'}} style={{width: 16, height: 16}}/>
                </TouchableOpacity>
            )
        }


        return (
            <View style={styles.navigationBarContainer}>
                {NavigationBar}
            </View>
        )
    }
}

const mapStateToProps = state => ({
    navReducer:state.navReducer,
});
export default connect(mapStateToProps)(Header);
const styles = StyleSheet.create({
    navigationBarContainer: {
        flexDirection: 'row',
        height: 44,
        alignItems: 'center',
        borderBottomColor: '#ccc',
        borderBottomWidth: 0.5,
        backgroundColor: 'white',
        marginTop: Platform.OS==="ios"?20:0
    },
    titleWrap: {
        flex:1,
        alignItems:'center',
    },
    title: {
        fontSize: 15,
        marginLeft: -40,
    },
    leftIcon: {
        paddingLeft: 15,
        paddingRight: 15,
    },
    rightIcon: {
        position: 'absolute',
        right: 10,
        top: 7
    },
    rightIcon2: {
        position: 'absolute',
        right: 50,
        top: 7
    },
    rightButton: {
        position: 'absolute',
        right: 10,
        height: 44,
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonTitleFont: {
        color: 'white',
        fontSize: 15,
    },
    rightMenu: {
        position: 'absolute',
        right: 10,
        height: 44,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
});