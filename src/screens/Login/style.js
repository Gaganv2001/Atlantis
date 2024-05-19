import { StyleSheet } from "react-native";
import Color from '../../constants/Color';

const styles=StyleSheet.create({

rootContainer:{
    backgroundColor:Color.PrimaryBlue,
    flex:1,
},
topContainer:{
    flex:1,
    paddingHorizontal:20,
    justifyContent:'center',
    alignItems:'center',
},
bottomContainer:{
    paddingHorizontal:20,
    backgroundColor:'white',
    flex:3,
    borderTopLeftRadius:30,
    borderTopRightRadius:30,

},
title:{
    color:'white',
    fontSize:30,
    fontFamily:'Poppins-SemiBold',
    justifyContent:'center',
    alignItems:'center',
    textAlign:'center',
},
logoContainer:{
    // marginTop:-45,
    shadowColor: '#000',
    shadowOffset: { width: 20, height: 20 },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 20,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:Color.PrimaryBlue,
    borderRadius:30,

    // borderWidth:1,
    // borderColor:'white',

},
logo:{
    width:100,
    height:100,
    // borderWidth:1,
    backgroundColor:Color.PrimaryBlue,
    
},
LogoTextContainer:{
    alignItems:'center',
    justifyContent:'center',
    width:'100%',

},
inputContainer:{
    marginTop:30,
},
credentials:{
    borderBottomWidth:1,
    borderColor:"grey",
    borderRadius:20,
    marginVertical:8,
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:10,
},
PasswordReset:{
    flexDirection:'row',
    justifyContent:'flex-end',
},
buttonContainer:{
    marginTop:40,
    marginBottom:10,
},
loginButton:{
    backgroundColor:Color.PrimaryBlue,
    padding:15,
    borderRadius:20,
},
acountAction:{
    flexDirection:'row',
    justifyContent:'center',
},
accountActionText:{
    fontSize:15,
    fontFamily:'Poppins-Regular'
},
errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 4,
    marginLeft:'3%',
    textAlign:'center'
  },
});
export default styles;