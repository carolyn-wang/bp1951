import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { Colors } from '@assets/Colors';

const win = Dimensions.get('window');
/*RESOURCES:
TS Documentation: https://www.typescriptlang.org/docs
*/

// flex: component expand and shrink dynamically based on available space
// Usually, use flex: 1 (component fills all available space
// The larger the flex given, the higher the ratio of space a component takes compared to siblings
//  source: https://reactnative.dev/docs/height-and-width
export const ImageContainer = styled.View`
  align-items: center;
  flex: 0.95;
`;

// aspect ratio: ratio of image width to its height
// after some testing, larger aspect ratio decreases height/excess space

//adjusted width ratio to screen height
export const LoginImg = styled.Image`
  width: ${win.height * .6};
  height: null;
  aspect-ratio: 1.2;
`;

export const LoginHeader = styled.Text`
  font-size: 35px;
  font-family: source-sans-pro-bold;
  margin: 10% 0 2% 10%;
`;

export const LoginInput = styled.TextInput`
  border-color: ${Colors.brandBlue};
  border-radius: 5;
  border-width: 2;
  padding-horizontal: 5%;
  align-items: stretch;
  font-size: 20;
  height: 8%;
  margin: 0 10% 5% 10%;
`;

export const LoginButton = styled.TouchableOpacity`
  border-radius: 5;
  background-color: ${Colors.brandBlue};
  height: 8%;
  align-items: center;
  justify-content: center;
  margin: 0 10% 0 10%;
`;

export const LoginButtonText = styled.Text`
  font-size: 20;
`;

export const LoginText = styled.Text`
  margin: 0 10% 0 10%;
  font-size: 18;
`;

export const GuestButtonText = styled.Text`
  font-size: 18;
  text-decoration-line: underline;
`;

export const GuestButton = styled.TouchableOpacity`
  border-radius: 5;
  background-color: transparent;
  height: 7%;
  align-items: center;
  justify-content: center;
  margin: 0 10% 0 10%;
`;
