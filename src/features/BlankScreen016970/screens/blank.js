import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"
import { connect } from "react-redux"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = { DateTimePicker_4: new Date(""), TextInput_5: "" }
  }
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }
  render = () => (
    <View>
      <Button
        title="Press me!"
        style={styles.Button_2}
        onPress={() => alert("Pressed!")}
      />
      <Button
        title="Press me!"
        style={styles.Button_3}
        onPress={() => alert("Pressed!")}
      />
      <DateTimePicker
        showIcon={false}
        date={this.state.DateTimePicker_4}
        onDateChange={selectedDate =>
          this.setState({ DateTimePicker_4: selectedDate })
        }
      />
      <TextInput
        placeholder="Sample text input placeholder"
        value={this.state.TextInput_5}
        onChangeText={nextValue => this.setState({ TextInput_5: nextValue })}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {},
  Button_2: { height: 20 },
  Button_3: { height: 50 },
  DateTimePicker_4: {},
  TextInput_5: {}
})

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = () => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Blank)
