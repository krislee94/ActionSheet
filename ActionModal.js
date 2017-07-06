/**
 * Created by Krislee on 2017/7/4.
 * 用于底部的弹窗。仿照IOS的ActionShift。
 */
import React, {Component} from 'react'

import {

    StyleSheet,
    View,

    Text,
    TouchableHighlight,
    Dimensions,
    TouchableOpacity,
    TouchableWithoutFeedback,
} from 'react-native'

import Modal from 'react-native-root-modal'
import {toDips} from './PixelRatioUtils'
const fullWidth = Dimensions.get('window').width;
const fullHeight = Dimensions.get('window').height;

export default class Activity extends Component {
    constructor(props){
        super(props);
        this.state={
            onRequestClose:true,
        }
    }
    static get defaultProps(){
        return{
            text1:'拍照',
            text2:'选择相册',
            text3:'取消',
        }
    }
    componentWillMount() {
        this.state = {
            onRequestClose: this.props.actionvisible,
        };
    }

    _setModalVisible(visible) {
        this.setState({
            onRequestClose: visible}
        );
    }

   render(){
        return(

            <View style={{justifyContent:'center',}} >

                <Modal animationType={'slide'}
                       transparent={true}
                       visible={this.props.actionvisible}
                       onRequestClose={() => {this._setModalVisible(false)}}
                     >
                    <View style ={{alignItems:'center'}}>
                    <TouchableWithoutFeedback onPress={this.props.hideModal}>
                        <View style={{flex:1,width:fullWidth,height:fullHeight}}></View>
                    </TouchableWithoutFeedback>
                    <View style = {styles.container}>

                        <View style={styles.fx1}>

                            {/*paizhao*/}
                            <TouchableOpacity style = {styles.touch} onPress={this.props.functiontext1}>
                                <Text style= {styles.textstyle}>{this.props.text1}</Text>
                            </TouchableOpacity>

                            {/*选择相册*/}
                            <TouchableOpacity style = {styles.touch1} onPress={this.props.functiontext2}>
                                <Text style={styles.textstyle}>{this.props.text2}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{width:fullWidth,height:toDips(20),backgroundColor:'rgba(0,0,0,0)'}}></View>
                        <View style={styles.fx2}>
                            <TouchableOpacity onPress={this.props.closeAction} style={styles.touch1}>
                                <Text style={styles.textstyle}>{this.props.text3}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    </View>
                </Modal>
            </View>


        );
   }
}
const styles = StyleSheet.create({
    container:{
        bottom:toDips(30),
      //  borderWidth:1,
        width:fullWidth-toDips(60),
        height:toDips(280),
       // marginTop:toDips(600),
        position:'absolute'
    },
    fx1:{
      //  borderWidth:1,
        width:fullWidth-toDips(70),
        alignItems:'center',
        justifyContent:'center',
        borderRadius:12,
        height:toDips(166),
        backgroundColor:'#ffffff'
    },
    fx2:{
      //  borderWidth:1,
        width:fullWidth-toDips(70),
        alignItems:'center',
        justifyContent:'center',
        borderRadius:12,
        height:toDips(86),
        backgroundColor:'#ffffff'
    },
    touch:{
        width:fullWidth-toDips(70),
        height:toDips(86),
        borderBottomWidth:1,
        borderBottomColor:'#f5f5f5',
        alignItems:'center',
        justifyContent:'center',
    },
    touch1:{
        width:fullWidth-toDips(70),
        height:toDips(86),
        alignItems:'center',
        justifyContent:'center',
    },
    textstyle:{
        fontSize:toDips(32),
        color:'#3c8fff',
    }

});



