import axios from "axios";
import { useState } from "react";
import { Button, View } from "react-native";

const RandomActivity = () => {
    const [randomActivity, setRandomActivity] = useState();

    const fetchApi = async () => {
        try {
            const {data} = await axios.get('https://www.boredapi.com/api/activity');
            console.log(data);

        } catch(error) {
            console.log(error);
        }
    };

    return (
      <View>
        <Button title="Get Random Activity!" onPress={fetchApi} />
      </View> 
    );
}

export default RandomActivity;