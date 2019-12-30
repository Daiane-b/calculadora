import styled from 'styled-components/native';


export const ContainerButton = styled.View`
border-top-width: 0.2;
padding: 10px;
margin-top: 10px;
`;

export const ButtonLine = styled.View`
justify-content: space-between;
flex-direction: row;
display: flex;
`;

export const ButtonNumber = styled.TouchableOpacity`
background: #FFFAF0;
align-content: center;
border-radius: 100;
margin: 1px;
align-items: center;
flex-grow: 1;
border-width:1;
border-color: black;
`;

export const TextNumberButton = styled.Text`
font-size: 40;
text-align: center;
`;

export const TextSignalEqualButton = styled.Text`
font-size: 40;
text-align: center;
background-color:#006400;
color: white;
`; 

export const TextSignalButton = styled.Text`
font-size: 40;
text-align: center;
color:#006400;
`;

export const TextClearSignal = styled.Text`
font-size: 40;
text-align: center;
color:	#FF0000;
`; 