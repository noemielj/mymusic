import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";

export default function SearchScreen() {
  const handlePress = () => {
    navigation.navigate("RecepiesScreen");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What do you want to eat today ?</Text>
      <Text style={styles.description}> Our daily heathy meal plan</Text>

      <View style={styles.mealList}>
        <View style={styles.row}>
          <TouchableOpacity onPress={handlePress}>
            <View
              style={[styles.mealContainer, { backgroundColor: "#FFEB85" }]}
            >
              <Image
                style={styles.image}
                source={require("../assets/images/ramen.png")}
              />
              <Text style={styles.mealName}>Ramen</Text>
              <Text style={styles.mealDescription}>A Japanese classic.</Text>
            </View>
          </TouchableOpacity>
          <View style={[styles.mealContainer, { backgroundColor: "#F2BBBB" }]}>
            <Image
              style={styles.image}
              source={require("../assets/images/pasta.png")}
            />
            <Text style={styles.mealName}>Spaghetti Puttanesca</Text>
            <Text style={styles.mealDescription}>
              A little taste of Southern Italie.
            </Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={[styles.mealContainer, { backgroundColor: "#A7C8F1" }]}>
            <Image
              style={styles.image}
              source={require("../assets/images/thai-shrimp-salad.png")}
            />
            <Text style={styles.mealName}>Thai Sthrimp Curry Salad</Text>
            <Text style={styles.mealDescription}>
              A fresh, tropical favorite
            </Text>
          </View>
          <View style={[styles.mealContainer, { backgroundColor: "#FD9B9E" }]}>
            <Image
              style={styles.image}
              source={require("../assets/images/noodle-salad.png")}
            />
            <Text style={styles.mealName}>Steck with Oriental vegetable</Text>
            <Text style={styles.mealDescription}>
              An old favorite get and exotic touch
            </Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={[styles.mealContainer, { backgroundColor: "#BDA6C9" }]}>
            <Image
              style={styles.image}
              source={require("../assets/images/avocado-salad.png")}
            />
            <Text style={styles.mealName}>Avocado Salad </Text>
            <Text style={styles.mealDescription}>
              A little taste of Southern Italie.
            </Text>
          </View>
          <View style={[styles.mealContainer, { backgroundColor: "#BDA6C9" }]}>
            <Image
              style={styles.image}
              source={require("../assets/images/club-sandwich.png")}
            />
            <Text style={styles.mealName}>Club sandwich</Text>
            <Text style={styles.mealDescription}>
              A little taste of Southern Italie.
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingTop: 20,
  },

  title: {
    color: "#655074",
    fontSize: 30,
    fontWeight: "bold",
  },
  description: {
    color: "#E2E2E2",
    textAlign: "left",
  },

  image: {
    height: 150,
    width: 150,
    alignItems: "center",
  },
  mealContainer: {
    width: (Dimensions.get("window").width - 40) / 2,
    height: 300,
    marginBottom: 20,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 60,
    borderBottomLeftRadius: 50,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  mealList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  mealName: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
