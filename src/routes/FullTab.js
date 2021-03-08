import React from 'react';
import BottomNavigation, {
  FullTab,
} from 'react-native-material-bottom-navigation';
import {View, Text, FlatList, Dimensions, ImageBackground} from 'react-native';
import {Icon, ButtonGroup, ListItem, Avatar} from 'react-native-elements';
import {expense} from '../routes/data';
import {TextInput} from 'react-native';
import {KeyboardAvoidingView} from 'react-native';

const {height, width} = Dimensions.get('window');
export default class FullTabComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'record',
      selectedIndex: 0,
    };
  }

  records = [
    {name: 'Foods & Drinks', aed: 333, status: '-'},
    {name: 'Foods & Drinks', aed: 34534, status: '+'},
    {name: 'Salary', aed: 1111, status: '+'},
    {name: 'Foods & Drinks', aed: 222, status: '-'},
    {name: 'Salary', aed: 22, status: '+'},
    {name: 'Salary', aed: 222, status: '+'},
  ];
  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      this.props.getName(this.state.activeTab.toUpperCase());
    }
  }

  componentDidMount(){
      console.log('hello')
  }

  tabs = [
    {
      key: 'home',
      inActiveIcon: 'ios-home-outline',
      activeIcon: 'ios-home-sharp',
      type: 'ionicon',
      label: 'Home',
      barColor: '#388E3C',
      pressColor: 'rgba(255, 255, 255, 0.16)',
    },
    {
      key: 'budget',
      inActiveIcon: 'ios-cash-outline',
      activeIcon: 'ios-cash-sharp',
      type: 'ionicon',
      label: 'Budget',
      barColor: '#AC0FB5',
      pressColor: 'rgba(255, 255, 255, 0.16)',
    },

    {
      key: 'record',
      inActiveIcon: 'list-outline',
      activeIcon: 'list-sharp',
      type: 'ionicon',
      label: 'Record',
      barColor: '#d9d334',
      pressColor: 'rgba(255, 255, 255, 0.16)',
    },
    {
      key: 'settings',
      inActiveIcon: 'ios-settings-outline',
      activeIcon: 'ios-settings-sharp',
      type: 'ionicon',
      label: 'Settings',
      barColor: '#3d93fc',
      pressColor: 'rgba(255, 255, 255, 0.16)',
    },
  ];

  list = [
    {
      name: 'Amy Farha',
      subtitle: 'Vice President',
    },
    {
      name: 'Chris Jackson',
      avatar_url:
        'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Vice Chairman',
    },
  ];

  // state = {
  //   activeTab: 'home',
  //   selectedIndex: 0,
  // };

  renderIcon = (inActiveIcon, activeIcon) => ({isActive}) =>
    isActive ? (
      <Icon size={28} color="white" name={activeIcon} type="ionicon" />
    ) : (
      <Icon size={22} color="white" name={inActiveIcon} type="ionicon" />
    );

  renderTab = ({tab, isActive}) => (
    <FullTab
      isActive={isActive}
      key={tab.key}
      label={tab.label}
      renderIcon={this.renderIcon(tab.inActiveIcon, tab.activeIcon)}
    />
  );

  updateIndex = (selectedIndex) => {
    // console.log(selectedIndex);
    this.setState({
      selectedIndex: selectedIndex,
    });
  };

  renderBudget = ({item}) => (
    <View
      style={{
        width: width,
        height: height * 0.1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        borderBottomWidth: 5,
        // backgroundColor: 'rgba(0,0,0,0)',
        backgroundColor: 'transparent',
      }}>
      <View
        style={{
          backgroundColor: '#f8f',
          width: width * 0.6,
          height: height * 0.07,
          alignItems: 'center',
          justifyContent: 'center',
          borderTopRightRadius: height * 0.02,
          borderBottomRightRadius: height * 0.02,
          borderRightWidth: 4,
          borderBottomWidth: 2,
        }}>
        <Text
          style={{
            fontSize: height * 0.03,
            shadowColor: '#fff',
            shadowOffset: {width: 1, height: 1},
            shadowOpacity: 0.5,
            shadowRadius: 1,
            fontWeight: 'bold',
            color: '#000',
          }}>
          {item}
        </Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text
          style={{fontSize: height * 0.03, fontWeight: 'bold', color: '#989'}}>
          AED
        </Text>
        <TextInput
          style={{
            borderWidth: 1,
            borderWidth: 2,
            backgroundColor: '#fff',
            height: height * 0.05,
            width: width * 0.2,
          }}
        />
      </View>
    </View>
  );

  renderSettingsExpense = ({item}) => (
    <ListItem bottomDivider style={{borderBottomWidth: 1}}>
      <ListItem.Content>
        <ListItem.Title>{item}</ListItem.Title>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  );

  renderSettingsIncome = ({item}) => (
    <ListItem bottomDivider style={{borderBottomWidth: 1}}>
      <ListItem.Content>
        <ListItem.Title>{item}</ListItem.Title>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  );

  renderRecordsItem = ({item, index}) => {
    return (
      <View style={{height: height * 0.07, width: width , justifyContent:'center', borderBottomWidth: 5, borderBottomColor:'#898'}}>
        <Text style={{fontSize: height * 0.02, paddingHorizontal: 10}}>{item.name} +  {item.status} +{item.aed}</Text>
      </View>
    )
  }

  buttons = ['Expense', 'Income'];

  getGraphStatus = () => {
    <View style={{flex: 1, backgroundColor: 'red'}}></View>;
  };
  getGeneralInfo = () => {
    <View style={{flex: 2, backgroundColor: 'blue'}}></View>;
  };

  getContentData = () => {
    switch (this.state.activeTab) {
      case 'home':
        // console.log(this.props)
        return (
          <View
            style={{
              flex: 1,
              // backgroundColor: 'red',
              // justifyContent: 'space-between',
            }}>
            {/* {this.getGraphStatus()}
              {this.getGeneralInfo()} */}
            <View style={{flex: 1, borderBottomWidth: 1}}>
              <Text style={{fontSize: 23, fontWeight: 'bold'}}>Home</Text>
            </View>
            <View style={{flex: 2}}>
              <View
                style={{
                  height: height * 0.05,
                  width: width * 0.9,
                  borderBottomRightRadius: height * 0.03,
                  borderRightWidth: 1,
                  backgroundColor: '#6f8',
                  justifyContent: 'center',
                  borderBottomWidth: 1,
                }}>
                <Text style={{fontSize: 23, fontWeight: 'bold', color: '#034'}}>
                  General Info
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  height: height * 0.04,
                  marginVertical: 2,
                  justifyContent: 'space-between',
                  backgroundColor: '#eee',
                  width: width,
                }}>
                <View>
                  <Text style={{fontSize: height * 0.025}}>Total Cost</Text>
                </View>
                <View>
                  <Text style={{fontSize: height * 0.025}}>-AED 23424.09</Text>
                </View>
              </View>

              {/* total income */}
              <View
                style={{
                  flexDirection: 'row',
                  height: height * 0.04,
                  marginVertical: 2,
                  justifyContent: 'space-between',
                  backgroundColor: '#eee',
                  width: width,
                }}>
                <View>
                  <Text style={{fontSize: height * 0.025}}>Total Income</Text>
                </View>
                <View>
                  <Text style={{fontSize: height * 0.025}}>+AED 1874.09</Text>
                </View>
              </View>
              {/* total */}
              <View
                style={{
                  flexDirection: 'row',
                  height: height * 0.04,
                  marginVertical: 2,
                  justifyContent: 'space-between',
                  backgroundColor: '#eee',
                  width: width,
                }}>
                <View>
                  <Text style={{fontSize: height * 0.025}}>Total</Text>
                </View>
                <View>
                  <Text style={{fontSize: height * 0.025}}>-AED 174.09</Text>
                </View>
              </View>
              {/* Total save */}
              <View
                style={{
                  flexDirection: 'row',
                  height: height * 0.04,
                  marginVertical: 2,
                  justifyContent: 'space-between',
                  backgroundColor: '#eee',
                  width: width,
                }}>
                <View>
                  <Text style={{fontSize: height * 0.025}}>Total Save</Text>
                </View>
                <View>
                  <Text style={{fontSize: height * 0.025}}>+AED 184.09</Text>
                </View>
              </View>
              <View style={{height: height * 0.05}}></View>
              {/* Daily Avearage */}
              <View
                style={{
                  flexDirection: 'row',
                  height: height * 0.04,
                  marginVertical: 2,
                  justifyContent: 'space-between',
                  backgroundColor: '#eee',
                  width: width,
                }}>
                <View>
                  <Text style={{fontSize: height * 0.025}}>Daily Avearage</Text>
                </View>
                <View>
                  <Text style={{fontSize: height * 0.025}}>+AED 1804.09</Text>
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  height: height * 0.04,
                  marginVertical: 2,
                  justifyContent: 'space-between',
                  backgroundColor: '#eee',
                  width: width,
                }}>
                <View>
                  <Text style={{fontSize: height * 0.025}}>
                    Daily Avearage Cost
                  </Text>
                </View>
                <View>
                  <Text style={{fontSize: height * 0.025}}>+AED 584.09</Text>
                </View>
              </View>
              {/* Daily Avearage Income */}
              <View
                style={{
                  flexDirection: 'row',
                  height: height * 0.04,
                  marginVertical: 2,
                  justifyContent: 'space-between',
                  backgroundColor: '#eee',
                  width: width,
                }}>
                <View>
                  <Text style={{fontSize: height * 0.025}}>
                    Daily Avearage Income
                  </Text>
                </View>
                <View>
                  <Text style={{fontSize: height * 0.025}}>+AED 1804.09</Text>
                </View>
              </View>
            </View>
          </View>
        );
      case 'budget':
        return (
          <ImageBackground
            source={require('../assets/images/bg4.jpg')}
            style={{flex: 1}}>
            <FlatList
              keyExtractor={(item, index) => index.toString()}
              data={Object.keys(expense)}
              renderItem={this.renderBudget}
            />
            <View
              style={{
                height: height * 0.05,
                width: width,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontWeight: 'bold', fontSize: 22}}>
                Total : AED 1235
              </Text>
            </View>
          </ImageBackground>
        );
      case 'record':
        return (
          <View style={{flex: 1}}>
            <View
              style={{
                justifyContent: 'space-between',
                borderWidth: 2,
                backgroundColor: '#986',
                paddingHorizontal: 5,
                height: height * 0.1,
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <View>
                <Text style={{fontWeight: 'bold', fontSize: height * 0.03}}>
                  Today
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: height * 0.03,
                  }}>
                  -AED 33734
                </Text>
              </View>
            </View>
            <FlatList
              data={this.records}
              keyExtractor={(item, index) => index.toString()}
              renderItem={this.renderRecordsItem}
            />
            {/* <Text style={{fontSize: 23, fontWeight: 'bold'}}></Text> */}
          </View>
        );
      case 'settings':
        return (
          <View style={{flex: 1}}>
            <ButtonGroup
              onPress={this.updateIndex}
              selectedIndex={this.state.selectedIndex}
              buttons={this.buttons}
              containerStyle={{height: 50}}
            />
            {this.state.selectedIndex ? (
              <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={Object.keys(expense)}
                renderItem={this.renderSettingsIncome}
              />
            ) : (
              <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={Object.keys(expense)}
                renderItem={this.renderSettingsExpense}
              />
            )}
          </View>
        );
    }
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1}}>{this.getContentData()}</View>
        <BottomNavigation
          activeTab={this.state.activeTab}
          onTabPress={(newTab) => this.setState({activeTab: newTab.key})}
          renderTab={this.renderTab}
          tabs={this.tabs}
        />
      </View>
    );
  }
}
