import React, {useState, useEffect} from 'react';
import { Image} from 'react-native';

import Button from './Button';


//const IconOff = 'icon_check_circle_disable';
//const IconOn = 'icon_check_circle';

export default (props) => {

    const {onChange, style} = props;

    

    const [value, setValue] = useState(false);

    
    const _trigger = () => {
        setValue(!value);
    }


    return (
        <Button 
            style={{width : 22, height : 22,}} 
            onPress={_trigger}
            source={'../assets/icon_check_circle_disable'}
        />
    )
}