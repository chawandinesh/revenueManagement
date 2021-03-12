import React from 'react';
import BottomNavigation, {
  FullTab,
} from 'react-native-material-bottom-navigation';
import {RevenueManagementContext} from '../context/context';
import {View, Text, FlatList, Dimensions, ImageBackground} from 'react-native';
import {Icon, ButtonGroup, ListItem, Avatar} from 'react-native-elements';
import {expense} from '../routes/data';
import {TextInput} from 'react-native';
import {KeyboardAvoidingView} from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';

const {height, width} = Dimensions.get('window');
export default function FullTabComponent(props) {
  const {state, setState} = React.useContext(RevenueManagementContext);
  console.log(Object.values(state));
  // console.log(state, setState)
  const [tabState, setTabState] = React.useState({
    activeTab: 'home',
    selectedIndex: 0,
  });
  const chartConfig = {
    backgroundGradientFrom: '#005030',
    // backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#fef',
    // backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };

  const data = {
    labels: Object.keys(state).map((e) => e.slice(0, 4)),
    datasets: [
      {
        data: Object.values(state).map((e) => parseInt(e.aed)),
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
    legend: ['Budget'], // optional
  };

  const records = [
    {name: 'Foods & Drinks', aed: 333, status: '-'},
    {name: 'Foods & Drinks', aed: 34534, status: '+'},
    {name: 'Salary', aed: 1111, status: '+'},
    {name: 'Foods & Drinks', aed: 222, status: '-'},
    {name: 'Salary', aed: 22, status: '+'},
    {name: 'Salary', aed: 222, status: '+'},
  ];

  React.useEffect(() => {
    props.getName(tabState.activeTab.toUpperCase());
  }, [tabState]);

  const tabs = [
    {
      key: 'home',
      inActiveIcon: 'ios-home-outline',
      activeIcon: 'ios-home-sharp',
      type: 'ionicon',
      label: 'Dashboard',
      barColor: '#388E3C',
      pressColor: 'rgba(255, 255, 255, 0.16)',
    },
    {
      key: 'budget',
      inActiveIcon: 'ios-cash-outline',
      activeIcon: 'ios-cash-sharp',
      type: 'ionicon',
      label: 'Income',
      barColor: '#AC0FB5',
      pressColor: 'rgba(255, 255, 255, 0.16)',
    },

    {
      key: 'record',
      inActiveIcon: 'list-outline',
      activeIcon: 'list-sharp',
      type: 'ionicon',
      label: 'Earn List',
      barColor: '#c7af3a',
      pressColor: 'rgba(255, 255, 255, 0.16)',
    },
    {
      key: 'settings',
      inActiveIcon: 'ios-settings-outline',
      activeIcon: 'ios-settings-sharp',
      type: 'ionicon',
      label: 'Tools',
      barColor: '#3d93fc',
      pressColor: 'rgba(255, 255, 255, 0.16)',
    },
  ];

  const list = [
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

  const renderIcon = (inActiveIcon, activeIcon) => ({isActive}) =>
    isActive ? (
      <Icon size={28} color="white" name={activeIcon} type="ionicon" />
    ) : (
      <Icon size={22} color="white" name={inActiveIcon} type="ionicon" />
    );

  const renderTab = ({tab, isActive}) => (
    <FullTab
      isActive={isActive}
      key={tab.key}
      label={tab.label}
      renderIcon={renderIcon(tab.inActiveIcon, tab.activeIcon)}
    />
  );

  const updateIndex = (selectedIndex) => {
    // console.log(selectedIndex);
    setTabState({...tabState, selectedIndex: selectedIndex});
    // this.setState({
    //   selectedIndex: selectedIndex,
    // });
  };

  const totalValue = () => {
    return Object.values(state).reduce(function (accumulator, currentValue) {
      return accumulator + parseInt(currentValue.aed);
    }, 0);
  };

  console.log(totalValue());

  const renderBudget = ({item, index}) => {
    // console.log(state[item].aed, 'state.index')
    return (
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
            style={{
              fontSize: height * 0.03,
              fontWeight: 'bold',
              color: '#989',
            }}>
            AED
          </Text>
          <TextInput
            value={state[item].aed}
            onChangeText={(text) =>
              setState({...state, [item]: {...state[item], aed: text}})
            }
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
  };

  const renderSettingsExpense = ({item}) => (
    <View
    style={{
      width: width,
      height: height * 0.07,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f7E6F8',
      borderBottomWidth: 9,
      borderBottomRightRadius: 19,
      borderBottomLeftRadius: 19,
      borderWidth: 3,
      marginTop: height * 0.02,
    }}>
    <Text style={{fontWeight: 'bold', fontSize: height * 0.03}}>{item}</Text>
  </View>
  );

  const renderSettingsIncome = ({item}) => (
    <View
      style={{
        width: width,
        height: height * 0.07,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#87E6F8',
        borderBottomWidth: 9,
        borderBottomRightRadius: 19,
        borderBottomLeftRadius: 19,
        borderWidth: 3,
        marginTop: height * 0.02,
      }}>
      <Text style={{fontWeight: 'bold', fontSize: height * 0.03}}>{item}</Text>
    </View>

  );

  const renderRecordsItem = ({item, index}) => {
    return (
      <View
        style={{
          height: height * 0.09,
          width: width,
          justifyContent: 'center',
          borderBottomEndRadius: height * 0.12,
          borderBottomWidth: 5,
          borderBottomColor: '#526',
        }}>
        <View
          style={{
            fontSize: height * 0.02,
            paddingHorizontal: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View>
            <Text style={{fontWeight: 'bold', fontSize: height * 0.023}}>{item}</Text>
          </View>
          <View>
            <Text style={{fontSize: height * 0.03, fontWeight: 'bold'}}>
              +{state[item].aed}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const buttons = ['Expense', 'Income'];

  const getGraphStatus = () => {
    <View style={{flex: 1, backgroundColor: 'red'}}></View>;
  };
  const getGeneralInfo = () => {
    <View style={{flex: 2, backgroundColor: 'blue'}}></View>;
  };

  const getContentData = () => {
    switch (tabState.activeTab) {
      case 'home':
        // console.log(this.props)
        return (
          <ImageBackground
            source={require('../assets/images/bg7.jpg')}


            style={{
              flex: 1,

              // backgroundColor: 'red',
              // justifyContent: 'space-between',
            }}>
            {/* {this.getGraphStatus()}
              {this.getGeneralInfo()} */}
            <View style={{flex: 1, borderBottomWidth: 1}}>
              <LineChart
                data={data}
                width={width}
                height={height * 0.24}
                chartConfig={chartConfig}
              />
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
                  borderBottomWidth: 1
                }}>
                <Text style={{fontSize: 23, fontWeight: 'bold', color: '#034'}}>
                  General Info
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  height: height * 0.04,
                  marginVertical: height * 0.01,
                  borderRadius: height * 0.04, 
                  alignItems:"center",
                  padding: 10,
                  // padding: 4,
                  justifyContent: 'space-between',
                  backgroundColor: '#efe',
                  width: width * 0.8,
                  alignSelf:'center'
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
                  marginVertical: height * 0.01,
                  borderRadius: height * 0.04, 
                  padding: 10,
                  padding: 4,
                  justifyContent: 'space-between',
                  backgroundColor: '#efe',
                  width: width * 0.8,
                  alignSelf:'center'
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
                  marginVertical: height * 0.01,
                  borderRadius: height * 0.04, 
                  padding: 10,
                  padding: 4,
                  justifyContent: 'space-between',
                  backgroundColor: '#efe',
                  width: width * 0.8,
                  alignSelf:'center'
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
                  marginVertical: height * 0.01,
                  borderRadius: height * 0.04, 
                  padding: 10,
                  padding: 4,
                  justifyContent: 'space-between',
                  backgroundColor: '#efe',
                  width: width * 0.8,
                  alignSelf:'center'
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
                  marginVertical: height * 0.01,
                  borderRadius: height * 0.04, 
                  padding: 10,
                  padding: 4,
                  justifyContent: 'space-between',
                  backgroundColor: '#efe',
                  width: width * 0.8,
                  alignSelf:'center'
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
                  marginVertical: height * 0.01,
                  borderRadius: height * 0.04, 
                  padding: 10,
                  padding: 4,
                  justifyContent: 'space-between',
                  backgroundColor: '#efe',
                  width: width * 0.8,
                  alignSelf:'center'
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
                  marginVertical: height * 0.01,
                  borderRadius: height * 0.04, 
                  padding: 10,
                  padding: 4,
                  overflow:'hidden',
                  justifyContent: 'space-between',
                  backgroundColor: '#efe',
                  width: width * 0.8,
                  alignSelf:'center'
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
          </ImageBackground>
        );
      case 'budget':
        return (
          <ImageBackground
            source={require('../assets/images/bg4.jpg')}
            style={{flex: 1}}>
            <FlatList
              keyExtractor={(item, index) => index.toString()}
              data={Object.keys(state)}
              renderItem={renderBudget}
            />
            <View
              style={{
                height: height * 0.05,
                width: width,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontWeight: 'bold', fontSize: 22}}>
                Total : {totalValue()}
              </Text>
            </View>
          </ImageBackground>
        );
      case 'record':
        return (
          <ImageBackground
            source={require('../assets/images/bg5.jpg')}
            style={{flex: 1}}>
            <FlatList
              data={Object.keys(state)}
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderRecordsItem}
            />
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
                  {totalValue()}
                </Text>
              </View>
            </View>
            {/* <Text style={{fontSize: 23, fontWeight: 'bold'}}></Text> */}
          </ImageBackground>
        );
      case 'settings':
        return (
          <ImageBackground
            source={require('../assets/images/bg6.jpg')}
            style={{flex: 1}}>
            <ButtonGroup
              onPress={updateIndex}
              selectedIndex={tabState.selectedIndex}
              buttons={buttons}
              containerStyle={{height: 50}}
            />
            {tabState.selectedIndex ? (
              <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={Object.keys(state)}
                renderItem={renderSettingsIncome}
              />
            ) : (
              <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={Object.keys(state)}
                renderItem={renderSettingsExpense}
              />
            )}
          </ImageBackground>
        );
    }
  };

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>{getContentData()}</View>
      <BottomNavigation
        activeTab={tabState.activeTab}
        onTabPress={(newTab) =>
          setTabState({...tabState, activeTab: newTab.key})
        }
        renderTab={renderTab}
        tabs={tabs}
      />
    </View>
  );
}
