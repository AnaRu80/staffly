import React from 'react';
import { View } from 'react-native';
import { homeStyles as styles } from './HomeScreen.styles';
import { AccordionList, BankCardList, Layout, RequestList, Button, Text } from '../../components';
import { useTypedNavigation } from "../../hooks/useTypeNavigation";


export function HomeScreen() {
  const navigation = useTypedNavigation();

  return (
    <Layout scroll>
      <Text variant='title' accessibilityRole="header">
        Hello Again Ana!
      </Text>
      <AccordionList data={[
        {
          title: 'My Banks',
          content: (
            <View  >
              <BankCardList />
              <Button
                mode="contained"
                onPress={() => navigation.navigate("Requests")}
                icon={"plus"}
                style={styles.button}
              >Make a request</Button>
            </View>
          )
        },
        {
          title: 'My Requests',
          content: <RequestList />
        }

      ]} />



    </Layout>
  );
}