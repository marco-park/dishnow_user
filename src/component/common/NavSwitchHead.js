import React, {Component} from 'react';
import {View, Image, StyleSheet, Dimensions} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import {Text,Button} from './index'
import * as Utill from '../../utill'
import { TouchableOpacity } from 'react-native-gesture-handler';
 


const NavSwitchHead = (props) => {
    const {navigation,navtitle, title='디쉬나우', onSavePress, BackbuttonDisable=false, paddingHorizontal = 15, token, type, kakaoProfile, faceBookProfile, naverProfile} = props;
    return (    
        <View style={styles.container}>
                <View style={[styles.logo, {width : Utill.screen.screenWidth, height: (50*Utill.screen.screenRatio) + Utill.screen.topSafe, paddingTop:Utill.screen.topSafe, position: 'absolute', alignItems : 'center', justifyContent : 'center'}]}>
                    <Text style ={styles.titleText}>{title}</Text>
                </View>
                <BackButton onPress={()=>{
                    if(navtitle==='Terms'){
                        navigation.navigate('Terms',{
                            type,
                            token,
                            kakaoProfile,
                            faceBookProfile,
                            naverProfile,
                        })
                    }
                    else if(!BackbuttonDisable)navigation.navigate(navtitle)}} paddingHorizontal={paddingHorizontal}
                />
                

                {onSavePress &&
                    <SaveButton onPress={onSavePress} paddingHorizontal={paddingHorizontal}/>
                }

                
                

                
        </View>
    )
}


export default NavSwitchHead;




const BackButton = ({onPress, paddingHorizontal}) => {
    
    return (
            <Button 
                style={{
                    left : paddingHorizontal,
                    Top : Utill.screen.topSafe,
                    alignSelf : 'center'
                }}
                onPress={onPress} 
            >
                <Image style={styles.backBottonIcon} source={{uri : 'icon_back_button'}} />
            </Button>
    )

}


const SaveButton = ({onPress, paddingHorizontal}) => {
    
    return (
        <Button
            style = {{
                right : paddingHorizontal,
                Top : 2 + Utill.screen.topSafe,
            }}
            onPress = {onPress}
        >
            <Text style={styles.saveButtonText}>
                확인
            </Text>
        </Button>
           
    )
}




const styles = StyleSheet.create({
    container: {
        height: (60) + Utill.screen.topSafe,
        flexDirection : 'row',
        alignSelf:'stretch',
        alignItems:'center',
        justifyContent: 'space-between',
        paddingTop : Utill.screen.topSafe,
        backgroundColor : Utill.color.onColorBackground,
    },
    logo: {
        position : 'absolute',
        alignItems:'center',
        margin : 0,
    },

    titleText : {
        margin : 0,
        fontSize : 18,
        color : Utill.color.textBlack,
    },
    backBottonIcon : {
        width : 9.5,
        height : 16, 
    },
    saveButtonText : {
        fontSize : 14,
        color : Utill.color.black,
    }
});