import React from 'react';
import {Pressable, Text} from 'react-native'

//0.63 버전 부터 TouchableOpacity 대용으로 사용할 수 있는 Pressable 컴포넌트를 사용할 수 있다고 함
//차이점은 버튼에 정확하게 터치가 되지 않고 일정 범위 내 터치를 인식하여 이벤트를 발생시키는 범위를 설정하는 HitRect,
//버튼 클릭을 취소하기 위해 버튼을 누른 상태로 손가락을 이동할 때 범위를 설정하는 PressRect 기능을 지원한다고 한다.
const MyPressable = ({onPress, onLongPress}) => {
  return (
    <>
      <Pressable
        onPress={onPress}
        delayLongPress={2000}
        onLongPress={onLongPress}
        pressRetentionOffset={{bottom: 40, left: 40}}
        hitSlop={{bottom: 100, left: 100}} //500으로 하면 거의 화면 끝까지 터치가 가능하다..
        style={{backgroundColor: '#fff'}}
      >
        <Text>안녕하세여 저를 클릭하세여</Text>
      </Pressable>
    </>
  );
};

export default MyPressable;
