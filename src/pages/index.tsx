import {
  ScrollView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Layout, Text} from '@ui-kitten/components';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';

interface WeatherData {
  location: {
    name: string;
  };
  current: {
    condition: {
      icon: string;
      text: string;
    };
    temp_c: number;
  };
  forecast: {
    forecastday: {
      date: string;
      day: {
        condition: {
          icon: string;
        };
        avgtemp_c: number;
      };
    }[];
  };
}

const Home = ({navigation}: {navigation: any}) => {
  const [weather, setWeather] = useState<WeatherData | undefined>();
  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(
        'https://api.weatherapi.com/v1/forecast.json?key=416f2f5d326942f59f651727232206&q=Tokyo&days=7',
      );
      setWeather(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  React.useEffect(() => {
    fetchWeatherData();
  }, []);

  return (
    <ScrollView>
      <Layout style={styles.container}>
        <View style={styles.topnav}>
          <Text
            style={{fontFamily: 'Quicksand', fontSize: 30, fontWeight: '700'}}>
            Infomasi Jepang
          </Text>
        </View>

        <View style={styles.WeatherWrap}>
          <LinearGradient
            colors={['#2c3e50', '#3498db']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={styles.LinearGradient}>
            {weather && weather.current && (
              <View style={styles.todayWeather}>
                <View>
                  <Image
                    style={{
                      width: 110,
                      height: 110,
                    }}
                    source={{uri: 'https:' + weather.current.condition.icon}}
                  />
                </View>
                <View style={{justifyContent: 'space-around'}}>
                  <Text
                    style={{
                      fontSize: 30,
                      fontWeight: '700',
                      color: 'white',
                      textAlign: 'center',
                    }}>
                    {weather.location.name}
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: '700',
                      color: 'white',
                      textAlign: 'center',
                    }}>
                    {weather.current.condition.text}
                  </Text>
                  <Text
                    style={{
                      fontSize: 30,
                      fontWeight: '700',
                      color: 'white',
                      textAlign: 'center',
                    }}>
                    {weather.current.temp_c}&#176;
                  </Text>
                </View>
              </View>
            )}

            <ScrollView
              horizontal
              contentContainerStyle={{paddingHorizontal: 10}}
              showsHorizontalScrollIndicator={false}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'flex-end',
                  marginBottom: 10,
                  gap: 10,
                }}>
                {weather &&
                  weather.forecast &&
                  weather.forecast.forecastday.slice(1).map((day: any) => {
                    const date = new Date(day.date);
                    const options = {weekday: 'long' as const};
                    let dayName = date.toLocaleDateString('en-US', options);
                    dayName = dayName.split(',')[0];
                    return (
                      <View style={styles.daily} key={day.date}>
                        <Image
                          style={{width: 50, height: 50}}
                          source={{uri: 'https:' + day.day.condition.icon}}
                        />
                        <Text style={styles.TextWeather}>{dayName}</Text>
                        <Text style={styles.TextWeather}>
                          {day.day.avgtemp_c}&#176;
                        </Text>
                      </View>
                    );
                  })}
              </View>
            </ScrollView>
          </LinearGradient>
        </View>

        <View style={{marginTop: 10}}>
          <Text
            style={{fontFamily: 'Quicksand', fontSize: 25, fontWeight: '700'}}>
            Menu
          </Text>

          <View style={styles.MenuWrap}>
            <TouchableOpacity
              onPress={() => navigation.navigate('BahasaJepang')}>
              <Layout style={styles.Menu}>
                <Image
                  style={styles.image}
                  source={require('../assets/icon/Nihongo.png')}
                />
                <Text style={styles.TextMenu}>Bahasa Jepang</Text>
              </Layout>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('BudayaJepang')}>
              <Layout style={styles.Menu}>
                <Image
                  style={styles.image}
                  source={require('../assets/icon/Budaya.png')}
                />
                <Text style={styles.TextMenu}>Keunikan Budaya Jepang</Text>
              </Layout>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('KesempatanJepang')}>
              <Layout style={styles.Menu}>
                <Image
                  style={styles.image}
                  source={require('../assets/icon/Kesempatan.png')}
                />
                <Text style={styles.TextMenu}>Kesempatan ke Jepang</Text>
              </Layout>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('KehidupanJepang')}>
              <Layout style={styles.Menu}>
                <Image
                  style={styles.image}
                  source={require('../assets/icon/Live.png')}
                />
                <Text style={styles.TextMenu}>Kehidupan di Jepang</Text>
              </Layout>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('KondisiJepang')}>
              <Layout style={styles.Menu}>
                <Image
                  style={styles.image}
                  source={require('../assets/icon/Kondisi.jpg')}
                />
                <Text style={styles.TextMenu}>Kondisi Jepang Terkini</Text>
              </Layout>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('ProspekKerja')}>
              <Layout style={styles.Menu}>
                <Image
                  style={styles.image}
                  source={require('../assets/icon/Prospek.png')}
                />
                <Text style={styles.TextMenu}>Prospek Kerja</Text>
              </Layout>
            </TouchableOpacity>
          </View>
        </View>
      </Layout>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 25,
  },

  topnav: {
    flexDirection: 'row',
  },

  WeatherWrap: {
    marginTop: 10,
    height: 250,
  },

  TextWeather: {
    fontFamily: 'Quicksand',
    fontSize: 15,
    fontWeight: '600',
    color: 'white',
  },

  LinearGradient: {
    flex: 1,
    paddingTop: 10,
    borderRadius: 15,
  },

  todayWeather: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
  },

  daily: {
    width: 100,
    height: 100,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },

  MenuWrap: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    gap: 15,
    borderColor: 'yellow',
  },

  Menu: {
    marginTop: 10,
    width: 150,
    height: 150,
    justifyContent: 'space-evenly',
    borderRadius: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 5.22,
    elevation: 3,
  },

  TextMenu: {
    textAlign: 'center',
    margin: 4,
  },

  image: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
  },
});
