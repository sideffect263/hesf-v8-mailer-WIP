import { View, Text, FlatList, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import {useRoute} from '@react-navigation/native'; 
import axios from 'axios';

// Communications.phonecall('0123456789', true)





const OrderHandler = () => {



  const CartItem = ({title,quanity,dates,item}) => (//the item that will be shown in the list
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.title}>{quanity}</Text>
      <Text style={styles.title}>{dates}</Text>
    </View>
  );



  console.log('OrderHandler')
  const route = useRoute();
  console.log(route.params.name)
  const {orderData} = route.params;
  console.log(orderData)
  const [cartData, setCartData] = React.useState([orderData]);//the data of the cart
  console.log('cartData')
  console.log(cartData)


 const renderItem = ({item}) => (//the item that will be shown in the list
<CartItem item={item} title={item.name} quanity={item.quanity} dates={item.dates}
   />);
  
  const handleEmail = () => {
    const to = ['arielbiton03@gmail.com'] // string or array of email addresses
    console.log('handleEmail')
    sendRequest()
    console.log('email sent')
}
const sendRequest = async () => {//send the request to the server
  try {
    const response = await axios.post('https://your-backend-url/send-email', {
      recipient: 'recipient@example.com',
      subject: 'Subject of the email',
      body: 'Body of the email',
    });

    setResponseData(response.data);
  } catch (error) {
    console.error('Error sending request:', error);
  }
};

  return (
    <View style={styles.container}>
      <View style={styles.contentTable}>
      <FlatList
        data={{orderData}}
        renderItem={renderItem}
        keyExtractor={item => item.name}
      />
      </View>
      <View style={styles.contentButton}>

    
      <Pressable onPress={handleEmail}>
        <Text>Send Email</Text>
        
      </Pressable>


      </View>
    </View>
  )


}



//create a astyle sheet
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#86bbd8',
        alignItems: 'center',
        justifyContent: 'center',
        },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderWidth: 1,
        flexDirection: 'row',
        flex:1,
        width:'100%',
        height:'100%',

      },
      title: {
        fontSize: 32,
      },
      contentTable:{
        flex: 1,
        backgroundColor:'#86bbd8',
        alignItems: 'center',
        justifyContent: 'center',
        width:'100%',
        height:'100%',
        },
        contentButton:{
          flex: 1,
          backgroundColor:'#86bbd8',
          alignItems: 'center',
          justifyContent: 'center',
          width:'100%',
          height:'100%',
          },
             
    });

export default OrderHandler